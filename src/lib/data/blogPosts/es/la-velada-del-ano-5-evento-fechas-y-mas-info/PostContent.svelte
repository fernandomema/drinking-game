<script>

    import Faqs from "$lib/components/landingBlocks/Faqs.svelte";

</script>
<section class="mb-8">
    <p class="text-lg text-gray-700">
        La quinta edición de "La Velada del Año" promete ser el evento del año 2025. El 26 de julio, el Estadio de La Cartuja en Sevilla será testigo de los combates más esperados entre las estrellas del streaming. ¡Prepárate para una noche inolvidable! 🥊
    </p>
</section>

<section class="bg-gradient-to-r from-purple-100 to-purple-200 p-8 mb-8 rounded-lg shadow-lg">
    <h2 class="text-4xl font-extrabold text-purple-900 text-center tracking-wide mb-8">Combate Estelar 🌟</h2>
    
    <div class="bg-white p-6 rounded-xl shadow-md mb-8 relative overflow-hidden">
        <div class="flex justify-between items-center relative z-10">
            <div class="w-1/3 text-center">
                <img src="https://tse2.mm.bing.net/th?id=OIP.Zua23YEBitUj2omM0_sxBQHaHa&w=474&h=474&c=7" alt="TheGrefg" class="w-48 h-48 object-cover rounded-full mx-auto border-4 border-red-600 shadow-lg" />
                <h3 class="text-2xl font-bold text-red-600 mt-4">TheGrefg</h3>
                <p class="text-sm text-gray-600">España</p>
            </div>
            
            <div class="w-1/3 flex flex-col items-center justify-center">
                <div class="relative">
                    <div class="absolute -inset-4 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full animate-spin opacity-75 blur-sm"></div>
                    <span class="relative bg-white px-6 py-3 rounded-full text-3xl font-black text-purple-900">VS</span>
                </div>
                <div class="mt-4 text-center">
                    <span class="text-sm font-semibold text-purple-800">26 JULIO 2025</span>
                    <p class="text-xs text-purple-600">Estadio La Cartuja</p>
                </div>
            </div>

            <div class="w-1/3 text-center">
                <img src="/images/velada5/westcol.webp" alt="WestCol" class="w-48 h-48 object-cover rounded-full mx-auto border-4 border-blue-600 shadow-lg" />
                <h3 class="text-2xl font-bold text-blue-600 mt-4">WestCol</h3>
                <p class="text-sm text-gray-600">Colombia</p>
            </div>
        </div>
        <div class="mt-6 text-gray-700 text-center px-4">
            <p class="italic">"El enfrentamiento más esperado de la noche. Dos titanes del streaming se encuentran en el ring."</p>
        </div>
    </div>
</section>

