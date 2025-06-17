<script lang="ts">
import { onMount } from 'svelte';
let Phaser: any;
import { page } from '$app/stores';
import { modes } from '$lib/modes';
import { questions } from '$lib/questions';
import { getLocale } from '$lib/locales';

let container: HTMLDivElement;
let phaserGame: any;
let activeQuestion = '';
let currentPlayer = 0;
let playerTokens: any[] = [];
let players: any[] = [];
let diceResult = 0;
let isRolling = false;
let locale = 'es';

// Emojis de las caras del dado
const diceFaces = ['⚀','⚁','⚂','⚃','⚄','⚅'];

const mode = $page.params.mode as string;

function rollDice() {
    if (isRolling) return;
    
    isRolling = true;
    // Efecto de animación del dado
    let rolls = 0;
    const maxRolls = 10;
    const rollInterval = setInterval(() => {
        diceResult = Math.floor(Math.random() * 6) + 1;
        rolls++;
        
        if (rolls >= maxRolls) {
            clearInterval(rollInterval);
            // Esperar 1 segundo mostrando el resultado final
            setTimeout(() => {
                isRolling = false;
                movePlayer();
            }, 1000);
        }
    }, 100);
}

function movePlayer() {
    const scene = phaserGame?.scene.getScene('main') as any;
    if (scene) {
        scene.movePlayerByDice(currentPlayer, diceResult);
        // Pasar al siguiente jugador después de mover
        nextPlayer();
    }
}

function nextPlayer() {
    currentPlayer = (currentPlayer + 1) % players.length;
}

function next() {
    const scene = phaserGame?.scene.getScene('main') as any;
    scene?.nextTile();
}

function createSpiralPositions(n: number, tileSize: number, margin: number) {
    // Calcular el tamaño mínimo de cuadrícula cuadrada
    const gridSize = Math.ceil(Math.sqrt(n));
    let minX = 0, minY = 0;
    let maxX = gridSize - 1, maxY = gridSize - 1;
    let x = 0, y = gridSize - 1; // Esquina inferior izquierda
    const positions: {x: number, y: number}[] = [];
    let dir = 0; // 0: derecha, 1: arriba, 2: izquierda, 3: abajo
    for (let i = 0; i < n; i++) {
        positions.push({
            x: x * (tileSize + margin),
            y: y * (tileSize + margin)
        });
        if (dir === 0) { // derecha
            if (x < maxX) x++;
            else { dir = 1; minY++; y--; }
        } else if (dir === 1) { // arriba
            if (y > minY) y--;
            else { dir = 2; maxX--; x--; }
        } else if (dir === 2) { // izquierda
            if (x > minX) x--;
            else { dir = 3; maxY--; y++; }
        } else if (dir === 3) { // abajo
            if (y < maxY) y++;
            else { dir = 0; minX++; x++; }
        }
    }
    return positions;
}

