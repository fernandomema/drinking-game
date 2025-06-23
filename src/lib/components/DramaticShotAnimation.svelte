<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  export let showDramaticShot: boolean;
  export let dramaticShotPhase: number;
  export let dramaticRotation: number;
  export let dramaticScale: number;
  export let dramaticTilt: number;
  export let heartbeatIntensity: number;
  export let cylinder: ('bad' | 'good' | 'empty')[];
  export let cylinderRotation: number;
  export let shotType: 'bad' | 'good' | 'empty' | null = null;
</script>

<!-- Componente para la animación del disparo -->
<div class="fixed inset-0 z-50 flex items-center justify-center {showDramaticShot ? 'pointer-events-auto' : 'pointer-events-none opacity-0'} transition-opacity duration-500">
  <!-- Fondo negro con latido -->
  <div class="absolute inset-0 bg-black"
       style="opacity: {heartbeatIntensity * 0.95}; transition: opacity 100ms ease-in-out;">
  </div>
  
  <!-- Contenedor de la animación del revólver -->
  <div class="relative w-full h-full flex items-center justify-center overflow-hidden">
    <div class="relative w-80 h-80"
         style="transform: scale({dramaticScale}) rotate({dramaticRotation}deg) perspective(1000px) rotateX({dramaticTilt}deg); transition: transform 400ms cubic-bezier(0.22, 1, 0.36, 1);">
      
      <!-- Arma con efectos básicos -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="relative">
          <!-- Revólver: Cuerpo -->
          <div class="w-64 h-40 relative">
            <!-- Cilindro -->
            <div class="absolute top-[50%] left-[35%] transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-gray-800 border-4 border-gray-600 shadow-[inset_0_0_15px_rgba(0,0,0,0.8)]"
                style="transform: translate(-50%, -50%) rotate({cylinderRotation}deg); transition: transform 800ms cubic-bezier(0.34, 1.56, 0.64, 1);">
              <!-- Recámaras del cilindro -->
              {#each cylinder as slot, i}
                <div class="absolute w-8 h-8 rounded-full border-2 border-gray-600 overflow-hidden"
                     style="top: 50%; left: 50%; transform: translate(-50%, -50%) rotate({i * 60}deg) translateY(-30px); box-shadow: inset 0 0 5px rgba(0,0,0,0.8);">
                  <div class={`w-full h-full rounded-full ${
                    slot === 'bad' ? 'bg-gradient-to-br from-red-600 to-red-800' : 
                    slot === 'good' ? 'bg-gradient-to-br from-blue-400 to-blue-600' : 
                    'bg-gradient-to-br from-gray-700 to-gray-900'}`} 
                       style="transform: scale({heartbeatIntensity * 0.1 + 0.9});">
                  </div>
                </div>
              {/each}
            </div>
            
            <!-- Cañón con brillo y efectos -->
            <div class="absolute top-[50%] left-[45%] w-44 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-r-lg transform -translate-y-1/2 shadow-[0_0_10px_rgba(0,0,0,0.6)]"
                 style="box-shadow: inset 0 0 10px rgba(0,0,0,0.8);">
              <!-- Interior del cañón con brillo -->
              <div class="absolute top-[50%] left-[100%] w-4 h-4 rounded-full transform -translate-y-1/2 -translate-x-1/2"
                   style="background: radial-gradient(circle, rgba(20,20,20,1) 0%, rgba(0,0,0,1) 90%); box-shadow: inset 0 0 5px rgba(255,255,255,0.1);">
              </div>
              <!-- Brillo del cañón -->
              <div class="absolute top-0 left-0 right-0 h-[1px] bg-gray-500 opacity-40"></div>
            </div>
            
            <!-- Gatillo -->
            <div class="absolute top-[60%] left-[30%] w-6 h-10 bg-gradient-to-b from-gray-600 to-gray-700 rounded-md transform -translate-x-1/2 shadow-lg"></div>
            
            <!-- Mango con textura -->
            <div class="absolute top-[65%] left-[20%] w-14 h-28 bg-gradient-to-b from-gray-700 to-gray-900 rounded-lg transform -translate-x-1/2 rotate-12"
                 style="box-shadow: inset 2px 0 5px rgba(255,255,255,0.1), inset -2px 0 5px rgba(0,0,0,0.5);">
              <!-- Textura del mango -->
              <div class="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.2)_0%,_transparent_70%)]"
                   style="background-size: 10px 10px;"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Efecto de disparo -->
      {#if dramaticShotPhase === 3}
        <div class="absolute left-[60%] top-[50%] transform -translate-y-1/2">
          {#if shotType === 'bad'}
            <div class="absolute w-32 h-32 bg-red-600 rounded-full opacity-80 animate-flash shadow-2xl shadow-red-900"></div>
            <div class="absolute w-64 h-64 rounded-full bg-red-900/60 opacity-80 animate-smoke"></div>
          {:else if shotType === 'good'}
            <div class="absolute w-32 h-32 bg-blue-400 rounded-full opacity-80 animate-flash shadow-2xl shadow-blue-900"></div>
            <div class="absolute w-64 h-64 rounded-full bg-blue-300/40 opacity-80 animate-smoke"></div>
            <div class="absolute left-10 top-10 animate-bounce text-5xl">🃏</div>
          {:else if shotType === 'empty'}
            <div class="absolute w-32 h-32 bg-gray-400 rounded-full opacity-40 animate-flash"></div>
            <div class="absolute w-64 h-64 rounded-full bg-gray-700/40 opacity-40 animate-smoke"></div>
            <div class="absolute left-5 top-0" in:fly={{ y: -20, duration: 300 }}>
              <p class="text-xl italic text-gray-400">Click</p>
            </div>
          {/if}
        </div>
      {/if}
    </div>
  </div>

  <!-- Textos e indicadores según la fase -->
  {#if dramaticShotPhase === 0}
    <div class="absolute top-[30%] left-0 right-0 text-center" transition:fade={{ duration: 300 }}>
      <p class="text-2xl font-bold text-red-500 uppercase tracking-widest"
         style="text-shadow: 0 0 10px rgba(220,38,38,0.7);">Preparando disparo</p>
    </div>
  {:else if dramaticShotPhase === 1}
    <div class="absolute top-[30%] left-0 right-0 text-center" transition:fade={{ duration: 300 }}>
      <p class="text-3xl font-bold text-red-500 uppercase tracking-widest animate-pulse"
         style="text-shadow: 0 0 15px rgba(220,38,38,0.8);">Apuntando</p>
    </div>
  {:else if dramaticShotPhase === 2}
    <div class="absolute top-[30%] left-0 right-0 text-center" transition:fade={{ duration: 300 }}>
      <p class="text-4xl font-bold text-red-500 uppercase tracking-widest animate-pulse"
         style="text-shadow: 0 0 20px rgba(220,38,38,0.9);">¡Girando cilindro!</p>
    </div>
  {:else if dramaticShotPhase === 3}
    <div class="absolute top-[30%] left-0 right-0 text-center" transition:fade={{ duration: 300 }}>
      <p class="text-5xl font-bold text-red-500 uppercase tracking-widest animate-pulse"
         style="text-shadow: 0 0 25px rgba(220,38,38,1);">¡FUEGO!</p>
    </div>
    <!-- Texto de resultado -->
    <div class="absolute top-[55%] left-0 right-0 text-center" transition:fade={{ duration: 400 }}>
      {#if shotType === 'bad'}
        <p class="text-4xl font-bold text-red-500 drop-shadow-lg animate-shake">¡BANG! Has muerto</p>
      {:else if shotType === 'good'}
        <p class="text-4xl font-bold text-blue-400 drop-shadow-lg animate-pulse">¡Suerte! Carta especial</p>
      {:else if shotType === 'empty'}
        <p class="text-4xl font-bold text-gray-200 drop-shadow-lg animate-pulse">Click... ¡Te salvaste!</p>
      {/if}
    </div>
  {/if}

  <!-- Efectos de latido del corazón -->
  <div class="absolute top-[85%] left-0 right-0 flex justify-center items-center gap-2">
    <div class="text-red-500 text-5xl" style="transform: scale({heartbeatIntensity}); transition: transform 100ms ease-out;">♥</div>
    <div class="h-0.5 w-24 bg-red-500 overflow-hidden">
      <div class="h-full w-full bg-red-300"
           style="transform: translateX(-{100 - heartbeatIntensity * 100}%); transition: transform 100ms ease-out;"></div>
    </div>
  </div>
</div>

<style>
  @keyframes flash {
    0% { opacity: 0; transform: scale(0.1); }
    10% { opacity: 0.8; transform: scale(1.5); }
    20% { opacity: 0.2; transform: scale(1.2); }
    100% { opacity: 0; transform: scale(2); }
  }
  
  @keyframes smoke {
    0% { opacity: 0; transform: scale(0.1); }
    20% { opacity: 0.6; transform: scale(0.4); }
    100% { opacity: 0; transform: scale(2); }
  }
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
  }
  
  .animate-flash {
    animation: flash 1s forwards;
  }
  
  .animate-smoke {
    animation: smoke 2s forwards;
  }
  
  .animate-bounce {
    animation: bounce 1s infinite;
  }
  
  .animate-shake {
    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
  }
  
  .animate-pulse {
    animation: pulse 1.5s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
</style>
