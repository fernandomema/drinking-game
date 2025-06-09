<script lang="ts">
    import src from "@midudev/tailwind-animations";
    import { onMount } from "svelte";
    import { impact } from "$lib/utils/haptics";

	export let element: HTMLElement;

	export let question: string = '';
	export let backgroundColor: string = 'white';
	export let tags: string[] | undefined = [];
	export let main = false;

	let background = '';

	let animateTada = false;

	$: {
		background = '';
		if (tags?.includes('christmas')) background = 'christmas';
		if (tags?.includes('event') && main) {
			background = 'skulls';
			animateTada = true;
			setTimeout(() => {
				animateTada = false;
			}, 1000);
                        impact();
                }
        }
</script>

<div
class="absolute h-full w-full cursor-grab touch-none select-none rounded-xl border border-black bg-white ease-in-out" class:animate-tada={animateTada} class:hidden={!question}
class:bg-skulls={background == 'skulls'}
bind:this={element}
>
	{#if question}
		{#key question}
			{#if question}
				<div class="absolute flex h-full w-full items-center justify-center rounded-xl object-cover text-center text-black" style="background-color: {backgroundColor};" class:bg-christmas={background == 'christmas'}>
					<span class="text-4xl font-medium">{@html question.replaceAll('\n', '<br>')}</span> 
				</div>	
			{/if}
		{/key}
		<!--
		<div class="absolute inset-0 rounded-b-xl bg-gradient-to-t from-white/80 via-white/0"></div>
		-->
	{/if}
</div>
