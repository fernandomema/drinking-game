import { Question, Tag } from "./questions";
import "$lib/Shuffle";
import { randomizeQuestions } from "$lib/Shuffle";
import { get } from "svelte/store";
import { _ } from "$lib/locales";

enum MenuPriority {
    GeneralMode = 0,
    SeasonalMode = 1,
    SpecialMode = 2,
}

export type Mode = {
    menuPriority: MenuPriority;
    icon: string;
    isEnabled?: () => boolean;
    pickCards: (questions: Question[], locale?: string) => Question[]; 
}

export const modes: { [key: string]: Mode } = {
    preparty: {
        menuPriority: MenuPriority.GeneralMode,
        icon: '/preparty.png',
        pickCards: (questions: Question[], locale?: string) => {
            return getModeQuestions(questions, {
                gameMode: 'preparty',
                mode: 'compound',
                locale
            });
        }
    },
    crazy: {
        menuPriority: MenuPriority.GeneralMode,
        icon: '/crazy.png',
        pickCards: (questions: Question[], locale?: string) => {
            return getModeQuestions(questions, {
                gameMode: 'crazy',
                mode: 'basic',
                locale
            });
        }
    },
    hot: {
        menuPriority: MenuPriority.GeneralMode,
        icon: '/plus-18-light.png',
        pickCards: (questions: Question[], locale?: string) => {
            return getModeQuestions(questions, {
                gameMode: '+18',
                mode: 'basic',
                locale
            });
        }
    },
    christmas: {
        menuPriority: MenuPriority.SeasonalMode,
        icon: '/christmas.png',
        isEnabled: () => {
            const date = new Date();
            return (date.getMonth() === 11) || (date.getMonth() === 0 && date.getDate() <= 15);
        },
        pickCards: (questions: Question[]) => {
            questions.map((question, index) => {
                question.index = index;
                return question;
            });
            const drinkIfQuestions = getDrinkIfQuestions(questions, {quantity: 10, mode: 'christmas'});
            const commonQuestions = getCommonQuestions(questions, {quantity: 10, mode: 'christmas'});
            const eventQuestion = getEventQuestions(questions, {quantity: 1, mode: 'christmas'})[0];
            let finalQuestions = randomizeQuestions([...drinkIfQuestions, ...commonQuestions]);

            appendEventQuestions(finalQuestions, eventQuestion);
            generateNextQuestions(finalQuestions);
 
            return finalQuestions;
        },
    },
}

function getModeQuestions(questions: Question[], options: {
    locale?: string,
    gameMode: Tag
    mode: 'basic' | 'compound'
}): Question[] {
    questions.map((question, index) => {
        question.index = index;
        return question;
    });

    if (options.mode === 'basic') {
        const commonQuestions = getCommonQuestions(questions, {quantity: 20, mode: options.gameMode, locale: options.locale});
        let finalQuestions = randomizeQuestions([...commonQuestions]);
        
        generateNextQuestions(finalQuestions);

        return finalQuestions;
    } else if (options.mode === 'compound') {
        const drinkIfQuestions = getDrinkIfQuestions(questions, {quantity: 10, mode: options.gameMode, locale: options.locale});
        const eventQuestion = getEventQuestions(questions, {quantity: 1, mode: options.gameMode, locale: options.locale})[0];
        let commonQuestions = getCommonQuestions(questions, {quantity: 10, mode: options.gameMode, locale: options.locale});
        let finalQuestions = randomizeQuestions([...drinkIfQuestions, ...commonQuestions]);
    
        appendEventQuestions(finalQuestions, eventQuestion);
        generateNextQuestions(finalQuestions);
    
        return finalQuestions;
    }
    return [];  
}

function getDrinkIfQuestions(questions: Question[], params: {quantity: number, mode?: Tag, locale?: string}): Question[] {
    let drinkIfQuestions = randomizeQuestions(questions);
    drinkIfQuestions = drinkIfQuestions.filter((question) => {
        if (!question.tags.includes('drinkIf')) return false;
        if (params.mode && !question.tags.includes(params.mode)) return false;
        if (params.locale && !question.locales[params.locale]) return false;
        return true;
    });
    if (params.quantity) {
        drinkIfQuestions = drinkIfQuestions.slice(0, params.quantity);
    }
    return drinkIfQuestions;
}

function getCommonQuestions(questions: Question[], params: {quantity: number, mode?: Tag, locale?: string}): Question[] {
    let commonQuestions = randomizeQuestions(questions);
    commonQuestions = commonQuestions.filter((question) => {
        if (question.tags.includes('drinkIf') || question.tags.includes('event')) return false;
        if (params.mode && !question.tags.includes(params.mode)) return false;
        if (params.locale && !question.locales[params.locale]) return false;
        return true;
    });
    if (params.quantity) {
        commonQuestions = commonQuestions.slice(0, params.quantity);
    }
    return commonQuestions;
}

function getEventQuestions(questions: Question[], params: {quantity: number, mode?: Tag, locale?: string}): Question[] {
    let eventQuestions = randomizeQuestions(questions);
    eventQuestions = eventQuestions.filter((question) => {
        if (!question.tags.includes('event')) return false;
        if (params.mode && !question.tags.includes(params.mode)) return false;
        if (params.locale && !question.locales[params.locale]) return false;
        return true;
    });
    if (params.quantity) {
        eventQuestions = eventQuestions.slice(0, params.quantity);
    }
    return eventQuestions;
}

function appendEventQuestions(questions: Question[], eventQuestion: Question): void {
    const eventPos = Math.floor(questions.length / 4);
    const eventEndPos = Math.min(questions.length - eventPos, eventPos + 12);

    questions.splice(eventPos, 0, eventQuestion);
    if (eventQuestion.end) {
        questions.splice(eventEndPos, 0, {
            ...eventQuestion.end,
            tags: []
        });
    }
}

function generateNextQuestions(questions: Question[]): void {
    questions.forEach((question, index) => {
        if (question.next) {
            questions.splice(index + 1, 0, {
                ...question.next,
                tags: []
            }); 
        }
    });
}

