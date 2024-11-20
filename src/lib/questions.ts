export type Question = {
    tags: ('preparty' | '+18' | '+18-light' | 'challenge' | 'groupChallenge' | 'punishment' | 'groupPunishment' | 'reward' | 'drinkIf' | 'vote' | 'truth' | 'event' | 'christmas')[];
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
}, {
    locales: {
        en: "{player1}, show us your last photo on the gallery or take {shots}.",
        es: '{player1}, muéstrame tu última foto en la galería o recibe {shots}.',
    },
    tags: ['preparty'],
}, {
    locales: {
        en: "Everyone who lied today while playing this game, take {shots} shots.",
        es: "Todos los que hemos mentido hoy jugando este juego, reciben {shots} shots.",
    },
    tags: ['preparty', "drinkIf"],
}, {
    locales: {
        en: "Everyone who follow {player1} on instagram, take {shots} shots.",
        es: "Todos los que siguen a {player1} en instagram, reciben {shots} shots.",
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        en: "{shots} shots if you want to kiss someone from this group",
        es: "{shots} shots si quieres darle un beso a alguien de este grupo",
    },
    tags: ['+18-light', 'drinkIf'],
}, {
    locales: {
        en: "If you've ever dressed up as Santa Claus, drink {shots}",
        es: 'Si alguna vez te has disfrazado de Papá Noel, bebe {shots}',
    },
    tags: ['drinkIf', 'christmas'],
}, {
    locales: {
        es: '{player1}, {shots} si alguna vez recibiste un regalo de algiien en este grupo que en verdad no te gusto',
        en: '{player1}, if you ever received a gift from someone in this group that you really don\'t like, drink {shots}',
    },
    tags: ['christmas'],
},{
    locales: {
        en: "Everyone who decorated their home for Christmas this year drink {shots}",
        es: 'Todos los que hayan decorado su casa para Navidad este año beben {shots}',
    },
    tags: ['drinkIf', 'christmas'],
}, {
    locales: {
        en: "If you've ever kissed someone under the mistletoe, drink {shots}",
        es: 'Si alguna vez has besado a alguien bajo el muérdago, bebe {shots}',
    },
    tags: ['drinkIf', 'christmas'],
}, {
    locales: {
        en: '{player1}, if you wear something red, you can deal {shots} shots',
        es: '{player1}, si llevas puesto algo rojo, puedes repartir {shots} shots',
    },
    tags: ['christmas'],
}, {
    locales: {
        es: '{player1}, eres un regalo de Navidad. Los demas jugadores deben envolverte con papel higiénico',
    },
    tags: ['christmas'],
},{
    locales: {
        es: '"cosas que dejarías a Papá Noel la noche anterior", el que repita o no encuentre, recibe {shots} shots. Empieza {player1}',
        en: '"things you would leave to Santa Claus the night before", the player who repeats or doesn\'t find, takes {shots} shots. Starts {player1}',
    },
    tags: ['christmas'],
}, {
    locales: {
        es: '{player1}. elige a quien le lanzarias una bola de nieve y recibe {shots} shots por agresivo',
        en: '{player1}. choose who you would throw a snowball and take {shots} shots for aggressive',
    },
    tags: ['christmas'],
    next: {
        locales: {
            es: 'El que recibio un bolazo de nieve se puede vengar, reparte {shots} shots',
            en: 'The one who received a snowball can be thrown, deal {shots} shots',
        },
    },
}, {
    locales: {
        es: '{player1}, eres el grinch, todo el mundo tiene que odiarte hasta nueva orden',
        en: '{player1}, you are the grinch, everyone has to hate you until a new order',
    },
    tags: ['christmas', 'event'],
}, {
    locales: {
        en: "⛄ Snowstorm! The person with the fewest drinks so far must drink {shots} to 'stay warm.'",
        es: "⛄ ¡Tormenta de nieve! La persona con menos tragos acumulados debe beber {shots} para 'mantenerse caliente'.",
    },
    tags: ['christmas'],
},{
    locales: {
        en: "🎅 Ho Ho Ho! The player with the best Santa laugh gets to deal {shots} to someone else.",
        es: "🎅 ¡Ho Ho Ho! El jugador con la mejor risa de Papá Noel puede repartir {shots} a otra persona.",
    },
    tags: ['christmas'],
}, {
    locales: {
        es: "{player1}, eres Papa Noel, asi que puedes regalar {shots} shots a quien quieras",
        en: "{player1}, you are Santa Claus, so you can give {shots} shots to whoever you want",
    },
    tags: ['christmas'],
}, {
    locales: {
        en: "{player1} must end every sentence with 'ho ho ho' until a new order. Forgetting costs {shots} shots.",
        es: '{player1}, debes terminar cada frase con "jo jo jo" hasta nueva orden. Olvidarlo cuesta {shots} shots.',
    },
    tags: ['event', 'christmas'],
    end: {
        locales: {
            en: "{player1}, you can stop saying 'ho ho ho' at the end of sentences.",
            es: '{player1}, puedes dejar de decir "jo jo jo" al final de tus frases.',
        },
    },
}, {
    locales: {
        en: "{player1}, you are now the Christmas Tree! Stay perfectly still until a new order, or take {shots} each time you move.",
        es: '{player1}, ahora eres el Árbol de Navidad. Quédate completamente inmóvil hasta nueva orden, o toma {shots} cada vez que te muevas.',
    },
    tags: ['event', 'christmas'],
    end: {
        locales: {
            en: "{player1}, you can stop being the Christmas Tree now.",
            es: '{player1}, ya puedes dejar de ser el Árbol de Navidad.',
        },
    },
}, {
    locales: {
        en: "{player1}, check your phone for the last time you used the word '(Christmas|Gift|snow|white).' Share it or take {shots}.",
        es: '{player1}, busca en tu teléfono la última vez que usaste la palabra "(Navidad|Regalo|nieve|blanco)". Compártelo o toma {shots}.',
    },
    tags: ['christmas'],
},{
    locales: {
        en: "{player1}, you are a snowman,  act like melting dramatically the next time you drink", 
        es: '{player1}, eres un muñeco de nieve, actúa como te derritieses dramaticamente la próxima vez que bebas',
    },
    tags: ['christmas'],
}, {
    locales: {
        en: "{player1}, imitate one person of the group until someone guesses who it is. If no one guesses, take {shots}.",
        es: '{player1}, imita a una persona del grupo hasta que alguien lo adivine. Si nadie lo adivina toma {shots}.',
    },
    tags: ['preparty'],
}, {
    locales: {
        en: "{player1}, imitate one person of the group until someone guesses who it is. If no one guesses, take {shots}.",
        es: '{player1}, imita a una persona del grupo hasta que alguien lo adivine. Si nadie lo adivina toma {shots}.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} abraza a {player2} por 10 segundos o los dos reciben {shots} shots',
        en: '{player1} hug {player2} for 10 seconds or both of them take {shots} shots',
    },
    tags: ['+18-light', 'preparty'],
    questionRequeriment: {
        minPlayers: 2,
    },
}];