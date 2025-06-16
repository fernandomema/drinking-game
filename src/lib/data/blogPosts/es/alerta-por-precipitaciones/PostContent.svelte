<script lang="ts">
    import Faqs from "$lib/components/landingBlocks/Faqs.svelte";
</script>

<section class="space-y-8">
    <div class="bg-blue-600 p-8 rounded-xl text-white">
        <h1 class="text-4xl font-bold text-center mb-6">Alerta por Precipitaciones</h1>
        <p class="text-xl leading-relaxed">
            Las <strong>alertas por precipitaciones</strong> se emiten cuando se
            espera lluvia intensa en un corto período de tiempo. Conoce cómo
            prepararte y qué herramientas pueden ayudarte a mantenerte a salvo.
        </p>
    </div>

    <div class="bg-blue-50 p-6 rounded-xl">
        <h2 class="text-2xl font-bold mb-4">¿Qué Significa una Alerta por Precipitaciones?</h2>
        <p>
            Indica que las condiciones atmosféricas podrían generar lluvias
            fuertes capaces de provocar inundaciones repentinas. Es importante
            seguir las recomendaciones de protección civil y mantenerse informado.
        </p>
    </div>

    <div class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-2xl font-bold mb-4">Consejos para Mantenerte Seguro</h2>
        <ul class="list-disc list-inside space-y-2">
            <li>Revisa los pronósticos locales y sigue las noticias.</li>
            <li>Evita transitar por zonas propensas a inundaciones.</li>
            <li>Ten a mano un kit de emergencia con linterna y baterías.</li>
            <li>Descarga aplicaciones que envíen notificaciones de clima.</li>
        </ul>
    </div>

    <div class="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-xl text-white text-center">
        <h2 class="text-2xl font-bold mb-4">Mantente Informado</h2>
        <p>
            Utiliza fuentes confiables y aplicaciones de alertas para recibir
            actualizaciones en tiempo real sobre la situación meteorológica.
        </p>
    </div>

    <div class="bg-blue-100 p-6 rounded-xl">
        <h2 class="text-2xl font-bold mb-4">Tragos Locos para Pasar la Tormenta</h2>
        <p>
            Si la lluvia te obliga a quedarte en casa, aprovecha para organizar una
            partida de <strong>Tragos Locos</strong> mientras preparas un cóctel
            sencillo como la <em>Lluvia Tropical</em>. Así mantienes el ánimo
            en alto sin ignorar las recomendaciones de seguridad.
        </p>
        <p>
            Recuerda beber con moderación y seguir pendiente de las actualizaciones
            meteorológicas antes de salir.
        </p>
    </div>

    <div class="mt-8" id="faqs">
        <Faqs design="blog" faqs={[
            {
                title: "¿Quién emite las alertas por precipitaciones?",
                content: "Generalmente las autoridades meteorológicas locales o nacionales."
            },
            {
                title: "¿Qué debo hacer si se pronostican inundaciones?",
                content: "Sigue las indicaciones de evacuación y evita conducir por zonas anegadas."
            },
            {
                title: "¿Qué apps de clima recomiendan?",
                content: "Cualquier app confiable que envíe notificaciones en tiempo real puede ser útil."
            }
        ]} />
    </div>
</section>