<section class="space-y-6">
    <h2 class="text-3xl font-bold text-purple-900 text-center mb-8">Cartelera Principal 🥊</h2>

    <div class="grid md:grid-cols-2 gap-6">
        {#each [
            {
                "fighter1": { "name": "Pereira", "img": "/images/velada5/pereira.webp", "country": "España" },
                "fighter2": { "name": "Goorgo", "img": "/images/velada5/goorgo.webp", "country": "España" },
                "description": "¡Duelo de titanes en La Velada 5! Pereira llega con su energía explosiva, mientras que Goorgo apuesta por su técnica calculada. ¿Quién se llevará la victoria?"
            },
            {
                "fighter1": { "name": "Perxitaa", "img": "/images/velada5/perxitaa.webp", "country": "España" },
                "fighter2": { "name": "Gaspi", "img": "/images/velada5/gaspi.webp", "country": "Argentina" },
                "description": "La experiencia de Perxitaa se enfrenta a la juventud y la garra de Gaspi. Un choque de generaciones que promete sorpresas en La Velada del Año 5."
            },
            {
                "fighter1": { "name": "RoRo", "img": "/images/velada5/roro.webp", "country": "España" },
                "fighter2": { "name": "Abby", "img": "/images/velada5/abby.webp", "country": "México" },
                "description": "RoRo vs. Abby: una pelea llena de espectáculo, técnica y emoción. Dos estilos opuestos en un combate que nadie se querrá perder."
            },
            {
                "fighter1": { "name": "Andoni", "img": "/images/velada5/andoni.webp", "country": "España" },
                "fighter2": { "name": "Carlos Belcast", "img": "/images/velada5/carlosbelcast.webp", "country": "España" },
                "description": "Andoni y Carlos Belcast, dos creadores emergentes que se medirán en un combate donde la fuerza, el carisma y la estrategia definirán al ganador."
            },
            {
                "fighter1": { "name": "Alana", "img": "/images/velada5/alana.webp", "country": "España" },
                "fighter2": { "name": "AriGeli", "img": "/images/velada5/arigeli.webp", "country": "Argentina" },
                "description": "Duelo de alta intensidad: Alana y AriGeli subirán al ring con toda su determinación. La Velada 5 será testigo de un combate épico."
            },
            {
                "fighter1": { "name": "ViruZz", "img": "/images/velada5/viruzz.webp", "country": "España" },
                "fighter2": { "name": "Tomás Mazza", "img": "/images/velada5/tomasmazza.webp", "country": "Argentina" },
                "description": "ViruZz, con su estilo creativo, se enfrenta a la potencia arrolladora de Tomás Mazza. Un choque de estrategias en La Velada del Año 5."
            }
        ] as fight}
        <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
            <div class="flex items-center justify-between mb-4">
                <div class="text-center w-1/3">
                    <img src={fight.fighter1.img} alt={fight.fighter1.name} 
                         class="w-24 h-24 object-cover rounded-full mx-auto border-2 border-red-500 shadow-md" />
                    <h3 class="text-lg font-bold text-red-600 mt-2">{fight.fighter1.name}</h3>
                    <p class="text-xs text-gray-600">{fight.fighter1.country}</p>
                </div>
                
                <div class="w-1/3 flex justify-center">
                    <span class="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">VS</span>
                </div>

                <div class="text-center w-1/3">
                    <img src={fight.fighter2.img} alt={fight.fighter2.name} 
                         class="w-24 h-24 object-cover rounded-full mx-auto border-2 border-blue-500 shadow-md" />
                    <h3 class="text-lg font-bold text-blue-600 mt-2">{fight.fighter2.name}</h3>
                    <p class="text-xs text-gray-600">{fight.fighter2.country}</p>
                </div>
            </div>
            <p class="text-center text-gray-700 text-sm italic mt-4">{fight.description}</p>
        </div>
        {/each}
    </div>
</section>

<section class="mt-12 text-center text-white">
    <h3 class="text-2xl font-bold mb-6 text-gray-800 ">¡Conoce a los artistas invitados! 🎶</h3>
    <div class="flex flex-wrap justify-center gap-8">
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg w-[300px]">
            <img src="https://link-to-artist-image.jpg" alt="Artista 1" class="rounded-full mb-4 mx-auto w-[120px] h-[120px] object-cover">
            <h4 class="font-bold text-lg">DJ Carlos</h4>
            <p>Con su estilo único de música electrónica, DJ Carlos hará que no puedas dejar de bailar toda la noche.</p>
        </div>
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg w-[300px]">
            <img src="https://link-to-artist-image-2.jpg" alt="Artista 2" class="rounded-full mb-4 mx-auto w-[120px] h-[120px] object-cover">
            <h4 class="font-bold text-lg">Sofia Lopez</h4>
            <p>La increíble Sofia Lopez traerá su mezcla de pop y dance para poner la fiesta a otro nivel.</p>
        </div>
    </div>
</section>

<section class="mt-12 bg-gradient-to-r from-purple-500 to-indigo-600 p-10 rounded-xl shadow-lg text-white">
    <h2 class="text-3xl font-bold mb-6 text-center">¡Disfruta los Entretiempos con Tragos Locos! 🍻</h2>
    
    <p class="text-lg mb-6">
        ¿Qué mejor manera de disfrutar los entretiempos de La Velada que con Tragos Locos? Nuestra app te ofrece:
    </p>

    <ul class="list-disc list-inside space-y-3 mb-8">
        <li>Retos temáticos especiales de boxeo 🥊</li>
        <li>Modo "Velada del Año" con preguntas sobre tus streamers favoritos 🎮</li>
        <li>Juegos perfectos para grupos grandes 👥</li>
        <li>¡Diversión garantizada entre combate y combate! 🎉</li>
    </ul>

    <div class="text-center">
        <a href="/" class="inline-block bg-yellow-400 text-purple-800 py-4 px-8 rounded-xl text-xl font-bold hover:bg-yellow-500 transition-colors">
            ¡Descarga Tragos Locos y Prepárate para La Velada! 🎮
        </a>
    </div>
