<script lang="ts">
    import { onMount } from 'svelte'
    import { pwaInfo } from 'virtual:pwa-info'
    import '../app.css';
    import { PUBLIC_UMAMI_WEBSITE_ID	} from '$lib/config';
    import { OriginChecker } from '$lib/OriginChecker';
import { page } from '$app/stores';

    import { App } from '@capacitor/app';
    import { browser } from '$app/environment';
import { getLocale } from '$lib/locales';
import { loadUserInfo } from '$lib/UserInfo';
import { loadPlayers, loadTeams } from '$lib/PlayerStorage';
    
    if (browser) {
        App.addListener('backButton', async () => {
            window.history.back();
        });
    }

    onMount(async () => {
      await loadUserInfo();
      await loadPlayers();
      await loadTeams();
      const lang = await getLocale()
      document.documentElement.setAttribute('lang', lang)

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

    <title>Tragos Locos</title>

</svelte:head>
  
<slot />