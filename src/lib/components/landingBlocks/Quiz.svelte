<script lang="ts">
  import { _ } from '$lib/locales';

  interface QuestionDef {
    id: number;
    questionKey: string;
    optionKeys: string[];
  }

  let answers: Record<number, string> = { 1: '', 2: '', 3: '' };
  let showResult = false;
  let mode = '';

  const questions: QuestionDef[] = [
    {
      id: 1,
      questionKey: 'quiz.question1',
      optionKeys: ['quiz.question1_option1', 'quiz.question1_option2', 'quiz.question1_option3']
    },
    {
      id: 2,
      questionKey: 'quiz.question2',
      optionKeys: ['quiz.question2_option1', 'quiz.question2_option2', 'quiz.question2_option3']
    },
    {
      id: 3,
      questionKey: 'quiz.question3',
      optionKeys: ['quiz.question3_option1', 'quiz.question3_option2', 'quiz.question3_option3']
    }
  ];

  const calculateMode = () => {
    if (answers[1] === '0' && answers[2] === '2' && answers[3] === '2') {
      mode = 'Equipos 🏆';
    } else if (answers[1] === '1' && answers[2] === '1' && answers[3] === '1') {
      mode = 'Hot 🔥';
    } else {
      mode = 'Tragos Locos 🍹';
    }
    showResult = true;
  };

  const resetQuiz = () => {
    answers = { 1: '', 2: '', 3: '' };
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
  <h2>{$_('quiz.title')}</h2>
  {#if !showResult}
    {#each questions as q}
      <div class="question">
        <label>{$_(q.questionKey)}</label>
        <select bind:value={answers[q.id]}>
          <option value="" disabled selected>{$_('quiz.select_option')}</option>
          {#each q.optionKeys as optKey, index}
            <option value={index}>{$_(optKey)}</option>
          {/each}
        </select>
      </div>
    {/each}

    <button class="button" on:click={calculateMode}>{$_('quiz.calculate_button')}</button>
  {:else}
    <div class="result">
      {$_('quiz.result_text', { mode })}
    </div>
    <button class="button reset-button" on:click={resetQuiz}>{$_('quiz.try_again')}</button>
  {/if}
</div>