</section>

<div id="faqs" class="mt-8">
    <Faqs design="blog" faqs={[
        {
            title: "¿Qué es La Velada del Año 2025?",
            content: "La Velada del Año 2025 es el evento más grande del año en el mundo del streaming, donde famosos streamers se enfrentan en combates épicos. El evento tendrá lugar el 26 de julio de 2025 en el Estadio La Cartuja en Sevilla, España. ¡Prepárate para una noche llena de peleas de alto voltaje, sorpresas y momentos inolvidables tanto para los asistentes como para los que lo verán online!"
        },
        {
            title: "¿Quiénes son los luchadores principales de La Velada del Año 2025?",
            content: "Los luchadores principales incluyen a TheGrefg, WestCol, y muchos otros streamers y creadores de contenido muy populares. Cada uno trae su estilo único, lo que promete enfrentamientos emocionantes y variados. ¡No te pierdas las intensas rivalidades y los giros inesperados durante toda la noche!"
        },
        {
            title: "¿Dónde puedo ver La Velada del Año 2025?",
            content: "La Velada del Año 2025 será transmitida online en plataformas populares como Twitch, YouTube y otros servicios de streaming. ¡Podrás disfrutar del evento en vivo desde cualquier parte del mundo!"
        },
        {
            title: "¿Cómo puedo participar en el evento?",
            content: "Aunque solo algunos influencers y streamers estarán en el ring, los fans pueden participar de muchas maneras: uniéndose a comunidades online, jugando a juegos como **Tragos Locos** o apoyando a sus creadores favoritos a través de redes sociales y transmisiones en vivo."
        },
        {
            title: "¿Cuál es el horario del evento?",
            content: "El evento comenzará el **26 de julio de 2025**, con la ceremonia de apertura a las 18:00 CET, seguida de los combates principales que empezarán a las 20:00 CET. ¡Mantente atento a los canales oficiales para conocer el horario exacto y la lista de combates!"
        },
        {
            title: "¿Puedo jugar a juegos de beber durante La Velada del Año?",
            content: "¡Claro! Puedes hacer que tu experiencia sea aún más divertida jugando a juegos de beber con tus amigos. **Tragos Locos** es una opción genial para incluir retos divertidos durante el evento. Elige entre varios modos de juego y mantén la energía alta mientras disfrutas de los combates."
        }
    ]}></Faqs>
</div>

<details class="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
    <summary class="text-2xl font-bold text-purple-900">¿Qué esperar de La Velada del Año 2025? 🎤🥊</summary>
    <p class="text-lg text-gray-700 mt-4">
        La Velada del Año 2025 es mucho más que una serie de combates; es un espectáculo de proporciones épicas. Con luchadores de renombre como **TheGrefg** y **WestCol**, los enfrentamientos prometen ser intensos y emocionantes, cargados de momentos que quedarán grabados en la memoria de los fanáticos. Además, el **Estadio La Cartuja** será el escenario de esta batalla sin igual, un lugar lleno de historia que hará que cada golpe, cada movimiento, sea aún más impactante. Desde el primer campanazo, hasta el último segundo, La Velada 5 será una experiencia inigualable para todos los espectadores, tanto en el estadio como en línea.
    </p>

    <p class="text-lg text-gray-700 mt-4">
        Cada combate de la cartelera está lleno de energía y promesas de grandes momentos. **Pereira** y **Goorgo** se enfrentarán en un duelo lleno de estrategias explosivas, mientras que **Perxitaa** y **Gaspi** pondrán a prueba la juventud contra la experiencia. Otros combates emocionantes como **RoRo** vs. **Abby** aseguran un show lleno de espectáculo, mientras que los nuevos talentos como **Andoni** y **Carlos Belcast** ofrecen una mezcla de innovación y adrenalina en cada movimiento.
    </p>

    <p class="text-lg text-gray-700 mt-4">
        Además, durante los entretiempos, los fans podrán disfrutar de **Tragos Locos**, una app que hará aún más divertida la experiencia, con retos y juegos temáticos relacionados con el boxeo y las peleas de **La Velada del Año**.
    </p>
</details>

