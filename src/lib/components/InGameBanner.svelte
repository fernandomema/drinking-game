<script lang="ts">
    import { Capacitor } from "@capacitor/core";
    import BottomSheet from "./BottomSheet.svelte";
    import { Share } from '@capacitor/share';
    import { shareApp } from "$lib/utils/Share";
    import { getDaysPlayed } from "$lib/UserInfo";
    import { _ } from '$lib/locales';

    const banners = [{
        id: 'laught',
        enabled: true,
    }, {
        id: 'rate',
        enabled: Capacitor.getPlatform() === 'ios' || Capacitor.getPlatform() === 'android',
    }, {
        id: 'share',
        enabled: true,
    }, {
        id: 'suggest',
        enabled: () => true,
    }, {
        id: 'streak',
        enabled: () => getDaysPlayed() > 0,
    }];
    let showPremiumModal = false;

    const getRandomBanner = () => {
        const filteredBanners = banners.filter(banner => typeof banner.enabled === 'function' ? banner.enabled() : banner.enabled);
        return filteredBanners[Math.floor(Math.random() * filteredBanners.length)];
    };

    const randomizeBanner = () => {
        banner = getRandomBanner().id;
    };

    export let banner: string = getRandomBanner().id;
    let daysPlayed: number = getDaysPlayed();

    const laught = async () => {
      try {
        await fetch('https://api.counterapi.dev/v1/tragos-locos/laughts/up', { method: 'GET' });
      } catch (error) {
        console.error('Error incrementing counter:', error);
      }
      randomizeBanner();
    };

    const rate = async () => {
        
    };

    export const suggest = () => {}; 
</script>

