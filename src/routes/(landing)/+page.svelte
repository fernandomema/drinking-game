<script lang="ts">
    import { _, getLocale } from "$lib/locales";
    import logo from '$lib/images/AppImages/ios/256.png';
    import playstoreBadge from '$lib/images/InstallBanners/PLAYSTORE-black-en.svg';
    import AppstoreBadge from '$lib/images/InstallBanners/APPSTORE-white-en.svg';
    import PWABadge from '$lib/images/InstallBanners/PWA-white-en.svg';
    import BottomSheet from '$lib/components/BottomSheet.svelte';
    import { questions } from '$lib/questions';
    import AddToHomeScreenBottomSheet from '$lib/components/BottomSheets/AddToHomeScreenBottomSheet.svelte';
    import QuestionsCounters from '$lib/components/landingBlocks/QuestionsCounters.svelte';
    import Steps from '$lib/components/landingBlocks/Steps.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { onMount } from "svelte";
    import Quiz from "$lib/components/landingBlocks/Quiz.svelte";
    import Laughts from "$lib/components/landingBlocks/Laughts.svelte";
    import Faqs from "$lib/components/landingBlocks/Faqs.svelte";
    import IphoneMockup from "$lib/components/IphoneMockup.svelte";
    
    let isSheetOpen = false;

    let locale: string | undefined;

    onMount(async () => {
        locale = await getLocale();
    });
</script>

