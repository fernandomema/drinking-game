<svelte:head>
    <script type="application/ld+json">
        {
        "@context": "https://schema.org",
        "@type": "Recipe",
        "name": "Cóctel Explosión Tropical",
        "author": {
            "@type": "Person",
            "name": "Tragos Lokos"
        },
        "datePublished": "2025-02-26",
        "description": "Un cóctel vibrante con colores psicodélicos, sabor tropical y un toque chispeante gracias a los caramelos efervescentes.",
        "image": "URL_DE_LA_IMAGEN_DEL_CÓCTEL",
        "recipeCategory": "Cócteles",
        "recipeCuisine": "Tropical",
        "keywords": "cóctel tropical, bebida alcohólica, cóctel loco, tragos originales, fiesta",
        "prepTime": "PT5M",
        "totalTime": "PT5M",
        "recipeYield": "1 cóctel",
        "recipeIngredient": [
            "30 ml de ron blanco",
            "20 ml de licor de maracuyá",
            "20 ml de curaçao azul",
            "15 ml de jugo de lima",
            "30 ml de jugo de piña",
            "15 ml de jarabe de granadina",
            "1 clara de huevo (opcional)",
            "Hielo picado",
            "Peta Zetas o caramelos efervescentes",
            "Rodaja de lima y hojas de menta (para decorar)"
        ],
        "recipeInstructions": [
            {
            "@type": "HowToStep",
            "text": "En una coctelera, agrega el ron blanco, licor de maracuyá, curaçao azul, jugo de lima, jugo de piña y la clara de huevo."
            },
            {
            "@type": "HowToStep",
            "text": "Agita en seco si usaste la clara de huevo, luego añade hielo y vuelve a agitar con fuerza."
            },
            {
            "@type": "HowToStep",
            "text": "En un vaso alto, vierte lentamente la granadina para crear un efecto degradado."
            },
            {
            "@type": "HowToStep",
            "text": "Sirve la mezcla en el vaso con cuidado para mantener el efecto visual."
            },
            {
            "@type": "HowToStep",
            "text": "Espolvorea Peta Zetas justo antes de servir para un toque chispeante."
            },
            {
            "@type": "HowToStep",
            "text": "Decora con una rodaja de lima y hojas de menta. ¡Listo para disfrutar!"
            }
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "150"
        }
        }
    </script>
</svelte:head>

<section class="mb-8">
    <h2 class="text-3xl font-bold text-purple-700 mb-4">Explosión Tropical: El cóctel más loco y vibrante</h2>
    <p class="text-lg text-gray-700">
        ¿Buscas una bebida que sorprenda a todos en la fiesta? 🍹🔥 El <strong>Cóctel Explosión Tropical</strong> 
        es una explosión de colores psicodélicos y sabores tropicales, con un toque chispeante que hará de cada 
        sorbo una experiencia inolvidable. Su mezcla de ron, maracuyá, curaçao azul y caramelos efervescentes 
        lo convierten en una opción perfecta para los amantes de los tragos originales.
    </p>
    <p class="mt-4 text-lg text-gray-700">
        Si quieres añadir un poco de locura a tu noche, sigue esta receta y prepárate para disfrutar de un 
        cóctel único que no dejará a nadie indiferente. ¡Vamos a ello! 🚀
    </p>
</section>

<section class="mt-8 bg-gradient-to-r from-yellow-50 to-orange-100 p-6 rounded-lg shadow-lg">
    <h2 class="text-3xl font-bold text-orange-700 flex items-center gap-2">
        <svg class="w-7 h-7 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.707 13.707a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L8 11.586l6.293-6.293a1 1 0 111.414 1.414l-7 7z" clip-rule="evenodd"></path>
        </svg>
        Ingredientes
    </h2>
    <ul class="mt-6 space-y-3">
        <li class="flex items-center space-x-3 p-3 bg-white rounded-lg shadow">
            <span class="text-2xl">🍹</span>
            <p class="text-lg text-gray-700">30 ml de <strong>ron blanco</strong></p>
        </li>
        <li class="flex items-center space-x-3 p-3 bg-white rounded-lg shadow">
            <span class="text-2xl">🥭</span>
            <p class="text-lg text-gray-700">20 ml de <strong>licor de maracuyá</strong></p>
        </li>
        <li class="flex items-center space-x-3 p-3 bg-white rounded-lg shadow">
            <span class="text-2xl">💙</span>
            <p class="text-lg text-gray-700">20 ml de <strong>curaçao azul</strong></p>
        </li>
        <li class="flex items-center space-x-3 p-3 bg-white rounded-lg shadow">
            <span class="text-2xl">🍋</span>
            <p class="text-lg text-gray-700">15 ml de <strong>jugo de lima</strong></p>
        </li>
        <li class="flex items-center space-x-3 p-3 bg-white rounded-lg shadow">
            <span class="text-2xl">🍍</span>
            <p class="text-lg text-gray-700">30 ml de <strong>jugo de piña</strong></p>
        </li>
        <li class="flex items-center space-x-3 p-3 bg-white rounded-lg shadow">
            <span class="text-2xl">🍬</span>
            <p class="text-lg text-gray-700">15 ml de <strong>jarabe de granadina</strong></p>
        </li>
        <li class="flex items-center space-x-3 p-3 bg-white rounded-lg shadow">
            <span class="text-2xl">🥚</span>
            <p class="text-lg text-gray-700">1 clara de huevo <span class="text-gray-500">(opcional)</span></p>
        </li>
        <li class="flex items-center space-x-3 p-3 bg-white rounded-lg shadow">
            <span class="text-2xl">🧊</span>
            <p class="text-lg text-gray-700"><strong>Hielo picado</strong></p>
        </li>
        <li class="flex items-center space-x-3 p-3 bg-white rounded-lg shadow">
            <span class="text-2xl">🎆</span>
            <p class="text-lg text-gray-700"><strong>Peta Zetas</strong> o caramelos efervescentes</p>
        </li>
        <li class="flex items-center space-x-3 p-3 bg-white rounded-lg shadow">
            <span class="text-2xl">🍃</span>
            <p class="text-lg text-gray-700">Rodaja de lima y <strong>hojas de menta</strong> (para decorar)</p>
        </li>
    </ul>
