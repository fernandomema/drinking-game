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
}