function createScene(cards: any[], locale: string) {
    return new Phaser.Class({
        Extends: Phaser.Scene,
        initialize: function MainScene() { Phaser.Scene.call(this, { key: 'main' }); },
        preload() {},
        create() {
            this.tileSize = 120;
            const margin = 20;
            const positions = createSpiralPositions(cards.length, this.tileSize, margin);
            this.tiles = [];
            for (let i = 0; i < cards.length; i++) {
                const pos = positions[i];
                const rect = this.add.rectangle(pos.x, pos.y, this.tileSize, this.tileSize, 0xffffff).setOrigin(0);
                const txt = cards[i].locales[locale] || cards[i].locales['en'] || Object.values(cards[i].locales || {})[0];
                this.add.text(rect.x + 5, rect.y + 5, txt, { fontSize: '14px', color: '#000', wordWrap: { width: this.tileSize - 10 } });
                this.tiles.push(rect);
            }
            // Centrar la cámara sobre el centro de la espiral
            const minX = Math.min(...positions.map(p => p.x));
            const maxX = Math.max(...positions.map(p => p.x));
            const minY = Math.min(...positions.map(p => p.y));
            const maxY = Math.max(...positions.map(p => p.y));
            const centerX = (minX + maxX + this.tileSize) / 2;
            const centerY = (minY + maxY + this.tileSize) / 2;
            this.cameras.main.centerOn(centerX, centerY);

            // Crear tokens para cada jugador con colores diferentes
            this.playerPositions = Array(players.length).fill(0);
            this.playerTokens = [];
            
            const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff, 0xffa500, 0x800080];
            
            for (let i = 0; i < players.length; i++) {
                const offset = 10 + (i * 15); // Separar los tokens para que sean visibles
                const token = this.add.circle(
                    this.tiles[0].x + this.tileSize / 2 + (i % 3) * 15 - 15, 
                    this.tiles[0].y + this.tileSize / 2 + Math.floor(i / 3) * 15 - 15, 
                    10, 
                    colors[i % colors.length]
                );
                token.setData('playerName', players[i].name);
                this.playerTokens.push(token);
            }
            
            this.current = 0;
            this.cameras.main.setZoom(1.5);
            // Seguir al primer token inicialmente
            if (this.playerTokens.length > 0) {
                this.cameras.main.startFollow(this.playerTokens[0], true, 0.1, 0.1);
            }
            
            activeQuestion = cards[0].locales[locale] || cards[0].locales['en'] || Object.values(cards[0].locales || {})[0];

            // Habilitar arrastre y zoom táctil en la cámara
            this.input.on('pointerdown', (pointer: any) => {
                if (pointer.pointerType === 'touch' || pointer.pointerType === 'mouse') {
                    this.isDragging = true;
                    this.dragStartX = pointer.x;
                    this.dragStartY = pointer.y;
                    this.cameraStartX = this.cameras.main.scrollX;
                    this.cameraStartY = this.cameras.main.scrollY;
                }
            });
            this.input.on('pointerup', () => {
                this.isDragging = false;
            });
            this.input.on('pointermove', (pointer: any) => {
                if (this.isDragging && pointer.isDown) {
                    const dx = pointer.x - this.dragStartX;
                    const dy = pointer.y - this.dragStartY;
                    this.cameras.main.scrollX = this.cameraStartX - dx / this.cameras.main.zoom;
                    this.cameras.main.scrollY = this.cameraStartY - dy / this.cameras.main.zoom;
                }
            });
            // Pinch zoom para móvil
            this.input.addPointer(2);
            let lastDistance = 0;
            this.input.on('pointermove', (pointer: any) => {
                if (this.input.pointers.length >= 2) {
                    const [p1, p2] = this.input.pointers;
                    if (p1.isDown && p2.isDown) {
                        const dist = Phaser.Math.Distance.Between(p1.x, p1.y, p2.x, p2.y);
                        if (lastDistance) {
                            let zoom = this.cameras.main.zoom * (dist / lastDistance);
                            zoom = Phaser.Math.Clamp(zoom, 0.5, 3);
                            this.cameras.main.setZoom(zoom);
                        }
                        lastDistance = dist;
                    } else {
                        lastDistance = 0;
                    }
                }
            });
            this.input.on('pointerup', () => {
                lastDistance = 0;
            });
        },
        movePlayerByDice(playerIndex: number, steps: number) {
            if (playerIndex >= this.playerTokens.length) return;
            
            const start = this.playerPositions[playerIndex];
            const end = Math.min(start + steps, this.tiles.length - 1);
            const token = this.playerTokens[playerIndex];
            this.cameras.main.startFollow(token, true, 0.1, 0.1);
            
            const moveStep = (pos: number) => {
                this.playerPositions[playerIndex] = pos;
                const tile = this.tiles[pos];
                const samePositionCount = this.playerPositions.filter((p: number) => p === pos).length;
                const positionIndex = this.playerPositions.slice(0, playerIndex + 1).filter((p: number) => p === pos).length;
                const offsetX = ((positionIndex - 1) % 3) * 15 - 15;
                const offsetY = Math.floor((positionIndex - 1) / 3) * 15 - 15;
                const destX = tile.x + this.tileSize / 2 + offsetX;
                const destY = tile.y + this.tileSize / 2 + offsetY;
                return new Promise<void>(resolve => {
                    this.tweens.add({
                        targets: token,
                        x: destX,
                        y: destY,
                        duration: 300,
                        ease: 'Sine.easeInOut',
                        onComplete: () => resolve()
                    });
                });
            };

            // Animar paso a paso
            const animate = async () => {
                for (let pos = start + 1; pos <= end; pos++) {
                    await moveStep(pos);
                    activeQuestion = cards[pos].locales[locale] || cards[pos].locales['en'] || Object.values(cards[pos].locales || {})[0];
                }
            };
            animate();
        },
        nextTile() {
            if (this.current + 1 >= this.tiles.length) return;
            this.current++;
            const tile = this.tiles[this.current];
            
            // Mover todos los tokens a la siguiente casilla
            for (let i = 0; i < this.playerTokens.length; i++) {
                const token = this.playerTokens[i];
                const offsetX = (i % 3) * 15 - 15;
                const offsetY = Math.floor(i / 3) * 15 - 15;
                
                this.tweens.add({ 
                    targets: token, 
                    x: tile.x + this.tileSize / 2 + offsetX, 
                    y: tile.y + this.tileSize / 2 + offsetY, 
                    duration: 500 
                });
                
                this.playerPositions[i] = this.current;
            }
            
            activeQuestion = cards[this.current].locales[locale] || cards[this.current].locales['en'] || Object.values(cards[this.current].locales || {})[0];
        }
    });
}