{#if banner == 'laught'}
    <div class="w-full h-[50px] bg-purple-100 text-black flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold text-gray-700">¿Te estas divirtiendo? 🎉</span>
        <button on:click={laught} class="bg-gray-100 text-purple-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-300">¡Dale like! ❤️</button>
    </div>
{:else if banner == 'rate'}
    <div class="w-full h-[50px] bg-purple-100 text-black flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold text-gray-700">¿Te mola la app? 🤩</span>
        <a href="#" class="bg-gray-100 text-purple-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-300">¡Califícala! ⭐</a>
    </div>
{:else if banner == 'whatsapp'}
    <div class="w-full h-[50px] bg-green-100 text-black flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold text-gray-700">¿quieres abrir WhatsApp? 🍻📲</span>
        <a href="whatsapp://send" class="bg-gray-100 text-green-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-300">¡Abrir WhatsApp! ✅</a>
    </div>
{:else if banner == 'share'}
    <div class="w-full h-[50px] bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-between px-4 rounded-lg shadow-lg animate-pulse">
        <span class="text-sm font-bold">¡Comparte la diversión! 🎉</span>
        <button on:click={shareApp} class="bg-white text-purple-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-200">📢 ¡Compártelo!</button>
    </div>
{:else if banner == 'streak'}
    <div class="w-full h-[60px] bg-blue-100 text-black flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold text-gray-700">{$_('banners.streak', { days: daysPlayed })}</span>
    </div>
{:else if banner == 'premium'}
    <div class="w-full h-[50px] bg-gradient-to-r from-green-400 to-blue-500 text-white flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold">¡Hazte Premium y desbloquea ventajas exclusivas! 🚀</span>
        <a href="#" class="bg-white text-green-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-200">¡Hazte Premium!</a>
    </div>
    <div class="w-full h-[60px] bg-gradient-to-r from-purple-600 to-pink-500 text-white flex items-center justify-between px-4 rounded-lg shadow-lg animate-pulse">
        <span class="text-sm font-bold">¡Disfruta de más funciones con Premium! 🌟</span>
        <a href="#" class="bg-white text-purple-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-200">Sube a Premium</a>
    </div>
    <div class="w-full h-[50px] bg-gradient-to-r from-red-500 to-yellow-500 text-white flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold">¿Quieres más? ¡Obtén Premium y disfrútalo! 🔥</span>
        <a href="#" class="bg-white text-red-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-200">¡Compra Premium!</a>
    </div>
    <div class="w-full h-[60px] bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold">¡Oferta limitada! Hazte Premium ahora 🔥</span>
        <a href="#" class="bg-white text-orange-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-200">¡Actúa rápido!</a>
    </div>
    <div class="w-full p-3 bg-gray-100 rounded-md border border-gray-200 flex items-center justify-between">
        <span class="text-gray-700 text-sm">Mejora tu experiencia con Premium.</span>
        <a href="#" class="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold hover:bg-blue-600 transition-colors duration-300">Ir a Premium</a>
    </div>
{:else if banner == 'ads'}
    asd
{:else if banner == 'suggest'}
    <div class="w-full h-[60px] bg-purple-200 text-black flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold text-gray-700">¿Tienes una pregunta chida? 💬</span>
        <a href="#" class="bg-purple-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-md hover:bg-purple-600">¡Sugiérela! ✍️</a>
    </div>
{:else if banner == 'invite'}
    <div class="w-full h-[50px] bg-blue-100 text-black flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold text-gray-700">¡Trae a tus colegas! 👯‍♂️</span>
        <a href="#" class="bg-gray-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-300">Invítalos ya 🎉</a>
    </div>
{:else if banner == 'changelog'}
    <div class="w-full h-[50px] bg-yellow-100 text-black flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold text-gray-700">¡Nueva actualización! 🚀</span>
        <a href="#" class="bg-gray-100 text-yellow-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-300">Ver cambios 📲</a>
    </div>
{:else if banner == 'donate'}
    <div class="w-full h-[50px] bg-teal-100 text-black flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold text-gray-700">¡Ayuda a mejorar la app! 💸</span>
        <a href="#" class="bg-gray-100 text-teal-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-300">Dona ahora 🙏</a>
    </div> 
{:else if banner == 'draw'}
    <div class="w-full h-[50px] bg-orange-100 text-black flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold text-gray-700">¡Sorteo en marcha! 🎁</span>
        <a href="#" class="bg-gray-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-300">¡Participa ya! 🎉</a>
    </div>
{:else if banner == 'event'}
    <div class="w-full h-[50px] bg-purple-200 text-black flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold text-gray-700">¡No te pierdas el evento! 🎤</span>
        <a href="#" class="bg-gray-100 text-purple-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-300">Únete al evento 📅</a>
    </div>
{:else if banner == 'feature'}
    <div class="w-full h-[50px] bg-pink-100 text-black flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold text-gray-700">¡Descubre la nueva función! 🤖</span>
        <a href="#" class="bg-gray-100 text-pink-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-300">Prúebala ahora ✨</a>
    </div>
{/if}

<BottomSheet isOpen={showPremiumModal} onClose={() => (showPremiumModal = false)}>
    <div class="!z-5 max-h-[450px] relative flex h-full w-full flex-col rounded-[20px] bg-clip-border p-6 shadow-3xl shadow-shadow-500">
        <div class="mb-auto flex flex-col items-center justify-center">
            <div class="flex items-center justify-center rounded-full bg-purple-500 p-[26px] text-7xl font-bold text-white">
                <img src="/crown.png" alt="Crown" class="w-[100px]" />
            </div>
            <h4 class="mb-3 mt-3 text-2xl font-bold text-navy-700 dark:text-white">¡Hazte Premium!</h4>
            <p class="px-5 text-left text-base font-normal text-gray-600 md:!px-0 xl:!px-8">
                Obtén acceso a todas las funciones exclusivas del juego y disfruta de una experiencia sin límites.<br>
                Con Premium, tendrás acceso a:
            </p>
            <ul class="px-5 text-left text-base font-normal text-gray-600 md:!px-0 xl:!px-8 list-disc list-inside">
                <li>Funciones adicionales</li>
                <li>Sin anuncios</li>
                <li>Y mucho más...</li>
            </ul>
        </div>
    </div>
    <div slot="footer" class="flex flex-col gap-2">
        <div class="flex mt-4 gap-2">
            <!-- Botón de compra -->
            <button class="w-full py-2 bg-purple-800 text-white rounded flex gap-2 justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21.838 11.126l-.229 2.436c-.378 4.012-.567 6.019-1.75 7.228C18.678 22 16.906 22 13.36 22h-2.72c-3.545 0-5.317 0-6.5-1.21s-1.371-3.216-1.749-7.228l-.23-2.436c-.18-1.912-.27-2.869.058-3.264a1 1 0 0 1 .675-.367c.476-.042 1.073.638 2.268 1.998c.618.704.927 1.055 1.271 1.11a.92.92 0 0 0 .562-.09c.319-.16.53-.595.955-1.464l2.237-4.584C10.989 2.822 11.39 2 12 2s1.011.822 1.813 2.465l2.237 4.584c.424.87.636 1.304.955 1.464c.176.089.37.12.562.09c.344-.055.653-.406 1.271-1.11c1.195-1.36 1.792-2.04 2.268-1.998a1 1 0 0 1 .675.367c.327.395.237 1.352.057 3.264" opacity="0.5"/>
                </svg>
                <span>Comprar Premium</span>
            </button>
        </div>
        <!-- Botón de cerrar -->
        <button class="w-full py-2 bg-purple-400 text-white rounded" on:click={() => showPremiumModal = false}>
            Cerrar
        </button>
    </div>
</BottomSheet>

