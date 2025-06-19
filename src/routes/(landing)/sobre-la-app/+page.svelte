<script lang="ts">
  import { onMount } from "svelte";
  import Footer from '$lib/components/Footer.svelte';
  import { SITE_URL } from '$lib/config';
  
  // Palabras clave y frases importantes para SEO
  const seoKeywords = [
    "juegos para beber",
    "app de fiesta",
    "juegos de fiesta",
    "tragos locos app",
    "juegos para reuniones",
    "aplicación de juegos con alcohol",
    "juegos para romper el hielo",
    "app de preguntas y retos",
    "juegos para grupos",
    "mejores juegos para fiestas"
  ];
  
  onMount(() => {
      if (window.umami) {
          window.umami.track('visit sobre-la-app');
      }
  });
</script>

<svelte:head>
    <title>Tragos Locos: La Mejor App de Juegos para Beber y Animar Fiestas</title>
    <meta name="description" content="Descubre por qué Tragos Locos es la aplicación de juegos para beber más popular. Con +1000 preguntas y retos, modos temáticos y diseño intuitivo. ¡Descárgala gratis!" />
    <meta name="keywords" content="tragos locos, juegos para beber, party game, app de fiestas, juegos con alcohol, preguntas atrevidas, retos de fiesta, juegos de grupo, aplicación para reuniones" />
    <link rel="canonical" href={`${SITE_URL}/sobre-la-app/`} />
    
    <!-- Meta tags para Open Graph (Facebook, WhatsApp) -->
    <meta property="og:title" content="Tragos Locos: La Mejor App de Juegos para Fiestas" />
    <meta property="og:description" content="La aplicación de juegos para beber #1 con +1000 preguntas y retos. Perfecta para animar cualquier reunión o fiesta. ¡Descárgala gratis!" />
    <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
    <meta property="og:url" content={`${SITE_URL}/sobre-la-app/`} />
    <meta property="og:type" content="website" />
    
    <!-- Meta tags para Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Tragos Locos: App #1 de Juegos para Beber" />
    <meta name="twitter:description" content="Anima tus fiestas con la mejor app de juegos para beber. +1000 preguntas, varios modos de juego y totalmente gratis." />
    <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
</svelte:head>

<header class="flex items-center w-full bg-white justify-between py-4 px-4 shadow-sm sticky top-0 z-50">
  <a class="flex items-center gap-2" aria-label="Tragos locos" href="/">
    <img src="/favicon.png" class="w-8 h-8" alt="Logotipo de Tragos Locos - App de juegos para beber" />
    <span class="hidden h-6 text-xl font-semibold sm:block">Tragos Locos</span>
  </a>
  <nav class="flex items-center space-x-4 leading-5">
    <a class="hover:text-primary-500 m-1 font-medium text-gray-900" href="/blog">Blog</a>
    <a class="hover:text-purple-600 m-1 font-bold text-purple-700 border-b-2 border-purple-600" href="/sobre-la-app">Sobre la App</a>
  </nav>
</header>

<!-- Hero Section -->
<div class="bg-gradient-to-tr from-purple-700 to-pink-500 text-white py-20 px-4">
  <div class="max-w-4xl mx-auto text-center">
    <h1 class="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
      La Mejor App de <span class="bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-500">Juegos para Beber</span>
    </h1>
    <p class="text-xl opacity-90 max-w-2xl mx-auto">
      Diseñada para crear momentos inolvidables y potenciar la diversión en cualquier tipo de fiesta o reunión social.
    </p>
    
    <!-- Breadcrumbs para SEO -->
    <div class="text-sm text-white/70 mt-6">
      <ol itemscope itemtype="https://schema.org/BreadcrumbList" class="flex justify-center flex-wrap gap-2">
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem" class="flex items-center">
          <a itemprop="item" href="/" class="hover:text-white">
            <span itemprop="name">Inicio</span>
          </a>
          <meta itemprop="position" content="1" />
          <span class="mx-2">›</span>
        </li>
        <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem" class="flex items-center">
          <span itemprop="name">Sobre la App</span>
          <meta itemprop="position" content="2" />
        </li>
      </ol>
    </div>
  </div>
</div>

