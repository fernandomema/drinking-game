<script>
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
	import { PUBLIC_SENTRY_DSN } from '$lib/config';

	export let data

	onMount(async () => {
		const Sentry = await import('@sentry/capacitor'); 
		Sentry.init({
			dsn: PUBLIC_SENTRY_DSN,
			integrations: [
				Sentry.browserTracingIntegration(),
			],
			tracesSampleRate: 1.0, //  Capture 100% of the transactions
			replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
			replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
		});
	});
</script>

{#key data.url}
	<div class="h-dvh w-full bg-[#794fea]">
		<div
			in:fade={{ duration: 300, delay: 300 }}
			out:fade={{ duration: 300 }}
		>
			<slot></slot>
		</div>
	</div>
{/key}
