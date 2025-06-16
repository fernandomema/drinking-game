<script lang="ts">
    import Faqs from "$lib/components/landingBlocks/Faqs.svelte";
    import { SchemaGenerator } from "$lib/utils/SchemaGenerator";
</script>

<section class="space-y-8">
    <div class="bg-gradient-to-r from-yellow-500 to-red-600 p-8 rounded-xl text-white">
        <h1 class="text-4xl font-bold text-center mb-6">Juegos para beber en la playa de San Juan: ideas para flipar frente al fuego</h1>
        <p class="text-xl leading-relaxed">
            La noche de San Juan se vive entre <strong>música</strong>, hogueras y el sonido de las olas. Para que tu fiesta sea inolvidable te traemos estos <strong>juegos para beber playa</strong> repletos de <strong>retos noche de San Juan</strong> y <strong>tragos San Juan</strong> que encenderán la diversión.
        </p>
    </div>

    <div class="bg-yellow-50 p-6 rounded-xl">
        <h2 class="text-2xl font-bold mb-4">📑 Contenido</h2>
        <ul class="space-y-2">
            <li><a href="#tragos-locos-playa" class="text-yellow-600 hover:text-yellow-800">1. Tragos Locos Modo Playa</a></li>
            <li><a href="#brindis-orilla" class="text-yellow-600 hover:text-yellow-800">2. Reto del Brindis en la Orilla</a></li>
            <li><a href="#verdad-shot" class="text-yellow-600 hover:text-yellow-800">3. Verdad o Shot Marinero</a></li>
            <li><a href="#carrera-vasos" class="text-yellow-600 hover:text-yellow-800">4. Carrera de Vasos en la Arena</a></li>
            <li><a href="#ronda-dj" class="text-yellow-600 hover:text-yellow-800">5. La Ronda del DJ</a></li>
            <li><a href="#castillos" class="text-yellow-600 hover:text-yellow-800">6. Castillos de Arena con Castigo</a></li>
            <li><a href="#faqs" class="text-yellow-600 hover:text-yellow-800">Preguntas Frecuentes</a></li>
        </ul>
    </div>

    <div id="tragos-locos-playa" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-4">1. Tragos Locos Modo Playa</h2>
        <p>Nuestra app incluye un modo especial para San Juan. Retos con fuego, desafíos para grupos grandes y compatibilidad con música desde tu móvil.</p>
    </div>

    <div id="brindis-orilla" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-4">2. Reto del Brindis en la Orilla</h2>
        <p>Haz un brindis justo cuando la ola toque tus pies. Si derramas la bebida o te adelantas, ¡bebe de nuevo!</p>
    </div>

    <div id="verdad-shot" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-4">3. Verdad o Shot Marinero</h2>
        <p>Adapta las preguntas a temas veraniegos y playeros. Quien se niegue a responder debe tomar un shot.</p>
    </div>

    <div id="carrera-vasos" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-4">4. Carrera de Vasos en la Arena</h2>
        <p>Compitan por equipos llevando un vaso lleno hasta una meta. El que derrame más líquido acaba bebiendo.</p>
    </div>

    <div id="ronda-dj" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-4">5. La Ronda del DJ</h2>
        <p>Pasa la botella al ritmo de la música. Cuando se detenga, quien la tenga en las manos bebe.</p>
    </div>

    <div id="castillos" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-4">6. Castillos de Arena con Castigo</h2>
        <p>Arma equipos y construyan castillos de arena. El que obtenga la menor puntuación por creatividad toma un trago adicional.</p>
    </div>

    <div class="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 rounded-xl text-white text-center">
        <h2 class="text-2xl font-bold mb-4">Lleva la fiesta al siguiente nivel</h2>
        <p class="mb-6">Descarga Tragos Locos y consigue más juegos ideales para la noche de San Juan.</p>
        <a href="/" class="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">¡Descargar Ahora!</a>
    </div>

    <div id="faqs" class="mt-8">
        <Faqs design="blog" faqs={[
            { title: "¿Qué bebidas son típicas de San Juan?", content: "La queimada es la más tradicional, pero la sangría y los cócteles veraniegos también son imprescindibles." },
            { title: "¿Cómo puedo hacer los retos más seguros?", content: "Evita acercarte demasiado al fuego y designa a alguien que no beba para supervisar la fiesta." },
            { title: "¿Qué app recomiendan para animar la playa?", content: "Tragos Locos ofrece modos especiales con música y retos para grupos grandes." }
        ]} />
    </div>
</section>
