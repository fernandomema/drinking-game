import { Question } from "./questions";
import "$lib/Shuffle";

export type Mode = {
    name: string;
    pickCards: (questions: Question[]) => Question[]; 
}

export const modes: { [key: string]: Mode } = {
    preparty: {
        name: 'Pre-Party',
        pickCards: (questions: Question[]) => {
            const drinkIfQuestions = questions.filter((question) => question.tags.includes('drinkIf') && question.tags.includes('preparty')).slice(0, 10);
            const commonQuestions = questions.filter((question) => question.tags.includes('preparty') && !question.tags.includes('drinkIf') && !question.tags.includes('event')).slice(0, 10);
            const eventQuestion = questions.filter((question) => question.tags.includes('event') && question.tags.includes('preparty'))[0];
            let finalQuestions = [...drinkIfQuestions, ...commonQuestions];
            
            // random number between 4 and 8
            const eventPos = Math.floor(Math.random() * (8)) + 4;
            
            finalQuestions.shuffle();

            // Append question next to queston with next parameter
            finalQuestions.forEach((question, index) => {
                if (question.next) {
                    finalQuestions.splice(index + 1, 0, {
                        ...question.next,
                        tags: ['preparty']
                    }); 
                }
            });

            finalQuestions.splice(eventPos, 0, eventQuestion);
            if (eventQuestion.end) {
                finalQuestions.splice(eventPos + (eventPos + 3), 0, {
                    ...eventQuestion.end,
                    tags: ['preparty']
                });
            }
 
            return finalQuestions;
        },
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