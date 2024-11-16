import { Question } from "./questions";

export type Mode = {
    name: string;
    pickCards: (questions: Question[]) => Question[]; 
}

export const modes: { [key: string]: Mode } = {
    preparty: {
        name: 'Pre-Party',
        pickCards: (questions: Question[]) => questions.filter((question) => question.tags.includes('friends')).slice(0, 10),
    },
    "best-friends": {
        name: 'Best Friends',
        pickCards: (questions: Question[]) => questions.filter((question) => question.tags.includes('+18-light')).slice(0, 10),
    },
    hot: {
        name: 'Hot',
        pickCards: (questions: Question[]) => questions.filter((question) => question.tags.includes('+18')).slice(0, 10),
    },
}