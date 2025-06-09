<script lang="ts">
    import Faqs from "$lib/components/landingBlocks/Faqs.svelte";
    import { SchemaGenerator } from "$lib/utils/SchemaGenerator";

    const articleSchema = SchemaGenerator.getBreadcrumbs([
        { name: "Blog", url: "https://tragos-locos.servitimo.net/blog/" },
        { name: "100 preguntas hot para jugar con tus amigos", url: "https://tragos-locos.servitimo.net/blog/preguntas-hot-para-beber" }
    ]);
</script>

<svelte:head>
    {@html `<script type="application/ld+json">${JSON.stringify(articleSchema)}</script>`}
</svelte:head>

<section class="space-y-8">
    <div class="bg-gradient-to-r from-red-500 to-pink-600 p-8 rounded-xl text-white">
        <h1 class="text-4xl font-bold text-center mb-6">100 preguntas hot para jugar con tus amigos 🔥</h1>
        <p class="text-xl leading-relaxed">
            Prepárate para subir la temperatura con estas <strong>preguntas hot para beber</strong>. 
            Úsalas en tus fiestas o reuniones para conocerse mejor y reír sin parar.
        </p>
    </div>

    <div class="bg-pink-50 p-6 rounded-xl">
        <h2 class="text-2xl font-bold mb-4">Contenido</h2>
        <ul class="space-y-2">
            <li><a href="#hielo" class="text-pink-600 hover:text-pink-800">Rompe el hielo</a></li>
            <li><a href="#picantes" class="text-pink-600 hover:text-pink-800">Preguntas picantes</a></li>
            <li><a href="#atrevidas" class="text-pink-600 hover:text-pink-800">Preguntas atrevidas</a></li>
            <li><a href="#extremas" class="text-pink-600 hover:text-pink-800">Preguntas extremas</a></li>
            <li><a href="#ultrahot" class="text-pink-600 hover:text-pink-800">Ultra hot</a></li>
        </ul>
    </div>

    <div id="hielo" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-6">Rompe el hielo</h2>
        <ul class="list-disc list-inside space-y-2">
            <li>¿Cuál fue tu primer beso?</li>
            <li>¿Qué famoso te parece más atractivo?</li>
            <li>¿Cuál ha sido tu peor cita?</li>
            <li>¿Qué prenda de ropa te hace sentir sexy?</li>
            <li>¿Cuál es el cumplido que más te gusta recibir?</li>
            <li>¿Qué parte de tu cuerpo te gusta más?</li>
            <li>¿Con qué personaje ficticio tendrías una cita?</li>
            <li>¿Alguna vez te han pillado mirando a alguien?</li>
            <li>¿Cuál es tu bebida favorita para animarte?</li>
            <li>¿Qué canción no puedes dejar de bailar cuando suena?</li>
            <li>¿Si pudieras vivir en una película, cuál sería?</li>
            <li>¿Has enviado mensajes estando borracho?</li>
            <li>¿Cuál es tu adicción culpable?</li>
            <li>¿Has ligado usando apps de citas?</li>
            <li>¿A qué edad fue tu primer amor?</li>
            <li>¿Prefieres las fiestas grandes o las reuniones pequeñas?</li>
            <li>¿Cuál es tu cóctel preferido para comenzar la noche?</li>
            <li>¿Qué harías si ganaras la lotería?</li>
            <li>¿Tienes algún talento oculto?</li>
            <li>¿Cuál es el peor regalo que has recibido?</li>
        </ul>
    </div>

    <div id="picantes" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-6">Preguntas picantes</h2>
        <ul class="list-disc list-inside space-y-2">
            <li>¿Te gusta que te digan piropos en público?</li>
            <li>¿Cuál ha sido tu sueño más atrevido?</li>
            <li>¿Has enviado alguna foto comprometedora?</li>
            <li>¿Te atreverías a besar a alguien del mismo sexo?</li>
            <li>¿Cuál es tu fantasía secreta?</li>
            <li>¿Has usado disfraces para sorprender a tu pareja?</li>
            <li>¿Qué parte de otra persona te atrae más?</li>
            <li>¿Has tenido una aventura de una noche?</li>
            <li>¿Cuál es tu mayor fantasía en una fiesta?</li>
            <li>¿Te gusta el sexting?</li>
            <li>¿Cómo reaccionarías si te propusieran un trío?</li>
            <li>¿Has tenido citas con más de una persona a la vez?</li>
            <li>¿Cuál es tu zona erógena favorita?</li>
            <li>¿Has soñado con alguno de tus amigos?</li>
            <li>¿Cuál es tu recuerdo más hot?</li>
            <li>¿Te consideras buen besador/a?</li>
            <li>¿Has besado a más de un amigo durante una misma noche?</li>
            <li>¿Qué tipo de caricias te enloquecen?</li>
            <li>¿Has fantaseado con alguien que está en esta habitación?</li>
            <li>¿Prefieres dar o recibir placer?</li>
        </ul>
    </div>

    <div id="atrevidas" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-6">Preguntas atrevidas</h2>
        <ul class="list-disc list-inside space-y-2">
            <li>¿Alguna vez te han pillado en un momento íntimo?</li>
            <li>¿Has ido a una playa nudista?</li>
            <li>¿Cuál ha sido tu mayor locura por amor?</li>
            <li>¿Te has enamorado de alguien comprometido?</li>
            <li>¿Serías infiel si supieras que no te van a descubrir?</li>
            <li>¿Cuál es tu pensamiento prohibido más recurrente?</li>
            <li>¿Harías un tatuaje en honor a alguien?</li>
            <li>¿Has enviado mensajes a la persona equivocada?</li>
            <li>¿Cuál ha sido tu mayor mentira para conquistar a alguien?</li>
            <li>¿Te has hecho pasar por otra persona en redes sociales?</li>
            <li>¿Cuál es tu recuerdo más ardiente de una fiesta?</li>
            <li>¿Has tenido relaciones en un lugar público?</li>
            <li>¿Cuál es tu peor hábito en la cama?</li>
            <li>¿Has usado juguetes en tus encuentros?</li>
            <li>¿Te gusta dominar o que te dominen?</li>
            <li>¿Cuál es la mayor diferencia de edad con alguien que has besado?</li>
            <li>¿Tendrías una cita con un ex?</li>
            <li>¿Cuál es tu mayor tabú?</li>
            <li>¿Has probado juegos de roles?</li>
            <li>¿Lo más loco que has hecho para impresionar a alguien?</li>
        </ul>
    </div>

    <div id="extremas" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-6">Preguntas extremas</h2>
        <ul class="list-disc list-inside space-y-2">
            <li>¿Te animarías a un intercambio de parejas?</li>
            <li>¿Cuál es tu límite en la intimidad?</li>
            <li>¿Has filmado alguna de tus aventuras?</li>
            <li>¿Aceptarías una proposición indecente por dinero?</li>
            <li>¿Cuál ha sido tu mayor secreto revelado en una fiesta?</li>
            <li>¿Has besado a alguien solo por interés?</li>
            <li>¿Qué no harías ni por todo el dinero del mundo?</li>
            <li>¿Alguna vez te arrepentiste al día siguiente?</li>
            <li>¿Aceptarías un reto de besar a quien el grupo elija?</li>
            <li>¿Hasta dónde llegarías por un reto?</li>
            <li>¿Has engañado a alguien para obtener algo a cambio?</li>
            <li>¿Cuál es tu experiencia más alocada con extraños?</li>
            <li>¿Te han propuesto una relación abierta?</li>
            <li>¿Has enviado un mensaje subido de tono al número equivocado?</li>
            <li>¿Cuál es el secreto que todavía no has contado a nadie?</li>
            <li>¿Participarías en un reality show de citas?</li>
            <li>¿Cuál es la mayor cantidad de copas que has tomado en una noche?</li>
            <li>¿Te has despertado en un lugar desconocido después de una fiesta?</li>
            <li>¿Has perdido amistades por un amorío?</li>
            <li>¿Serías capaz de dar un beso apasionado a la persona que tienes enfrente ahora mismo?</li>
        </ul>
    </div>

    <div id="ultrahot" class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-3xl font-bold mb-6">Ultra hot</h2>
        <ul class="list-disc list-inside space-y-2">
            <li>¿Qué es lo más atrevido que has hecho en una cita?</li>
            <li>¿Cuál es tu fantasía que nunca has confesado?</li>
            <li>¿Tienes alguna experiencia en un club nocturno?</li>
            <li>¿Te atreverías a hacer un striptease?</li>
            <li>¿Cuál es tu lugar favorito para los encuentros íntimos?</li>
            <li>¿Qué experiencia te gustaría repetir sin pensarlo?</li>
            <li>¿Alguna vez te han sorprendido sin ropa?</li>
            <li>¿Cuál es la locura más grande que has hecho por pasión?</li>
            <li>¿Te gustaría probar algo completamente nuevo en la cama?</li>
            <li>¿Cuál fue tu momento más vergonzoso durante un encuentro?</li>
            <li>¿Has tenido pensamientos prohibidos sobre un profesor o jefe?</li>
            <li>¿Participarías en una fiesta de intercambio?</li>
            <li>¿Qué prenda de ropa interior te gusta más usar?</li>
            <li>¿Has deseado a la pareja de un amigo/a?</li>
            <li>¿Cuál es el peor lugar donde has despertado con resaca?</li>
            <li>¿Te animas a un juego de roles muy subido de tono?</li>
            <li>¿Cuál ha sido tu mensaje más atrevido?</li>
            <li>¿Has mezclado trabajo y placer?</li>
            <li>¿Cuál es tu recuerdo más ardiente de vacaciones?</li>
            <li>¿Te atreves a hacer una videollamada picante?</li>
        </ul>
    </div>

    <div class="bg-gradient-to-r from-red-500 to-pink-600 p-8 rounded-xl text-white text-center">
        <h2 class="text-2xl font-bold mb-4">¿Listo para subir la temperatura? 🔥</h2>
        <p class="mb-6">Descarga Tragos Locos y consigue cientos de preguntas y retos más.</p>
        <a href="/" class="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">¡Descargar Ahora!</a>
    </div>

    <Faqs design="blog" faqs={[
        {title: "¿Cómo jugar a preguntas hot?", content: "Tomen turnos para preguntar. Si alguien no quiere responder, debe beber."},
        {title: "¿Se puede jugar sin alcohol?", content: "Claro, puedes usar castigos divertidos o bebidas sin alcohol en lugar de tragos."}
    ]} />
</section>
