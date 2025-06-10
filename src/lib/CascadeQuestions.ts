import { Question } from './questions';

export const CascadeQuestions: Question[] = [
  {
    locales: {
      es: 'Si {player1} no puede nombrar 5 países en 10 segundos, bebe 2 tragos.',
      en: 'If {player1} cannot name 5 countries in 10 seconds, drink 2 shots.'
    },
    tags: ['cascade', 'cascade-trigger']
  },
  {
    locales: {
      es: 'Si {player1} bebe, {player2} debe imitar a un animal.',
      en: 'If {player1} drinks, {player2} must imitate an animal.'
    },
    tags: ['cascade', 'cascade-effect']
  },
  {
    locales: {
      es: 'Si {player2} se ríe durante la imitación, todos beben 1 trago.',
      en: 'If {player2} laughs during the imitation, everyone drinks 1 shot.'
    },
    tags: ['cascade', 'cascade-end']
  }
];
