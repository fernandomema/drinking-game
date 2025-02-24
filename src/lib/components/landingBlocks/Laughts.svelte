<script>
    import { onMount } from 'svelte';
  
    let count = 0;
    let loading = false;
    export let showButton = false;
  
    // Función para obtener el contador desde la API
    const getCounter = async () => {
      loading = true;
      try {
        const res = await fetch('https://api.counterapi.dev/v1/tragos-locos/laughts');
        const data = await res.json();
        count = data.count || 0;
      } catch (error) {
        console.error('Error fetching counter:', error);
      }
      loading = false;
    };
  
    // Función para incrementar el contador
    const incrementCounter = async () => {
      loading = true;
      try {
        await fetch('https://api.counterapi.dev/v1/tragos-locos/laughts/up', { method: 'GET' });
        getCounter(); // Actualizar el contador después de incrementar
      } catch (error) {
        console.error('Error incrementing counter:', error);
      }
    };
  
    // Función para decrementar el contador
    const decrementCounter = async () => {
      loading = true;
      try {
        await fetch('https://api.counterapi.dev/v1/tragos-locos/laughts/down', { method: 'GET' });
        getCounter(); // Actualizar el contador después de decrementar
      } catch (error) {
        console.error('Error decrementing counter:', error);
      }
    };
  
    // Obtener el contador cuando el componente se monte
    onMount(() => {
      getCounter();
    });
  </script>
  
  <section class="bg-purple-100 py-16">
    <div class="container mx-auto text-center">
      <!-- Título -->
      <h2 class="text-3xl font-bold text-purple-600 mb-4">¡Risas en aumento!</h2>
  
      <!-- Descripción -->
      <p class="text-lg text-gray-700 mb-6">Cada vez que alguien se ríe, el contador sube. ¿Quién será el primero en llegar a 100 risas?</p>
  
      <!-- Contador -->
      <div class="text-4xl font-semibold text-purple-600 mb-6">
        <span>{loading ? 'Cargando...' : count}</span> <span>Risas</span>
      </div>
  
    {#if showButton}
        <!-- Botones de incremento y decremento -->
        <div class="flex justify-center gap-6">
            <button
            class="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300"
            on:click={incrementCounter}
            disabled={loading}
            >
            ¡Ríe!
            </button>
        </div>
    {/if}
  
      <!-- Mensaje de carga -->
      {#if loading}
        <div class="mt-4 text-sm text-gray-500">Actualizando contador...</div>
      {/if}
    </div>
  </section>
  