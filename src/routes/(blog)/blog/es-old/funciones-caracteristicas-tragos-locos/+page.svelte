<script lang="ts">
    import BlogPost from '$lib/components/BlogPost.svelte';
  </script>
  
  <BlogPost
      title="Las Funciones Más Características de Tragos Locos"
      seoTitle="funciones-caracteristicas-tragos-locos"
      description="Descubre las funciones más destacadas de Tragos Locos, como la opción de dislike para reportar preguntas, los modos de juego estacionales con cartas tematizadas, y muchas sorpresas más."
      date={new Date("2025-02-27")}
      image="/blog/tragos-locos-functions/cover.webp"
      tags={["Tragos Locos", "funciones", "juegos para beber", "modos de juego estacionales"]}
      lang="es"
  >
      <section class="mb-8">
          <p class="text-lg text-gray-700">
              En *Tragos Locos*, no solo nos importa la diversión, sino también la calidad del contenido. Por eso, hemos implementado funciones que realmente marcan la diferencia. ¡Aquí te las presentamos con estilo!
          </p>
      </section>
  
      <!-- Función de Dislike -->
      <section class="bg-gradient-to-r from-purple-400 to-purple-600 p-8 mb-8 rounded-lg shadow-lg space-y-8 transform hover:scale-105 transition-transform duration-300">
          <h2 class="text-4xl font-extrabold text-white text-center tracking-wide hover:text-purple-300 transition-colors">Función de Dislike 🚫</h2>
          
          <p class="text-lg text-black">
              ¿No te gustan ciertas preguntas? ¡No hay problema! Con la función de "dislike", podrás reportar las preguntas que no te convenzan. Las preguntas más rechazadas serán eliminadas, manteniendo solo las mejores en la app.
          </p>
          <div class="text-center">
              <img src="/blog/tragos-locos-functions/dislike-feature.webp" alt="Función de dislike en la app" class="w-full max-w-3xl rounded-lg shadow-xl border-4 border-purple-500" />
          </div>
          
      </section>
  
      <!-- Modos de Juego Estacionales -->
      <section class="bg-gradient-to-r from-purple-500 to-pink-500 p-8 mb-8 rounded-lg shadow-lg space-y-8 transform hover:scale-105 transition-transform duration-300">
          <h2 class="text-4xl font-extrabold text-white text-center tracking-wide hover:text-purple-300 transition-colors">Modos de Juego Estacionales 🎉</h2>
  
          <p class="text-lg text-black">
              ¡Cada temporada trae nuevas sorpresas! Los modos de juego estacionales te ofrecen cartas tematizadas según la época del año. Desde Halloween hasta Navidad, siempre tendrás nuevas cartas para hacer que tus fiestas sean aún más divertidas.
          </p>
          <div class="text-center">
              <img src="/blog/tragos-locos-functions/seasonal-modes.webp" alt="Modos de juego estacionales en la app" class="w-full max-w-3xl rounded-lg shadow-xl border-4 border-pink-500" />
          </div>
      </section>
  
      <!-- Nueva Función: Cartas Personalizadas -->
      <section class="bg-gradient-to-r from-indigo-400 to-blue-500 p-8 mb-8 rounded-lg shadow-lg space-y-8 transform hover:scale-105 transition-transform duration-300">
          <h2 class="text-4xl font-extrabold text-white text-center tracking-wide hover:text-indigo-200 transition-colors">Cartas Personalizadas 🎨</h2>
          
          <p class="text-lg text-black">
              *Tragos Locos* te permite crear tus propias cartas personalizadas. Añade preguntas o retos únicos para tu grupo de amigos y haz de tu juego algo completamente único. ¡Hazlo a tu manera!
          </p>
          <div class="text-center">
              <img src="/blog/tragos-locos-functions/custom-cards.webp" alt="Cartas personalizadas en la app" class="w-full max-w-3xl rounded-lg shadow-xl border-4 border-indigo-500" />
          </div>
      </section>
  
      <!-- Nueva Función: Estadísticas de Juego -->
      <section class="bg-gray-100  p-8 mb-8 rounded-lg shadow-lg space-y-8 transform hover:scale-105 transition-transform duration-300">
          <h2 class="text-4xl font-extrabold text-gray-700 text-center tracking-wide hover:text-green-300 transition-colors">Estadísticas de Juego 📊</h2>
          
          <p class="text-lg text-black">
              Ahora podrás ver un resumen de tus juegos. ¿Cuántos tragos has bebido? ¿Cuántas rondas has jugado? Con las estadísticas, puedes llevar un registro de tu progreso en cada sesión y compararlo con tus amigos.
          </p>
          <div class="text-center">
              <img src="/blog/tragos-locos-functions/game-stats.webp" alt="Estadísticas de juego en la app" class="w-full max-w-3xl rounded-lg shadow-xl border-4 border-teal-500" />
          </div>
      </section>
  
      <!-- CTA Descarga -->
      <section class="text-center bg-gradient-to-r from-purple-500 to-indigo-600 p-10 rounded-xl shadow-lg mb-12 space-y-6 transform hover:scale-105 transition-transform duration-300">
          <h2 class="text-4xl font-extrabold text-white tracking-tight">
              ¿Listo para disfrutar de estas funciones? 🍻
          </h2>
          <p class="text-xl text-white opacity-90">
              ¡Descarga *Tragos Locos* ahora y haz que tus fiestas sean inolvidables con estas increíbles funciones! 🎉
          </p>
          <div class="space-y-4">
              <a href="/" class="inline-block bg-yellow-400 text-purple-800 py-4 px-8 rounded-xl text-2xl font-extrabold transition-transform transform hover:scale-105 hover:bg-yellow-500 shadow-lg">
                  🚀 ¡Descarga Tragos Locos Ahora!
              </a>
          </div>
      </section>
  </BlogPost>
  