<section class="mt-12 p-6 bg-[#4b6cb7] text-white rounded-xl text-center relative">
    <div class="absolute inset-0 bg-[url('https://via.placeholder.com/1200x800.png?text=Circles+Abstract')] opacity-40 bg-cover bg-center"></div>
    <h3 class="text-2xl font-bold mb-6 relative z-10">Consejos para disfrutar de La Velada del Año 🔥</h3>
    <ul class="list-disc text-left mx-auto max-w-[600px] relative z-10">
        <li><strong>Vístete cómodamente:</strong> Estarás de pie y bailando, ¡así que opta por ropa cómoda y calzado adecuado!</li>
        <li><strong>¡Prepárate para la fiesta!</strong> No olvides tu energía, ya que la noche será larga y llena de emociones.</li>
        <li><strong>Llega temprano:</strong> Llegar con tiempo te asegura un buen lugar y te da la oportunidad de socializar desde el inicio.</li>
        <li><strong>Conoce las reglas del evento:</strong> Asegúrate de estar al tanto de las normas de seguridad para tener una noche sin preocupaciones.</li>
        <li><strong>¡Juega con Tragos Locos!</strong> Si eres amante de los juegos para beber, **Tragos Locos** es la app perfecta para acompañar tu noche. Con múltiples modos de juego y una interfaz fácil de usar, ¡será la diversión asegurada entre amigos! Descarga la app antes del evento y prepárate para una experiencia inolvidable. 🍻🎮</li>
    </ul>
</section>


<section class="mt-12 p-6 md:p-10 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-xl shadow-xl text-white text-center">
    <h2 class="text-3xl md:text-4xl font-extrabold mb-6">¡Haz que todos se enteren de La Velada del Año! 🎉</h2>
    <p class="text-base md:text-lg mb-8">
        ¡La Velada del Año está por llegar y es demasiado épica para guardarla solo para ti! Comparte con tus amigos y familiares en tus redes sociales y haz que todos se unan a esta fiesta de acción. ¡Vamos a hacerlo viral! 🚀
    </p>
    <div class="flex flex-wrap justify-center gap-6">
        <a href="https://www.facebook.com/sharer/sharer.php?u=https://tragos-locos.servitimo.net/blog/es/la-velada-del-ano-5-evento-fechas-y-mas-info" target="_blank" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg shadow-lg font-semibold transform transition-all hover:scale-105 flex items-center justify-center w-[160px] md:w-[200px]">
            <span class="iconify tabler--brand-facebook-filled block w-[40px] h-[40px] text-white mr-3"></span>
            Facebook
        </a>
        <a href="https://twitter.com/intent/tweet?url=https://tragos-locos.servitimo.net/blog/es/la-velada-del-ano-5-evento-fechas-y-mas-info&text=¡No te pierdas La Velada del Año 2025!" target="_blank" class="bg-blue-400 hover:bg-blue-500 text-white px-6 py-4 rounded-lg shadow-lg font-semibold transform transition-all hover:scale-105 flex items-center justify-center w-[160px] md:w-[200px]">
            <span class="iconify tabler--brand-x-filled block w-[40px] h-[40px] text-white mr-3"></span>
            X
        </a>
        <a href="https://www.instagram.com/?url=https://tragos-locos.servitimo.net/blog/es/la-velada-del-ano-5-evento-fechas-y-mas-info" target="_blank" class="bg-pink-500 hover:bg-pink-600 text-white px-6 py-4 rounded-lg shadow-lg font-semibold transform transition-all hover:scale-105 flex items-center justify-center w-[160px] md:w-[200px]">
            <span class="iconify tabler--brand-instagram-filled block w-[40px] h-[40px] text-white mr-3"></span>
            Instagram
        </a>
        <a href="https://wa.me/?text=¡No te pierdas La Velada del Año 2025! https://tragos-locos.servitimo.net/blog/es/la-velada-del-ano-5-evento-fechas-y-mas-info" target="_blank" class="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg font-semibold transform transition-all hover:scale-105 flex items-center justify-center w-[160px] md:w-[200px]">
            <span class="iconify tabler--brand-whatsapp-filled block w-[40px] h-[40px] text-white mr-3"></span>
            WhatsApp
        </a>
    </div>
    <p class="mt-6 text-xl italic text-gray-100">
        ¡Comparte ahora y haz que todos vivan la emoción de este evento épico! 💥
    </p>
</section>

    