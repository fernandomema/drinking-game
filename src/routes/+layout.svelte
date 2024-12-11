<script>
    import { onMount } from 'svelte'
    import { pwaInfo } from 'virtual:pwa-info'
    import '../app.css';
    import { PUBLIC_UMAMI_WEBSITE_ID	} from '$lib/config';
    import { OriginChecker } from '$lib/OriginChecker';
    import { page } from '$app/stores';

    
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
    {#if PUBLIC_UMAMI_WEBSITE_ID && OriginChecker.isProduction($page.url.href)}
        <script defer src="https://cloud.umami.is/script.js" data-website-id="{PUBLIC_UMAMI_WEBSITE_ID}"></script>
    {/if}

    {#if OriginChecker.isDev($page.url.href)}
        <script src="https://cdn.jsdelivr.net/npm/eruda"></script>
        <script>eruda.init();</script>
    {/if}

</svelte:head>
  
<slot />