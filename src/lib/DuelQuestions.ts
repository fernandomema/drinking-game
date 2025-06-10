import { Question } from './questions';

export const DuelQuestions: Question[] = [
  {
    locales: {
      es: '⚔️ DUELO: {player1} vs {player2}. ¿Quién cuenta la historia más vergonzosa sin reírse? El resto decide. El perdedor bebe {shots} tragos.',
      en: '⚔️ DUEL: {player1} vs {player2}. Who can tell the most embarrassing story without laughing? Others decide. Loser drinks {shots} shots.'
    },
    tags: ['duel']
  },
  {
    locales: {
      es: '⚡ RETO RÁPIDO: {player1} vs {player2}. Repetid 3 veces: "Tres tristes tigres tragaban trigo". El primero en fallar bebe {shots} tragos.',
      en: '⚡ SPEED CHALLENGE: {player1} vs {player2}. Repeat 3 times: "Tres tristes tigres tragaban trigo". First to fail drinks {shots} shots.'
    },
    tags: ['duel']
  },
  {
    locales: {
      es: '🎯 DUELO DE VERDADES: {player1} vs {player2}. Confiesad algo que nunca habéis dicho. El resto vota. El perdedor bebe {shots} tragos.',
      en: '🎯 TRUTH DUEL: {player1} vs {player2}. Confess something never said aloud. Others vote. Loser drinks {shots} shots.'
    },
    tags: ['duel']
  },
  {
    locales: {
      es: '💪 DUELO DE RETOS: {player1} vs {player2}. Competencia de flexiones durante 30 segundos. Quien haga menos bebe {shots} tragos.',
      en: '💪 DARE DUEL: {player1} vs {player2}. Push-up contest for 30 seconds. Whoever does fewer drinks {shots} shots.'
    },
    tags: ['duel']
  }
];