onMount(async () => {
    Phaser = (await import('phaser')).default;
    players = JSON.parse(sessionStorage.getItem('players') || '[]');
    locale = await getLocale();
    const gridSize = 8;
    const totalTiles = gridSize * gridSize;
    let cards: any[] = [];
    while (cards.length < totalTiles) {
        const newCards = modes[mode].pickCards(questions, locale, players);
        cards = cards.concat(newCards);
        if (newCards.length === 0) break;
        if (cards.length > totalTiles) cards = cards.slice(0, totalTiles);
    }
    // Destruir el juego anterior si existe
    if (phaserGame) {
        phaserGame.destroy(true);
        phaserGame = null;
    }
    const config = {
        type: Phaser.AUTO,
        parent: container,
        width: window.innerWidth,
        height: window.innerHeight,
        scene: createScene(cards, locale),
        scale: { mode: Phaser.Scale.RESIZE },
        backgroundColor: 'rgba(0,0,0,0)'
    };
    phaserGame = new Phaser.Game(config);
});
</script>

<div bind:this={container} class="w-full h-full relative"></div>

{#if isRolling}
  <div class="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
    <div class="bg-black bg-opacity-70 rounded-full p-8 shadow-lg flex items-center justify-center">
      <span class="text-white text-7xl select-none" style="font-family: 'Noto Emoji', 'Segoe UI Emoji', 'Apple Color Emoji', sans-serif;">
        {diceFaces[diceResult ? diceResult-1 : Math.floor(Math.random()*6)]}
      </span>
    </div>
  </div>
{/if}

<div class="absolute top-5 left-0 right-0 flex justify-center">
    <div class="bg-black bg-opacity-70 text-white px-4 py-2 rounded-xl">
        <p class="text-center font-bold">Turno de: {players[currentPlayer]?.name || 'Jugador'}</p>
    </div>
</div>

<div class="absolute bottom-20 left-0 right-0 text-center px-4">
    <p class="text-white text-lg bg-black bg-opacity-70 p-2 rounded-lg">{activeQuestion}</p>
</div>

<div class="absolute bottom-5 left-0 right-0 flex justify-center gap-4">
    <button on:click={rollDice} class="bg-purple-600 text-white px-4 py-2 rounded-xl flex items-center" disabled={isRolling}>
        <span class="mr-2">🎲</span>
        {#if isRolling}
            Lanzando...
        {:else}
            Lanzar dado: {diceResult || '?'}
        {/if}
    </button>
    <button on:click={next} class="bg-purple-600 text-white px-4 py-2 rounded-xl">Siguiente</button>
</div>

<style>
    :global(canvas) {
        touch-action: none;
        background: transparent !important;
    }
    .w-full.h-full.relative {
        background: transparent !important;
    }
</style>
