<script lang="ts">
    import Faqs from "$lib/components/landingBlocks/Faqs.svelte";
    import { SchemaGenerator } from "$lib/utils/SchemaGenerator";

    const articleSchema = SchemaGenerator.getBreadcrumbs([
        { name: "Blog", url: "https://tragos-locos.servitimo.net/blog/" },
        { name: "Las 5 Mejores Alternativas Gratuitas a Picolo en 2025", url: "https://tragos-locos.servitimo.net/blog/alternativas-gratuitas-picolo" }
    ]);
</script>

<svelte:head>
    {@html `<script type="application/ld+json">${JSON.stringify(articleSchema)}</script>`}
</svelte:head>

<section class="space-y-8">
    <!-- Introducción -->
    <div class="bg-gradient-to-r from-purple-500 to-blue-500 p-8 rounded-xl text-white">
        <h1 class="text-4xl font-bold text-center mb-6">Las 5 Mejores Alternativas Gratuitas a Picolo en 2025 🎮</h1>
        <p class="text-xl leading-relaxed">
            ¿Buscando renovar tus noches de fiesta sin gastar dinero? ¡Estás en el lugar correcto! Te presentamos las mejores alternativas gratuitas a Picolo que harán tus reuniones igual o más divertidas. ¡Todas disponibles en español y completamente gratis! 🎯✨
        </p>
    </div>

    <!-- Índice -->
    <div class="bg-blue-50 p-6 rounded-xl">
        <h2 class="text-2xl font-bold mb-4">📑 En esta guía encontrarás:</h2>
        <ul class="space-y-2">
            <li><a href="#tragos-locos" class="text-blue-600 hover:text-blue-800">1. Tragos Locos - La Alternativa Más Completa</a></li>
            <li><a href="#truth-or-drink" class="text-blue-600 hover:text-blue-800">2. Truth or Drink - Para los Más Atrevidos</a></li>
            <li><a href="#drink-roulette" class="text-blue-600 hover:text-blue-800">3. Drink Roulette - Simple y Efectivo</a></li>
            <li><a href="#truth-or-dare" class="text-blue-600 hover:text-blue-800">4. Truth or Dare - El Clásico Renovado</a></li>
            <li><a href="#drink-o-meter" class="text-blue-600 hover:text-blue-800">5. Drink-O-Meter - Para Grupos Grandes</a></li>
            <li><a href="#comparacion" class="text-blue-600 hover:text-blue-800">Tabla Comparativa</a></li>
            <li><a href="#faqs" class="text-blue-600 hover:text-blue-800">Preguntas Frecuentes</a></li>
        </ul>
    </div>

    <!-- Tragos Locos -->
    <div id="tragos-locos" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-6">🏆 1. Tragos Locos - La Alternativa Más Completa</h2>
        
        <div class="space-y-4">
            <div class="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg">
                <h3 class="text-xl font-semibold mb-2">✨ Características Destacadas:</h3>
                <ul class="list-disc list-inside space-y-2">
                    <li>Completamente gratuito sin compras dentro de la app</li>
                    <li>Más de 1000 retos y preguntas en español</li>
                    <li>Modos especiales para fiestas temáticas</li>
                    <li>Interfaz intuitiva y moderna</li>
                    <li>Modo multijugador local</li>
                </ul>
            </div>

            <p class="text-gray-700">
                Tragos Locos destaca por su variedad de contenido y la posibilidad de jugar sin necesidad de conexión a internet. Además, incluye modos especiales para diferentes ocasiones como Navidad, Halloween o despedidas de soltero.
            </p>
        </div>
    </div>

    <!-- Truth or Drink -->
    <div id="truth-or-drink" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-6">🎯 2. Truth or Drink - Para los Más Atrevidos</h2>
        
        <div class="space-y-4">
            <div class="bg-gradient-to-r from-red-100 to-pink-100 p-4 rounded-lg">
                <h3 class="text-xl font-semibold mb-2">🎮 Lo Mejor:</h3>
                <ul class="list-disc list-inside space-y-2">
                    <li>Preguntas picantes y divertidas</li>
                    <li>Modo para parejas incluido</li>
                    <li>Interfaz minimalista</li>
                    <li>Sin anuncios invasivos</li>
                </ul>
            </div>

            <p class="text-gray-700">
                Perfecto para grupos pequeños que buscan conocerse mejor. Las preguntas están bien pensadas para generar conversaciones interesantes y momentos memorables.
            </p>
        </div>
    </div>

    <!-- Drink Roulette -->
    <div id="drink-roulette" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-6">🎲 3. Drink Roulette - Simple y Efectivo</h2>
        
        <div class="space-y-4">
            <div class="bg-gradient-to-r from-green-100 to-teal-100 p-4 rounded-lg">
                <h3 class="text-xl font-semibold mb-2">🎯 Características:</h3>
                <ul class="list-disc list-inside space-y-2">
                    <li>Ruleta personalizable</li>
                    <li>Modo clásico y modo extremo</li>
                    <li>Perfecto para grupos grandes</li>
                    <li>Interfaz sencilla e intuitiva</li>
                </ul>
            </div>

            <p class="text-gray-700">
                La simplicidad es su fuerte. No necesitas explicar reglas complicadas, solo gira la ruleta y sigue las instrucciones. Ideal para comenzar la noche.
            </p>
        </div>
    </div>

    <!-- Truth or Dare -->
    <div id="truth-or-dare" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-6">💫 4. Truth or Dare - El Clásico Renovado</h2>
        
        <div class="space-y-4">
            <div class="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg">
                <h3 class="text-xl font-semibold mb-2">🌟 Puntos Fuertes:</h3>
                <ul class="list-disc list-inside space-y-2">
                    <li>Versión moderna del juego clásico</li>
                    <li>Diferentes niveles de intensidad</li>
                    <li>Modo familiar disponible</li>
                    <li>Actualización regular de contenido</li>
                </ul>
            </div>

            <p class="text-gray-700">
                Una excelente opción para quienes buscan el formato clásico de verdad o reto pero con un toque moderno y la comodidad de una app.
            </p>
        </div>
    </div>

    <!-- Drink-O-Meter -->
    <div id="drink-o-meter" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-6">🎪 5. Drink-O-Meter - Para Grupos Grandes</h2>
        
        <div class="space-y-4">
            <div class="bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-lg">
                <h3 class="text-xl font-semibold mb-2">💫 Destacados:</h3>
                <ul class="list-disc list-inside space-y-2">
                    <li>Ideal para fiestas grandes</li>
                    <li>Minijuegos incluidos</li>
                    <li>Modo torneo</li>
                    <li>Ranking de jugadores</li>
                </ul>
            </div>

            <p class="text-gray-700">
                Perfecta para eventos grandes donde quieres mantener a todos entretenidos. El sistema de ranking añade un elemento competitivo muy divertido.
            </p>
        </div>
    </div>

    <!-- Tabla Comparativa -->
    <div id="comparacion" class="bg-white p-6 rounded-xl shadow-lg overflow-x-auto">
        <h2 class="text-3xl font-bold mb-6">📊 Tabla Comparativa</h2>
        
        <table class="min-w-full bg-white">
            <thead class="bg-gray-100">
                <tr>
                    <th class="p-4 text-left">Aplicación</th>
                    <th class="p-4 text-center">Idioma Español</th>
                    <th class="p-4 text-center">Sin Anuncios</th>
                    <th class="p-4 text-center">Multijugador</th>
                    <th class="p-4 text-center">Offline</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-t">
                    <td class="p-4">Tragos Locos</td>
                    <td class="p-4 text-center">✅</td>
                    <td class="p-4 text-center">✅</td>
                    <td class="p-4 text-center">✅</td>
                    <td class="p-4 text-center">✅</td>
                </tr>
                <tr class="border-t">
                    <td class="p-4">Truth or Drink</td>
                    <td class="p-4 text-center">✅</td>
                    <td class="p-4 text-center">❌</td>
                    <td class="p-4 text-center">✅</td>
                    <td class="p-4 text-center">❌</td>
                </tr>
                <tr class="border-t">
                    <td class="p-4">Drink Roulette</td>
                    <td class="p-4 text-center">✅</td>
                    <td class="p-4 text-center">❌</td>
                    <td class="p-4 text-center">✅</td>
                    <td class="p-4 text-center">✅</td>
                </tr>
                <tr class="border-t">
                    <td class="p-4">Truth or Dare</td>
                    <td class="p-4 text-center">✅</td>
                    <td class="p-4 text-center">❌</td>
                    <td class="p-4 text-center">✅</td>
                    <td class="p-4 text-center">✅</td>
                </tr>
                <tr class="border-t">
                    <td class="p-4">Drink-O-Meter</td>
                    <td class="p-4 text-center">✅</td>
                    <td class="p-4 text-center">❌</td>
                    <td class="p-4 text-center">✅</td>
                    <td class="p-4 text-center">❌</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- FAQs -->
    <div id="faqs" class="mt-8">
        <Faqs design="blog" faqs={[
            {
                title: "¿Por qué elegir estas alternativas en lugar de Picolo?",
                content: "Estas alternativas ofrecen funcionalidades similares o superiores a Picolo de forma totalmente gratuita. Además, algunas como Tragos Locos funcionan sin internet y no tienen publicidad invasiva."
            },
            {
                title: "¿Son seguras estas aplicaciones?",
                content: "Todas las aplicaciones mencionadas están disponibles en las tiendas oficiales de Android e iOS, lo que garantiza que han pasado los controles de seguridad necesarios."
            },
            {
                title: "¿Cuál es la mejor opción para principiantes?",
                content: "Tragos Locos y Drink Roulette son las opciones más amigables para principiantes debido a su interfaz intuitiva y reglas sencillas."
            },
            {
                title: "¿Se pueden usar sin internet?",
                content: "Tragos Locos, Drink Roulette y Truth or Dare funcionan sin conexión a internet una vez descargadas. Las demás requieren conexión para algunas funciones."
            }
        ]} />
    </div>

    <!-- CTA Final -->
    <div class="bg-gradient-to-r from-purple-500 to-blue-500 p-8 rounded-xl text-white text-center">
        <h2 class="text-2xl font-bold mb-4">¿Listo para Revolucionar tus Fiestas? 🎉</h2>
        <p class="mb-6">Descarga Tragos Locos ahora y descubre por qué es la mejor alternativa gratuita a Picolo. ¡Sin costos ocultos, sin límites en el contenido!</p>
        <a href="/" class="inline-block bg-white text-purple-500 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            ¡Descarga Gratis! 🎮
        </a>
    </div>
</section>
