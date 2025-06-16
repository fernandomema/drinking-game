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

const mode = $page.params.mode as string;

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
            const tileSize = 120;
            const margin = 20;
            const rows = Math.ceil(cards.length / cols);
            this.tiles = [];
            let index = 0;
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols && index < cards.length; x++) {
                    const posX = (y % 2 === 0) ? x : cols - 1 - x;
                    const rect = this.add.rectangle(posX * (tileSize + margin), y * (tileSize + margin), tileSize, tileSize, 0xffffff).setOrigin(0);
                    const txt = cards[index].locales[locale] || cards[index].locales['en'] || Object.values(cards[index].locales || {})[0];
                    this.add.text(rect.x + 5, rect.y + 5, txt, { fontSize: '14px', color: '#000', wordWrap: { width: tileSize - 10 } });
                    this.tiles.push(rect);
                    index++;
                }
            }
            this.token = this.add.circle(this.tiles[0].x + tileSize / 2, this.tiles[0].y + tileSize / 2, 10, 0xff0000);
            this.current = 0;
            this.cameras.main.setZoom(2);
            this.cameras.main.startFollow(this.token, true, 0.1, 0.1);
            activeQuestion = cards[0].locales[locale] || cards[0].locales['en'] || Object.values(cards[0].locales || {})[0];
        },
        nextTile() {
            if (this.current + 1 >= this.tiles.length) return;
            this.current++;
            const tile = this.tiles[this.current];
            this.tweens.add({ targets: this.token, x: tile.x + 60, y: tile.y + 60, duration: 500 });
            activeQuestion = cards[this.current].locales[locale] || cards[this.current].locales['en'] || Object.values(cards[this.current].locales || {})[0];
        }
    });
}

onMount(async () => {
    Phaser = (await import('phaser')).default;
    const players = JSON.parse(sessionStorage.getItem('players') || '[]');
    const locale = await getLocale();
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
<div class="absolute bottom-5 left-0 right-0 flex justify-center">
    <button on:click={next} class="bg-purple-600 text-white px-4 py-2 rounded-xl">Next</button>
</div>
<div class="absolute bottom-20 left-0 right-0 text-center px-4">
    <p class="text-white text-lg bg-black bg-opacity-50 p-2 rounded-lg">{activeQuestion}</p>
</div>

<style>
    :global(canvas) {
        touch-action: none;
    }
</style>
