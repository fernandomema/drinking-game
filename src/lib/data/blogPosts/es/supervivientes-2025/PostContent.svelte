<script lang="ts">
    import Faqs from "$lib/components/landingBlocks/Faqs.svelte";
</script>

<section class="space-y-8">
    <div class="bg-gradient-to-r from-yellow-400 to-orange-500 p-8 rounded-xl text-white">
        <h1 class="text-4xl font-bold text-center mb-6">Supervivientes 2025: La fiesta empieza en la isla 🎉</h1>
        <p class="text-xl leading-relaxed">
            <strong>Supervivientes 2025</strong> está arrasando en las tendencias de búsqueda. Si quieres darle un giro divertido a cada gala,
            acompáñala con <strong>Tragos Locos</strong> y convierte la noche en un evento inolvidable.
        </p>
    </div>

    <div class="bg-yellow-50 p-6 rounded-xl">
        <h2 class="text-2xl font-bold mb-4">¿Qué nos espera en Supervivientes 2025?</h2>
        <p>La edición de este año promete desafíos extremos, localizaciones espectaculares y más drama que nunca. Desde saltos al vacío hasta duras pruebas de resistencia, los concursantes tendrán que darlo todo para sobrevivir.</p>
        <p>No te pierdas ni un detalle y mantén la emoción en casa con Tragos Locos. La app te permite crear reglas personalizadas basadas en lo que sucede en la isla para que cada emisión sea única.</p>
    </div>

    <div class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-4">Convierte cada gala en un juego de beber</h2>
        <p class="text-lg mb-2">Reúne a tus amigos y establece algunas reglas sencillas mientras sigues el reality. Aquí tienes algunas ideas:</p>
        <ul class="list-disc list-inside space-y-2">
            <li>Bebe cada vez que un concursante pierde la prueba de recompensa.</li>
            <li>Si surge una discusión en la playa, todos toman un trago.</li>
            <li>Brinda cuando tu participante favorito gane la inmunidad.</li>
        </ul>
    </div>

    <div class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-4">Organiza la quedada perfecta</h2>
        <ol class="list-decimal list-inside space-y-2">
            <li>Prepara bebidas variadas y algo de picar.</li>
            <li>Descarga Tragos Locos en tu móvil y selecciona el modo «Reality».</li>
            <li>Acordad las reglas de cada episodio antes de que empiece.</li>
            <li>Comentad en vivo cada momento y cumplid los retos de la app.</li>
            <li>Compartid la experiencia en redes para que otros se unan.</li>
        </ol>
    </div>

    <div class="bg-yellow-100 p-6 rounded-xl">
        <h2 class="text-3xl font-bold mb-4">Retos inspirados en la isla</h2>
        <ul class="list-disc list-inside space-y-2">
            <li>Bebe un sorbo cada vez que alguien mencione hambre.</li>
            <li>Cuando un concursante llore, todos brindan por él.</li>
            <li>Si hay una prueba en el agua, escoge a alguien para un reto «mojado».</li>
            <li>Cuando alguien se salve de la expulsión, inventad un brindis.</li>
            <li>Si la gala acaba en polémica, rematad con un «fondo blanco».</li>
        </ul>
    </div>
    <div class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-4">¿Por qué elegir Tragos Locos?</h2>
        <p>Además de miles de cartas, Tragos Locos incluye modos temáticos que se adaptan a cualquier evento televisivo. Actívalo junto a Supervivientes y sorprende a tus invitados con retos que van de lo simple a lo extremo.</p>
        <p>La aplicación funciona sin conexión, así que puedes llevarla a la playa o al camping para ver la gala. También es compatible con Chromecast para que todos sigan el ritmo desde la pantalla grande.</p>
    </div>


    <div id="faqs" class="mt-8">
        <Faqs design="blog" faqs={[
            { title: "¿Qué es Supervivientes 2025?", content: "Es la nueva edición del reality de supervivencia donde varios famosos compiten en una isla remota." },
            { title: "¿Cómo me ayuda Tragos Locos a disfrutar del programa?", content: "La app ofrece retos y preguntas personalizadas para que cada gala sea más divertida." },
            { title: "¿Tragos Locos es gratuita?", content: "Sí, puedes descargar la versión básica sin coste y desbloquear contenido extra desde la app." }
        ]} />
    </div>

    <div class="bg-orange-600 text-white p-8 rounded-xl text-center space-y-4">
        <h2 class="text-2xl font-bold">Descarga Tragos Locos y crea tus propios retos</h2>
        <p>Personaliza tus reglas en la app y añade desafíos nuevos cada semana. ¡La diversión continúa incluso después de la expulsión!</p>
        <a href="/" class="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Descargar App</a>
    </div>
</section>