</section>


<section class="mt-8 bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg shadow-lg">
    <h2 class="text-3xl font-bold text-purple-700 flex items-center gap-2">
        <svg class="w-7 h-7 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.707 13.707a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L8 11.586l6.293-6.293a1 1 0 111.414 1.414l-7 7z" clip-rule="evenodd"></path>
        </svg>
        Instrucciones
    </h2>
    <ol class="mt-6 space-y-4">
        <li class="flex items-start space-x-3 p-4 bg-white rounded-lg shadow">
            <span class="bg-purple-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">1</span>
            <p class="text-lg text-gray-700">Mezcla todos los ingredientes en una coctelera <strong>(excepto la granadina y Peta Zetas)</strong>.</p>
        </li>
        <li class="flex items-start space-x-3 p-4 bg-white rounded-lg shadow">
            <span class="bg-purple-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">2</span>
            <p class="text-lg text-gray-700">Agita bien y cuela en un vaso alto con hielo.</p>
        </li>
        <li class="flex items-start space-x-3 p-4 bg-white rounded-lg shadow">
            <span class="bg-purple-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">3</span>
            <p class="text-lg text-gray-700">Añade lentamente la granadina para un efecto degradado.</p>
        </li>
        <li class="flex items-start space-x-3 p-4 bg-white rounded-lg shadow">
            <span class="bg-purple-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">4</span>
            <p class="text-lg text-gray-700">Justo antes de servir, espolvorea Peta Zetas para el toque chispeante.</p>
        </li>
        <li class="flex items-start space-x-3 p-4 bg-white rounded-lg shadow">
            <span class="bg-purple-500 text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">5</span>
            <p class="text-lg text-gray-700">Decora con una rodaja de lima y hojas de menta. <strong>¡A disfrutar! 🍹✨</strong></p>
        </li>
    </ol>
</section>

<section class="mt-8">
    <h2 class="text-2xl font-bold text-purple-700 mb-4">¡Hora de subir el nivel de la fiesta! 🎉</h2>
    <p class="text-lg text-gray-700">
        Ahora que tienes en tus manos el <strong>Cóctel Explosión Tropical</strong>, es momento de llevar la diversión al 
        siguiente nivel. ¿Qué mejor manera de hacerlo que con un juego que transforme cada ronda en una aventura llena de risas? 
    </p>
    <p class="mt-4 text-lg text-gray-700">
        Con <strong>Tragos Locos</strong>, cada trago es una sorpresa, cada reto una historia y cada noche, una anécdota épica. 
        Descarga nuestra app y descubre desafíos, preguntas y retos que convertirán cualquier reunión en una experiencia inolvidable.  
        🍹🔥 ¿Te atreves a jugar?  
    </p>
</section>


<section class="mt-8 text-center">
    <h2 class="text-2xl font-semibold text-purple-700">¡Descarga Tragos Locos y Sube de Nivel Tu Fiesta! 🎉</h2>
    <p class="mt-4 text-gray-700">Convierte cualquier noche en una experiencia inolvidable con <strong>Tragos Locos</strong>. Desafíos, preguntas y risas aseguradas.</p>
    <div class="mt-4 flex justify-center space-x-4">
        <a href="/" class="bg-purple-700 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-purple-800 transition">Descargar para iOS</a>
        <a href="/" class="bg-purple-700 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-purple-800 transition">Descargar para Android</a>
    </div>
</section>