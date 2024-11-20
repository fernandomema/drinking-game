<script>
    import { onMount } from 'svelte'
    import { pwaInfo } from 'virtual:pwa-info'
    import '../app.css';
    import { PUBLIC_UMAMI_WEBSITE_ID	} from '$env/static/public';

    
    onMount(async () => {
      if (pwaInfo) {
        const { registerSW } = await import('virtual:pwa-register')
        registerSW({
          immediate: true,
          onRegistered(r) {
            // uncomment following code if you want check for updates
            // r && setInterval(() => {
            //    console.log('Checking for sw update')
            //    r.update()
            // }, 20000 /* 20s for testing purposes */)
            console.log(`SW Registered: ${r}`)
          },
          onRegisterError(error) {
            console.log('SW registration error', error)
          }
        })
      }
    })
    
    $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : ''
</script>
  
<svelte:head>
    {@html webManifest}
    {#if PUBLIC_UMAMI_WEBSITE_ID}
        <script defer src="https://cloud.umami.is/script.js" data-website-id="{PUBLIC_UMAMI_WEBSITE_ID}"></script>
    {/if}
</svelte:head>
  
<main>
    <slot />
</main>