<main>
  <!-- Sección de Características -->
  <section class="py-16 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 pb-1">¿Por qué elegir Tragos Locos?</h2>
        <div class="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mt-2 rounded-full"></div>
      </div>
      
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p class="text-lg text-gray-700 mb-6 leading-relaxed">
            <strong>Tragos Locos</strong> es la <strong>mejor app de juegos para beber</strong> y animar cualquier fiesta. La aplicación incluye más de 1000 preguntas divertidas, retos originales y múltiples modos de juego que se actualizan constantemente para que nunca te falten ideas.
          </p>
          <p class="text-lg text-gray-700 mb-6 leading-relaxed">
            Su diseño intuitivo facilita que todos puedan comenzar a jugar en segundos y disfrutar de una experiencia inolvidable sin complicaciones. Ideal para <strong>reuniones con amigos</strong>, <strong>fiestas universitarias</strong> o cualquier <strong>celebración social</strong>.
          </p>
          <a href="/" class="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
            </svg>
            Descargar Tragos Locos Ahora
          </a>
        </div>
        
        <div class="relative">
          <div class="absolute -inset-4 bg-gradient-to-r from-purple-200 to-pink-200 rounded-2xl transform -rotate-6 opacity-50"></div>
          <div class="relative bg-white p-6 rounded-xl shadow-lg">
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-purple-50 p-4 rounded-lg">
                <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 class="font-bold text-center text-gray-800 mb-2">Variedad</h3>
                <p class="text-gray-600 text-center text-sm">+1000 preguntas y retos para todos los gustos</p>
              </div>
              
              <div class="bg-pink-50 p-4 rounded-lg">
                <div class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 class="font-bold text-center text-gray-800 mb-2">Social</h3>
                <p class="text-gray-600 text-center text-sm">Perfecta para romper el hielo en cualquier reunión</p>
              </div>
              
              <div class="bg-indigo-50 p-4 rounded-lg">
                <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="font-bold text-center text-gray-800 mb-2">Rápida</h3>
                <p class="text-gray-600 text-center text-sm">Empieza a jugar en menos de 30 segundos</p>
              </div>
              
              <div class="bg-yellow-50 p-4 rounded-lg">
                <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="font-bold text-center text-gray-800 mb-2">Divertida</h3>
                <p class="text-gray-600 text-center text-sm">Garantía de risas y momentos memorables</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Sección de Ventajas con Rich Snippets para SEO -->
  <section class="py-16 bg-gradient-to-b from-white to-purple-50">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 pb-1">Ventajas Principales</h2>
        <div class="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mt-2 rounded-full"></div>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300 border border-purple-100">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-center text-gray-800 mb-3">Gran Variedad</h3>
          <p class="text-gray-600 text-center">Preguntas y desafíos para todos los gustos y tipos de reuniones sociales.</p>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300 border border-purple-100">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-center text-gray-800 mb-3">Interfaz Amigable</h3>
          <p class="text-gray-600 text-center">Diseñada para ser intuitiva y fácil de usar, sin complicaciones técnicas.</p>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300 border border-purple-100">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-center text-gray-800 mb-3">Para Todos los Grupos</h3>
          <p class="text-gray-600 text-center">Ideal para reuniones pequeñas o fiestas multitudinarias con modo especial para equipos.</p>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300 border border-purple-100">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-center text-gray-800 mb-3">Totalmente Gratuita</h3>
          <p class="text-gray-600 text-center">Contenido gratuito y sin registros obligatorios. Disfruta sin restricciones.</p>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300 border border-purple-100">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-center text-gray-800 mb-3">Diversos Modos</h3>
          <p class="text-gray-600 text-center">Varios modos de juego temáticos para adaptarse a diferentes ocasiones y preferencias.</p>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300 border border-purple-100">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-center text-gray-800 mb-3">Actualizaciones</h3>
          <p class="text-gray-600 text-center">Contenido nuevo regularmente para mantener la experiencia siempre fresca y divertida.</p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- FAQ Section para SEO -->
  <section class="py-16 bg-purple-50">
    <div class="max-w-5xl mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 pb-1">Preguntas Frecuentes</h2>
        <div class="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mt-2 rounded-full"></div>
      </div>
      
      <div class="space-y-6" itemscope itemtype="https://schema.org/FAQPage">
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="bg-white rounded-xl shadow p-6">
          <h3 itemprop="name" class="text-xl font-bold text-gray-800 mb-3">¿Es gratis la app Tragos Locos?</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" class="text-gray-600">
              Sí, Tragos Locos es completamente gratuita. Puedes descargar la app y acceder a todos los modos de juego sin ningún costo. No requiere registro obligatorio ni pagos para disfrutar de la experiencia completa.
            </div>
          </div>
        </div>
        
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="bg-white rounded-xl shadow p-6">
          <h3 itemprop="name" class="text-xl font-bold text-gray-800 mb-3">¿Para qué plataformas está disponible Tragos Locos?</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" class="text-gray-600">
              Tragos Locos está disponible para dispositivos Android a través de Google Play, para iOS en la App Store, y también como aplicación web que puedes abrir directamente desde tu navegador, sin necesidad de instalar nada.
            </div>
          </div>
        </div>
        
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="bg-white rounded-xl shadow p-6">
          <h3 itemprop="name" class="text-xl font-bold text-gray-800 mb-3">¿Cuántos modos de juego ofrece Tragos Locos?</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" class="text-gray-600">
              Tragos Locos cuenta con más de 10 modos de juego diferentes, incluyendo PreParty, Tragos Locos (modo principal), Best Friends, Hot, Equipos, Navidad, Drink If y más. Cada modo tiene preguntas y retos específicos adaptados a diferentes tipos de reuniones y preferencias.
            </div>
          </div>
        </div>
        
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" class="bg-white rounded-xl shadow p-6">
          <h3 itemprop="name" class="text-xl font-bold text-gray-800 mb-3">¿Es adecuada para todo tipo de reuniones?</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text" class="text-gray-600">
              Sí, Tragos Locos se adapta a todo tipo de reuniones gracias a sus diferentes modos. Hay opciones más casuales como PreParty, perfectas para romper el hielo, y opciones más atrevidas como el modo Hot para grupos de amigos cercanos. También hay modos temáticos como Navidad o específicos como Equipos para grupos grandes.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Call to Action -->
  <section class="py-16 bg-white">
    <div class="max-w-5xl mx-auto px-4">
      <div class="bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl shadow-xl overflow-hidden">
        <div class="relative p-8 md:p-12">
          <div class="absolute inset-0 bg-[url('/tiles/christmas-colour.webp')] opacity-10 mix-blend-overlay"></div>
          
          <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="text-center md:text-left">
              <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-3">¿Listo para comenzar a jugar?</h2>
              <p class="text-white/90 text-lg max-w-xl">Descarga la app ahora y descubre la forma más sencilla de impulsar la diversión en tus celebraciones.</p>
              
              <div class="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
                <div class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
                  <span class="text-2xl mr-2">⭐</span>
                  <div>
                    <span class="block text-white font-bold text-xl">4.8/5</span>
                    <span class="text-white/80 text-sm">Valoración</span>
                  </div>
                </div>
                
                <div class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
                  <span class="text-2xl mr-2">🎮</span>
                  <div>
                    <span class="block text-white font-bold text-xl">10+</span>
                    <span class="text-white/80 text-sm">Modos de juego</span>
                  </div>
                </div>
              </div>
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
              <p class="text-white/80 text-sm mt-3 text-center">Disponible para iOS, Android y Web</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Related Keywords Section para SEO -->
  <section class="py-12 bg-purple-50">
    <div class="max-w-5xl mx-auto px-4">
      <div class="text-center mb-8">
        <h2 class="text-2xl font-bold text-gray-800">Descubre Tragos Locos</h2>
        <p class="text-gray-600 mt-2">La app ideal para tus fiestas y reuniones sociales</p>
      </div>
      
      <div class="flex flex-wrap justify-center gap-2 text-sm">
        {#each seoKeywords as keyword}
          <a href="/" class="bg-white px-3 py-1 rounded-full border border-purple-100 text-purple-700 hover:bg-purple-100 transition-colors">
            {keyword}
          </a>
        {/each}
      </div>
    </div>
  </section>
</main>

<Footer />