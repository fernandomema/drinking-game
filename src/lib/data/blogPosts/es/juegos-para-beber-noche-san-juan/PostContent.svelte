<script lang="ts">
    import Faqs from "$lib/components/landingBlocks/Faqs.svelte";
    import { SchemaGenerator } from "$lib/utils/SchemaGenerator";

</script>



<section class="space-y-8">
    <div class="bg-gradient-to-r from-orange-500 to-red-600 p-8 rounded-xl text-white">
        <h1 class="text-4xl font-bold text-center mb-6">15 Juegos para Beber en la Noche de San Juan 2025: La Guía Definitiva 🔥</h1>
        <p class="text-xl leading-relaxed">
            La noche de San Juan es mágica por naturaleza: hogueras, playa, amigos y diversión. Este año 2025, lleva tu celebración al siguiente nivel con los mejores juegos para beber. Ya sea que estés en la playa, junto a una hoguera o en una terraza, aquí tienes las mejores ideas para una noche inolvidable. 🌙✨
        </p>
    </div>

    <!-- Índice -->
    <div class="bg-orange-50 p-6 rounded-xl">
        <h2 class="text-2xl font-bold mb-4">📑 Contenido</h2>
        <ul class="space-y-2">
            <li><a href="#tradicionales" class="text-orange-600 hover:text-orange-800">Juegos Tradicionales de San Juan</a></li>
            <li><a href="#apps" class="text-orange-600 hover:text-orange-800">Apps para Jugar en San Juan</a></li>
            <li><a href="#hoguera" class="text-orange-600 hover:text-orange-800">Juegos Junto a la Hoguera</a></li>
            <li><a href="#playa" class="text-orange-600 hover:text-orange-800">Juegos en la Playa</a></li>
            <li><a href="#consejos" class="text-orange-600 hover:text-orange-800">Consejos de Seguridad</a></li>
            <li><a href="#faqs" class="text-orange-600 hover:text-orange-800">Preguntas Frecuentes</a></li>
        </ul>
    </div>

    <!-- Juegos Tradicionales -->
    <div id="tradicionales" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-6">🎮 Juegos Tradicionales de San Juan</h2>
        <p class="mb-4">Los juegos tradicionales de San Juan cobran un nuevo significado cuando les añadimos el elemento de la bebida. Aquí tienes algunas ideas clásicas renovadas:</p>
        
        <div class="space-y-4">
            <div class="p-4 bg-orange-50 rounded-lg">
                <h3 class="text-xl font-semibold text-orange-800">1. Salto de la Hoguera con Reto</h3>
                <p>Por cada salto exitoso sobre la hoguera (pequeña y segura), otro jugador debe beber. Si no te atreves a saltar, bebes tú.</p>
            </div>
            
            <div class="p-4 bg-orange-50 rounded-lg">
                <h3 class="text-xl font-semibold text-orange-800">2. Verdad o Shot de San Juan</h3>
                <p>El clásico "verdad o reto" pero con preguntas temáticas de San Juan y shots como penitencia.</p>
            </div>
            
            <div class="p-4 bg-orange-50 rounded-lg">
                <h3 class="text-xl font-semibold text-orange-800">3. La Queimada Challenge</h3>
                <p>Recitar el conjuro de la queimada sin equivocarte. ¡Si fallas, bebes!</p>
            </div>
        </div>
    </div>

    <!-- Apps para Jugar -->
    <div id="apps" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-6">📱 Las Mejores Apps para la Noche de San Juan</h2>
        <p class="mb-6">Las apps modernas pueden hacer tu noche de San Juan aún más divertida. Estas son las mejores opciones para 2025:</p>

        <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-gradient-to-br from-purple-500 to-indigo-600 p-6 rounded-xl text-white">
                <h3 class="text-xl font-bold mb-4">🎲 Tragos Locos</h3>
                <p class="mb-4">La app más completa con modo especial para San Juan. Incluye:</p>
                <ul class="list-disc list-inside space-y-2">
                    <li>Retos temáticos de San Juan</li>
                    <li>Modo hoguera</li>
                    <li>Juegos grupales</li>
                    <li>Compatible con Chromecast</li>
                </ul>
            </div>

            <div class="space-y-4">
                <div class="bg-gray-100 p-4 rounded-lg">
                    <h3 class="text-lg font-semibold">🎯 Picolo</h3>
                    <p>Perfecto para grupos pequeños en la playa.</p>
                </div>
                
                <div class="bg-gray-100 p-4 rounded-lg">
                    <h3 class="text-lg font-semibold">👑 King's Cup</h3>
                    <p>Ideal para jugar alrededor de la hoguera.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Juegos junto a la Hoguera -->
    <div id="hoguera" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-6">🔥 Juegos Junto a la Hoguera</h2>
        <p class="mb-4">La hoguera de San Juan crea el ambiente perfecto para estos juegos:</p>
        
        <div class="space-y-4">
            <div class="border-l-4 border-orange-500 pl-4">
                <h3 class="text-xl font-semibold">4. El Guardián del Fuego</h3>
                <p>Un jugador es el "guardián" y debe adivinar quién intenta "robar" el fuego. Si falla, bebe.</p>
            </div>
            
            <div class="border-l-4 border-orange-500 pl-4">
                <h3 class="text-xl font-semibold">5. Historias de Medianoche</h3>
                <p>Cada jugador cuenta una historia de San Juan. Los demás votan si es real o falsa. Quien pierda, bebe.</p>
            </div>
            
            <div class="border-l-4 border-orange-500 pl-4">
                <h3 class="text-xl font-semibold">6. La Rueda de los Deseos</h3>
                <p>Por turnos, pide un deseo para San Juan. Si alguien ya pidió algo similar, ¡a beber!</p>
            </div>
        </div>
    </div>

    <!-- Juegos en la Playa -->
    <div id="playa" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-6">🏖️ Juegos en la Playa</h2>
        <p class="mb-4">La playa ofrece el escenario perfecto para estos juegos de San Juan:</p>
        
        <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
                <h3 class="text-xl font-semibold text-blue-800">7. Búsqueda del Tesoro Nocturna</h3>
                <p>Esconde "tesoros" en la playa. Quien no encuentre nada en 5 minutos, bebe.</p>
            </div>
            
            <div class="bg-blue-50 p-4 rounded-lg">
                <h3 class="text-xl font-semibold text-blue-800">8. La Marea del Trago</h3>
                <p>Juego de adivinanzas sobre el mar y sus criaturas. ¡Las respuestas incorrectas se pagan con tragos!</p>
            </div>
        </div>
    </div>

    <!-- Consejos de Seguridad -->
    <div id="consejos" class="bg-red-50 p-6 rounded-xl">
        <h2 class="text-3xl font-bold text-red-800 mb-4">⚠️ Consejos de Seguridad</h2>
        <ul class="list-disc list-inside space-y-2 text-red-700">
            <li>Mantente hidratado con agua entre bebidas</li>
            <li>Ten cuidado con las hogueras y mantén una distancia segura</li>
            <li>Designa un conductor que no beba</li>
            <li>No te bañes en el mar si has bebido</li>
            <li>Mantén tus pertenencias seguras y lejos del agua</li>
        </ul>
    </div>

    <!-- FAQs -->
    <div id="faqs" class="mt-8">
        <Faqs design="blog" faqs={[
            {
                title: "¿Cuáles son los mejores juegos para beber en la noche de San Juan?",
                content: "Los juegos más populares incluyen versiones especiales de clásicos como 'Verdad o Shot', juegos tradicionales adaptados como 'El Salto de la Hoguera', y apps modernas como Tragos Locos con su modo especial de San Juan."
            },
            {
                title: "¿Qué bebidas son tradicionales en San Juan?",
                content: "La queimada es la bebida más tradicional de San Juan, pero también son populares la sangría, la cerveza y los cócteles veraniegos. Recuerda incluir opciones sin alcohol."
            },
            {
                title: "¿Cómo hacer los juegos más seguros en la playa?",
                content: "Mantén las bebidas alejadas del agua, establece un área segura lejos de las hogueras, y asegúrate de que alguien del grupo se mantenga sobrio para vigilar la seguridad."
            },
            {
                title: "¿Qué apps son mejores para jugar en grupo durante San Juan?",
                content: "Tragos Locos es la mejor opción ya que incluye modos especiales para fiestas en la playa y junto a hogueras, además de ser perfecta para grupos grandes."
            }
        ]} />
    </div>

    <!-- CTA Final -->
    <div class="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 rounded-xl text-white text-center">
        <h2 class="text-2xl font-bold mb-4">¿Listo para una Noche de San Juan Inolvidable? 🌙</h2>
        <p class="mb-6">Descarga Tragos Locos y lleva tus juegos de San Juan al siguiente nivel. ¡Diversión garantizada!</p>
        <a href="/" class="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            ¡Descarga Ahora! 🎮
        </a>
    </div>
</section>