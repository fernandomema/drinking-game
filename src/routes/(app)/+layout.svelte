<script>
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';

	export let data

	onMount(async () => {
		const Sentry = await import('@sentry/capacitor'); 
		Sentry.init({
			dsn: "https://9b6988e18c8e96fc6ef97d1e57f1907f@o4504724952842240.ingest.us.sentry.io/4508282210287616",
			integrations: [
				Sentry.browserTracingIntegration(),
			],
			
			// Tracing
			tracesSampleRate: 1.0, //  Capture 100% of the transactions
			// Session Replay
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
