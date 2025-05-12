<script lang="ts">
    import Faqs from "$lib/components/landingBlocks/Faqs.svelte";
    import { SchemaGenerator } from "$lib/utils/SchemaGenerator";

    const recipeSchema = SchemaGenerator.getRecipe({
        name: "Cóctel Paloma Mexicano",
        description: "Receta tradicional del cóctel Paloma, una refrescante bebida mexicana con tequila y refresco de toronja.",
        image: "https://tragos-locos.servitimo.net/blog/como-hacer-coctel-paloma-receta/cover.webp",
        url: "https://tragos-locos.servitimo.net/blog/como-hacer-paloma-cocktail-receta",
        datePublished: "2025-05-12",
        author: {
            name: "Tragos Locos",
            url: "https://tragos-locos.servitimo.net"
        },
        prepTime: "PT5M",
        totalTime: "PT7M",
        recipeCategory: ["Bebidas", "Cócteles"],
        recipeCuisine: ["Mexicana"],
        recipeYield: "1 cóctel",
        recipeIngredient: [
            "60 ml de tequila blanco",
            "120 ml de refresco de toronja",
            "15 ml de jugo de limón fresco",
            "Sal para el borde",
            "Hielo",
            "Rodaja de toronja para decorar"
        ],
        recipeInstructions: [
            "Escarcha el borde del vaso con sal",
            "Llena el vaso con hielo",
            "Añade el tequila",
            "Agrega el jugo de limón",
            "Completa con refresco de toronja",
            "Decora con una rodaja de toronja"
        ]
    });
</script>

<svelte:head>
    {@html `<script type="application/ld+json">${JSON.stringify(recipeSchema)}</script>`}
</svelte:head>

