<script lang="ts">
    import Faqs from "$lib/components/landingBlocks/Faqs.svelte";
    let openNav = false;
</script>

<section class="space-y-12 max-w-4xl mx-auto">
    <!-- Cabecera con gradiente -->
    <div class="bg-gradient-to-r from-purple-700 to-pink-600 p-8 md:p-10 rounded-2xl text-white shadow-xl">
        <h1 class="text-4xl md:text-5xl font-bold text-center mb-6 text-white drop-shadow-sm">Gana Premium creando contenido para Tragos Locos</h1>
        <div class="max-w-3xl mx-auto">
            <p class="text-xl leading-relaxed text-white/90">
                ¿Quieres disfrutar de todas las funciones de <strong class="text-white">Tragos Locos Premium</strong> sin pagar un centavo? Ahora puedes conseguirlo simplemente compartiendo tu creatividad con la comunidad. ¡Es hora de mostrar cómo te diviertes con tus amigos!
            </p>
        </div>
    </div>
    
    <!-- Barra de navegación plegable -->
    <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-4 md:p-6 rounded-xl shadow-md border border-purple-100 sticky top-4 z-10">
        <!-- Botón para móvil -->
        <button
            class="flex md:hidden items-center justify-between w-full text-purple-800 font-bold text-lg focus:outline-none"
            on:click={() => openNav = !openNav}
            aria-expanded={openNav}
            aria-controls="blog-nav"
        >
            <span class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Contenido
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                class:rotate-180={openNav}>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        <!-- Índice: visible en desktop o si está abierto en móvil -->
        <ul
            id="blog-nav"
            class="space-y-3 mt-4 md:mt-0 md:block"
            class:hidden={!openNav}
        >
            <li class="transition-all">
                <a href="#que-es" class="text-purple-700 hover:text-pink-600 flex items-center hover:translate-x-1 transition-transform">
                    <span class="bg-purple-200 text-purple-700 rounded-full w-6 h-6 inline-flex justify-center items-center mr-2">1</span>
                    ¿Qué es esta promoción?
                </a>
            </li>
            <li class="transition-all">
                <a href="#como-participar" class="text-purple-700 hover:text-pink-600 flex items-center hover:translate-x-1 transition-transform">
                    <span class="bg-purple-200 text-purple-700 rounded-full w-6 h-6 inline-flex justify-center items-center mr-2">2</span>
                    Cómo participar
                </a>
            </li>
            <li class="transition-all">
                <a href="#ejemplos" class="text-purple-700 hover:text-pink-600 flex items-center hover:translate-x-1 transition-transform">
                    <span class="bg-purple-200 text-purple-700 rounded-full w-6 h-6 inline-flex justify-center items-center mr-2">3</span>
                    Ejemplos de buen contenido
                </a>
            </li>
            <li class="transition-all">
                <a href="#faq" class="text-purple-700 hover:text-pink-600 flex items-center hover:translate-x-1 transition-transform">
                    <span class="bg-purple-200 text-purple-700 rounded-full w-6 h-6 inline-flex justify-center items-center mr-2">4</span>
                    Preguntas frecuentes
                </a>
            </li>
        </ul>
    </div>

    <!-- Sección 1: Qué es -->
    <div id="que-es" class="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
        <h2 class="text-3xl font-bold mb-6 text-purple-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-3 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            ¿Qué es esta promoción?
        </h2>
        <div class="prose prose-lg max-w-none">
            <p class="text-gray-700 leading-relaxed">
                Queremos llenar la app de nuevos retos, imágenes divertidas y videos que muestren cómo juegas con tus amigos. Por eso, hemos lanzado esta promoción donde tú puedes ser parte del contenido de Tragos Locos y, a cambio, te regalamos un código Premium para que disfrutes de la experiencia completa sin restricciones.
            </p>
            <p class="text-gray-700 leading-relaxed mt-4">
                Tu creatividad es importante para nosotros. Ya sea una foto graciosa jugando con tus amigos, un video divertido o ideas para nuevas preguntas y retos, queremos ver cómo vives la experiencia Tragos Locos.
            </p>
        </div>
    </div>

    <!-- Sección 2: Cómo participar -->
    <div id="como-participar" class="bg-white p-8 rounded-xl shadow-lg border-l-4 border-pink-500">
        <h2 class="text-3xl font-bold mb-6 text-purple-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-3 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Cómo participar
        </h2>
        
        <div class="grid md:grid-cols-2 gap-6 mt-6">
            <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <h3 class="text-xl font-bold mb-3 text-purple-700">Para imágenes y videos:</h3>
                <ol class="space-y-4">
                    <li class="flex items-start">
                        <span class="bg-purple-200 text-purple-700 rounded-full w-6 h-6 inline-flex justify-center items-center mr-2 flex-shrink-0 mt-1">1</span>
                        <span>Captura momentos divertidos jugando Tragos Locos con tus amigos</span>
                    </li>
                    <li class="flex items-start">
                        <span class="bg-purple-200 text-purple-700 rounded-full w-6 h-6 inline-flex justify-center items-center mr-2 flex-shrink-0 mt-1">2</span>
                        <span>Publica tus fotos o videos en Instagram, TikTok o Twitter con el hashtag <span class="font-bold text-purple-700">#TragosLocos</span></span>
                    </li>
                    <li class="flex items-start">
                        <span class="bg-purple-200 text-purple-700 rounded-full w-6 h-6 inline-flex justify-center items-center mr-2 flex-shrink-0 mt-1">3</span>
                        <span>No olvides mencionar en los comentarios de este post para que podamos encontrarlo</span>
                    </li>
                </ol>
            </div>
            
            <div class="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <h3 class="text-xl font-bold mb-3 text-purple-700">Para preguntas y retos:</h3>
                <ol class="space-y-4">
                    <li class="flex items-start">
                        <span class="bg-purple-200 text-purple-700 rounded-full w-6 h-6 inline-flex justify-center items-center mr-2 flex-shrink-0 mt-1">1</span>
                        <span>Piensa en preguntas originales o retos divertidos</span>
                    </li>
                    <li class="flex items-start">
                        <span class="bg-purple-200 text-purple-700 rounded-full w-6 h-6 inline-flex justify-center items-center mr-2 flex-shrink-0 mt-1">2</span>
                        <span>Compártelos en los comentarios de este post</span>
                    </li>
                </ol>
            </div>
        </div>
        
        <div class="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <p class="text-yellow-800 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Revisamos todo el contenido a diario. Si tu aporte es seleccionado, recibirás un código Premium en un plazo máximo de 7 días.</span>
            </p>
        </div>
    </div>

    <!-- Sección 3: Ejemplos -->
    <div id="ejemplos" class="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-500">
        <h2 class="text-3xl font-bold mb-6 text-purple-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-3 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Ejemplos de buen contenido
        </h2>
        
        <div class="prose prose-lg max-w-none">
            <p class="text-gray-700 leading-relaxed">
                Nos encantan las preguntas originales, los desafíos que sorprenden y las fotos o videos que muestren el espíritu festivo de la aplicación. Cuanto más auténtico y divertido sea tu aporte, más posibilidades tendrás de ser elegido.
            </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6 mt-6">
            <div class="bg-purple-50 p-5 rounded-lg">
                <div class="text-purple-700 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                </div>
                <h3 class="text-xl font-bold text-center mb-3 text-purple-800">Preguntas creativas</h3>
                <p class="text-gray-700">
                    "Si tuvieras que intercambiar la personalidad con alguien del grupo por un día, ¿con quién sería y por qué?"
                </p>
            </div>
            
            <div class="bg-pink-50 p-5 rounded-lg">
                <div class="text-pink-700 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                </div>
                <h3 class="text-xl font-bold text-center mb-3 text-pink-800">Videos divertidos</h3>
                <p class="text-gray-700">
                    Un video corto de tus amigos intentando hacer el reto de "Imitar a un personaje famoso" o bailando tras perder en un duelo.
                </p>
            </div>
            
            <div class="bg-purple-50 p-5 rounded-lg">
                <div class="text-purple-700 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <h3 class="text-xl font-bold text-center mb-3 text-purple-800">Fotos creativas</h3>
                <p class="text-gray-700">
                    Una foto de tu grupo jugando en un escenario original o mostrando reacciones divertidas a los retos de la app.
                </p>
            </div>
        </div>
    </div>

    <!-- Sección 4: FAQ -->
    <div id="faq" class="bg-white p-8 rounded-xl shadow-lg border-l-4 border-pink-500">
        <h2 class="text-3xl font-bold mb-6 text-purple-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mr-3 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Preguntas Frecuentes
        </h2>
        <Faqs id="faqs" />
    </div>
    
    <!-- Sección final: CTA -->
    <div class="bg-gradient-to-r from-purple-600 to-pink-500 p-8 rounded-xl text-white text-center shadow-xl">
        <h2 class="text-3xl font-bold mb-4">¿Estás listo para participar?</h2>
        <p class="text-xl mb-6">Tu creatividad puede convertirse en Premium. ¡Comparte ahora!</p>
        <div class="flex flex-wrap justify-center gap-4">
            <a href="#como-participar" class="bg-white text-purple-700 px-6 py-3 rounded-lg font-bold hover:bg-purple-100 transition-colors inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Ver instrucciones
            </a>
            <a href="#comment" class="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
                Dejar comentario
            </a>
        </div>
    </div>
</section>
