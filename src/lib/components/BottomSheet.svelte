<script>
    import { _ } from '$lib/locales';
    import { fade } from 'svelte/transition';

    export let isOpen = false; // State to control visibility
    export let onClose = () => {}; // Callback for close action
  
    const closeSheet = () => {
      onClose();
    };
</script>
  
{#if isOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div transition:fade={{ duration: 300 }}
    class="fixed inset-0 z-50 flex items-end bg-black bg-opacity-50 transition-opacity duration-300"
    on:click={closeSheet}
  >
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div 
        class="w-full bg-white rounded-t-2xl p-4 shadow-lg transition-transform transform animate-slide-in-bottom"
        class:translate-y-0={isOpen}
        class:translate-y-full={!isOpen}
        on:click|stopPropagation
      >
        <!-- Drag handle -->
        <div class="w-16 h-1 bg-gray-300 rounded mx-auto mb-4"></div>
    
        <!-- Content slot -->
         <div class="overflow-y-auto max-h-[80vh]">
           <slot>
             <p class="text-center">{$_('bottomSheet.defaultContent')}</p>
           </slot>
         </div>
    
        <slot name="footer" closeSheet={closeSheet}>
          <button
            class="mt-4 w-full py-2 bg-purple-500 text-white rounded"
            on:click={closeSheet}
          >
            {$_('close')}
          </button>
        </slot>
      </div>
  </div>
{/if}

<style>
    /* Prevent scrolling when bottom sheet is open */
    :global(body) {
        overflow: hidden;
    }
</style>