<section class="space-y-8">
    <!-- Introducción -->
    <div class="bg-gradient-to-r from-pink-500 to-orange-500 p-8 rounded-xl text-white">
        <h1 class="text-4xl font-bold text-center mb-6">Cómo Hacer el Cóctel Paloma: La Receta Mexicana Perfecta para Fiestas 2025 🍹</h1>
        <p class="text-xl leading-relaxed">
            El Paloma es más que un simple cóctel: es la auténtica bebida mexicana que está conquistando el mundo. Más refrescante que un margarita y más sofisticado que una cerveza con limón, el Paloma es el secreto mejor guardado de la coctelería mexicana. ¡Aprende a prepararlo como un experto! 🇲🇽✨
        </p>
    </div>

    <!-- Índice -->
    <div class="bg-orange-50 p-6 rounded-xl">
        <h2 class="text-2xl font-bold mb-4">📑 En esta guía encontrarás:</h2>
        <ul class="space-y-2">
            <li><a href="#ingredientes" class="text-orange-600 hover:text-orange-800">Ingredientes Necesarios</a></li>
            <li><a href="#preparacion" class="text-orange-600 hover:text-orange-800">Paso a Paso</a></li>
            <li><a href="#variaciones" class="text-orange-600 hover:text-orange-800">Variaciones del Paloma</a></li>
            <li><a href="#tips" class="text-orange-600 hover:text-orange-800">Tips de Experto</a></li>
            <li><a href="#juegos" class="text-orange-600 hover:text-orange-800">Juegos para Disfrutarlo</a></li>
            <li><a href="#faqs" class="text-orange-600 hover:text-orange-800">Preguntas Frecuentes</a></li>
        </ul>
    </div>

    <!-- Ingredientes -->
    <div id="ingredientes" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-6">🛒 Ingredientes para el Paloma Perfecto</h2>
        <p class="mb-4">Para preparar el mejor Paloma necesitarás:</p>
        
        <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-gray-50 p-4 rounded-lg">
                <h3 class="text-xl font-semibold mb-4">Ingredientes Básicos:</h3>
                <ul class="space-y-2">
                    <li class="flex items-center"><span class="text-orange-500 mr-2">•</span> 60 ml de tequila blanco</li>
                    <li class="flex items-center"><span class="text-orange-500 mr-2">•</span> 120 ml de refresco de toronja</li>
                    <li class="flex items-center"><span class="text-orange-500 mr-2">•</span> 15 ml de jugo de limón fresco</li>
                    <li class="flex items-center"><span class="text-orange-500 mr-2">•</span> Sal para el borde</li>
                    <li class="flex items-center"><span class="text-orange-500 mr-2">•</span> Hielo</li>
                </ul>
            </div>
            
            <div class="bg-gray-50 p-4 rounded-lg">
                <h3 class="text-xl font-semibold mb-4">Para Decorar:</h3>
                <ul class="space-y-2">
                    <li class="flex items-center"><span class="text-orange-500 mr-2">•</span> Rodaja de toronja</li>
                    <li class="flex items-center"><span class="text-orange-500 mr-2">•</span> Ramita de romero (opcional)</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Preparación -->
    <div id="preparacion" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-6">👨‍🍳 Preparación Paso a Paso</h2>
        
        <div class="space-y-4">
            <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0">1</div>
                <div>
                    <h3 class="text-xl font-semibold">Prepara el Vaso</h3>
                    <p>Pasa un limón por el borde del vaso y gíralo sobre un plato con sal para crear el borde escarchado.</p>
                </div>
            </div>

            <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0">2</div>
                <div>
                    <h3 class="text-xl font-semibold">Añade el Hielo</h3>
                    <p>Llena el vaso con hielo hasta arriba. Los cubos grandes se derriten más lentamente.</p>
                </div>
            </div>

            <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0">3</div>
                <div>
                    <h3 class="text-xl font-semibold">Vierte los Líquidos</h3>
                    <p>Añade el tequila, el jugo de limón y completa con el refresco de toronja.</p>
                </div>
            </div>

            <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0">4</div>
                <div>
                    <h3 class="text-xl font-semibold">Decora y Sirve</h3>
                    <p>Decora con una rodaja de toronja y una ramita de romero si lo deseas.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Variaciones -->
    <div id="variaciones" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-6">🔄 Variaciones del Paloma</h2>
        
        <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-pink-50 p-4 rounded-lg">
                <h3 class="text-xl font-semibold text-pink-800">Paloma Picante 🌶️</h3>
                <p>Añade un toque de chile en polvo al borde y una rodaja de jalapeño para dar un kick extra.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
                <h3 class="text-xl font-semibold text-purple-800">Paloma Premium 👑</h3>
                <p>Usa toronja natural exprimida en lugar de refresco y añade un toque de agua mineral.</p>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
                <h3 class="text-xl font-semibold text-blue-800">Paloma Sin Alcohol 🧊</h3>
                <p>Sustituye el tequila por agua mineral para una versión sin alcohol igual de refrescante.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
                <h3 class="text-xl font-semibold text-green-800">Paloma Mezcal 🥃</h3>
                <p>Cambia el tequila por mezcal para un sabor más ahumado y complejo.</p>
            </div>
        </div>
    </div>

    <!-- Tips de Experto -->
    <div id="tips" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-6">💡 Tips de Experto</h2>
        
        <div class="space-y-4">
            <div class="border-l-4 border-orange-500 pl-4">
                <h3 class="text-xl font-semibold">Elige el Tequila Correcto</h3>
                <p>Usa un tequila 100% de agave blanco. Los reposados pueden ser demasiado dominantes.</p>
            </div>
            
            <div class="border-l-4 border-orange-500 pl-4">
                <h3 class="text-xl font-semibold">La Importancia del Hielo</h3>
                <p>Usa hielo de calidad y en abundancia. El hielo malo puede arruinar hasta el mejor cóctel.</p>
            </div>
            
            <div class="border-l-4 border-orange-500 pl-4">
                <h3 class="text-xl font-semibold">El Toque Final</h3>
                <p>Un chorrito de agua mineral puede dar efervescencia extra y balance al cóctel.</p>
            </div>
        </div>
    </div>

    <!-- Juegos para Disfrutarlo -->
    <div id="juegos" class="bg-gradient-to-br from-purple-500 to-indigo-600 p-6 rounded-xl text-white">
        <h2 class="text-3xl font-bold mb-6">🎮 ¿Cómo Disfrutar tu Paloma al Máximo?</h2>
        
        <p class="mb-6">¡Haz que tu noche de Palomas sea inolvidable con Tragos Locos! Nuestra app incluye juegos y retos especialmente diseñados para disfrutar de cócteles como el Paloma:</p>
        
        <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 class="text-xl font-bold mb-2">🎲 Modo Coctelería</h3>
                <p>Retos especiales para bartenders amateur y juegos de adivinanzas de ingredientes.</p>
            </div>
            
            <div class="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <h3 class="text-xl font-bold mb-2">🌵 Modo Mexicano</h3>
                <p>Preguntas y retos temáticos sobre México y su cultura de bebidas.</p>
            </div>
        </div>
    </div>

    <!-- FAQs -->
    <div id="faqs" class="mt-8">
        <Faqs design="blog" faqs={[
            {
                title: "¿Qué tequila es mejor para el Paloma?",
                content: "El mejor tequila para un Paloma es un tequila blanco (silver o plata) 100% de agave. Marcas como Olmeca, Herradura o Don Julio son excelentes opciones."
            },
            {
                title: "¿Se puede preparar Paloma sin alcohol?",
                content: "¡Sí! Puedes hacer una versión sin alcohol sustituyendo el tequila por agua mineral o limonada. El refresco de toronja y el limón mantendrán el sabor refrescante."
            },
            {
                title: "¿Cuál es la diferencia entre un Paloma y un Margarita?",
                content: "El Paloma se hace con tequila y refresco de toronja, mientras que el Margarita lleva tequila, triple sec y jugo de limón. El Paloma es más refrescante y menos fuerte."
            },
            {
                title: "¿Cómo hacer un Paloma para grupo?",
                content: "Multiplica los ingredientes por el número de personas y sírvelo en una jarra. Pro tip: usa la app Tragos Locos para animar la fiesta con juegos mientras disfrutan sus Palomas."
            }
        ]} />
    </div>

    <!-- CTA Final -->
    <div class="bg-gradient-to-r from-orange-500 to-pink-500 p-8 rounded-xl text-white text-center">
        <h2 class="text-2xl font-bold mb-4">¿Listo para la Mejor Noche de Cócteles? 🎉</h2>
        <p class="mb-6">Descarga Tragos Locos y descubre cientos de juegos para disfrutar con tus Palomas y amigos. ¡La diversión está garantizada!</p>
        <a href="/" class="inline-block bg-white text-orange-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            ¡Descarga Gratis! 🎮
        </a>
    </div>
</section>