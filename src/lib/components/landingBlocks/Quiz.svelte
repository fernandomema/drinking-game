<script>
    let question1Answer = '';
    let question2Answer = '';
    let question3Answer = '';
    let showResult = false;
    let mode = '';
  
    const questions = [
      { 
        id: 1, 
        question: '¿Cuántas personas estarán en la fiesta?', 
        options: ['De 2 a 5 personas', 'De 6 a 10 personas', 'Más de 10 personas'], 
        bind: 'question1Answer' 
      },
      { 
        id: 2, 
        question: '¿Qué tan cómodos se sienten entre ustedes?', 
        options: ['No nos conocemos mucho', 'Nos conocemos bien, pero no somos muy cercanos', 'Somos muy cercanos y cómodos'], 
        bind: 'question2Answer' 
      },
      { 
        id: 3, 
        question: '¿Qué tanto se conocen entre ustedes?', 
        options: ['Casi no nos conocemos', 'Nos conocemos bien, pero no demasiado', 'Nos conocemos a la perfección'], 
        bind: 'question3Answer' 
      }
    ];
  
    const calculateMode = () => {
      if (question1Answer === 'De 2 a 5 personas' && question2Answer === 'Somos muy cercanos y cómodos' && question3Answer === 'Nos conocemos a la perfección') {
        mode = 'Equipos 🏆';
      } else if (question1Answer === 'De 6 a 10 personas' && question2Answer === 'Nos conocemos bien, pero no somos muy cercanos' && question3Answer === 'Nos conocemos bien, pero no demasiado') {
        mode = 'Hot 🔥';
      } else {
        mode = 'Tragos Locos 🍹';
      }
  
      showResult = true;
    };
  
    const resetQuiz = () => {
      question1Answer = '';
      question2Answer = '';
      question3Answer = '';
      showResult = false;
    };
  </script>
  
  <style>
    .container {
      max-width: 600px;
      margin: 0 auto;
      text-align: center;
      padding: 1rem;
    }
  
    h2 {
      font-size: 2rem;
      color: #6B21A8;
      margin-bottom: 20px;
    }
  
    label {
      font-size: 1.2rem;
      font-weight: bold;
      color: #4A5568;
    }
  
    select {
      font-size: 1rem;
      padding: 10px;
      border-radius: 8px;
      border: 1px solid #E2E8F0;
      margin-top: 10px;
      width: 100%;
      transition: border-color 0.3s;
    }
  
    select:focus {
      border-color: #6B21A8;
    }
  
    .button {
      background-color: #6B21A8;
      color: white;
      padding: 12px 24px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s;
      margin-top: 20px;
    }
  
    .button:hover {
      background-color: #9F7AEA;
    }
  
    .result {
      font-size: 1.5rem;
      color: #6B21A8;
      font-weight: bold;
      margin-top: 20px;
    }
  
    .reset-button {
      background-color: #E2E8F0;
      color: #4A5568;
      margin-top: 10px;
    }
  
    .reset-button:hover {
      background-color: #CBD5E0;
    }
  </style>
  
  <div class="container">
    <h2>¡Descubre tu modo de fiesta!</h2>
    {#if !showResult}
      {#each questions as {id, question, options, bind}}
        <div class="question">
          <label>{question}</label>
          <select bind:value={bind}>
            <option disabled selected>Selecciona una opción</option>
            {#each options as option}
              <option>{option}</option>
            {/each}
          </select>
        </div>
      {/each}
  
      <button class="button" on:click={calculateMode}>Ver mi modo de fiesta</button>
    {:else}
      <div class="result">
        ¡El modo ideal para ti es: {mode}!
      </div>
      <button class="button reset-button" on:click={resetQuiz}>Volver a intentarlo</button>
    {/if}
  </div>
  