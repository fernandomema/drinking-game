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
        <span class="text-sm font-bold text-gray-700">{$_('banners.laught.message')}</span>
        <button on:click={laught} class="bg-gray-100 text-purple-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-300">{$_('banners.laught.button')}</button>
    </div>
{:else if banner == 'rate'}
    <div class="w-full h-[50px] bg-purple-100 text-black flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold text-gray-700">{$_('banners.rate.message')}</span>
        <a href="#" class="bg-gray-100 text-purple-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-300">{$_('banners.rate.button')}</a>
    </div>
{:else if banner == 'whatsapp'}
    <div class="w-full h-[50px] bg-green-100 text-black flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold text-gray-700">{$_('banners.whatsapp.message')}</span>
        <a href="whatsapp://send" class="bg-gray-100 text-green-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-300">{$_('banners.whatsapp.button')}</a>
    </div>
{:else if banner == 'share'}
    <div class="w-full h-[50px] bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-between px-4 rounded-lg shadow-lg animate-pulse">
        <span class="text-sm font-bold">{$_('banners.share.message')}</span>
        <button on:click={shareApp} class="bg-white text-purple-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-200">{$_('banners.share.button')}</button>
    </div>
{:else if banner == 'streak'}
    <div class="w-full h-[60px] bg-blue-100 text-black flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold text-gray-700">{$_('banners.streak', { days: daysPlayed })}</span>
    </div>
{:else if banner == 'premium'}
    <div class="w-full h-[50px] bg-gradient-to-r from-green-400 to-blue-500 text-white flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold">{$_('banners.premium.message1')}</span>
        <a href="#" class="bg-white text-green-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-200">{$_('banners.premium.button1')}</a>
    </div>
    <div class="w-full h-[60px] bg-gradient-to-r from-purple-600 to-pink-500 text-white flex items-center justify-between px-4 rounded-lg shadow-lg animate-pulse">
        <span class="text-sm font-bold">{$_('banners.premium.message2')}</span>
        <a href="#" class="bg-white text-purple-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-200">{$_('banners.premium.button2')}</a>
    </div>
    <div class="w-full h-[50px] bg-gradient-to-r from-red-500 to-yellow-500 text-white flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold">{$_('banners.premium.message3')}</span>
        <a href="#" class="bg-white text-red-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-200">{$_('banners.premium.button3')}</a>
    </div>
    <div class="w-full h-[60px] bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold">{$_('banners.premium.message4')}</span>
        <a href="#" class="bg-white text-orange-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-200">{$_('banners.premium.button4')}</a>
    </div>
    <div class="w-full p-3 bg-gray-100 rounded-md border border-gray-200 flex items-center justify-between">
        <span class="text-gray-700 text-sm">{$_('banners.premium.message5')}</span>
        <a href="#" class="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold hover:bg-blue-600 transition-colors duration-300">{$_('banners.premium.button5')}</a>
    </div>
{:else if banner == 'ads'}
    asd
{:else if banner == 'suggest'}
    <div class="w-full h-[60px] bg-purple-200 text-black flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold text-gray-700">{$_('banners.suggest.message')}</span>
        <a href="#" class="bg-purple-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-md hover:bg-purple-600">{$_('banners.suggest.button')}</a>
    </div>
{:else if banner == 'invite'}
    <div class="w-full h-[50px] bg-blue-100 text-black flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold text-gray-700">{$_('banners.invite.message')}</span>
        <a href="#" class="bg-gray-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-300">{$_('banners.invite.button')}</a>
    </div>
{:else if banner == 'changelog'}
    <div class="w-full h-[50px] bg-yellow-100 text-black flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold text-gray-700">{$_('banners.changelog.message')}</span>
        <a href="#" class="bg-gray-100 text-yellow-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-300">{$_('banners.changelog.button')}</a>
    </div>
{:else if banner == 'donate'}
    <div class="w-full h-[50px] bg-teal-100 text-black flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold text-gray-700">{$_('banners.donate.message')}</span>
        <a href="#" class="bg-gray-100 text-teal-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-300">{$_('banners.donate.button')}</a>
    </div>
{:else if banner == 'draw'}
    <div class="w-full h-[50px] bg-orange-100 text-black flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold text-gray-700">{$_('banners.draw.message')}</span>
        <a href="#" class="bg-gray-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-300">{$_('banners.draw.button')}</a>
    </div>
{:else if banner == 'event'}
    <div class="w-full h-[50px] bg-purple-200 text-black flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold text-gray-700">{$_('banners.event.message')}</span>
        <a href="#" class="bg-gray-100 text-purple-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-300">{$_('banners.event.button')}</a>
    </div>
{:else if banner == 'feature'}
    <div class="w-full h-[50px] bg-pink-100 text-black flex items-center justify-between px-4 rounded-lg shadow-lg">
        <span class="text-sm font-bold text-gray-700">{$_('banners.feature.message')}</span>
        <a href="#" class="bg-gray-100 text-pink-600 text-xs font-bold px-3 py-1 rounded-full shadow-md hover:bg-gray-300">{$_('banners.feature.button')}</a>
    </div>
{/if}

<BottomSheet isOpen={showPremiumModal} onClose={() => (showPremiumModal = false)}>
    <div class="!z-5 max-h-[450px] relative flex h-full w-full flex-col rounded-[20px] bg-clip-border p-6 shadow-3xl shadow-shadow-500">
        <div class="mb-auto flex flex-col items-center justify-center">
            <div class="flex items-center justify-center rounded-full bg-purple-500 p-[26px] text-7xl font-bold text-white">
                <img src="/crown.png" alt="Crown" class="w-[100px]" />
            </div>
            <h4 class="mb-3 mt-3 text-2xl font-bold text-navy-700 dark:text-white">{$_('premium_modal.title')}</h4>
            <p class="px-5 text-left text-base font-normal text-gray-600 md:!px-0 xl:!px-8">
                {$_('premium_modal.description')}<br>
                {$_('premium_modal.subtitle')}
            </p>
            <ul class="px-5 text-left text-base font-normal text-gray-600 md:!px-0 xl:!px-8 list-disc list-inside">
                <li>{$_('premium_modal.bullet1')}</li>
                <li>{$_('premium_modal.bullet2')}</li>
                <li>{$_('premium_modal.bullet3')}</li>
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
                <span>{$_('premium_modal.buy_button')}</span>
            </button>
        </div>
        <!-- Botón de cerrar -->
        <button class="w-full py-2 bg-purple-400 text-white rounded" on:click={() => showPremiumModal = false}>
            {$_('premium_modal.close_button')}
        </button>
    </div>
</BottomSheet>

