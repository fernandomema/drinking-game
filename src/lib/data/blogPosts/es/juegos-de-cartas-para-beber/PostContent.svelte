<script lang="ts">
    import Faqs from "$lib/components/landingBlocks/Faqs.svelte";
</script>

<section class="space-y-8">
    <div class="bg-red-600 p-8 rounded-xl text-white">
        <h1 class="text-4xl font-bold text-center mb-6">Los Mejores Juegos de Cartas para Beber en 2025 🃏🍻</h1>
        <p class="text-xl leading-relaxed">
            ¿Tienes una baraja a mano y quieres animar la fiesta? Estos juegos de cartas son perfectos para que nadie se aburra. Acompáñalos con tu bebida favorita y juega con responsabilidad.
        </p>
    </div>

    <div class="bg-red-50 p-6 rounded-xl">
        <h2 class="text-2xl font-bold mb-4">📑 Contenido</h2>
        <ul class="space-y-2">
            <li><a href="#tragos-locos" class="text-red-600 hover:text-red-800">1. Tragos Locos</a></li>
            <li><a href="#kings-cup" class="text-red-600 hover:text-red-800">2. King's Cup</a></li>
            <li><a href="#presidente" class="text-red-600 hover:text-red-800">3. Presidente</a></li>
            <li><a href="#piramide" class="text-red-600 hover:text-red-800">4. Pirámide</a></li>
            <li><a href="#uno-shots" class="text-red-600 hover:text-red-800">5. UNO Shots</a></li>
            <li><a href="#faqs" class="text-red-600 hover:text-red-800">Preguntas Frecuentes</a></li>
        </ul>
    </div>

    <div id="tragos-locos" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-4">1. Tragos Locos</h2>
        <p>El modo de cartas de Tragos Locos es ideal para grupos grandes. Cada carta trae un reto o pregunta que hará que todos participen.</p>
    </div>

    <div id="kings-cup" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-4">2. King's Cup</h2>
        <p>Utiliza toda la baraja para asignar reglas y beber según el número que salga. ¡Cada carta tiene su efecto!</p>
    </div>

    <div id="presidente" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-4">3. Presidente</h2>
        <p>Un clásico donde el objetivo es deshacerte de tus cartas. El primero en hacerlo se convierte en Presidente y pone las reglas.</p>
    </div>

    <div id="piramide" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-4">4. Pirámide</h2>
        <p>Coloca las cartas en forma de pirámide y adivina si la siguiente será mayor o menor. ¡Falla y bebe!</p>
    </div>

    <div id="uno-shots" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-4">5. UNO Shots</h2>
        <p>Transforma el juego de UNO en un reto de bebidas. Cada vez que robes cartas, toma un trago.</p>
    </div>

    <div id="faqs" class="mt-8">
        <Faqs design="blog" faqs={[
            { title: "¿Qué necesito para jugar?", content: "Solo una baraja de cartas y muchas ganas de divertirte." },
            { title: "¿Puedo adaptar las reglas?", content: "Claro, lo importante es que todos estén de acuerdo y jueguen con responsabilidad." }
        ]} />
    </div>
</section>
