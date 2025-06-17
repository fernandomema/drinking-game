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
            isRolling = false;
            movePlayer();
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

function createScene(cards: any[], locale: string) {
    return new Phaser.Class({
        Extends: Phaser.Scene,
        initialize: function MainScene() { Phaser.Scene.call(this, { key: 'main' }); },
        preload() {},
        create() {
            const cols = 8;
            this.tileSize = 120; // Definir como propiedad de la escena
            const margin = 20;
            const rows = Math.ceil(cards.length / cols);
            this.tiles = [];
            let index = 0;
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols && index < cards.length; x++) {
                    const posX = (y % 2 === 0) ? x : cols - 1 - x;
                    const rect = this.add.rectangle(posX * (this.tileSize + margin), y * (this.tileSize + margin), this.tileSize, this.tileSize, 0xffffff).setOrigin(0);
                    const txt = cards[index].locales[locale] || cards[index].locales['en'] || Object.values(cards[index].locales || {})[0];
                    this.add.text(rect.x + 5, rect.y + 5, txt, { fontSize: '14px', color: '#000', wordWrap: { width: this.tileSize - 10 } });
                    this.tiles.push(rect);
                    index++;
                }
            }
            
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
        },
        movePlayerByDice(playerIndex, steps) {
            if (playerIndex >= this.playerTokens.length) return;
            
            const newPosition = Math.min(this.playerPositions[playerIndex] + steps, this.tiles.length - 1);
            this.playerPositions[playerIndex] = newPosition;
            
            const token = this.playerTokens[playerIndex];
            const tile = this.tiles[newPosition];
            
            // Distribuir tokens en la misma casilla
            const samePositionCount = this.playerPositions.filter(pos => pos === newPosition).length;
            const positionIndex = this.playerPositions.slice(0, playerIndex + 1).filter(pos => pos === newPosition).length;
            
            const offsetX = ((positionIndex - 1) % 3) * 15 - 15;
            const offsetY = Math.floor((positionIndex - 1) / 3) * 15 - 15;
            
            this.tweens.add({ 
                targets: token, 
                x: tile.x + this.tileSize / 2 + offsetX, 
                y: tile.y + this.tileSize / 2 + offsetY, 
                duration: 500 
            });
            
            // Seguir al token que se está moviendo
            this.cameras.main.startFollow(token, true, 0.1, 0.1);
            
            // Actualizar la pregunta actual
            activeQuestion = cards[newPosition].locales[locale] || cards[newPosition].locales['en'] || Object.values(cards[newPosition].locales || {})[0];
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
    const filteredQuestions = modes[mode].pickCards(questions, locale, players);
    const config = {
        type: Phaser.AUTO,
        parent: container,
        width: window.innerWidth,
        height: window.innerHeight,
        scene: createScene(filteredQuestions, locale),
        scale: { mode: Phaser.Scale.RESIZE }
    };
    phaserGame = new Phaser.Game(config);
});
</script>

<div bind:this={container} class="w-full h-full relative"></div>

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
    }
</style>
