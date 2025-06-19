<script lang="ts">
  import { _ } from '$lib/locales';
  import { modes } from '$lib/modes';
  import Footer from '$lib/components/Footer.svelte';
  import { SchemaGenerator } from '$lib/utils/SchemaGenerator';

  const modeEntries = Object.entries(modes).filter(([key, mode]) => mode.isPublic ?? true);
  
  // Agrupar modos por categoría
  const generalModes = modeEntries.filter(([_, mode]) => mode.menuPriority === 0);
  const seasonalModes = modeEntries.filter(([_, mode]) => mode.menuPriority === 1);
  const specialModes = modeEntries.filter(([_, mode]) => mode.menuPriority === 2);
  const betaModes = modeEntries.filter(([_, mode]) => mode.menuPriority === 3);
</script>

<svelte:head>
  <title>{$_('modes_page.title')} | Tragos Locos</title>
  <meta name="description" content={$_('modes_page.description')} />
  <link rel="canonical" href="https://tragos-locos.servitimo.net/modes/" />
  <link rel="alternate" hreflang="es" href="https://tragos-locos.servitimo.net/modes/?locale=es" />
  <link rel="alternate" hreflang="en" href="https://tragos-locos.servitimo.net/modes/?locale=en" />
  <meta property="og:locale:alternate" content="es" />
  <meta property="og:locale:alternate" content="en" />
  {@html `<script type="application/ld+json">${JSON.stringify(
    SchemaGenerator.getBreadcrumbs([
      { name: 'Tragos Locos', url: 'https://tragos-locos.servitimo.net/' },
      { name: $_('modes_page.title'), url: 'https://tragos-locos.servitimo.net/modes/' }
    ])
  )}</script>`}
</svelte:head>

<header class="flex items-center w-full bg-white justify-between py-4 px-4 shadow-sm sticky top-0 z-50">
  <a class="flex items-center gap-2" aria-label="Tragos locos" href="/">
    <img src="/favicon.png" class="w-8 h-8" alt="Tragos locos logo" />
    <span class="hidden h-6 text-xl font-semibold sm:block">Tragos Locos</span>
  </a>
  <nav class="flex items-center space-x-4 leading-5">
    <a class="hover:text-primary-500 m-1 font-medium text-gray-900" href="/blog">Blog</a>
    <a class="hover:text-primary-500 m-1 font-medium text-gray-900" href="/sobre-la-app">Sobre la App</a>
  </nav>
</header>

<!-- Hero Section -->
<div class="relative bg-gradient-to-br from-purple-700 to-pink-600 overflow-hidden">
  <div class="absolute inset-0 bg-[url('/tiles/christmas-colour.webp')] opacity-10 mix-blend-overlay"></div>
  <div class="max-w-7xl mx-auto px-4 py-20 relative z-10">
    <div class="text-center">
      <h1 class="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
        <span class="block">Descubre Todos Nuestros</span>
        <span class="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-500">
          Modos de Juego
        </span>
      </h1>
      <p class="max-w-2xl mx-auto text-xl text-white/80 mb-8">
        Desde preguntas atrevidas hasta retos divertidos, encuentra el modo perfecto para cualquier ocasión y compañía.
      </p>
      
      <div class="flex justify-center space-x-4 mb-8">
        <a href="/" class="inline-flex items-center px-6 py-3 rounded-full bg-white text-purple-700 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
          </svg>
          Descargar App
        </a>
        <a href="/intro" class="inline-flex items-center px-6 py-3 rounded-full bg-purple-800/50 backdrop-blur-sm text-white font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
          </svg>
          Probar online
        </a>
      </div>
      
      <div class="flex justify-center">
        <div class="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-white/20 shadow-lg rounded-full flex items-center justify-center">
          <svg class="w-6 h-6 text-purple-700" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</div>

