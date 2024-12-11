<script lang="ts">
    import logo from '$lib/images/AppImages/ios/256.png';
    import playstoreBadge from '$lib/images/InstallBanners/PLAYSTORE-black-en.svg';
    import AppstoreBadge from '$lib/images/InstallBanners/APPSTORE-white-en.svg';
    import PWABadge from '$lib/images/InstallBanners/PWA-white-en.svg';
    import BottomSheet from '$lib/components/BottomSheet.svelte';
    import { questions } from '$lib/questions';
    import AddToHomeScreenBottomSheet from '$lib/components/BottomSheets/AddToHomeScreenBottomSheet.svelte';
    import QuestionsCounters from '$lib/components/landingBlocks/QuestionsCounters.svelte';
    
    let isSheetOpen = false;
</script>

<div class="bg-gray-50">
    <main class="flex w-full flex-wrap justify-center gap-6 p-4 sm:flex-row-reverse md:pt-10">
        <div class="max-w-[640px] px-4">
            
            <img src={logo} class="h-20 py-4" alt="audiostory app maker">
            <h1 class="pt-2 text-center text-[36px] font-extrabold leading-10 md:text-start md:text-[50px] md:leading-[54px]">
                Liven up your party, unleash the fun!
            </h1>
            <p class="md:text-md py-8 text-center text-sm font-bold text-gray-600 md:text-start">
                Tired of the same old party games? Looking to spice up your social gatherings? Look no further! Tragos locos is designed to take your parties to new heights.
            </p>
        
        
            <div class="flex flex-col items-center md:items-start">
                
                <!-- <img src="./dist/static/playstore.svg" class="h-32 py-6" alt=""> -->
                
                <div class="flex flex-wrap justify-center gap-3">
                    <a href="https://play.google.com/apps/testing/net.servitimo.tragos_locos.twa">
                        <img src={playstoreBadge} class="h-20" alt="">
                    </a>
                    <button on:click={() => (isSheetOpen = true)}>
                        <img src={AppstoreBadge} class="h-20" alt="">
                    </button>
                    <a href="/intro">
                        <img src={PWABadge} class="h-20" alt="">
                    </a>
                </div>
                
<!--
                <div class="mt-4 flex items-center gap-6 pl-1">
                    <a class="hover:text-orange text-gray-700 transition-colors" href="https://www.instagram.com/audiostoryappstudio">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="h-8">
                            <path fill="currentColor"
                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                            </path>
                        </svg>
                    </a>
                    <a class="hover:text-orange text-gray-700 transition-colors" href="https://t.me/audiostoryappstudio">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="h-8">
                            <path fill="currentColor"
                                d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                            </path>
                        </svg>
                    </a>
                    <a class="hover:text-orange text-gray-700 transition-colors" href="https://www.youtube.com/@audiostoryappstudio">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-8" viewBox="0 0 24 24">
                            <path
                            d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                        </svg>
                    </a>
                </div> 
-->

            </div>

        </div>

        <div class="relative flex max-w-lg items-center justify-center">
            <!--
                <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="320" height="640"
                    style="box-shadow: 10px 10px 5px 12px rgb(209, 218, 218)"
                    class="rounded rounded-xl border border-4 border-black" type="text/html"
                    src="https://www.youtube.com/embed/gXPggzt8UnU?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com">
                </iframe> -->
            <img src="/screenshot-3.png" alt="" width="320" height="640" style="box-shadow: 10px 10px 5px 12px rgb(209, 218, 218)" class="rounded rounded-xl border border-4 border-black">
            
            <span class="absolute -right-1 top-28 h-10 rounded-md border border-4 border-black"></span>
            <span class="absolute -right-1 top-[220px] h-24 rounded-md border border-4 border-black"></span>
            
            <!-- <img src="./dist/static/watch_on_youtube.png" class="h-[600px]" alt=""> -->
        </div>

    </main>

    <QuestionsCounters />
    
</div>

<AddToHomeScreenBottomSheet isOpen={isSheetOpen} />