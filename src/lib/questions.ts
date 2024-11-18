export type Question = {
    tags: ('preparty' | '+18' | '+18-light' | 'challenge' | 'groupChallenge' | 'punishment' | 'groupPunishment' | 'reward' | 'drinkIf' | 'vote' | 'truth' | 'event')[];
    next?: {
        locales: {
            [key: string]: string;
        }
    };
    end?: {
        locales: {
            [key: string]: string;
        }
    };
    locales: {
        [key: string]: string;
    },
    questionRequeriment?: QuestionRequeriments;
};
type QuestionRequeriments = {
    minPlayers?: number;
    maxPlayers?: number;
}

export const questions: Question[] = [{
    locales: {
        en: '{player1} does us the pleasure of finishing his drink',
        es: '{player1} nos dara el placer de terminar su bebida',
    },
    tags: ['preparty', 'punishment'],
}, {
    locales: {
        en: '{player1} drink {shots} shots of {player2} drink',
        es: '{player1} bebe {shots} de la bebida de{player2}',
    },
    tags: ['preparty', 'challenge', 'punishment'],
}, {
    locales: {
        en: '{player1}, the next person you look at the eyes will drink {shots} shots',
        es: '{player1}, la siguiente persona que mires los ojos beberá {shots} shots',
    },
    tags: ['preparty', 'reward'],
}, {
    locales: {
        en: 'If youe believe in ghosts, drink {shots} shots',
        es: 'Si crees en los fantasmas, bebe {shots} shots',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        en: "{player1} Swap shirt with {player2}. whoever refuses drinks {shots} shots",
        es: '{player1} intercambia la camisa con {player2}. quien se niege bebe {shots} shots',
    },
    tags: ['+18-light', 'challenge'],
},{
    locales: {
        en: "{player1} imitate a chicken and drink {shots} shots",
        es: '{player1} imita a una gallina y bebe {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        en: "Drink {shots} shots if you have used a household item as a sex toy",
        es: 'Si has usado un objeto del hogar como un juguete de sexual bebe {shots} shots',
    },
    tags: ['+18', 'drinkIf'],
}, {
    locales: {
        en: "All who are single drink {shots} shots",
        es: 'Todos los que son solteros beben {shots} shots',
    },
    tags: ['drinkIf', 'preparty'],
}, {
    locales: {
        en: "All who are in a relationship drink {shots} shots",
        es: 'Todos los que están en una relación beben {shots} shots',
    },
    tags: ['drinkIf', 'preparty'],
}, {
    locales: {
        en: "Vote who are most (ugly|beautiful|atractive)",
        es: 'Votar quien es mas (feo|fea|bonito|bonita|atractivo|atractiva)',  
    },
    next: {
        locales: {
            en: "The selected one (drink|deals) {shots} shots",
            es: "El seleccionado (bebe|reparte) {shots} shots",
        },
    },
    tags: ['vote', 'preparty', '+18-light'],
}, {
    locales: {
        en: '(Last one|First one) to sit on the floor (drink|deals) {shots} shots', 
        es: '(El último|El primero) que se siente en el suelo (bebe|reparte) {shots} shots',
    },
    tags: ['challenge', 'preparty'],
}, {
    locales: {
        en: "{player1}, give {shots} shots to someone you'd like to kiss or slap but don't say wich",
        es: '{player1}, dale {shots} shots a alguien que te gustaria darle un beso o una patada pero no digas cual',
    },
    tags: ['+18-light', 'challenge'],
}, {
    locales: {
        en: "(Dog|Cat) owner drink {shots} shots",
        es: 'Los que tengan (perros|gatos) beben {shots} shots',
    },
    tags: ['drinkIf', 'preparty'],
}, {
    locales: {
        en: "Vote who is most likely to get arrested. They drink {shots} shots",
        es: 'Votar quien es mas probable que sea arrestado. El elegido bebe {shots} shots',
    },
    tags: ['vote', 'preparty'],
}, {
    locales: {
        en: "Vote who is most (funniest|clown). They drink {shots} shots",
        es: 'Votar quien es mas (divertido|payaso). El elegido bebe {shots} shots',
    },
    tags: ['vote', 'preparty'],
}, {
    locales: {
        en: "Everyone having androids drink {shots} shots",
        es: 'Todos los que tengan androids beben {shots} shots',
    },
    tags: ['drinkIf', 'preparty'],
    next: {
        locales: {
            en: "Iphone owners drink double",
            es: "Los que tengan Iphones beben doble",
        }
    }
}, {
    locales: {
        en: "Everyone having Iphone drink {shots} shots",
        es: 'Todos los que tengan Iphones beben {shots} shots',
    },
    tags: ['drinkIf', 'preparty'],
    next: {
        locales: {
            en: "Android owners drink double",
            es: "Los que tengan Androids beben doble",
        }
    }
}, {
    locales: {
        en: "Take a group photo",
        es: "Toma una foto de grupo",
    },
    tags: ['groupChallenge', 'preparty'],
}, {
    locales: {
        en: "{player1} with the present people, who will you fuck, kill and get married to",
        es: '{player1} con los presentes, quien le darias un beso, quien matarias y con quien te casarias', 
    },
    tags: ['+18-light', 'challenge'],
    questionRequeriment: {
        minPlayers: 4,
    },
}, {
    locales: {
        en: "{player1}, You can make a question of your own to {player2}",
        es: '{player1}, puedes hacer una pregunta de tu agrado a {player2}',
    },
    tags: ['+18-light', 'challenge'],
}, {
    locales: {
        en: "{player1} tell us your biggest fear and drink {shots} shots",
        es: '{player1} nos va a contar su mayor miedo y bebera {shots} shots',
    },
    tags: ['challenge', 'truth', 'preparty'],
}, {
    locales: {
        en: "{player1} drink {shots} shots without hands. If you fail, drink double",
        es: '{player1} bebe {shots} shots sin manos. Si fallas, bebe doble',
    },
    tags: ['challenge', 'preparty'],
}, {
    locales: {
        en: "{player1}, give a compliment to {player2} or drink {shots} shots",
        es: '{player1}, dile un alago a {player2} o bebe {shots} shots',
    },
    tags: ['challenge', 'preparty'],
}, {
    locales: {
        en: "{player1} you cannot talk during the next round. Drink {shots} each time you talk",
        es: '{player1} no puedes hablar durante la siguiente ronda. Bebe {shots} cada vez que hablas',
    },
    tags: ['event', 'preparty'],
}, {
    locales: {
        en: "Drink {shots} shots if you are a (aries|taurus|gemini|cancer|leo|virgo|libra|scorpio|sagittarius|capricorn|aquarius|pisces)",
        es: 'Si eres un (aries|taurus|gemini|cancer|leo|virgo|libra|scorpio|sagittarius|capricorn|aquarius|pisces) bebe {shots} shots',
    },
    tags: ['drinkIf', 'preparty'],
}, {
    locales: {
        en: "{player1} make a gesture, the next player repeats the gestures adding one new. The one who fails or repeats takes {shots} shots",
        es: '{player1} haz un gesto, el siguiente jugador repite los gestos agregando uno nuevo. El que falle o repita toma {shots} shots',
    },
    tags: ['challenge', 'preparty'],
}, {
    locales: {
        en: "{player1} repeats everything {player2} says until a new order. If you forget, take {shots}",
        es: '{player1} repite todo lo que diga {jugador2} hasta nueva orden. Si te olvidas tomas {shots}',
    },
    tags: ['event', 'preparty'],
    end: {
        locales: {
            en: "{player1}, you can stop repeating anything {player2} says",
            es: '{player1}, puedes parar de repetir lo que diga {player2}',
        },
    }
}, {
    locales: {
        en: "{player1} speaks in another language until a new order",
        es: '{player1}, habla en otro idioma hasta nueva orden',
    },
    tags: ['event', 'preparty'],
    end: {
        locales: {
            en: "{player1}, you can stop speaking in another language",
            es: '{player1}, puedes parar de hablar en otro idioma',
        },
    }
}, {
    locales: {
        en: "{player1} speaks only using the vocal (a|e|i|o|u). If you use another vocal, take {shots} shots",
        es: '{player1}, habla solo usando la vocal (a|e|i|o|u). Si usas otra vocal tomas {shots} shots',
    },
    tags: ['event', 'preparty'],
    end: {
        locales: {
            en: "{player1}, you can stop speaking only using one vocal",
            es: '{player1}, puedes parar de hablar solo usando una vocal',
        },
    }
}, {
    locales: {
        en: "{player1} searches in whatsapp the last time you sent (sorry|leg|finger). If you don't want to reveal it, take {shots} shots",
        es: '{player1}, busca en whatsapp la ultima vez que enviaste (perdon|pierna|lengua|dedo). Si no quieres revelarlo toma {shots} shots',
    },
    tags: ['event', 'preparty'],
}, {
    locales: {
        en: "{player1} starts insulting with everything you say. If you don't do it, take {shots}",
        es: '{player1} apartir de ahora deberas insultar con todo el que hables. Toma {shots} si no lo haces',
    },
    tags: ['event', 'preparty'],
    end: {
        locales: {
            en: "{player1}, you can stop insulting with everything you say",
            es: '{player1}, puedes parar de insultar con todos lo que hablas',
        },
    }
}, {
    locales: {
        en: "{player1} starts speaking in (french|russian|chinese) accent. If you don't do it, take {shots}",
        es: '{player1} apartir de ahora deberas hablar en accento (frances|ruso|chino). Toma {shots} si te olvidas',
    },
    tags: ['event', 'preparty'],
    end: {
        locales: {
            en: "{player1}, you can stop speaking with accent",
            es: '{player1}, puedes parar de hablar con accento',
        },
    }
}, {
    locales: {
        en: "{player1} is the laughing one. Every time you laugh, they have to drink. And you too.",
        es: '{player1} eres el loco de los aplausos. Cada vez que aplaudas todos tendran que beber. Y tu tambien.',
    },
    tags: ['event', 'preparty'],
    end: {
        locales: {
            en: "{player1}, you can stop laughing",
            es: '{player1}, ya no eres el loco de los aplausos',
        },
    }
}, {
    locales: {
        en: "Everyone smoking. Drink {shots} shots",
        es: 'Todos los que esten fumando beben {shots} shots',
    },
    tags: ['drinkIf', 'preparty'],
}, {
    locales: {
        en: "The girls with makeup {shots} shots",
        es: 'Las chicas que tengan pintalabios {shots} shots',
    },
    tags: ['drinkIf', 'preparty'],
    questionRequeriment: {
        minPlayers: 4,
    },
}, {
    locales: {
        en: "(“names of supermarkets”|”clothes brands”|”car brands”|”disney characters”|”fruits”|”disney movies”) the player who repeats or doesn't find, they have to drink {shots}",
        es: '(“nombres de supermercados”|”marcas de ropa”|”marcas de coches”|”personajes de disney”|”frutas”|”peliculas de disney”) el jugador que repita o no encuentre, tendra que recibir {shots}',
    },
    tags: ['preparty']
}, {
    locales: {
        en: "{player1}, if you smoke, take a whole cigarette to the trash or take {shots}. If you don't, you can deal them",
        es: '{player1}, si fumas tira un cigarrillo entero a la basura o recibe {shots}. Si no, puedes repartirlos',
    },
    tags: ['event', 'preparty'],
}];