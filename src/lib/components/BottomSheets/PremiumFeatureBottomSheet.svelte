<script lang="ts">

    import BottomSheet from "../BottomSheet.svelte";
    import { _ } from "$lib/locales";
    import { invokeVideoAd } from "$lib/Applixir";

    export let showPremiumModal: boolean = false;

</script>
<BottomSheet isOpen={showPremiumModal} onClose={() => (showPremiumModal = false)}>
    <div class='!z-5 max-h-[368px] relative flex h-full w-full flex-col rounded-[20px] bg-clip-border p-4 shadow-3xl shadow-shadow-500'>
        <div class='mb-auto flex flex-col items-center justify-center'>
            <div class='flex items-center justify-center rounded-full bg-lightPrimary p-[26px] text-7xl font-bold text-brand-500 dark:!bg-navy-700 dark:text-white'>
                <img src="/crown.png" alt="Crown" class="w-[100px]" />
            </div>
            <h4 class='mb-px mt-3 text-2xl font-bold text-navy-700 dark:text-white'> Premium feature </h4>
            <p class='px-5 text-center font-normal text-gray-600 md:!px-0 xl:!px-8'> 
                <span class="">
                    You'be found a premium feature and a subscription is required to unlock it.<br>
                </span>
                <span class="text-gray-400 text-sm">
                    But don't worry, you can still enjoy by watching a short video ad.
                </span>
            </p>
        </div>
    </div>
    <div slot="footer" class="flex flex-col gap-2">
        <div class="flex mt-4 gap-2">
            <button class="w-full py-2 bg-purple-800 text-white rounded flex gap-2 justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m21.838 11.126l-.229 2.436c-.378 4.012-.567 6.019-1.75 7.228C18.678 22 16.906 22 13.36 22h-2.72c-3.545 0-5.317 0-6.5-1.21s-1.371-3.216-1.749-7.228l-.23-2.436c-.18-1.912-.27-2.869.058-3.264a1 1 0 0 1 .675-.367c.476-.042 1.073.638 2.268 1.998c.618.704.927 1.055 1.271 1.11a.92.92 0 0 0 .562-.09c.319-.16.53-.595.955-1.464l2.237-4.584C10.989 2.822 11.39 2 12 2s1.011.822 1.813 2.465l2.237 4.584c.424.87.636 1.304.955 1.464c.176.089.37.12.562.09c.344-.055.653-.406 1.271-1.11c1.195-1.36 1.792-2.04 2.268-1.998a1 1 0 0 1 .675.367c.327.395.237 1.352.057 3.264" opacity="0.5"/><path fill="currentColor" d="m12.952 12.699l-.098-.176c-.38-.682-.57-1.023-.854-1.023s-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.136.399-.136s.202.046.399.136l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354"/></svg>
                <span>Buy premium</span>
            </button>
            <button on:click={() => invokeVideoAd({})} class="w-full py-2 bg-purple-600 text-white rounded flex gap-2 justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464" clip-rule="evenodd" opacity="0.5"/><path fill="currentColor" d="M14 12c0-.528-.53-.884-1.589-1.596c-1.073-.721-1.61-1.082-2.01-.817C10 9.852 10 10.567 10 12s0 2.148.4 2.413s.938-.096 2.011-.817C13.471 12.884 14 12.528 14 12M6.25 6.25H2.22c.195-1.223.56-2.101 1.243-2.785c.684-.685 1.563-1.05 2.786-1.243zm15.528 0c-.194-1.223-.559-2.101-1.243-2.785s-1.562-1.05-2.785-1.243V6.25zm.222 5c-.002-1.366-.01-2.519-.069-3.5H17.75v3.5zm-1.465 9.286c-.684.684-1.562 1.048-2.785 1.242V17.75h4.028c-.194 1.223-.559 2.102-1.243 2.786M22 12.75c-.002 1.366-.01 2.519-.069 3.5H17.75v-3.5zm-15.75 5v4.028c-1.223-.194-2.102-.558-2.786-1.242s-1.048-1.563-1.243-2.786zm0-1.5H2.069C2.01 15.269 2 14.116 2 12.75h4.25zm0-5H2c.001-1.366.01-2.519.068-3.5H6.25z"/></svg>
                <span>Watch ad</span>
            </button>
        </div>
        <button class="w-full py-2 bg-purple-400 text-white rounded" on:click={() => showPremiumModal = false}>
            {$_('close')}
        </button>
    </div>
</BottomSheet>