<main class="bg-gradient-to-b from-purple-50 to-white">
  <!-- Categorías de Modos -->
  <div class="max-w-7xl mx-auto px-4 py-16">
    <!-- Modos Generales -->
    <div class="mb-20">
      <div class="flex items-center mb-10">
        <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-gray-800">Modos Populares</h2>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each generalModes as [key, mode]}
          <a href={`/modes/${key}/`} class="group">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl border border-purple-100 h-full flex flex-col">
              <div class="bg-gradient-to-br from-purple-400/10 to-pink-400/10 p-6 flex justify-center">
                <div class="w-24 h-24 relative">
                  <div class="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 group-hover:opacity-30 transform scale-110 transition-all duration-300"></div>
                  <img src={mode.icon} alt={$_(`modes.${key}.title`)} class="w-full h-full object-contain relative z-10" />
                </div>
              </div>
              
              <div class="p-6 flex-grow">
                <h3 class="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">{$_(`modes.${key}.title`)}</h3>
                <p class="text-gray-600">{$_(`modes.${key}.description`)}</p>
              </div>
              
              <div class="px-6 pb-6 pt-2 border-t border-gray-100 flex justify-between items-center">
                <span class="text-sm font-medium text-purple-600 flex items-center">
                  Explorar
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span class="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Popular</span>
              </div>
            </div>
          </a>
        {/each}
      </div>
    </div>
    
    <!-- Modos Estacionales -->
    {#if seasonalModes.length > 0}
    <div class="mb-20">
      <div class="flex items-center mb-10">
        <div class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-gray-800">Modos Estacionales</h2>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each seasonalModes as [key, mode]}
          <a href={`/modes/${key}/`} class="group">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl border border-pink-100 h-full flex flex-col">
              <div class="bg-gradient-to-br from-pink-400/10 to-red-400/10 p-6 flex justify-center">
                <div class="w-24 h-24 relative">
                  <div class="absolute inset-0 bg-gradient-to-br from-pink-400 to-red-400 rounded-full opacity-20 group-hover:opacity-30 transform scale-110 transition-all duration-300"></div>
                  <img src={mode.icon} alt={$_(`modes.${key}.title`)} class="w-full h-full object-contain relative z-10" />
                </div>
              </div>
              
              <div class="p-6 flex-grow">
                <h3 class="text-xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">{$_(`modes.${key}.title`)}</h3>
                <p class="text-gray-600">{$_(`modes.${key}.description`)}</p>
              </div>
              
              <div class="px-6 pb-6 pt-2 border-t border-gray-100 flex justify-between items-center">
                <span class="text-sm font-medium text-pink-600 flex items-center">
                  Explorar
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span class="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Estacional</span>
              </div>
            </div>
          </a>
        {/each}
      </div>
    </div>
    {/if}
    
    <!-- Modos Especiales -->
    {#if specialModes.length > 0}
    <div class="mb-20">
      <div class="flex items-center mb-10">
        <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a4 4 0 00-4-4H8.8a4 4 0 00-2.6.9l-.7.7a4 4 0 01-2.6.9H2c-.6.7-.9 1.6-.9 2.6v5" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-4-8v.6a3 3 0 01-.9 2.1L12 5.4" />
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-gray-800">Modos Especiales</h2>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each specialModes as [key, mode]}
          <a href={`/modes/${key}/`} class="group">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl border border-indigo-100 h-full flex flex-col">
              <div class="bg-gradient-to-br from-indigo-400/10 to-blue-400/10 p-6 flex justify-center">
                <div class="w-24 h-24 relative">
                  <div class="absolute inset-0 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full opacity-20 group-hover:opacity-30 transform scale-110 transition-all duration-300"></div>
                  <img src={mode.icon} alt={$_(`modes.${key}.title`)} class="w-full h-full object-contain relative z-10" />
                </div>
              </div>
              
              <div class="p-6 flex-grow">
                <h3 class="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">{$_(`modes.${key}.title`)}</h3>
                <p class="text-gray-600">{$_(`modes.${key}.description`)}</p>
              </div>
              
              <div class="px-6 pb-6 pt-2 border-t border-gray-100 flex justify-between items-center">
                <span class="text-sm font-medium text-indigo-600 flex items-center">
                  Explorar
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span class="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Especial</span>
              </div>
            </div>
          </a>
        {/each}
      </div>
    </div>
    {/if}

    <!-- Modos Beta -->
    {#if betaModes.length > 0}
    <div class="mb-20">
      <div class="flex items-center mb-10">
        <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a4 4 0 00-4-4H8.8a4 4 0 00-2.6.9l-.7.7a4 4 0 01-2.6.9H2c-.6.7-.9 1.6-.9 2.6v5" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3" />
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-gray-800">Modos Beta</h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each betaModes as [key, mode]}
          <a href={`/modes/${key}/`} class="group">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl border border-yellow-100 h-full flex flex-col">
              <div class="bg-gradient-to-br from-yellow-400/10 to-orange-400/10 p-6 flex justify-center">
                <div class="w-24 h-24 relative">
                  <div class="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20 group-hover:opacity-30 transform scale-110 transition-all duration-300"></div>
                  <img src={mode.icon} alt={$_(`modes.${key}.title`)} class="w-full h-full object-contain relative z-10" />
                </div>
              </div>

              <div class="p-6 flex-grow">
                <h3 class="text-xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">{$_(`modes.${key}.title`)}</h3>
                <p class="text-gray-600">{$_(`modes.${key}.description`)}</p>
              </div>

              <div class="px-6 pb-6 pt-2 border-t border-gray-100 flex justify-between items-center">
                <span class="text-sm font-medium text-yellow-600 flex items-center">
                  Explorar
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </span>
                <span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Beta</span>
              </div>
            </div>
          </a>
        {/each}
      </div>
    </div>
    {/if}
  </div>
  
  <!-- Call to Action -->
  <div class="max-w-7xl mx-auto px-4 pb-20">
    <div class="bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl shadow-xl overflow-hidden">
      <div class="relative p-8 md:p-12">
        <div class="absolute inset-0 bg-[url('/tiles/christmas-colour.webp')] opacity-10 mix-blend-overlay"></div>
        
        <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="text-center md:text-left">
            <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-3">¿Listo para la diversión?</h2>
            <p class="text-white/90 text-lg max-w-xl">Descarga ahora y disfruta de todos estos modos de juego y mucho más. ¡La fiesta está a punto de comenzar!</p>
          </div>
          
          <div>
            <a 
              href="/" 
              class="inline-flex items-center px-8 py-4 text-lg font-bold text-purple-700 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Descargar App
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<Footer />
