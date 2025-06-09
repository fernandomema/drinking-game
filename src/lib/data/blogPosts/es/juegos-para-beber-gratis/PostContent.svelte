<script lang="ts">
    import Faqs from "$lib/components/landingBlocks/Faqs.svelte";
</script>

<section class="space-y-8">
    <div class="bg-purple-600 p-8 rounded-xl text-white">
        <h1 class="text-4xl font-bold text-center mb-6">10 Juegos para Beber con tus Amigos (Gratis)</h1>
        <p class="text-xl leading-relaxed">
            Si buscas <strong>juegos para beber</strong> que no cuesten nada, estás en el lugar correcto. Desde opciones clásicas hasta apps modernas como <strong>Tragos Locos</strong>, estas ideas mantendrán la diversión toda la noche. ¡Juega con responsabilidad! 🍻
        </p>
    </div>

    <div class="bg-purple-50 p-6 rounded-xl">
        <h2 class="text-2xl font-bold mb-4">📑 Contenido</h2>
        <ul class="space-y-2">
            <li><a href="#tragos-locos" class="text-purple-600 hover:text-purple-800">1. Tragos Locos</a></li>
            <li><a href="#yo-nunca" class="text-purple-600 hover:text-purple-800">2. Yo Nunca Nunca</a></li>
            <li><a href="#verdad-shot" class="text-purple-600 hover:text-purple-800">3. Verdad o Shot</a></li>
            <li><a href="#beer-pong" class="text-purple-600 hover:text-purple-800">4. Beer Pong</a></li>
            <li><a href="#flip-cup" class="text-purple-600 hover:text-purple-800">5. Flip Cup</a></li>
            <li><a href="#kings-cup" class="text-purple-600 hover:text-purple-800">6. King's Cup</a></li>
            <li><a href="#pyramid" class="text-purple-600 hover:text-purple-800">7. Pirámide</a></li>
            <li><a href="#roulette" class="text-purple-600 hover:text-purple-800">8. Ruleta de Shots</a></li>
            <li><a href="#most-likely" class="text-purple-600 hover:text-purple-800">9. Most Likely To</a></li>
            <li><a href="#barman" class="text-purple-600 hover:text-purple-800">10. Barman Imposible</a></li>
            <li><a href="#faqs" class="text-purple-600 hover:text-purple-800">Preguntas Frecuentes</a></li>
        </ul>
    </div>

    <div id="tragos-locos" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-4">1. Tragos Locos</h2>
        <p>App gratuita con cientos de retos y preguntas en español. Perfecta para grupos grandes y pequeños.</p>
    </div>

    <div id="yo-nunca" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-4">2. Yo Nunca Nunca</h2>
        <p>Cada jugador lanza una frase comenzando con "Yo nunca". Quien sí lo haya hecho bebe un trago.</p>
    </div>

    <div id="verdad-shot" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-4">3. Verdad o Shot</h2>
        <p>Una versión adulta de Verdad o Reto. Si no quieres responder, te toca beber.</p>
    </div>

    <div id="beer-pong" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-4">4. Beer Pong</h2>
        <p>Clásico entre clásicos. Solo necesitas una mesa, vasos y una pelota de ping-pong.</p>
    </div>

    <div id="flip-cup" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-4">5. Flip Cup</h2>
        <p>Forma dos equipos. Bebe, voltea el vaso con un solo movimiento y pasa al siguiente compañero.</p>
    </div>

    <div id="kings-cup" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-4">6. King's Cup</h2>
        <p>Con una baraja de cartas se asignan reglas especiales a cada número. Ideal para fiestas.</p>
    </div>

    <div id="pyramid" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-4">7. Pirámide</h2>
        <p>Coloca cartas en forma de pirámide. Adivina si la siguiente carta será mayor o menor para evitar beber.</p>
    </div>

    <div id="roulette" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-4">8. Ruleta de Shots</h2>
        <p>Utiliza una ruleta o una app para determinar quién bebe. Sencillo y emocionante.</p>
    </div>

    <div id="most-likely" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-4">9. Most Likely To</h2>
        <p>Los jugadores votan quién es más propenso a realizar alguna acción. El elegido bebe.</p>
    </div>

    <div id="barman" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-4">10. Barman Imposible</h2>
        <p>Cada ronda un jugador inventa una mezcla extraña. Si el resto la aprueba, él decide quién bebe.</p>
    </div>

    <div id="faqs" class="mt-8">
        <Faqs design="blog" faqs={[
            {
                title: "¿Cuál es el mejor juego para grupos grandes?",
                content: "Tragos Locos permite añadir tantos jugadores como quieras y ofrece retos variados."
            },
            {
                title: "¿Es posible jugar sin alcohol?",
                content: "Sí, sustituye las bebidas alcohólicas por refrescos o castigos divertidos."
            },
            {
                title: "¿Dónde descargo Tragos Locos?",
                content: "Visita nuestra página principal o busca la app en tu tienda habitual."
            }
        ]} />
    </div>

    <div class="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 rounded-xl text-white text-center">
        <h2 class="text-2xl font-bold mb-4">¿Listo para probar más juegos?</h2>
        <a href="/" class="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Descargar Tragos Locos
        </a>
    </div>
</section>
