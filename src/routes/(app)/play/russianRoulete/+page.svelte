<script lang="ts">
  import PageContainer from '$lib/components/PageContainer.svelte';
  import DramaticShotAnimation from '$lib/components/DramaticShotAnimation.svelte';
  import { onMount, tick } from 'svelte';
  import { goto } from '$app/navigation';
  import { fade, fly, scale } from 'svelte/transition';
  import { elasticOut, bounceOut } from 'svelte/easing';

  type Player = { name: string; alive: boolean; modifiers: number[]; hasShield?: boolean };

  let players: Player[] = [];
  let currentIndex = 0;
  let bullets = 1;
  let goodBullets = 1;
  let goodBulletAvailable = true;
  let message = '';
  let challengeText = '';
  let showChallenge = false;
  let deathPenaltyMultiplier = 1;
  let isAnimating = false;
  let isShooting = false;
  let isGameOver = false;
  let isRevealing = false;
  let showBloodSplatter = false;
  let cylinderRotation = 0;
  let gunRotation = 0;
  let revealModifierIndex: number|null = null;
  let showInventoryModal = false;
  let showPlayerSelectModal = false;
  let playerSelectCallback: ((idx: number) => void) | null = null;
  let skipTurnIndexes: number[] = [];
  let showCylinderModal = false;

  // Variables para la animación 3D dramática del disparo
  let showDramaticShot = false;      // Controla cuando mostrar la pantalla de tensión
  let dramaticShotPhase = 0;         // Fase de la animación (0-4: preparación, enfoque, rotación, disparo, resultado)
  let dramaticRotation = 0;          // Rotación del revólver en 3D durante la animación
  let dramaticScale = 1;             // Escala para efecto de zoom durante la animación
  let dramaticTilt = 0;              // Inclinación para el efecto de perspectiva
  let heartbeatInterval: any = null; // Para el efecto de latido
  let heartbeatIntensity = 1;        // Intensidad del latido

  let cylinder: ('bad' | 'good' | 'empty')[] = [];
  let highlightPlayers: number[] = [];

  const challenges = [
    'Bebe un trago sin hacer gestos',
    'Haz 10 flexiones para librarte',
    'Canta una canción ridícula',
    'Imita a otro jugador por 30 segundos',
    'Cuenta un secreto embarazoso',
    'Habla como un pirata por los próximos 3 turnos',
    'Envía un mensaje vergonzoso al último contacto de tu WhatsApp',
    'Deja que el grupo decida tu castigo',
    'Baila sin música durante 1 minuto',
    'Cuenta un chiste malo.',
    'Haz una pose ridícula y manténla 20 segundos',
    'Habla con acento extranjero hasta tu próximo turno',
    'Haz una historia inventada sobre el jugador a tu derecha',
    'Haz una ronda de piedra, papel o tijera con el jugador a tu izquierda.',
    'Haz una imitación de un famoso. Si nadie adivina, pierdes',
    'Haz una confesión sobre algo que nunca hayas contado',
    'Haz una ronda de trabalenguas. Si fallas, bebes',
    'Deja que te hagan una pregunta incómoda',
    'Haz un reto físico que el grupo elija',
    'Haz un dibujo rápido de otro jugador y muéstralo',
    'Haz un reto de TikTok (el grupo elige)',
    'Haz una ronda de mímica. Si nadie adivina, pierdes',
    'Haz una selfie grupal y publícala en tus historias',
    'Haz 5 sentadillas mientras cantas una canción',
    'Haz una cara graciosa durante 30 segundos',
    'Haz un reto físico elegido por el jugador a tu izquierda',
    'Haz una imitación de un animal',
    'Haz un trabalenguas difícil, si fallas bebes dos tragos',
  ];

  const modifierCards = [
    {
      text: 'Reparte un trago. Si mueres bebes ese trago',
      icon: '🥃',
      color: 'bg-amber-500',
      apply: () => {
        message += ' | Puedes hacer que otro beba un trago.';
      }
    },
    {
      text: 'El próximo que muera toma el doble de tragos',
      icon: '🍻',
      color: 'bg-red-600',
      apply: () => {
        deathPenaltyMultiplier *= 2;
      }
    },
    {
      text: 'Agrega una bala al revolver',
      icon: '🔫',
      color: 'bg-gray-800',
      apply: () => {
        bullets = Math.min(6, bullets + 1);
      }
    },
    {
      text: 'Quita una bala del revolver',
      icon: '🛡️',
      color: 'bg-blue-600',
      apply: () => {
        bullets = Math.max(1, bullets - 1);
      }
    },
    {
      text: 'Todos los jugadores vivos beben un shot',
      icon: '🎯',
      color: 'bg-purple-600',
      apply: () => {
        message += ' | Todos beben un shot.';
      }
    },
    {
      text: 'Puedes salvarte de la siguiente muerte',
      icon: '🍀',
      color: 'bg-green-600',
      apply: () => {
        players[currentIndex].hasShield = true;
        message += ' | ¡Tienes un escudo para evitar la próxima muerte!';
      }
    },
    {
      text: 'Intercambia tu turno con otro jugador',
      icon: '🔄',
      color: 'bg-pink-500',
      apply: () => {
        showPlayerSelectModal = true;
        playerSelectCallback = (targetIdx) => {
          if (targetIdx !== currentIndex && players[targetIdx].alive) {
            const temp = currentIndex;
            currentIndex = targetIdx;
            message = `🔄 Turno intercambiado: ahora es el turno de ${players[currentIndex].name}`;
          } else {
            message = 'Debes elegir a un jugador vivo distinto a ti.';
          }
          showPlayerSelectModal = false;
          playerSelectCallback = null;
        };
      }
    },
    {
      text: 'Elige a alguien para que muera su próximo turno',
      icon: '⏭️',
      color: 'bg-indigo-500',
      apply: () => {
        showPlayerSelectModal = true;
        playerSelectCallback = (targetIdx) => {
          if (targetIdx !== currentIndex && players[targetIdx].alive) {
            skipTurnIndexes.push(targetIdx);
            message = `⏭️ ${players[targetIdx].name} perderá su próximo turno.`;
          } else {
            message = 'Debes elegir a un jugador vivo distinto a ti.';
          }
          showPlayerSelectModal = false;
          playerSelectCallback = null;
        };
      }
    },
    {
      text: 'Todos menos tú beben dos tragos',
      icon: '🥂',
      color: 'bg-fuchsia-600',
      apply: () => {
        let affected = players
          .map((p, i) => ({ name: p.name, idx: i, alive: p.alive }))
          .filter(p => p.idx !== currentIndex && p.alive);
        message = `🥂 Todos menos tú (${players[currentIndex].name}) beben dos tragos: ${affected.map(p => p.name).join(', ')}`;
        highlightPlayers = affected.map(p => p.idx);
        setTimeout(() => { highlightPlayers = []; }, 2000);
      }
    },
    {
      text: 'Puedes ver el contenido del cilindro antes de disparar',
      icon: '👁️',
      color: 'bg-cyan-600',
      apply: () => {
        showCylinderModal = true;
        message = `👁️ Mira el contenido del cilindro antes de disparar.`;
      }
    },
    {
      text: 'Puedes revivir a un jugador muerto (aleatorio)',
      icon: '🧙‍♂️',
      color: 'bg-lime-700',
      apply: () => {
        const muertos = players.map((p, i) => ({...p, idx: i})).filter(p => !p.alive);
        if (muertos.length > 0) {
          const elegido = muertos[Math.floor(Math.random() * muertos.length)];
          players[elegido.idx].alive = true;
          message = `🧙‍♂️ Has revivido aleatoriamente a ${players[elegido.idx].name}!`;
        } else {
          message = 'No hay jugadores muertos para revivir.';
        }
      }
    },
    {
      text: 'Revivir a un jugador muerto (elige quién)',
      icon: '🧟',
      color: 'bg-lime-700',
      apply: () => {
        showPlayerSelectModal = true;
        playerSelectCallback = (targetIdx) => {
          if (!players[targetIdx].alive) {
            players[targetIdx].alive = true;
            message = `🧟 ¡${players[targetIdx].name} ha revivido!`;
          } else {
            message = 'Solo puedes revivir a un jugador muerto.';
          }
          showPlayerSelectModal = false;
          playerSelectCallback = null;
        };
      }
    },
    {
      text: 'Roba una carta modificadora a otro jugador',
      icon: '🃏',
      color: 'bg-yellow-700',
      apply: () => {
        showPlayerSelectModal = true;
        playerSelectCallback = (targetIdx) => {
          if (targetIdx !== currentIndex && players[targetIdx].alive && players[targetIdx].modifiers.length > 0) {
            const stolen = players[targetIdx].modifiers.pop();
            if (stolen !== undefined) {
              players[currentIndex].modifiers.push(stolen);
              message = `🃏 Robaste una carta a ${players[targetIdx].name}!`;
            } else {
              message = 'El jugador no tiene cartas para robar.';
            }
          } else {
            message = 'Elige un jugador vivo que tenga cartas.';
          }
          showPlayerSelectModal = false;
          playerSelectCallback = null;
        };
      }
    },
    {
      text: 'Todos los jugadores intercambian asientos',
      icon: '🔀',
      color: 'bg-orange-700',
      apply: () => {
        players = players.sort(() => Math.random() - 0.5);
        message = '🔀 ¡Todos los jugadores deben cambiar de asiento!';
      }
    },
    {
      text: 'Elige a alguien para que pierda una carta',
      icon: '❌🃏',
      color: 'bg-violet-700',
      apply: () => {
        showPlayerSelectModal = true;
        playerSelectCallback = (targetIdx) => {
          if (targetIdx !== currentIndex && players[targetIdx].alive && players[targetIdx].modifiers.length > 0) {
            players[targetIdx].modifiers.pop();
            message = `❌🃏 ${players[targetIdx].name} perdió una carta modificadora!`;
          } else {
            message = 'Elige un jugador vivo que tenga cartas.';
          }
          showPlayerSelectModal = false;
          playerSelectCallback = null;
        };
      }
    }
  ];

  // Efectos de sonido
  let revolverClickSound: HTMLAudioElement;
  let revolverShotSound: HTMLAudioElement;
  let heartbeatSound: HTMLAudioElement;
  let cylinderSpinSound: HTMLAudioElement;
  
  onMount(() => {
    players = (JSON.parse(sessionStorage.getItem('players') || '[]') as any[]).map((p) => ({ name: p.name || p, alive: true, modifiers: [] }));
    if (players.length === 0) goto('/add-players');
    refillCylinder();
    
    // Inicializar efectos de sonido
    revolverClickSound = new Audio('/sounds/revolver-click.mp3');
    revolverShotSound = new Audio('/sounds/revolver-shot.mp3');
    heartbeatSound = new Audio('/sounds/heartbeat.mp3');
    cylinderSpinSound = new Audio('/sounds/cylinder-spin.mp3');
    
    // Precarga de sonidos
    revolverClickSound.load();
    revolverShotSound.load();
    heartbeatSound.load();
    cylinderSpinSound.load();
  });

  // Modificar nextPlayer para saltar turnos si corresponde
  function nextPlayer() {
    if (players.filter((p) => p.alive).length === 0) return;
    let tries = 0;
    do {
      currentIndex = (currentIndex + 1) % players.length;
      tries++;
      if (skipTurnIndexes.includes(currentIndex)) {
        skipTurnIndexes = skipTurnIndexes.filter(idx => idx !== currentIndex);
        message = `⏭️ ${players[currentIndex].name} se salta su turno.`;
        // Saltar este turno, seguir buscando
      } else if (players[currentIndex].alive) {
        break;
      }
    } while (tries < players.length);
  }

  async function rotateGun() {
    // Gira visualmente el cilindro
    cylinderRotation += 360 + Math.floor(Math.random() * 180);
    isAnimating = true;
    
    // Reproducir sonido si está disponible
    if (cylinderSpinSound) {
      cylinderSpinSound.currentTime = 0;
      cylinderSpinSound.play();
    }
    
    await tick();
    setTimeout(() => {
      isAnimating = false;
    }, 1500);
  }

  async function drawModifier() {
    isRevealing = true;
    await tick();
    const card = modifierCards[Math.floor(Math.random() * modifierCards.length)];
    //card.apply();
    message += ` | ${card.icon} Carta: ${card.text}`;
    setTimeout(() => {
      isRevealing = false;
    }, 2000);
  }

  function refillCylinder() {
    cylinder = [];
    for (let i = 0; i < bullets; i++) cylinder.push('bad');
    if (goodBulletAvailable) {
      // Aumenta la probabilidad de bala buena
      cylinder.push('good');
      cylinder.push('good'); // Puedes aumentar a 3 si quieres aún más probabilidad
    }
    while (cylinder.length < 6) cylinder.push('empty');
  }

  function spinCylinder() {
    // Mezcla el array para simular el giro
    for (let i = cylinder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cylinder[i], cylinder[j]] = [cylinder[j], cylinder[i]];
    }
  }

  let shotType: 'bad' | 'good' | 'empty' | null = null;

  async function shoot() {
    if (isAnimating) return;
    
    // Iniciar secuencia dramática
    isShooting = true;
    showDramaticShot = true;
    
    // Crear efecto de latido del corazón
    heartbeatInterval = setInterval(() => {
      heartbeatIntensity = heartbeatIntensity === 1 ? 1.4 : 1;
    }, 500);
    
    // Reproducir sonido de latido
    heartbeatSound.currentTime = 0;
    heartbeatSound.loop = true;
    heartbeatSound.volume = 0.5;
    heartbeatSound.play();
    
    // Fase 1: Preparación
    dramaticShotPhase = 0;
    dramaticScale = 1;
    dramaticRotation = 0;
    dramaticTilt = 0;
    
    // Seleccionar la bala actual antes de la animación
    spinCylinder();
    const shot = cylinder[0];
    shotType = shot; // Guardar el tipo de bala para la animación
    
    // Fases de la animación dramática
    setTimeout(() => {
      // Fase 2: Enfoque en el arma
      dramaticShotPhase = 1;
      dramaticScale = 1.2;
      dramaticTilt = 5;
      
      // Acelerar latidos
      clearInterval(heartbeatInterval);
      heartbeatInterval = setInterval(() => {
        heartbeatIntensity = heartbeatIntensity === 1 ? 1.6 : 1;
      }, 300);
      
      // Aumentar volumen latido
      heartbeatSound.volume = 0.7;
      
      // Sonido de click
      revolverClickSound.currentTime = 0;
      revolverClickSound.play();
      
    }, 2000);
    
    setTimeout(() => {
      // Fase 3: Rotación del cilindro
      dramaticShotPhase = 2;
      cylinderRotation += 360 + Math.floor(Math.random() * 180);
      dramaticScale = 1.3;
      dramaticTilt = 10;
      
      // Latidos aún más rápidos
      clearInterval(heartbeatInterval);
      heartbeatInterval = setInterval(() => {
        heartbeatIntensity = heartbeatIntensity === 1 ? 1.8 : 1;
      }, 200);
      
      // Aumentar volumen latido
      heartbeatSound.volume = 0.85;
      
      // Sonido de cilindro girando
      cylinderSpinSound.currentTime = 0;
      cylinderSpinSound.play();
      
    }, 4000);
    
    setTimeout(() => {
      // Fase 4: Disparo
      dramaticShotPhase = 3;
      dramaticScale = 1.5;
      gunRotation = -30;
      dramaticTilt = 15;
      
      // Latidos muy rápidos
      clearInterval(heartbeatInterval);
      heartbeatInterval = setInterval(() => {
        heartbeatIntensity = heartbeatIntensity === 1 ? 2 : 1;
      }, 150);
      
      // Aumentar volumen latido al máximo
      heartbeatSound.volume = 1;
      
      // Sonido de disparo según el tipo de bala
      if (shot === 'bad') {
        revolverShotSound.currentTime = 0;
        revolverShotSound.volume = 1;
        revolverShotSound.play();
      } else if (shot === 'good') {
        revolverClickSound.currentTime = 0;
        revolverClickSound.volume = 0.8;
        revolverClickSound.play();
      } else {
        revolverClickSound.currentTime = 0;
        revolverClickSound.volume = 0.6;
        revolverClickSound.play();
      }
      
      setTimeout(() => { gunRotation = 0; }, 300);
      
    }, 6000);
    
    setTimeout(() => {
      // Finalizar la animación dramática
      clearInterval(heartbeatInterval);
      heartbeatSound.pause();
      heartbeatSound.currentTime = 0;
      
      showDramaticShot = false;
      dramaticShotPhase = 0;
      dramaticScale = 1;
      dramaticRotation = 0;
      dramaticTilt = 0;
      heartbeatIntensity = 1;
      shotType = null; // Limpiar después de mostrar
      
      // Procesar el resultado del disparo
      if (shot === 'bad') {
        if (players[currentIndex].hasShield) {
          // Se salva por escudo
          players[currentIndex].hasShield = false;
          message = `🍀 ${players[currentIndex].name} se salvó gracias a su escudo y pasa el turno.`;
          isShooting = false;
          nextPlayer();
          return;
        }
        // Disparo real
        showBloodSplatter = true;
        players[currentIndex].alive = false;
        message = `💥 ${players[currentIndex].name} murió y bebe ${deathPenaltyMultiplier} tragos`;
        deathPenaltyMultiplier = 1;
        goodBulletAvailable = true; // Se vuelve a agregar la buena
        bullets = Math.max(1, bullets - 1); // Quita una bala mala
        refillCylinder();
        if (players.filter((p) => p.alive).length <= 1) {
          isGameOver = true;
          message += '. ¡Fin del juego!';
          return;
        }
        setTimeout(() => {
          showBloodSplatter = false;
          isShooting = false;
          nextPlayer();
        }, 1500);
      } else if (shot === 'good') {
        // Bala buena: otorga carta
        const idx = Math.floor(Math.random() * modifierCards.length);
        players[currentIndex].modifiers.push(idx);
        revealModifierIndex = idx;
        isRevealing = true;
        message = `${players[currentIndex].name} obtuvo una carta modificadora.`;
        // Eliminar solo la primera bala buena del cilindro
        const goodIdx = cylinder.findIndex(b => b === 'good');
        if (goodIdx !== -1) {
          cylinder.splice(goodIdx, 1);
          // Mantener el array en 6 slots
          cylinder.push('empty');
        }
        setTimeout(() => {
          isRevealing = false;
          revealModifierIndex = null;
          isShooting = false;
          nextPlayer();
        }, 2000);
      } else {
        // Gatillo en seco
        message = `${players[currentIndex].name} se salvó (click vacío)`;
        isShooting = false;
        nextPlayer();
      }
    }, 7500);
  }

  function useModifier(idx: number) {
    const cardIdx = players[currentIndex].modifiers[idx];
    modifierCards[cardIdx].apply();
    message = `🃏 ${players[currentIndex].name} usó: ${modifierCards[cardIdx].icon} ${modifierCards[cardIdx].text}`;
    players[currentIndex].modifiers.splice(idx, 1);
  }

  let unusedChallenges: string[] = [];

  function doChallenge() {
    if (isAnimating) return;
    if (unusedChallenges.length === 0) {
      unusedChallenges = [...challenges];
    }
    const idx = Math.floor(Math.random() * unusedChallenges.length);
    challengeText = unusedChallenges[idx];
    unusedChallenges.splice(idx, 1);
    showChallenge = true;
  }

  async function completeChallenge() {
    showChallenge = false;
    message = `${players[currentIndex].name} completó el reto y se salvó`;
    // Reemplazar la primera bala vacía por una buena
    const emptyIdx = cylinder.findIndex(b => b === 'empty');
    if (emptyIdx !== -1) {
      cylinder[emptyIdx] = 'good';
    } else {
      // Si no hay vacías, no se agrega nada extra
    }
    nextPlayer();
  }

  function failChallenge() {
    showChallenge = false;
    message = `${players[currentIndex].name} falló el reto y debe disparar.`;
    setTimeout(() => {
      shoot();
    }, 800);
  }

  function resetGame() {
    players = players.map(p => ({...p, alive: true}));
    currentIndex = 0;
    bullets = 1;
    message = '';
    isGameOver = false;
    showBloodSplatter = false;
  }

  // Derivar los dos jugadores a mostrar: actual y siguiente vivo
  $: visiblePlayers = (() => {
    if (players.length === 0) return [];
    const visibles = [players[currentIndex]];
    let idx = currentIndex;
    do {
      idx = (idx + 1) % players.length;
    } while (!players[idx].alive && idx !== currentIndex);
    if (idx !== currentIndex) visibles.push(players[idx]);
    return visibles;
  })();
