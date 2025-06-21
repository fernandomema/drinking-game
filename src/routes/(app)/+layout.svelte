<script>
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
	import { PUBLIC_SENTRY_DSN } from '$lib/config';
	import { OriginChecker } from '$lib/OriginChecker';
	import { page } from '$app/stores';
	import { App } from '@capacitor/app';
	import { browser } from '$app/environment';
	if (browser) {
	    App.addListener('backButton', async () => {
			window.history.back();
	    });
	}

	export let data
	let isCrazyGames = false;

	onMount(async () => {
		const Sentry = await import('@sentry/capacitor'); 
		Sentry.init({
			dsn: PUBLIC_SENTRY_DSN,
			integrations: [
				Sentry.browserTracingIntegration(),
			],
			environment: OriginChecker.isProduction($page.url.href) ? "production" : "development",
			tracesSampleRate: 1.0, //  Capture 100% of the transactions
			replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
			replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
		});
		isCrazyGames = OriginChecker.isCrazyGames();
		if (isCrazyGames) {
			// load the CrazyGames SDK: https://sdk.crazygames.com/crazygames-sdk-v3.js
			const script = document.createElement('script');
			script.src = 'https://sdk.crazygames.com/crazygames-sdk-v3.js';
			script.onload = () => {
				window.CrazyGames.SDK.init();
			};
			document.head.appendChild(script);
		}
	});
</script>

<svelte:head>
        <meta name="robots" content="noindex, nofollow" />
</svelte:head>

{#key data.url}
	<div class="h-safe-screen w-full bg-[#794fea]">
		<div
			in:fade={{ duration: 300, delay: 300 }}
			out:fade={{ duration: 300 }}
		>
			<slot></slot>
		</div>
	</div>
{/key}

<style>
	:global(body) {
		overflow: hidden !important;
	}
</style>