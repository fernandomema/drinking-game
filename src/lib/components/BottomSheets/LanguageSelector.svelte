<script lang="ts">
    import BottomSheet from "../BottomSheet.svelte";
    import { _, getLocale, setLocale } from "$lib/locales";
    import { onMount } from "svelte";
    export let isOpen = false;
    
    // Sample languages - replace with your actual language data
    const languages = [
        { code: "en", name: "English", flag: "🇺🇸" },
        { code: "es", name: "Español", flag: "🇪🇸" },
    ];
    
    // Current language (default to English)
    let selectedLanguage = languages[0];
    
    // Function to handle language selection
    async function selectLanguage(language: any) {
        selectedLanguage = language;
        await setLocale(language.code);
        isOpen = false; // Close the sheet after selection
    }

    onMount(async () => {
        const selectedLocale = await getLocale();
        selectLanguage(languages.find(lang => {
            return lang.code === selectedLocale;
        }));
    });
</script>

<BottomSheet isOpen={isOpen} onClose={() => (isOpen = false)}>
    <div class="flex flex-col items-center w-full">
        <!-- Header -->
        <h2 class="text-xl font-bold text-gray-800 text-center mb-4">
            Select Language
        </h2>
        
        <!-- Currently selected language -->
        <div class="mb-6 text-center">
            <p class="text-gray-600">Currently selected</p>
            <div class="flex items-center justify-center mt-2">
                <span class="text-2xl mr-2">{selectedLanguage.flag}</span>
                <span class="font-medium">{selectedLanguage.name}</span>
            </div>
        </div>
        
        <!-- Language List -->
        <div class="w-full px-4 max-h-80 overflow-y-auto">
            <ul class="divide-y divide-gray-200 w-full">
                {#each languages as language}
                    <li 
                        class="py-3 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                        on:click={() => selectLanguage(language)}
                    >
                        <div class="flex items-center">
                            <span class="text-2xl mr-4">{language.flag}</span>
                            <span class="font-medium">{language.name}</span>
                        </div>
                        
                        {#if selectedLanguage.code === language.code}
                            <svg class="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                        {/if}
                    </li>
                {/each}
            </ul>
        </div>
        
        <!-- Cancel button at bottom -->
        <div class="mt-6 w-full px-4">
            <button 
                class="w-full py-3 bg-gray-100 text-gray-800 font-medium rounded-lg hover:bg-gray-200 transition duration-150 ease-in-out"
                on:click={() => (isOpen = false)}
            >
                Cancel
            </button>
        </div>
    </div>
</BottomSheet>