import { Question, Tag } from "./questions";
import "$lib/Shuffle";
import '$lib/Spintax';
import { randomizeQuestions } from "$lib/Shuffle";
import { get } from "svelte/store";
import { _ } from "$lib/locales";
import { text } from "@sveltejs/kit";
import { Team } from "./types/Team";
import { getRandomizedTeamNames, getRandomTeamName } from "./TeamNames";
import { getLocaleFromString } from "./types/Locales";

enum MenuPriority {
    GeneralMode = 0,
    SeasonalMode = 1,
    SpecialMode = 2,
}

export type Mode = {
    menuPriority: MenuPriority;
    icon: string;
    isEnabled?: () => boolean;
    pickCards: (questions: Question[], locale?: string, players?: any[]) => Question[]; 
}

export const modes: { [key: string]: Mode } = {
    preparty: {
        menuPriority: MenuPriority.GeneralMode,
        icon: '/preparty.png',
        pickCards: (questions: Question[], locale?: string, players?: any[]) => {
            return getModeQuestions(questions, {
                gameMode: 'preparty',
                mode: 'compound',
                locale,
                players
            });
        }
    },
    crazy: {
        menuPriority: MenuPriority.GeneralMode,
        icon: '/crazy.png',
        pickCards: (questions: Question[], locale?: string, players?: any[]) => {
            return getModeQuestions(questions, {
                gameMode: 'crazy',
                mode: 'basic',
                locale,
                players
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
    teams: {
        menuPriority: MenuPriority.GeneralMode,
        icon: '/teams.png',
        pickCards: (questions: Question[], locale?: string, players?: any[]) => {
            const teamNames = getRandomizedTeamNames(getLocaleFromString(locale));
            const teams: Team[] = [{
                name: teamNames[0],
                color: 'pink',
                players: []
            }, {
                name: teamNames[1],
                color: 'blue',
                players: []
            }];
            const randomizedPlayers = players?.shuffle();
            randomizedPlayers?.forEach((player, index) => {
                teams[index % 2].players.push(player);
            });
            localStorage.setItem('teams', JSON.stringify(teams));
            return getModeQuestions(questions, {
                gameMode: 'teams',
                mode: 'basic',
                locale,
                players,
                teams
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
        pickCards: (questions: Question[], locale?: string, players?: any[]) => {
            return getModeQuestions(questions, {
                gameMode: 'christmas',
                mode: 'compound',
                locale,
                players
            });
        }
    },
    drinkIf: {
        menuPriority: MenuPriority.SpecialMode,
        icon: '/drink-if.png',
        pickCards: (questions: Question[], locale?: string, players?: any[]) => {
            return getModeQuestions(questions, {
                gameMode: 'drinkIf',
                mode: 'basic',
                locale,
                players
            });
        },
        isEnabled: () => false
    }
}

function getModeQuestions(questions: Question[], options: {
    locale?: string,
    players?: any[],
    teams?: Team[],
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
        const teamIntro: Question[] = [];

        if (options.teams) {
            options.teams.forEach((team: Team) => {
                const teamName = getColorizedTeamName(team);
                teamIntro.push({
                    locales: {
                        [options.locale || 'en']: `Equipo ${teamName}\n\n`.bold() + team.players.map((player) => player.name).join('\n')
                    },
                    tags: []
                });
            });
        }
        
        generateNextQuestions(finalQuestions);

        finalQuestions = fillPlaceholders(finalQuestions, {
            players: options.players,
            locale: options.locale,
            teams: options.teams
        });

        return [...teamIntro, ...finalQuestions];
    } else if (options.mode === 'compound') {
        const drinkIfQuestions = getDrinkIfQuestions(questions, {quantity: 5, mode: options.gameMode, locale: options.locale});
        const eventQuestion = getEventQuestions(questions, {quantity: 1, mode: options.gameMode, locale: options.locale})[0];
        let commonQuestions = getCommonQuestions(questions, {quantity: 20, mode: options.gameMode, locale: options.locale});
        let finalQuestions = randomizeQuestions([...drinkIfQuestions, ...commonQuestions]);
    
        appendEventQuestions(finalQuestions, eventQuestion, options.players);
        generateNextQuestions(finalQuestions);

        finalQuestions = fillPlaceholders(finalQuestions, {
            players: options.players,
            locale: options.locale
        });
    
        return finalQuestions;
    }
    return [];  
}

function getDrinkIfQuestions(questions: Question[], params: {quantity: number, mode?: Tag, locale?: string}): Question[] {
    let drinkIfQuestions = randomizeQuestions(questions);
    drinkIfQuestions = drinkIfQuestions.filter((question) => {
        if (!question.tags?.includes('drinkIf')) return false;
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
        if (question.tags?.includes('drinkIf') || question.tags?.includes('event')) return false;
        if (params.mode && !question.tags?.includes(params.mode)) return false;
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
        if (!question.tags?.includes('event')) return false;
        if (params.mode && !question.tags.includes(params.mode)) return false;
        if (params.locale && !question.locales[params.locale]) return false;
        return true;
    });
    if (params.quantity) {
        eventQuestions = eventQuestions.slice(0, params.quantity);
    }
    return eventQuestions;
}

function appendEventQuestions(questions: Question[], eventQuestion: Question, players?: any[]): void {
    const eventPos = Math.floor(questions.length / 4);
    const eventEndPos = Math.min(questions.length - eventPos, eventPos + 12);

    players?.shuffle();

    fillPlaceholders([eventQuestion], {
        orderedPlayers: players,
    });

    questions.splice(eventPos, 0, eventQuestion);
    if (eventQuestion.end) {
        fillPlaceholders([eventQuestion.end], {
            orderedPlayers: players,
        });

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

function fillPlaceholders(questions: Question[], options: {
    players?: any[],
    orderedPlayers?: any[],
    teams?: Team[],
    locale?: string
}): Question[] {
    questions.forEach((question) => {
        for (let loopLocale of Object.keys(question.locales)) {
            if (!options.locale || options.locale === loopLocale) {
                let shuffledPlayers = options.orderedPlayers || options.players?.shuffle() || [];
                if (options.teams) {
                    // Shuffle players making sure all odd numbers are players from one team and even numbers are players from the other
                    let team1: any[] = JSON.parse(JSON.stringify(options.teams[0].players.shuffle()));
                    let team2: any[] = JSON.parse(JSON.stringify(options.teams[1].players.shuffle()));
                    console.log('team1', team1);
                    const playersCount = options.players.length;
                    shuffledPlayers = [];
                    let team = Math.floor(Math.random() * 2) + 1;
                    for (let i = 0; i < playersCount; i++) {
                        team = team == 1 ? 2 : 1;
                        if (team == 1) {
                            shuffledPlayers.push(team1.shift());
                        } else {
                            shuffledPlayers.push(team2.shift());
                        }
                    }
                }
                question.locales[loopLocale] = fillPlayersPlaceholdersText(question.locales[loopLocale], shuffledPlayers);
                question.locales[loopLocale] = fillShotsPlaceholdersText(question.locales[loopLocale]);
                if (options.teams) {
                    question.locales[loopLocale] = fillTeamsPlaceholdersText(question.locales[loopLocale], options.teams.shuffle());
                }
                question.locales[loopLocale] = spintaxText(question.locales[loopLocale]);
            }
        }
    });
    return questions;
}

function fillShotsPlaceholdersText(text: string): string {
    return text
        .replace('{shots}', weightedRandom().toString())
        .replace('{shots2}', weightedRandom().toString());
}

function fillPlayersPlaceholdersText(text: string, players: any[]): string {
    return text
        .replace('{player1}', players[0]?.name)
        .replace('{player2}', players[1]?.name)
        .replace('{player3}', players[2]?.name)
        .replace('{player4}', players[3]?.name);
}

function fillTeamsPlaceholdersText(text: string, teams: Team[]): string {
    for (let i = 0; i < teams.length; i++) {
        text = text.replace(`{team${i + 1}}`, getColorizedTeamName(teams[i]));
    }
    return text;
}

function spintaxText(text: string): string {
    return text.spintax();
}

function weightedRandom() {
    // Define the weights for each number, higher weights mean higher probability.
    // Weights should decrease as numbers increase.
    const weights = [5, 4, 3, 2, 1]; // Corresponding to numbers 1, 2, 3, 4, 5

    // Calculate the total weight
    const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);

    // Generate a random number between 0 and totalWeight
    const random = Math.random() * totalWeight;

    // Determine which number corresponds to the random value
    let cumulativeWeight = 0;
    for (let i = 0; i < weights.length; i++) {
        cumulativeWeight += weights[i];
        if (random < cumulativeWeight) {
            return i + 1; // Numbers start from 1
        }
    }
    return 1;
}

function getColorizedTeamName(team: Team): string {
    return `<span class="underline decoration-${team.color}-500">${team.name}</span>`;
}