</script>

<PageContainer class="relative flex flex-col items-center overflow-hidden min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
   <h2 class="text-4xl font-bold mt-6 mb-4 text-center text-red-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)] z-10 relative">
    <span class="inline-block transform hover:scale-110 transition-transform">R</span>
    <span class="inline-block transform hover:scale-110 transition-transform">u</span>
    <span class="inline-block transform hover:scale-110 transition-transform">l</span>
    <span class="inline-block transform hover:scale-110 transition-transform">e</span>
    <span class="inline-block transform hover:scale-110 transition-transform">t</span>
    <span class="inline-block transform hover:scale-110 transition-transform">a</span>
    <span class="inline-block px-2"></span>
    <span class="inline-block transform hover:scale-110 transition-transform">R</span>
    <span class="inline-block transform hover:scale-110 transition-transform">u</span>
    <span class="inline-block transform hover:scale-110 transition-transform">s</span>
    <span class="inline-block transform hover:scale-110 transition-transform">a</span>
  </h2>

  {#if players.length > 0 && (players.filter((p) => p.alive).length > 0 || isGameOver)}
    <!-- Información del juego -->
    <div class="text-center space-y-2 mb-4 w-full max-w-md px-4 z-10 relative">
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-black/30 rounded-xl p-3 backdrop-blur-sm border border-gray-700">
          <p class="text-sm text-gray-400">Balas en el revólver</p>
          <div class="flex justify-center mt-2 space-x-1">
            {#each cylinder as slot, i (i)}
              <div class={`w-4 h-4 rounded-full ${slot === 'bad' ? 'bg-red-600 animate-pulse' : slot === 'good' ? 'bg-blue-500 animate-pulse' : 'bg-gray-700'}`}></div>
            {/each}
          </div>
        </div>
        <div class="bg-black/30 rounded-xl p-3 backdrop-blur-sm border border-gray-700 cursor-pointer"
             on:click={() => { if (players[currentIndex].alive && !isGameOver) showInventoryModal = true; }}>
          <p class="text-sm text-gray-400">Turno currente</p>
          <p class="font-bold text-lg truncate">{players[currentIndex].name}</p>
        </div>
      </div>
    </div>

    <!-- Animación del revólver -->
    <div class="relative w-64 h-64 my-6 z-20">
      {#if showBloodSplatter}
        <div class="absolute inset-0 z-30 flex items-center justify-center" transition:fade={{ duration: 300 }}>
          <div class="w-full h-full bg-[url('/static/blood-splatter.png')] bg-center bg-no-repeat bg-contain pointer-events-none"></div>
        </div>
      {/if}
      <div class="absolute inset-0 flex items-center justify-center z-20">
        <div class="w-56 h-56 relative">
          <div 
            class="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gray-800 border-4 border-gray-600"
            style="transform: translate(-50%, -50%) rotate({cylinderRotation}deg); transition: transform 1.5s cubic-bezier(0.2, 0.8, 0.2, 1);"
          >
            {#each cylinder as slot, i (i)}
              <div 
                class="absolute w-5 h-5 rounded-full border-2 border-gray-600"
                style="top: 50%; left: 50%; transform: translate(-50%, -50%) rotate({i * 60}deg) translateY(-25px);"
              >
                <div class={`w-full h-full rounded-full ${slot === 'bad' ? 'bg-red-500' : slot === 'good' ? 'bg-blue-500' : 'bg-gray-700'}`}></div>
              </div>
            {/each}
          </div>
          
          <!-- Cañón del revólver -->
          <div class="absolute top-[50%] left-[65%] w-36 h-10 bg-gray-700 rounded-r-lg transform -translate-y-1/2"></div>
          
          <!-- Gatillo -->
          <div class="absolute top-[60%] left-[30%] w-6 h-8 bg-gray-600 rounded-md transform -translate-x-1/2"></div>
          
          <!-- Mango -->
          <div class="absolute top-[60%] left-[20%] w-12 h-24 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg transform -translate-x-1/2 rotate-12"></div>
        </div>
      </div>
    </div>

    <!-- Panel de reto -->
    {#if showChallenge}
      <div 
        class="rounded-xl bg-black/60 p-6 text-center w-full max-w-md mx-4 border border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] z-30 relative" 
        transition:fly={{ y: 50, duration: 400, easing: elasticOut }}
      >
        <h3 class="text-xl font-bold text-purple-400 mb-3">Completa el reto</h3>
        <p class="text-lg">{challengeText}</p>
        <div class="flex flex-col sm:flex-row gap-3 mt-5 justify-center">
          <button 
            class="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-xl shadow-lg transform hover:scale-105 transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.8)]" 
            on:click={completeChallenge}
          >
            ¡Reto completado!
          </button>
          <button
            class="px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl shadow-lg transform hover:scale-105 transition-all hover:shadow-[0_0_15px_rgba(220,38,38,0.8)]"
            on:click={failChallenge}
          >
            Fallé el reto
          </button>
        </div>
      </div>
    {:else if !isGameOver}
      <!-- Botones de acción -->
      <div class="flex gap-4 mt-4 z-10 relative">
        <button 
          class="px-6 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]" 
          on:click={shoot}
          disabled={isAnimating || isShooting}
        >
          <span class="flex items-center">
            <span class="mr-2">🔫</span>
            Disparar
          </span>
        </button>
        <button 
          class="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl shadow-lg transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
          on:click={doChallenge}
          disabled={isAnimating || isShooting}
        >
          <span class="flex items-center">
            <span class="mr-2">🎯</span>
            Hacer reto
          </span>
        </button>
      </div>
    {/if}

    <!-- Mensaje del juego -->
    {#if message}
      <div 
        class="mt-6 text-center max-w-md mx-4 p-4 bg-black/40 backdrop-blur-sm rounded-xl border border-gray-700 z-10 relative"
        transition:fade={{ duration: 300 }}
      >
        <p class="text-lg">{message}</p>
      </div>
    {/if}

    <!-- Jugadores -->
    <div class="mt-8 w-full max-w-md px-4 z-10 relative">
      <h3 class="text-xl font-bold mb-3 text-center">Jugadores</h3>
      <div class="grid grid-cols-2 gap-3 max-h-44 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 rounded-lg">
        {#each visiblePlayers as player, i (player.name)}
          <div 
            class={`p-3 rounded-lg text-center transition-all relative overflow-hidden cursor-pointer
              ${players.indexOf(player) === currentIndex ? 'z-20' : ''}
              ${players.indexOf(player) === currentIndex && showBloodSplatter && !player.alive ? 'animate-shake bg-red-900/80 border border-red-700 shadow-[0_0_20px_rgba(220,38,38,0.7)]' :
                players.indexOf(player) === currentIndex && !showBloodSplatter && player.alive && !isGameOver && !isShooting && message.includes('se salvó') ? 'animate-pulse bg-green-800/70 border border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.7)]' :
                players.indexOf(player) === currentIndex ? 'bg-yellow-600/70 border border-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]' : 
                player.alive ? 'bg-gray-800/50 border border-gray-700' : 'bg-red-900/30 border border-red-800 opacity-50'}
            `}
            in:scale={{ duration: 300, start: 0.8 }}
            on:click={() => { if (players.indexOf(player) === currentIndex && player.alive && !isGameOver) showInventoryModal = true; }}
          >
            <div class="flex items-center justify-center mb-1 gap-1">
              <div class={`w-3 h-3 rounded-full mr-2 ${player.alive ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <span class="font-bold truncate">{player.name}</span>
              {#if player.hasShield}
                <span class="ml-1 text-green-400 animate-bounce" title="Escudo activo">🛡️</span>
              {/if}
            </div>
            <p class="text-xs text-gray-400">{player.alive ? 'Vivo' : 'Muerto 💀'}</p>
            {#if players.indexOf(player) === currentIndex && showBloodSplatter && !player.alive}
              <div class="absolute inset-0 bg-red-900/80 opacity-80 animate-fadeout pointer-events-none"></div>
              <div class="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <span class="text-[4rem] animate-skull-pop select-none">💀</span>
              </div>
            {/if}
            {#if players.indexOf(player) === currentIndex && !showBloodSplatter && player.alive && !isGameOver && !isShooting && message.includes('se salvó')}
              <div class="absolute inset-0 bg-green-400/40 opacity-60 animate-fadeout pointer-events-none"></div>
            {/if}
          </div>
        {/each}
      </div>
    </div>

    <!-- Pantalla de fin del juego -->
    {#if isGameOver}
      <div 
        class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        transition:fade={{ duration: 500 }}
      >
        <div 
          class="bg-gray-900 p-6 rounded-xl border-2 border-red-600 max-w-md w-full shadow-[0_0_30px_rgba(220,38,38,0.5)] z-50 relative"
          transition:scale={{ duration: 500, start: 0.8, opacity: 0 }}
        >
          <h2 class="text-2xl font-bold text-center mb-4 text-red-500">¡Fin del juego!</h2>
          
          {#if players.filter(p => p.alive).length > 0}
            <p class="text-center mb-6">
              <span class="font-bold text-green-500">{players.find(p => p.alive)?.name}</span> es el último superviviente.
            </p>
          {:else}
            <p class="text-center mb-6">Todos los jugadores han muerto.</p>
          {/if}
          
          <div class="flex justify-center">
            <button 
              class="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-xl shadow-lg transform hover:scale-105 transition-all"
              on:click={resetGame}
            >
              Jugar de nuevo
            </button>
          </div>
        </div>
      </div>
    {/if}

    <!-- Carta de modificador -->
    {#if isRevealing && revealModifierIndex !== null}
      <div class="fixed inset-0 flex items-center justify-center pointer-events-none z-40">
        <div 
          class="bg-gradient-to-b from-gray-800 to-gray-900 p-5 rounded-xl border-2 border-yellow-500 max-w-xs w-full transform rotate-3 shadow-[0_0_20px_rgba(234,179,8,0.5)] z-50 relative"
          transition:fly={{ y: 100, duration: 600, easing: elasticOut }}
        >
          <div class="text-center text-4xl mb-2">
            {modifierCards[revealModifierIndex].icon}
          </div>
          <p class="text-center font-bold text-yellow-400">{modifierCards[revealModifierIndex].text}</p>
        </div>
      </div>
    {/if}
  {:else}
    <!-- No hay jugadores -->
    <div class="flex flex-col items-center justify-center h-[60vh] px-4 z-10 relative">
      <p class="text-xl text-center mb-6">No hay suficientes jugadores para comenzar.</p>
      <a 
        href="/add-players" 
        class="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl shadow-lg transform hover:scale-105 transition-all"
      >
        Añadir jugadores
      </a>
    </div>
  {/if}

  <!-- Modal de inventario de modificadores -->
  {#if showInventoryModal}
    <div class="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div class="bg-gray-900 rounded-xl border-2 border-yellow-500 p-6 max-w-xs w-full relative animate-fadein">
        <button class="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl" on:click={() => showInventoryModal = false}>&times;</button>
        <h4 class="text-lg font-bold text-yellow-400 mb-4 text-center">Tus cartas modificadoras</h4>
        {#if players[currentIndex].modifiers.length === 0}
          <p class="text-center text-gray-400">No tienes cartas.</p>
        {:else}
          <div class="flex flex-col gap-3">
            {#each players[currentIndex].modifiers as idx, i}
              <button class="px-3 py-2 rounded bg-yellow-400 text-black font-bold text-sm flex items-center gap-2 hover:bg-yellow-500 transition-all border border-yellow-600 shadow" on:click={() => { useModifier(i); showInventoryModal = false; }}>
                <span class="text-xl">{modifierCards[idx].icon}</span> <span>{modifierCards[idx].text}</span>
              </button>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  {/if}

  <!-- Modal de selección de jugador -->
  {#if showPlayerSelectModal}
    <div class="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div class="bg-gray-900 rounded-xl border-2 border-pink-400 p-6 max-w-xs w-full relative animate-fadein">
        <button class="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl" on:click={() => { showPlayerSelectModal = false; playerSelectCallback = null; }}>&times;</button>
        <h4 class="text-lg font-bold text-pink-400 mb-4 text-center">Elige un jugador</h4>
        <div class="flex flex-col gap-3">
          {#each players as p, idx}
            {#if idx !== currentIndex && p.alive}
              <button class="px-3 py-2 rounded bg-pink-400 text-black font-bold text-sm flex items-center gap-2 hover:bg-pink-500 transition-all border border-pink-600 shadow" on:click={() => { playerSelectCallback && playerSelectCallback(idx); }}>
                <span class="text-xl">👤</span> <span>{p.name}</span>
              </button>
            {/if}
          {/each}
        </div>
      </div>
    </div>
  {/if}

  <!-- Modal para ver el cilindro -->
  {#if showCylinderModal}
    <div class="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div class="bg-gray-900 rounded-xl border-2 border-cyan-400 p-6 max-w-xs w-full relative animate-fadein">
        <button class="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl" on:click={() => showCylinderModal = false}>&times;</button>
        <h4 class="text-lg font-bold text-cyan-400 mb-4 text-center">Cilindro actual</h4>
        <div class="flex justify-center gap-2 mb-2">
          {#each cylinder as slot, i}
            <div class={`w-6 h-6 rounded-full border-2 ${slot === 'bad' ? 'bg-red-600 border-red-400' : slot === 'good' ? 'bg-blue-500 border-blue-300' : 'bg-gray-700 border-gray-500'}`}></div>
          {/each}
        </div>
        <p class="text-center text-gray-300 text-sm">Rojo: bala mala, Azul: buena, Gris: vacío</p>
      </div>
    </div>
  {/if}

  <!-- Efecto visual para "todos menos tú beben dos tragos" -->
  {#if highlightPlayers.length > 0}
    <div class="fixed inset-0 pointer-events-none z-40">
      {#each highlightPlayers as idx}
        <div class="absolute left-0 right-0 mx-auto w-64 top-24 animate-pulse">
          <div class="bg-fuchsia-600/70 text-white text-center rounded-xl p-2 mb-2 shadow-lg border-2 border-fuchsia-400">
            {players[idx].name} bebe 2 tragos 🍻
          </div>
        </div>
      {/each}
    </div>
  {/if}

  <!-- Animación dramática del disparo -->
  <DramaticShotAnimation {showDramaticShot} {dramaticShotPhase} {dramaticRotation} {dramaticScale} 
                        {dramaticTilt} {heartbeatIntensity} {cylinder} {cylinderRotation} {shotType} />
</PageContainer>

<style>
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
  }
  @keyframes fadeout {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }
  @keyframes skull-pop {
    0% { opacity: 0; transform: scale(0.5) rotate(-10deg); }
    60% { opacity: 1; transform: scale(1.2) rotate(8deg); }
    80% { transform: scale(0.95) rotate(-4deg); }
    100% { opacity: 1; transform: scale(1) rotate(0deg); }
  }
  @keyframes fadein {
    0% { opacity: 0; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1); }
  }
  @keyframes flash {
    0% { opacity: 0; transform: scale(0.1); }
    10% { opacity: 0.9; transform: scale(1.5); }
    20% { opacity: 0.2; transform: scale(1.2); }
    100% { opacity: 0; transform: scale(2); }
  }
  @keyframes smoke {
    0% { opacity: 0; transform: scale(0.1); }
    20% { opacity: 0.6; transform: scale(0.4); }
    100% { opacity: 0; transform: scale(2); }
  }
  .animate-flash {
    animation: flash 1s forwards;
  }
  .animate-smoke {
    animation: smoke 2s forwards;
  }
  .animate-shake {
    animation: shake 0.5s;
  }
  .animate-fadeout {
    animation: fadeout 1.2s forwards;
  }
  .animate-skull-pop {
    animation: skull-pop 0.8s cubic-bezier(0.2,0.8,0.2,1);
    filter: drop-shadow(0 0 10px #b91c1c88);
  }
  .animate-fadein {
    animation: fadein 0.3s;
  }
  .scrollbar-thin {
    scrollbar-width: thin;
  }
  .scrollbar-thumb-gray-700::-webkit-scrollbar-thumb {
    background: #374151;
    border-radius: 8px;
  }
  .scrollbar-track-gray-900::-webkit-scrollbar-track {
    background: #111827;
    border-radius: 8px;
  }
  .scrollbar-thin::-webkit-scrollbar {
    width: 8px;
  }
</style>