<svelte:head>
    {#if locale}
        <!-- language -->
        <meta property="og:locale" content={locale} />
        <meta name="language" content={locale} />
        <meta name="lang:alternate" content={locale} />
    {/if}
</svelte:head>

<div class="bg-gray-50">
    <main class="flex w-full flex-wrap justify-center gap-6 p-4 sm:flex-row-reverse md:pt-10">
        <div class="max-w-[640px] px-4">
            
            <img src={logo} class="h-20 py-4" alt="audiostory app maker">
            <h1 class="pt-2 text-center text-[36px] font-extrabold leading-10 md:text-start md:text-[50px] md:leading-[54px]">
                {$_("landing.slogan")}
            </h1>
            <p class="md:text-md py-8 text-center text-sm font-bold text-gray-600 md:text-start">
                {$_("landing.description")}
            </p>
        
        
            <div class="flex flex-col items-center gap-4">
                <div class="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                    <!-- Google Play -->
                    <a href="/join-beta-test" class="bg-black text-white rounded-xl px-4 py-2 w-48 flex items-center gap-3 shadow-lg hover:bg-gray-800 transition">
                        <span class="iconify tabler--brand-google-play text-3xl"></span>
                        <div class="text-left leading-tight">
                        <span class="text-xs text-gray-300 block">Consíguelo en</span>
                        <span class="text-sm font-semibold">Google Play</span>
                        </div>
                    </a>

                    <!-- App Store -->
                    <button on:click={() => (isSheetOpen = true)} class="bg-black text-white rounded-xl px-4 py-2 w-48 flex items-center gap-3 shadow-lg hover:bg-gray-800 transition">
                        <span class="iconify tabler--brand-apple text-3xl"></span>
                        <div class="text-left leading-tight">
                        <span class="text-xs text-gray-300 block">Descargar en</span>
                        <span class="text-sm font-semibold">App Store</span>
                        </div>
                    </button>

                    <!-- Web App / PWA -->
                    <a href="/intro" class="bg-purple-700 text-white rounded-xl px-4 py-2 w-48 flex items-center gap-3 shadow-lg hover:bg-purple-800 transition">
                        <span class="iconify solar--monitor-smartphone-bold-duotone text-3xl"></span>
                        <div class="text-left leading-tight">
                        <span class="text-xs text-gray-200 block">Abrir como</span>
                        <span class="text-sm font-semibold">Web App</span>
                        </div>
                    </a>
                </div>
                <div class="flex justify-center items-center my-8">
                    <IphoneMockup>
                        <img src="/screenshot-3.png" alt="" width="320" height="640" style="box-shadow: 10px 10px 5px 12px rgb(209, 218, 218)" class="rounded rounded-xl border border-4 border-black">
                    </IphoneMockup>
                </div>
            </div>

        </div>

    </main>

    <!-- Steps Section -->
    <section class="bg-gradient-to-b from-purple-700 to-purple-900 text-white py-16 px-4 md:px-10">
        <div class="max-w-5xl mx-auto text-center mb-12">
            <h2 class="text-3xl md:text-5xl font-bold mb-4">{$_('landingPage.steps_title')}</h2>
            <p class="text-lg md:text-xl text-purple-200">{$_('landingPage.steps_subtitle')}</p>
        </div>

        <div class="grid md:grid-cols-3 gap-10 items-start max-w-6xl mx-auto">
            <!-- Paso 1 -->
            <div class="flex flex-col items-center">
                <div class="w-auto">
                    <IphoneMockup>
                        <video preload="none" src="/steps/step1.webm" autoplay loop muted playsinline class="rounded-xl" />
                    </IphoneMockup>
                </div>
                <h3 class="text-xl font-semibold mt-6">{$_('landingPage.step1_title')}</h3>
                <p class="text-purple-200 mt-2 text-sm text-center max-w-xs">{$_('landingPage.step1_desc')}</p>
            </div>

            <!-- Paso 2 -->
            <div class="flex flex-col items-center">
                <div class="w-auto">
                    <IphoneMockup>
                        <video preload="none" src="/steps/step2.webm" autoplay loop muted playsinline class="rounded-xl" />
                    </IphoneMockup>
                </div>
                <h3 class="text-xl font-semibold mt-6">{$_('landingPage.step2_title')}</h3>
                <p class="text-purple-200 mt-2 text-sm text-center max-w-xs">{$_('landingPage.step2_desc')}</p>
            </div>

            <!-- Paso 3 -->
            <div class="flex flex-col items-center">
                <div class="w-auto">
                    <IphoneMockup>
                        <video preload="none" src="/steps/step3.webm" autoplay loop muted playsinline class="rounded-xl" />
                    </IphoneMockup>
                </div>
                <h3 class="text-xl font-semibold mt-6">{$_('landingPage.step3_title')}</h3>
                <p class="text-purple-200 mt-2 text-sm text-center max-w-xs">{$_('landingPage.step3_desc')}</p>
            </div>
        </div>
    </section>

    <section class="bg-purple-500 text-white py-16 text-center">
        <div class="max-w-3xl mx-auto px-6">
            <h2 class="text-4xl font-bold mb-4">
                {$_('landingPage.download_title')}
            </h2>
            <p class="text-lg mb-6">
                {$_('landingPage.download_desc')}
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/" class="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2">
                    <span class="iconify-mask solar--download-bold-duotone block w-[40px] h-[40px] bg-purple-500"></span>
                    <span>{$_('landingPage.download_now')}</span>
                </a>
            </div>
        </div>
    </section>
    

    <div class="bg-purple-100">
        <QuestionsCounters />
    </div>

    <Laughts />
    
    <div class="bg-purple-100">
        <Faqs></Faqs>
    </div>

    <!--

     <section class="text-center py-16">
        <h2 class="text-3xl font-extrabold text-gray-800">¿Listo para llevar tu fiesta al siguiente nivel?</h2>
        <p class="mt-4 text-lg text-gray-600">Descarga la app ahora y comienza a disfrutar de la diversión.</p>
        <div class="flex justify-center gap-6 mt-8">
            <a href="/join-beta-test" class="bg-purple-600 text-white py-2 px-6 rounded-md">Únete al beta</a>
            <a href="/" class="bg-purple-100 text-purple-600 py-2 px-6 rounded-md">Juega ahora!</a>
        </div>
     </section>

     <section class="mt-10 py-16">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-extrabold text-center mb-6 text-gray-800 sm:text-4xl">Momentos divertidos con nuestra app</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img src="path/to/image1.jpg" alt="Fiesta con la app" class="w-full h-64 object-cover rounded-lg shadow-md">
            <img src="path/to/image2.jpg" alt="Grupo jugando en la app" class="w-full h-64 object-cover rounded-lg shadow-md">
            <img src="path/to/image3.jpg" alt="Diversión con amigos" class="w-full h-64 object-cover rounded-lg shadow-md">
          </div>
        </div>
      </section>

    
      <section class="mt-10 py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200">
            ¡Muéstranos tu diversión!
          </h2>
          <p class="text-lg mb-8 animate__animated animate__fadeIn animate__delay-1s">
            ¿Estás disfrutando de la app? ¡Queremos verlo! Envíanos tus fotos y comparte tus mejores momentos con la comunidad. ¡Sé parte de nuestra historia!
          </p>
          
          <div class="flex justify-center items-center space-x-6">
            <a href="mailto:tuemail@dominio.com?subject=Imágenes para la comunidad" class="bg-white text-purple-600 px-10 py-5 rounded-lg text-xl font-semibold shadow-xl transform transition-all hover:scale-110 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 animate__animated animate__bounceIn animate__delay-2s">
              ¡Envíanos tus Fotos!
            </a>
          </div>
      
          <div class="mt-8">
            <p class="text-sm">Comparte tus momentos más épicos con nosotros y sé parte de la comunidad. ¡Estamos esperando tus fotos! 📸</p>
          </div>
        </div>
      </section>

    <section class="bg-pink-100 py-16">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold text-pink-600">¡Risas en aumento!</h2>
            <p class="text-lg text-gray-700 mb-6">Cada vez que alguien se ríe, el contador sube. ¿Quién será el primero en llegar a 100 risas?</p>
            <div class="text-4xl font-semibold text-purple-600">
            <span id="counter">0</span> <span>Risas</span>
            </div>
        </div>
    </section>
    <section class="bg-purple-600 py-16" style="background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent); background-size: 50px 50px;">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold text-white mb-6">¡Risas que se multiplican!</h2>
            <p class="text-lg text-white mb-6">Haz que tus risas cuenten mientras juegas con tus amigos.</p>
        </div>
    </section>
    <section class="bg-purple-700 bg-opacity-90 py-16" style="background-image: radial-gradient(circle, rgba(255, 255, 255, 0.2) 1px, transparent 1px); background-size: 30px 30px;">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold text-white mb-6">¡Vamos a reír juntos!</h2>
            <p class="text-lg text-white mb-6">Cada risita cuenta, ¡y aquí lo celebramos al máximo!</p>
        </div>
    </section>
    <section class="relative bg-purple-800 py-16 overflow-hidden">
        <div class="absolute inset-0 bg-purple-900 opacity-50"></div>
        <div class="container mx-auto text-center relative z-10">
            <h2 class="text-3xl font-bold text-white mb-6">¡Diversión sin límites!</h2>
            <p class="text-lg text-white mb-6">¡Cada segundo cuenta en la fiesta más épica de todas!</p>
        </div>
        <div class="absolute top-10 left-10 w-10 h-10 rounded-full bg-white opacity-30 animate-pulse"></div>
        <div class="absolute bottom-10 right-20 w-16 h-16 rounded-full bg-white opacity-30 animate-pulse"></div>
        <div class="absolute top-40 left-32 w-8 h-8 rounded-full bg-white opacity-30 animate-pulse"></div>
    </section>
    <section class="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 py-16">
        <div class="container mx-auto text-center">
            <h2 class="text-4xl font-bold text-white mb-6">¡La fiesta nunca para!</h2>
            <p class="text-lg text-white mb-6">Haz parte de la diversión con un ambiente lleno de risas y emoción.</p>
        </div>
    </section>
    <section class="relative bg-purple-600 py-16 overflow-hidden">
        <div class="absolute inset-0 animate-pulse opacity-20">
            <div class="w-10 h-10 rounded-full bg-yellow-400 animate-confetti"></div>
            <div class="w-12 h-12 rounded-full bg-pink-400 animate-confetti"></div>
            <div class="w-8 h-8 rounded-full bg-white animate-confetti"></div>
        </div>
        <div class="container mx-auto text-center relative z-10">
            <h2 class="text-4xl font-bold text-white mb-6">¡Que comience la fiesta!</h2>
            <p class="text-lg text-white mb-6">Cada momento es una celebración con risas y amigos.</p>
        </div>
    </section>
    
    <style>
        .animate-confetti {
            animation: confetti 2s infinite;
        }
        
        @keyframes confetti {
            0% { transform: translateY(0) rotate(0deg); opacity: 0.5; }
            50% { transform: translateY(-50px) rotate(360deg); opacity: 1; }
            100% { transform: translateY(0) rotate(0deg); opacity: 0.5; }
        }
    </style>
    
    <section class="relative bg-purple-700 py-16 overflow-hidden">
        <div class="absolute inset-0 animate-bubbles opacity-50">
            <div class="w-8 h-8 rounded-full bg-pink-400 animate-bubble"></div>
            <div class="w-12 h-12 rounded-full bg-purple-500 animate-bubble"></div>
            <div class="w-16 h-16 rounded-full bg-yellow-300 animate-bubble"></div>
        </div>
        <div class="container mx-auto text-center relative z-10">
            <h2 class="text-4xl font-bold text-white mb-6">¡Vamos a reír juntos!</h2>
            <p class="text-lg text-white mb-6">Con cada risa, la fiesta crece. ¡Hazla tuya!</p>
        </div>
    </section>
    
    <style>
        .animate-bubble {
            animation: bubble 4s infinite;
        }
    
        @keyframes bubble {
            0% { transform: translateY(0) scale(0.8); opacity: 0.7; }
            50% { transform: translateY(-30px) scale(1.2); opacity: 1; }
            100% { transform: translateY(0) scale(0.8); opacity: 0.7; }
        }
    </style>
    
    <section class="relative bg-purple-600 py-16">
        <div class="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-400 opacity-30"></div>
        <div class="absolute top-10 left-10 w-16 h-16 rounded-full bg-purple-500 opacity-20"></div>
        <div class="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-pink-500 opacity-20"></div>
        <div class="container mx-auto text-center relative z-10">
            <h2 class="text-4xl font-bold text-white mb-6">¡La fiesta es ahora!</h2>
            <p class="text-lg text-white mb-6">¡Que empiece la diversión con todos tus amigos!</p>
        </div>
    </section>
    <section class="relative bg-purple-600 py-16">
        <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-30"></div>
        <div class="container mx-auto text-center relative z-10">
            <div class="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg mx-4 md:mx-0">
                <h2 class="text-4xl font-bold text-purple-800 mb-6">¡La fiesta es tuya!</h2>
                <p class="text-lg text-gray-800 mb-6">Prepara las bebidas, pon la música y no dejes de reír con tus amigos.</p>
            </div>
        </div>
    </section>
    <section class="bg-purple-600 text-white py-16">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-6">¡Bienvenidos a la Fiesta Definitiva!</h2>
            <p class="text-lg mb-6">Si buscas una fiesta única y llena de energía, estás en el lugar adecuado. Nuestra plataforma está diseñada para ofrecerte experiencias increíbles, desde eventos temáticos hasta juegos interactivos para grupos de amigos. ¡Todo lo que necesitas para pasarla genial está aquí!</p>
            <p class="text-lg">Nuestra misión es crear un ambiente de diversión constante, con actividades de fiesta que nunca olvidarán. Organizamos eventos para jóvenes, adultos y todos aquellos que deseen disfrutar de un ambiente festivo y lleno de música. Cada vez que interactúas con nuestra plataforma, la fiesta sigue creciendo. ¡Únete y prepárate para una noche inolvidable!</p>
            <p class="text-lg">Ya sea que estés buscando un modo de fiesta tranquilo o algo completamente salvaje, tenemos opciones para todos. ¡Haz clic, interactúa y prepárate para la fiesta de tu vida!</p>
        </div>
    </section>
    <section class="bg-pink-200 text-gray-800 py-16">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-6">¡Los Mejores Juegos para tu Fiesta!</h2>
            <p class="text-lg mb-6">La diversión no termina en la pista de baile, ¡nuestros juegos interactivos lo demuestran! Desde retos divertidos hasta juegos de preguntas, tenemos todo lo que necesitas para que tus amigos no paren de reír. Con nuestras opciones de "Tragos Locos", "Hot" y "Equipos", nunca sabrás qué esperar, pero siempre te divertirás.</p>
            <p class="text-lg mb-6">Nuestros juegos están diseñados para adaptarse a cualquier tipo de grupo, ya sea una fiesta pequeña o una celebración épica. La emoción está garantizada, con la posibilidad de personalizar cada juego según el nivel de locura que busques. Con nuestra plataforma, organizar tu fiesta nunca fue tan fácil, solo tienes que elegir y empezar a jugar.</p>
            <p class="text-lg">No importa si eres el alma de la fiesta o si prefieres mantenerte al margen, nuestros juegos están hechos para que todos participen. ¡La diversión está asegurada y la risa nunca se detiene!</p>
        </div>
    </section>
    <section class="bg-white text-gray-800 py-16">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-6">Cómo Crear la Fiesta Perfecta</h2>
            <p class="text-lg mb-6">Crear una fiesta épica no tiene por qué ser difícil. Con nuestras herramientas, puedes personalizar cada aspecto de tu evento, desde la música hasta los juegos y dinámicas de grupo. Con solo un par de clics, estarás listo para hacer de tu fiesta un evento inolvidable.</p>
            <p class="text-lg mb-6">¿Quieres saber cuál es el modo ideal para tu grupo? Nuestro sencillo cuestionario de "Modo de Fiesta" te ayudará a descubrir si eres del tipo de fiesta tranquilo, caliente o en equipo. ¡Nunca fue tan fácil conocer tus preferencias de fiesta! Además, nuestro sitio es completamente intuitivo, lo que hace que la organización de la fiesta sea rápida y sencilla.</p>
            <p class="text-lg">Lo mejor de todo es que nuestros eventos se pueden adaptar tanto para grupos pequeños como grandes. Ya sea una reunión íntima con amigos cercanos o una fiesta masiva, tenemos las herramientas adecuadas para hacerlo todo más divertido y fácil de gestionar.</p>
        </div>
    </section>
    <section class="bg-purple-500 text-white py-16">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-6">Diversión Sin Límites</h2>
            <p class="text-lg mb-6">La clave para una fiesta exitosa es mantener la energía alta y la diversión sin límites. Con nuestra plataforma, la diversión no tiene fecha de caducidad. Los juegos, las dinámicas y las sorpresas no se acaban nunca, lo que permite que tu fiesta continúe durante horas sin perder emoción.</p>
            <p class="text-lg mb-6">Cada actividad está diseñada para mantener la emoción siempre presente, ya sea a través de risas, desafíos o temas sorpresa. Si buscas algo diferente y memorable, ¡estás en el lugar correcto!</p>
            <p class="text-lg">Además, nuestra plataforma es perfecta para fiestas temáticas. Si estás planeando un evento con temática de los 80s, fiesta de disfraces o simplemente una fiesta de verano, ¡nosotros tenemos las herramientas necesarias para hacerlo más épico y fácil de organizar!</p>
        </div>
    </section>
    <section class="bg-pink-100 text-gray-800 py-16">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold text-purple-600 mb-6">¡Para Todos los Gustos!</h2>
            <p class="text-lg mb-6">La mejor parte de nuestras fiestas es que puedes personalizarlas como quieras. No importa si prefieres una fiesta relajada o si lo tuyo son las fiestas ruidosas con juegos y mucha competencia, tenemos algo para todos. Con opciones para todo tipo de personalidad y grupo, nunca te quedarás sin ideas para sorprender a tus amigos.</p>
            <p class="text-lg mb-6">Además, cada uno de nuestros modos de fiesta está diseñado para fomentar la interacción y la diversión. Desde actividades donde todos participarán hasta juegos donde sólo unos pocos serán los protagonistas, tenemos la mezcla perfecta para que todos se diviertan al máximo.</p>
            <p class="text-lg">Ya sea que prefieras una fiesta tranquila con juegos de mesa o una noche llena de risas y acción, nuestra plataforma tiene algo para ti. Personaliza tu fiesta y hazla única. ¡Es fácil, rápido y muy divertido!</p>
        </div>
    </section>
    <section class="bg-white text-gray-800 py-16">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold text-purple-600 mb-6">Eventos y Celebraciones Inolvidables</h2>
            <p class="text-lg mb-6">No importa la ocasión, nuestra plataforma está aquí para ayudarte a crear eventos inolvidables. Si estás organizando una fiesta de cumpleaños, una despedida de soltero/a o una fiesta temática, tenemos todas las herramientas que necesitas para asegurarte de que tu evento sea un éxito rotundo. Con nuestra amplia variedad de juegos, dinámicas de grupo y personalización, tu evento será el centro de todas las conversaciones.</p>
            <p class="text-lg mb-6">La diversión está en los detalles, y con nuestra plataforma podrás asegurarte de que cada momento de tu fiesta sea especial. Organiza actividades interactivas, crea momentos sorprendentes y mantén a todos tus invitados riendo durante toda la noche.</p>
            <p class="text-lg">No importa si prefieres organizar una fiesta con amigos cercanos o si tienes un evento más grande, ¡nos encargamos de todo para que solo te preocupes de disfrutar!</p>
        </div>
    </section>
    <section class="bg-purple-500 text-white py-16">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-6">¡Tragos Locos, la Fiesta de Bebidas y Diversión!</h2>
            <p class="text-lg mb-6">Si estás buscando el juego más divertido para tu fiesta, "Tragos Locos" es la opción ideal. Este juego es perfecto para grupos de amigos que quieren disfrutar de un ambiente festivo con bebidas y risas. Con Tragos Locos, cada ronda es una sorpresa, ¡y las risas nunca paran!</p>
            <p class="text-lg mb-6">Nuestro juego de Tragos Locos está diseñado para hacer que cada invitado participe, sin importar su nivel de confianza. Es un juego dinámico y lleno de desafíos que involucra tanto bebidas como retos divertidos. ¡Prepárate para reírte a carcajadas mientras desafías a tus amigos a hacer cosas locas y originales!</p>
            <p class="text-lg mb-6">El juego está disponible en nuestra plataforma como parte de nuestras opciones de juegos interactivos. Solo tienes que elegir "Tragos Locos" en nuestra app y empezar la fiesta. ¡Es fácil, rápido y te aseguramos que será la actividad más divertida de la noche!</p>
            <p class="text-lg">Con Tragos Locos, tu fiesta nunca será aburrida. ¡Hazla más divertida, sorprendente y llena de adrenalina con el juego de bebidas más épico!</p>
        </div>
    </section>
    <section class="bg-pink-100 text-gray-800 py-16">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold text-purple-600 mb-6">¡La App Perfecta para Tu Fiesta!</h2>
            <p class="text-lg mb-6">Nuestra App está diseñada para ser el centro de toda fiesta. Con un solo clic, podrás acceder a una variedad de juegos interactivos como "Tragos Locos", configurar eventos, invitar a tus amigos y mantener el control de la diversión. Esta aplicación se adapta a cualquier tipo de fiesta y te ofrece herramientas increíbles para personalizar tu experiencia.</p>
            <p class="text-lg mb-6">Gracias a nuestra app, no necesitas preocuparte por nada más que pasarla bien. Organiza desde fiestas pequeñas hasta grandes celebraciones, eligiendo los juegos y actividades que mejor se adapten a tu grupo. ¿Te atreves con "Tragos Locos"? ¡Solo abre nuestra app y empieza a jugar!</p>
            <p class="text-lg mb-6">Además, nuestra app es completamente intuitiva, por lo que podrás empezar a usarla sin problemas, incluso si no eres un experto en tecnología. Con nuestra plataforma, crear la fiesta de tus sueños nunca fue tan fácil. Desde el momento en que abres la app, estarás listo para disfrutar de una experiencia única y divertida.</p>
            <p class="text-lg">Ya sea que estés organizando un evento de último minuto o planeando con tiempo, nuestra app te ofrece todo lo que necesitas para hacerlo todo mucho más fácil. ¡No pierdas tiempo y empieza a disfrutar de la mejor fiesta con nuestra aplicación!</p>
        </div>
    </section>
    <section class="bg-white text-gray-800 py-16">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold text-purple-600 mb-6">Tragos Locos: El Juego de Bebidas en tu Teléfono</h2>
            <p class="text-lg mb-6">¡No necesitas nada más que tu teléfono para disfrutar del juego de bebidas más divertido del mundo! "Tragos Locos" está disponible en nuestra app, lo que te permite llevar la diversión a cualquier parte. Ya no tendrás que buscar complicados juegos de fiesta, porque con solo un clic, tendrás acceso a una experiencia interactiva que animará cualquier evento.</p>
            <p class="text-lg mb-6">¿Estás listo para poner a prueba tus límites con tus amigos? Con "Tragos Locos" en nuestra app, cada ronda será un desafío diferente. Elige entre varios modos de juego, personaliza las reglas y comienza a disfrutar de un juego lleno de acción, risas y bebidas. ¡Es tan fácil como abrir la app y empezar a jugar!</p>
            <p class="text-lg mb-6">La app te ofrece todo lo que necesitas para hacer de tu fiesta un evento inolvidable. Desde la comodidad de tu teléfono, puedes administrar tu juego, añadir más jugadores y mantener la emoción a tope durante toda la noche. ¡No pierdas la oportunidad de disfrutar de Tragos Locos en tu próxima fiesta!</p>
            <p class="text-lg">Con nuestra app, el juego nunca termina. ¡Descárgala ahora y empieza a crear recuerdos épicos con "Tragos Locos" y otros juegos de fiesta!</p>
        </div>
    </section>
    <section class="bg-purple-100 text-gray-800 py-16">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold text-purple-600 mb-6">La Mejor App para Organizar tu Fiesta</h2>
            <p class="text-lg mb-6">Nuestra App no solo es perfecta para jugar, sino también para organizar todo tipo de fiestas. ¿Buscas una forma rápida y eficiente de tenerlo todo bajo control? Con nuestra aplicación, puedes gestionar tu fiesta desde cualquier lugar y en cualquier momento. ¡Es el mejor asistente de fiesta que podrías tener!</p>
            <p class="text-lg mb-6">Nuestra app te permite acceder a una amplia variedad de juegos como "Tragos Locos", gestionar los detalles del evento, invitar a amigos, y mucho más. Además, te ofrece recomendaciones basadas en el tamaño de tu grupo, el tipo de fiesta y tus preferencias personales.</p>
            <p class="text-lg mb-6">Con funciones avanzadas como seguimiento en tiempo real, opciones de personalización y un diseño amigable, nuestra app es todo lo que necesitas para asegurarte de que tu fiesta sea todo un éxito. ¡Hazla épica con "Tragos Locos" y otros juegos increíbles!</p>
            <p class="text-lg">No pierdas la oportunidad de tener la fiesta más divertida y organizada del año. ¡Descarga la app y empieza a planificar tu evento con solo unos clics!</p>
        </div>
    </section>
    <section class="bg-purple-600 text-white py-16">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-6">¡Haz de tu fiesta una experiencia épica con Tragos Locos!</h2>
            <p class="text-lg mb-6">¿Estás listo para llevar tus fiestas a un nivel completamente nuevo? Descarga nuestra app y empieza a jugar a Tragos Locos, el juego de bebidas más divertido que puedes encontrar. ¡Desafía a tus amigos, hazlos reír y crea recuerdos inolvidables!</p>
            <div class="flex justify-center gap-6 mb-6">
                <a href="https://linkdescarga.com" class="bg-pink-500 text-white py-3 px-8 rounded-lg text-xl font-semibold hover:bg-pink-400 transition duration-300">Descargar la App</a>
                <a href="#modes" class="bg-purple-700 text-white py-3 px-8 rounded-lg text-xl font-semibold hover:bg-purple-600 transition duration-300">Ver Modo Tragos Locos</a>
            </div>
            <p class="text-lg">No pierdas la oportunidad de tener la fiesta más divertida con Tragos Locos y otros juegos interactivos. ¡Descárgala ahora y empieza a disfrutar de tu próxima fiesta con solo un clic!</p>
        </div>
    </section>

    <section class="bg-indigo-100 py-16">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold text-indigo-600">¡El Gran Evento Se Acerca!</h2>
          <p class="text-lg text-gray-700 mb-6">Quedan pocos días para el lanzamiento. ¡No te lo pierdas!</p>
          <div id="countdown" class="text-4xl font-bold text-indigo-700">
            00:00:00
          </div>
        </div>
    </section>

    <section class="bg-purple-100 py-12">
        <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold text-purple-800 mb-6">¡Sube de nivel en tu fiesta!</h2>
            <div class="relative pt-2">
                <div class="flex mb-2 justify-between text-sm font-medium text-gray-700">
                    <span>¿Listo para la fiesta?</span>
                    <span>Nivel 3</span>
                </div>
                <div class="w-full bg-gray-300 rounded-full h-4">
                    <div class="bg-purple-500 h-4 rounded-full" style="width: 60%"></div>
                </div>
            </div>
            <p class="mt-4 text-lg">¡Completa más acciones para llegar al nivel máximo y ganar recompensas exclusivas!</p>
        </div>
    </section>
    
    <Quiz />

    <Laughts />
    
    

    <section class="mt-10 bg-purple-100 py-16">
        <div class="container mx-auto px-6">
          <h2 class="text-3xl font-extrabold text-center mb-6 text-gray-800 sm:text-4xl">Ultimas novedades en la app</h2>
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 class="text-lg font-semibold text-purple-600">¡Nuevos juegos disponibles!</h3>
            <p class="mt-2 text-sm text-gray-600">Acabamos de añadir nuevos juegos como 'Adivina la Palabra' y 'Desafíos Locos'. ¡No te los pierdas!</p>
            <button class="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg">Explorar</button>
          </div>
        </div>
    </section>
-->
      
    <section class="py-16 bg-purple-600 text-white">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-3xl font-extrabold mb-6">{ $_('cta.title') }</h2>
            <p class="text-lg mb-6">{ $_('cta.text') }</p>
            <a href="/" class="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold">{ $_('cta.action') }</a>
        </div>
    </section>
    
</div>

<AddToHomeScreenBottomSheet isOpen={isSheetOpen} />

<Footer></Footer>
