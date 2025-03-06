<script lang="ts">
    import { _ } from "$lib/locales";

    export let design = 'landing';
    export let faqs =[{
        title: "¿Cómo puedo descargar la app?",
        content: "Puedes conseguir la app en tu tienda de aplicaciones favorita o como PWA desde nuestro sitio web."
    }, {
        title: "¿Qué tipos de juegos ofrece la app?",
        content: "Nuestra app ofrece una variedad de juegos para tus fiestas: Tragos Locos, Preguntas Picantes, Juegos en Equipos, y más."
    }, {
        title: "¿Se puede jugar en grupos grandes?",
        content: "¡Claro! La app está diseñada para adaptarse a cualquier tamaño de grupo, desde pequeños hasta grandes reuniones. Incluso tenemos un modo por equipos"
    }, {
        title: "¿Hay alguna opción de prueba gratis?",
        content: "Sí, ofrecemos una versión de prueba con acceso limitado a algunas de nuestras preguntas y modos de juego."
    }, {
        title: "¿Cuántas personas pueden jugar al mismo tiempo?",
        content: "Puedes jugar con tantas como quieras personas en un mismo juego, ¡el límite lo pone la diversión!"
    }, {
        title: "¿Es seguro para todos los públicos?",
        content: "Nuestra app tiene diferentes modos de juego, algunos de ellos están destinados solo a adultos, y otros son aptos para todo público."
    }, {
        title: "¿Cómo puedo descargar la app?",
        content: "Puedes conseguir la app en tu tienda de aplicaciones favorita o como PWA desde nuestro sitio web."
    }, {
        title: "¿Cuáles son los mejores juegos para beber con amigos?",
        content: "Tragos locos es una de las mejores opciones actualmente para este tipo de juegos."
    },  {
        "title": "Juegos para beber con cartas: ¿Cuál es el mejor?",
        "content": "Los juegos de beber con cartas son un clásico. Tragos Locos destaca porque tiene cientos de tarjetas con retos épicos. ¡Solo necesitas la app y una bebida! 🍻"
    },{
        "title": "Juegos de beber para fiestas grandes",
        "content": "Cuando hay mucha gente, necesitas juegos dinámicos. Tragos Locos es perfecto porque se adapta al número de jugadores y tiene retos para todos. 🔥"
    },{
        "title": "Reglas de los juegos de beber más populares",
        "content": "Cada juego de beber tiene sus reglas, pero si buscas algo rápido y divertido, Tragos Locos lo hace todo por ti con desafíos listos para jugar. 🥂"
    },{
        "title": "Juegos para beber fáciles y rápidos",
        "content": "Si quieres empezar a beber sin complicaciones, prueba Tragos Locos. Solo descárgalo, abre la app y sigue las instrucciones. ¡Listo para la fiesta! 🎊"
    }, {
        "title": "Mejores retos para un juego de beber",
        "content": "Los mejores retos para beber incluyen ‘Bebe si alguna vez…’, ‘Reto del pulgar’ y ‘Verdad o shot’. Tragos Locos tiene estos y muchos más en su app. 😉"
    }, {
        "title": "Juegos para beber sin alcohol: Opciones divertidas",
        "content": "Si quieres jugar sin alcohol, puedes usar bebidas sin alcohol o castigos divertidos en lugar de tragos. Tragos Locos permite jugar sin alcohol sin perder la diversión. 🍹"
    }, {
        "title": "Mejores juegos para beber con cerveza",
        "content": "Los juegos con cerveza son los más populares. Prueba Tragos Locos para un juego interactivo o ‘Flip Cup’ y ‘Beer Pong’ para algo más físico. 🍺"
    }, {
        "title": "Cómo hacer un juego de beber casero",
        "content": "Puedes crear tu propio juego con papel y lápiz o usar una app como Tragos Locos, que ya tiene todo listo para que solo te preocupes de beber y reír. 😆"
    }, {
        "title": "Juegos para beber para parejas: Ideas divertidas",
        "content": "Si sois solo dos, Tragos Locos tiene tarjetas perfectas para parejas. También podéis probar ‘Yo Nunca Nunca’ o ‘Verdad o Shot’ versión romántica. ❤️"
    }]

    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => {
            return {
                "@type": "Question",
                "name": faq.title,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.content
                }
            }
        }),
    }
</script>

{#if design == 'landing'}
    <section class="py-16">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-extrabold text-center mb-6 text-gray-800 sm:text-4xl">Preguntas Frecuentes</h2>
            <p class="text-center text-lg text-gray-600 mb-8">Resuelve tus dudas aquí. Si tienes más preguntas, no dudes en contactarnos.</p>
            <div class="space-y-6">
                {#each faqs as faq}
                    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h3 class="text-lg font-semibold text-purple-600">{faq.title}</h3>
                        <p class="mt-2 text-sm text-gray-600">{faq.content}</p>
                    </div>
                {/each}
            </div>
        </div>
    </section>
{:else}
    <section class="">
        <h3 class="text-2xl font-semibold text-purple-800">{ $_('faqs.title') }</h3>
        <div class="space-y-2 mt-4 w-full">
            {#each faqs as faq}
                <div class="border rounded-lg p-4">
                    <button class="w-full text-left font-semibold text-lg flex justify-between items-center" onclick="this.nextElementSibling.classList.toggle('hidden')">
                        {faq.title}
                        <span class="ml-2">&#9662;</span>
                    </button>
                    <p class="mt-1 hidden text-gray-600">{faq.content}</p>
                </div>
            {/each}
        </div>
    </section>
{/if}

<svelte:head>
    {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>