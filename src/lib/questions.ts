import { crazyQuestions } from "./crazyQuestions";
import { hotQuestions } from "./hotQuestions";
import { TeamQuestions } from "./TeamQuestions";
import { BestFriendsQuestions } from "./BestFriendsQuestions";

export type Tag = 'preparty' | '+18' | '+18-light' | 'challenge' | 'groupChallenge' | 'punishment' | 'groupPunishment' | 'reward' | 'drinkIf' | 'vote' | 'truth' | 'event' | 'christmas' | 'crazy' | 'teams' | 'bestFriends';

export type Question = {
    index?: number;
    tags?: Tag[];
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
    seenCount?: number;
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
        es: '{player1} bebe {shots} de la bebida de {player2}',
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
}, {
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
        es: '{player1}, dale {shots} shots a alguien que te gustaria cojertela o darle una patada pero no digas cual',
        en: "{player1}, give {shots} shots to someone you'd like to fuck or slap but don't say wich",
    },
    tags: ['+18', 'challenge'],
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
        en: "{player1} you cannot talk until you see your name again. Drink {shots} each time you talk",
        es: '{player1} no puedes hablar hasta que vuelva a salir tu nombre. Bebe {shots} cada vez que hablas',
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
        es: '{player1} repite todo lo que diga {player2} hasta nueva orden. Si te olvidas tomas {shots}',
    },
    tags: ['event', 'preparty'],
    end: {
        locales: {
            en: "{player1}, you can stop repeating anything {player2} says",
            es: '{player1}, puedes parar de repetir lo que diga {player2}',
        },
    }
}, {
    // estás obligado/a esperar 2 segundos entre cada palabra que pronuncies! {shots} tragos por cada falta
    locales: {
        es: '{player1} estás obligado/a esperar 2 segundos entre cada palabra que pronuncies! {shots} tragos por cada falta.',
        en: '{player1} you\'re obliged to wait 2 seconds between each word you pronounce! {shots} shots per miss.',
    },
    tags: ['event', 'preparty'],
    end: {
        locales: {
            es: '{player1} ya no estás obligado/a esperar 2 segundos entre cada palabra que pronuncies!',
            en: '{player1} you are no longer obliged to wait 2 seconds between each word you pronounce!',
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
        es: 'Estais en una biblioteca! Todos debeis susurrar hasta nuevo aviso. El que hable mas alto de la cuenta bebe {shots} tragos',
        en: "You are in a library! Everyone must shout until a new order. The one who speaks louder than the account takes {shots} shots",
    },
    tags: ['event', 'preparty'],
    end: {
        locales: {
            es: "Ya no estais en una biblioteca, Puedes dejar de susurrar",
            en: "You are not in a library anymore, you can stop shouting",
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
    tags: ['preparty'],
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
}, {
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
}, {
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
    end: {
        locales: {
            es: '{player1}, ya no eres el grinch',
            en: '{player1}, you are no longer the grinch',
        },
    },
    tags: ['christmas', 'event'],
}, {
    locales: {
        en: "⛄ Snowstorm! The person with the fewest drinks so far must drink {shots} to 'stay warm.'",
        es: "⛄ ¡Tormenta de nieve! La persona con menos tragos acumulados debe beber {shots} para 'mantenerse caliente'.",
    },
    tags: ['christmas'],
}, {
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
}, {
    locales: {
        en: "{player1}, you are a snowman, act like you're melting dramatically the next time you drink",
        es: '{player1}, eres un muñeco de nieve, actúa como si te derritieses dramaticamente la próxima vez que bebas',
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
}, {
    locales: {
        en: "{player1} do you have 5 minutes to finish your drink",
        es: '{player1} tienes 5 minutos para terminar tu bebida',
    },
    tags: ['preparty'],
}, {
    locales: {
        en: "{player1} say something you have never done, the players who did it, must drink {shots}",
        es: '{player1} di algo que nunca hayas hecho, los que lo hayan hecho deben beber {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        en: "{player1} has the honor to split {shots} shots",
        es: '{player1} tiene el honor de repartir {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        en: "{player1} drinks {shots} shots",
        es: '{player1} bebe {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: "{player1} di el mes de nacimiento de {player2} sino aciertas, recibes {shots} shots",
        en: "{player1} say the month of birth of {player2} is you fail, get {shots} shots",
    },
    tags: ['preparty'],
}, {
    locales: {
        es: "{player1}, cuenta un chiste o recibes {shots} shots",
        en: "{player1}, has a joke or gets {shots} shots",
    },
    tags: ['preparty'],
}, {
    locales: {
        es: "¡Brindemos Amigos, por Nosotros!",
        en: "We bring friends, for us!",
    },
    tags: ['preparty'],
}, {
    locales: {
        es: "{player1} mira fijamente a los ojos de {player2}, el/la primero/a que parpadee recibes {shots} shots",
        en: "{player1} looks at {player2} eyes, the first one to close eyes gets {shots} shots",
    },
    tags: ['preparty'],
}, {
    locales: {
        es: "{player1} haces beber el número de tragos que creas conveniente a {player2}, pero tu bebes el doble",
        en: "{player1} you make {player2} drink the number of drinks you deem convenient, but you drink twice as many.",
    },
    tags: ['preparty'],
}, {
    locales: {
        es: "El ultimo jugador en haber venido a la fiesta recibes {shots} shots",
        en: "The last player to come to the party gets {shots} shots",
    },
    tags: ['preparty'],
}, {
    locales: {
        es: "{player1} hace beber {shots} tragos a {player2} o el doble a {player3}",
        en: "{player1} deals {shots} shots to {player2} or twice to {player3}",
    },
    tags: ['preparty'],
}, {
    locales: {
        es: "{player1} si eres una mujer reparte {shots} tragos o tendrás que beberlos tú",
        en: "{player1} if you are a woman, distribute {shots} shots or you will have to drink them yourself"
    },
    tags: ["preparty"]
}, {
    locales: {
        es: "El/la último/a en levantarse bebe {shots} tragos",
        en: "The last person to stand up drinks {shots} shots"
    },
    tags: ["preparty"]
}, {
    locales: {
        es: "{player1} bebe {shots} tragos y reparte {shots}",
        en: "{player1} drinks {shots} shots and distributes {shots}"
    },
    tags: ["preparty"]
}, {
    locales: {
        es: "{player1} si eres (una mujer|un hombre) reparte {shots} tragos o tendrás que beberlos tú",
        en: "{player1} if you are a (woman|man), distribute {shots} shots or you will have to drink them yourself"
    },
    tags: ["preparty"]
}, {
    locales: {
        es: "El/la último/a en levantarse bebe {shots} tragos",
        en: "The last person to stand up drinks {shots} shots"
    },
    tags: ["preparty"]
}, {
    locales: {
        es: "{player1} bebe {shots} tragos y reparte {shots}",
        en: "{player1} drinks {shots} shots and distributes {shots}"
    },
    tags: ["preparty"]
}, {
    locales: {
        es: "{player1}, si puedes tocarte la nariz con la lengua repartes {shots} tragos",
        en: "{player1}, if you can touch your nose with your mouth, drink {shots} shots"
    },
    tags: ["preparty"],
}, {
    locales: {
        es: "Sucesivamente, deletrea el nombre del jugador de tu derecha, quien se equivoque bebe {shots} tragos. Empieza {player1}",
        en: "One by one, spell the name of the player on your right, who is wrong, drink {shots} shots. Starts {player1}"
    },
    tags: ["preparty"],
}, {
    locales: {
        es: "El mas peludo bebe {shots} tragos",
        en: "The most stupid player drinks {shots} shots"
    },
    tags: ["preparty", "drinkIf"],
}, {
    locales: {
        en: "Whoever has been late the most to gatherings, drink {shots} shots",
        es: 'El que más veces haya llegado tarde a reuniones, bebe {shots} shots',
    },
    tags: ['drinkIf', 'preparty'],
}, {
    locales: {
        en: "{player1}, do a cartwheel (or|and) drink {shots} shots",
        es: '{player1}, haz una voltereta (o|y) bebe {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        en: "Everyone who has dyed their hair before, take {shots} shots",
        es: 'Todos los que se hayan teñido el pelo alguna vez, beben {shots} shots',
    },
    tags: ['drinkIf', 'preparty'],
}, {
    locales: {
        en: "If you've ever faked liking a gift, drink {shots} shots",
        es: 'Si alguna vez has fingido que te gusta un regalo, bebe {shots} shots',
    },
    tags: ['drinkIf', 'preparty'],
}, {
    locales: {
        en: "All who have a tattoo, drink {shots} shots",
        es: 'Todos los que tengan un tatuaje, beben {shots} shots',
    },
    tags: ['drinkIf', 'preparty'],
}, {
    locales: {
        en: "Name a country that starts with (a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|k|r|s|t|u|v|w|x|y|z). The first to fail or repeat drinks {shots} shots",
        es: 'Nombra un país que empiece con (a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|k|r|s|t|u|v|w|x|y|z). El primero en fallar o repetir bebe {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        en: "If you've ever fallen asleep at a party, drink {shots} shots",
        es: 'Si alguna vez te has quedado dormido en una fiesta, bebe {shots} shots',
    },
    tags: ['drinkIf', 'preparty'],
}, {
    locales: {
        en: "Whoever has the oldest phone, drink {shots} shots",
        es: 'El que tenga el móvil más viejo, bebe {shots} shots',
    },
    tags: ['vote', 'preparty'],
}, {
    locales: {
        en: "{player1}, pick someone to dance with for 30 seconds or drink {shots} shots",
        es: '{player1}, elige a alguien para bailar durante 30 segundos o bebe {shots} shots',
    },
    tags: ['challenge', 'preparty'],
}, {
    locales: {
        en: "{player1}, give {shots} shots to the person you think (is the smartest|talks the most|will drink the most tonight)",
        es: '{player1}, dale {shots} shots a la persona que crees que (es la más lista|habla más|beberá más esta noche)',
    },
    tags: ['preparty', '+18-light', '+18'],
}, {
    locales: {
        en: "If you've ever (cheated in a game|sneaked into a place|used someone else's password), drink {shots} shots",
        es: "Si alguna vez (hiciste trampa en un juego|te colaste en un lugar|usaste la contraseña de alguien más), bebe {shots} shots",
    },
    tags: ['drinkIf', 'preparty'],
}, {
    locales: {
        en: "{player1}, who (has the best style|is the funniest|has the best laugh)? Give them {shots} shots",
        es: '{player1}, ¿quién (tiene el mejor estilo|es el más divertido|tiene la mejor risa)? Dale {shots} shots',
    },
    tags: ['vote', 'preparty'],
}, {
    locales: {
        en: "If you (have a tattoo|can play an instrument|are wearing something blue), drink {shots} shots",
        es: 'Si (tienes un tatuaje|puedes tocar un instrumento|llevas algo azul), bebe {shots} shots',
    },
    tags: ['drinkIf', 'preparty'],
}, {
    locales: {
        en: "Everyone who (has broken a bone|knows how to swim|has traveled to another country), take {shots} shots",
        es: 'Todos los que (se han roto un hueso|saben nadar|han viajado a otro país), beben {shots} shots',
    },
    tags: ['drinkIf', 'preparty'],
}, {
    locales: {
        en: "{player1}, pick (a word|a theme). Each player must say something related without repeating or hesitating. The loser drinks {shots} shots",
        es: '{player1}, elige (una palabra|un tema). Cada jugador debe decir algo relacionado sin repetir ni dudar. El que pierda bebe {shots} shots',
    },
    tags: ['challenge', 'preparty'],
}, {
    locales: {
        en: "{player1}, tell us (your biggest secret|the craziest thing you've done). If you don't, drink {shots} shots",
        es: '{player1}, cuéntanos (tu mayor secreto|la locura más grande que has hecho). Si no quieres, bebe {shots} shots',
    },
    tags: ['preparty', '+18-light', '+18'],
}, {
    locales: {
        en: "{player1}, choose (two players|a pair). They must (hold hands for one minute|exchange seats). If they refuse, they take {shots} shots each",
        es: '{player1}, elige (dos jugadores|una pareja). Deben (darse la mano por un minuto|intercambiar asientos). Si se niegan, toman {shots} shots cada uno',
    },
    tags: ['challenge', '+18-light', 'preparty'],
}, {
    locales: {
        en: "The (first|last) person to touch their nose drinks {shots} shots",
        es: 'La (primera|última) persona en tocarse la nariz bebe {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        en: "If you've ever (sent a text you regret|been on a blind date|used a fake name), drink {shots} shots",
        es: 'Si alguna vez (enviaste un mensaje del que te arrepientes|estuviste en una cita a ciegas|usaste un nombre falso), bebe {shots} shots',
    },
    tags: ['drinkIf', 'preparty'],
}, {
    locales: {
        en: "Anyone who (has an ex they still talk to|cried at a movie this year|has a crush on someone here), drink {shots} shots",
        es: 'Cualquiera que (hable con un ex aún|haya llorado viendo una película este año|tenga un crush con alguien aquí), bebe {shots} shots',
    },
    tags: ['drinkIf'],
}, {
    locales: {
        en: "{player1}, call someone (outside the game|not in this room) and say ('I miss you.'|'I love you.') If you refuse, drink {shots} shots",
        es: '{player1}, llama a alguien (fuera del juego|que no esté en esta habitación) y dile ("te echo de menos"|"te amo"). Si te niegas, bebe {shots} shots',
    },
    tags: ['+18-light', '+18'],
}, {
    locales: {
        en: "If you've (googled yourself|lied about your age|used someone else's Netflix account), drink {shots} shots",
        es: 'Si alguna vez (te buscaste en Google|mentiste sobre tu edad|usaste la cuenta de Netflix de alguien más), bebe {shots} shots',
    },
    tags: ['drinkIf', 'preparty'],
}, {
    locales: {
        en: "{player1}, describe (the worst date you've been on|your most embarrassing moment). If you skip, drink {shots} shots",
        es: '{player1}, describe (la peor cita que tuviste|tu momento más vergonzoso). Si pasas, bebe {shots} shots',
    },
    tags: ['preparty', '+18-light'],
}, {
    locales: {
        en: "Everyone with (piercings|glasses|a middle name), take {shots} shots",
        es: 'Todos los que (tengan piercings|usen gafas|tengan un segundo nombre), beben {shots} shots',
    },
    tags: ['drinkIf', 'preparty'],
}, {
    locales: {
        en: "If you've ever (fallen asleep in class|been kicked out of somewhere|used a fake ID), drink {shots} shots",
        es: 'Si alguna vez (te quedaste dormido en clase|te echaron de algún lugar|usaste un DNI falso), bebe {shots} shots',
    },
    tags: ['drinkIf', 'preparty'],
}, {
    locales: {
        en: "{player1}, switch a piece of clothing with {player2}. If either refuses, drink {shots} shots each",
        es: '{player1}, intercambia una prenda de ropa con {player2}. Si alguno se niega, toma {shots} shots cada uno',
    },
    tags: ['+18'],
}, {
    locales: {
        en: "{player1}, imitate (a celebrity|someone in the room). If nobody guesses right, drink {shots} shots",
        es: '{player1}, imita a (un famoso|alguien de esta sala). Si nadie adivina, bebe {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        en: "{player1}, make up a (funny|weird) nickname for {player2}. If they reject it, they drink {shots} shots",
        es: '{player1}, inventa un apodo (divertido|raro) para {player2}. Si lo rechaza, bebe {shots} shots',
    },
    tags: ['challenge'],
}, {
    locales: {
        en: "If you've ever (forgotten someone's name right after meeting them|pretended to like a gift), drink {shots} shots",
        es: 'Si alguna vez (olvidaste el nombre de alguien justo después de conocerlo|fingiste que te gustaba un regalo), bebe {shots} shots',
    },
    tags: ['drinkIf'],
}, {
    locales: {
        en: "If you've ever (danced in the rain|sung karaoke|been caught talking to yourself), drink {shots} shots",
        es: 'Si alguna vez (bailaste bajo la lluvia|cantaste karaoke|te pillaron hablando solo), bebe {shots} shots',
    },
    tags: ['drinkIf'],
}, {
    locales: {
        en: "{player1}, sing the chorus of a (popular|random) song. If you refuse, drink {shots} shots",
        es: '{player1}, canta el estribillo de una canción (popular|al azar). Si te niegas, bebe {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        en: "{player1}, guess the favorite drink of {player2}. If you're wrong, drink {shots} shots",
        es: '{player1}, adivina la bebida favorita de {player2}. Si te equivocas, bebe {shots} shots',
    },
    tags: ['preparty', '+18-light'],
}, {
    locales: {
        en: "{player1}, guess {player2}'s (favorite color|birthday month|favorite season). If you're wrong, drink {shots} shots. If you're right, {player2} drinks {shots2} shots",
        es: '{player1}, adivina el (color favorito|mes de cumpleaños|estación favorita) de {player2}. Si fallas, bebe {shots} shots. Si aciertas, {player2} bebe {shots2} shots',
    },
    tags: ['+18-light', 'preparty'],
}, {
    locales: {
        en: "{player1}, tell us (your worst habit|something embarrassing about yourself). If you refuse, drink {shots} shots",
        es: "{player1}, cuéntanos (tu peor hábito|algo vergonzoso sobre ti). Si te niegas, bebe {shots} shots",
    },
    tags: ['preparty', '+18-light'],
}, {
    locales: {
        en: "Everyone who (has traveled to another continent|speaks more than two languages|has an unusual talent), drink {shots} shots",
        es: "Todos los que (hayan viajado a otro continente|hablen más de dos idiomas|tengan un talento inusual), beben {shots} shots",
    },
    tags: ['drinkIf', 'preparty'],
}, {
    locales: {
        en: "{player1}, share (the weirdest dream you've had|the last lie you told). If you skip, drink {shots} shots",
        es: "{player1}, comparte (el sueño más raro que hayas tenido|la última mentira que dijiste). Si pasas, bebe {shots} shots",
    },
    tags: ['preparty'],
}, {
    locales: {
        en: "If you've ever (faked being sick to skip school|gotten away with breaking something|used an excuse to avoid plans), drink {shots} shots",
        es: "Si alguna vez (fingiste estar enfermo para faltar a clase|saliste impune después de romper algo|pusiste una excusa para evitar planes), bebe {shots} shots",
    },
    tags: ['drinkIf', 'preparty'],
}, {
    locales: {
        en: "{player1}, let {player2} (send a random emoji|scroll through your camera roll for 10 seconds). Refuse, and you both drink {shots} shots",
        es: "{player1}, deja que {player2} (envíe un emoji al azar|revise tu galería durante 10 segundos). Si te niegas, ambos beben {shots} shots",
    },
    tags: ['+18-light', '+18'],
}, {
    locales: {
        en: "{player1}, trade (a random accessory|your seat) with {player2}. Refuse, and you both drink {shots} shots",
        es: "{player1}, intercambia (un accesorio al azar|tu asiento) con {player2}. Si te niegas, ambos beben {shots} shots",
    },
    tags: ['preparty'],
}, {
    locales: {
        en: "{player1}, guess (the favorite color|the biggest fear) of {player2}. Get it wrong, and drink {shots} shots",
        es: "{player1}, adivina (el color favorito|el mayor miedo) de {player2}. Si fallas, bebe {shots} shots",
    },
    tags: ['preparty'],
}, {
    locales: {
        en: "{player1}, do (10 push-ups|a silly dance). Refuse, and drink {shots} shots",
        es: "{player1}, haz (10 flexiones|un baile tonto). Si te niegas, bebe {shots} shots",
    },
    tags: ['preparty'],
}, {
    locales: {
        en: "{player1}, share (the most rebellious thing you've done|a secret you've never told anyone). Refuse, and drink {shots} shots",
        es: "{player1}, comparte (lo más rebelde que has hecho|un secreto que nunca le has contado a nadie). Si te niegas, bebe {shots} shots",
    },
    tags: ['+18-light'],
}, {
    locales: {
        en: "{player1}, di una cosa buena y una mala de {player2} y {player3}, pero no digas a cual pertenece cada una. Bebe {shots} shots",
        es: "{player1}, di una cosa buena y una mala de {player2} y {player3}, pero no digas a cual pertenece cada una. Bebe {shots} shots",
    },
    tags: ['+18-light', 'preparty'],
}, {
    locales: {
        en: "If you've ever (pretended to know a song's lyrics|sang karaoke sober|been to a music festival), drink {shots} shots",
        es: "Si alguna vez (fingiste saber la letra de una canción|cantaste karaoke sobrio|fuiste a un festival de música), bebe {shots} shots",
    },
    tags: ['drinkIf', 'preparty'],
}, {
    locales: {
        en: "Everyone who (has a favorite guilty-pleasure movie|has ever cried during a kid's movie|prefers animated movies), take {shots} shots",
        es: "Todos los que (tengan una película favorita que les dé vergüenza|hayan llorado viendo una película infantil|prefieran las películas animadas), beben {shots} shots",
    },
    tags: ['drinkIf', 'preparty'],
}, {
    locales: {
        en: "If you've ever (accidentally texted the wrong person|misread a meme|used the wrong emoji in a conversation), drink {shots} shots",
        es: "Si alguna vez (enviaste un mensaje al destinatario equivocado|entendiste mal un meme|usaste un emoji inadecuado en una conversación), bebe {shots} shots",
    },
    tags: ['drinkIf', 'preparty'],
}, {
    locales: {
        en: "{player1}, do your best impression of (a cartoon character|a celebrity). Refuse, and drink {shots} shots",
        es: "{player1}, imita a (un personaje animado|un famoso). Si te niegas, bebe {shots} shots",
    },
    tags: ['preparty'],
}, {
    locales: {
        en: "Everyone, take a photo of (the funniest thing in the room|your best dance move|someone laughing) and share it in the group chat",
        es: "Todos, tómense una foto de (la cosa más graciosa en la sala|su mejor movimiento de baile|alguien riendo) y compártanla en el chat del grupo",
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} si eres una mujer reparte {shots} tragos o tendrás que beberlos tú',
        en: '{player1} if you are a woman, deal {shots} shots or you will have to drink them yourself',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'El/la último/a en levantarse bebe {shots} tragos',
        en: 'The last person to stand up drinks {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} hace beber {shots} tragos a {player2} o {shots2} tragos a {player3}',
        en: '{player1} deals {shots} shots to {player2} or {shots2} shots to {player3}',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} bebe {shots} tragos y reparte {shots}',
        en: '{player1} drinks {shots} shots and deals {shots}',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} la siguiente persona que te mire a los ojos debe beber {shots} tragos',
        en: '{player1} the next person who looks you in the eyes must drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'La primera persona en quitarse dos prendas reparte {shots} tragos',
        en: 'The first person to remove two pieces of clothing deals {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'El/la primero/a en lamer su codo reparte 100 tragos',
        en: 'The first person to lick their elbow deals 100 shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} y {player2} tendrán que ponerse de acuerdo para repartir {shots} tragos a una sola persona',
        en: '{player1} and {player2} will have to agree to deal {shots} shots to a single person',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los/las zurdos/as beben {shots} tragos',
        en: 'Left-handed people drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellos/as que tengan sus teléfonos sobre la mesa reparten {shots} tragos',
        en: 'Those who have their phones on the table deal {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'La primera persona que señale a la jugadora más joven reparte {shots} tragos',
        en: 'The first person to point to the youngest player deals {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'La persona con el vaso más lleno, bebe {shots} tragos',
        en: 'The person with the fullest glass drinks {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'El más peludo bebe {shots} tragos',
        en: 'The hairiest person drinks {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Todas las personas cuyos nombres contengan una "e" beben {shots} tragos',
        en: 'All people whose names contain an "e" drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} muestra las últimas 5 fotos de tu móvil o bebes {shots} tragos',
        en: '{player1} show the last 5 photos on your phone or drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Todos/as los/las que lleven alguna prenda marrón beben {shots} tragos',
        en: 'Everyone who wears something brown drinks {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'La última persona en haber tenido sexo bebe {shots} trago',
        en: 'The last person who haved sex drinks {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'El jugador más alto reparte {shots} tragos',
        en: 'The tallest player deals {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Todos/as los/as rubios/as beben {shots} tragos',
        en: 'All blondes drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Todas las personas más jóvenes que {player1} beben {shots} tragos',
        en: 'All people younger than {player1} drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Todas las personas mayores que {player1} beben {shots} tragos',
        en: 'All people older than {player1} drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Todas las personas más altas que {player1} beben {shots} tragos',
        en: 'All people taller than {player1} drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Todas las personas más bajas que {player1} beben {shots} tragos',
        en: 'All people shorter than {player1} drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las personas más bronceadas que {player1} beben {shots} tragos',
        en: 'People more tanned than {player1} drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las personas que estén más borrachas que {player1} beben {shots} tragos',
        en: 'People more drunk than {player1} drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las personas que estén menos borrachas que {player1} beben {shots} tragos',
        en: 'People less drunk than {player1} drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las personas con agujeros en los calcetines beben {shots} tragos',
        en: 'People with holes in their socks drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} dejas a {player2} acceso libre de tu facebook durante 2 minutos o te acabas tu vaso.',
        en: '{player1} you give {player2} free access to your facebook for 2 minutes or you finish your glass.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellos/ Aquellas con una pulsera, brazalete o reloj beben {shots} tragos',
        en: 'Those with a bracelet or watch drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las personas con tatuajes o piercing beben {shots} tragos',
        en: 'People with tattoos or piercings drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las personas originarias del norte beben {shots} tragos',
        en: 'People from the north drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las personas originarias del sur beben {shots} tragos',
        en: 'People from the south drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellos/ aquellas que se depilan las axilas beben {shots} tragos',
        en: 'Those who shave their armpits drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Duelo entre {player1} y {player2} ! La persona que tenga las manos más grandes, bebe {shots} tragos.',
        en: 'Duel between {player1} and {player2}! The person with the biggest hands drinks {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'La última persona que haya ido al baño bebe {shots} tragos.',
        en: 'The last person to go to the bathroom drinks {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Duelo entre {player1} y {player2}, el que lleve los calzoncillos más oscuros bebe {shots} tragos.',
        en: 'Duel between {player1} and {player2}, the one who wears the darkest underwear drinks {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los que tengan los ojos azules beben {shots} tragos.',
        en: 'Those with blue eyes drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, si NO tienes las piernas depiladas, bebes {shots} tragos.',
        en: '{player1}, if you do NOT have shaved legs, you drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Sin dolor no hay recompensa, {player1} bebe un trago sin usar tus manos.',
        en: 'No pain, no gain, {player1} drinks a shot without using your hands.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, cuenta algo sobre {player2} o bebes {shots} tragos.',
        en: '{player1}, tell something about {player2} or drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Todo el mundo bebe {shots} tragos!',
        en: 'Everybody drinks {shots} shots!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'La persona que está a la derecha de {player1} bebe {shots} tragos.',
        en: 'The person to the right of {player1} drinks {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'La persona que está a la izquierda de {player1} bebe {shots} tragos.',
        en: 'The person to the left of {player1} drinks {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Manos arriba! La última persona en levantar las manos bebe {shots} tragos.',
        en: 'Hands up! The last person to raise their hands drinks {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Efecto Boomerang, {player1} puede transferir sus tragos a cualquier jugador para el turno siguiente',
        en: 'Boomerang effect, {player1} can transfer their shots to any player for the next turn',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las personas que conocen a {player1} desde hace menos de un mes beben {shots} tragos',
        en: 'People who have known {player1} for less than a month drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los aficionados al fútbol beben {shots} tragos',
        en: 'Football fans drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡No más teléfono! La primera persona en consultar su teléfono bebe 10 tragos',
        en: 'No more phone! The first person to check their phone drinks 10 shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellos/ aquellas que tienen un iPhone beben {shots} tragos',
        en: 'Those who have an iPhone drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellos/ aquellas que tienen un producto fabricado por Samsung beben {shots} tragos',
        en: 'Those who have a product made by Samsung drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los que usan gafas o lentillas beben {shots} tragos',
        en: 'Those who wear glasses or contact lenses drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las personas, que nunca hayan jugado a Tragos Locos, beben {shots} tragos',
        en: 'People who have never played Crazy Shots drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{shots} tragos para todos los fumadores',
        en: '{shots} shots for all smokers',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, bebe la cantidad de tragos que quieras, {player2} tiene que beber el doble',
        en: '{player1}, drink as many shots as you want, {player2} has to drink double',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'La persona con el culo más grande bebe {shots} tragos',
        en: 'The person with the biggest butt drinks {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'El jugador o jugadora con más alcohol en el vaso bebe {shots} tragos',
        en: 'The player with the most alcohol in the glass drinks {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, si tu bebida es más barata que la de {player2}, bebe {shots} tragos',
        en: '{player1}, if your drink is cheaper than {player2}, drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Si el día de tu cumpleaños cae en un número par, bebe {shots} tragos',
        en: 'If your birthday falls on an even number, drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Si el día de tu cumpleaños cae en un número impar, bebe {shots} tragos',
        en: 'If your birthday falls on an odd number, drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, aquellos/aquellas que no estén en los contactos de tu teléfono beben {shots} tragos.',
        en: '{player1}, those who are not in your phone contacts drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, di el título de la última película que hayas visto en el cine, aquellos/aquellas que no la hayan visto beben {shots} tragos.',
        en: '{player1}, say the title of the last movie you saw in the cinema, those who have not seen it drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} elige tu esclavo, podrás transferirle dos veces los tragos que debes beber.',
        en: '{player1} choose your slave, you can transfer him twice the shots you have to drink.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Verdad o mentira, {player1} elige "verdad o mentira" para {player2}',
        en: 'Truth or lie, {player1} choose "truth or lie" for {player2}',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'La amistad lo es todo, {player1} y {player2} es hora de crear un juego de señas que deberán mantener hasta el fin del juego.',
        en: 'Friendship is everything, {player1} and {player2} it is time to create a sign language that you must keep until the end of the game.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Todos Aquellos / aquellas que se puedan tocar la nariz con la lengua reparten {shots} tragos',
        en: 'All those who can touch their nose with their tongue deal {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los solteros deben obligar a una sola persona a beber {shots} tragos',
        en: 'Singles must force a single person to drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las personas con pareja deben hacer beber {shots} tragos a un solo jugador',
        en: 'People with partners must make a single player drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'La última persona que ha publicado un Status en facebook bebe {shots} tragos',
        en: 'The last person who posted a Status on facebook drinks {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} debes darle un beso en el trasero a {player2} sino bebes {shots} tragos',
        en: '{player1} you must kiss {player2} on the butt or drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'La primera persona que enseñe un condón reparte {shots} tragos',
        en: 'The first person to show a condom deals {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'La última persona en quitar los pies del suelo bebe {shots} tragos',
        en: 'The last person to take their feet off the ground drinks {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, designas un accesorio (cintúron, collar, bolso...). Todas las personas que llevan puesto este accesorio deben beber {shots} tragos',
        en: '{player1}, you designate an accessory (belt, necklace, bag...). All people wearing this accessory must drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Una foto de recuerdo, {player1} y {player2} haced un selfie!',
        en: 'A souvenir photo, {player1} and {player2} take a selfie!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} añade zumo o alcohol en el vaso de {player2}',
        en: '{player1} adds juice or alcohol to {player2} glass',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellos/aquellas que tenían menos de 8 años durante el mundial del 98 beben {shots} tragos.',
        en: 'Those who were under 8 years old during the 98 World Cup drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, Si alguna vez te has limpiado el culo con hojas de árbol en vez de papel de baño , bebe {shots} tragos',
        en: '{player1}, If you have ever wiped your butt with tree leaves instead of toilet paper, drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, bebes el mismo número de tragos que de jugadores.',
        en: '{player1}, you drink the same number of shots as players.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Si hay alguien ya vomitó esta noche, puede repartir {shots} tragos.',
        en: 'If someone has already vomited tonight, they can deal {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡La última persona en haber vomitado (durante una fiesta anterior) reparte {shots} tragos! Campeón.',
        en: 'The last person to have vomited (during a previous party) deals {shots} shots! Champion.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} y {player2}, beben al mismo tiempo {shots} tragos.',
        en: '{player1} and {player2}, drink {shots} shots at the same time.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las personas que han tenido una ETS (Enfermedad de Transmission Sexual) reparten {shots} tragos.',
        en: 'People who have had an STD (Sexually Transmitted Disease) deal {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'A cada turno, un jugador debe añadir un poco de alcohol a su vaso, {player1} empiezas.',
        en: 'At each turn, a player must add a little alcohol to their glass, {player1} you start.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'La persona que se emborrachó de más joven reparte {shots} tragos',
        en: 'The person who got drunk the youngest deals {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquél/Aquella que tenga más amigos en Facebook bebe {shots} tragos',
        en: 'The person with the most friends on Facebook drinks {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿{player1}, has tenido ya una aventura de una noche? Si es tu respuesta es SI repartes {shots} tragos sino, te los bebes.',
        en: '{player1}, have you already had a one-night stand? If your answer is YES, you deal {shots} shots otherwise, you drink them.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Hasta que {player1} no vea su nombre escrito en una pantalla de téléfono, él/ ella debera beber a cada turno..',
        en: 'Until {player1} sees his/her name written on a phone screen, he/she must drink at each turn..',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Juego del lobo! El lobo debe tocar a un jugador que de debe beber un trago y se convierte automáticamente en lobo, y así sucesivamente hasta el final de la partida.{player1} es el lobo.',
        en: 'Wolf game! The wolf must touch a player who must drink a shot and automatically becomes the wolf, and so on until the end of the game. {player1} is the wolf.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellos/aquellas que tengan un paquete de cigarrillos beben un trago por cada cigarrillo que tenga (8 máximo)',
        en: 'Those who have a pack of cigarettes drink a shot for each cigarette it has (8 maximum)',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellos/ aquellas que siguen bebiendo alcoholes suaves (vino, cerveza) beben {shots} tragos.',
        en: 'Those who continue to drink soft alcohols (wine, beer) drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellos /aquellas que se hayan masturbado haciendo un vídeo porno beben {shots} tragos.',
        en: 'Those who been masturbated while watching porn video drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, haznos tres pasos de baile o bebe {shots} tragos',
        en: '{player1}, do three dance steps or drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, adivina la edad de {player2} si fallas, bebe {shots} tragos',
        en: '{player1}, guess the age of {player2} if you fail, drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, di el signo astrológico de {player2} si fallas, bebe {shots} tragos',
        en: '{player1}, say the astrological sign of {player2} if you fail, drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, cierra tus ojos y di el color de ojos de {player2} sino bebes {shots} tragos',
        en: '{player1}, close your eyes and say the eye color of {player2} otherwise drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, cierra tus ojos y di el color de los zapatos de {player2} sino bebe {shots} tragos',
        en: '{player1}, close your eyes and say the color of {player2} shoes otherwise drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, tienes 3 segundos para decir el número exacto de la personas en la sala. Si fallas, beberás {shots} tragos',
        en: '{player1}, you have 3 seconds to say the exact number of people in the room. If you fail, you will drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, di el color favorito de {player2} sino bebe {shots} tragos',
        en: '{player1}, say the favorite color of {player2} otherwise drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'La siguiente persona que sonría toma {shots} tragos.',
        en: 'The next person who smiles takes {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'La persona que obtuvo su primer teléfono siendo más joven bebe {shots} tragos.',
        en: 'The person who got their first phone younger drinks {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los jugadores que NO puedan tocar el suelo , estando de pie con las piernas estiradas beben {shots} tragos.',
        en: 'Players who CAN NOT touch the floor, standing with their legs stretched out drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'El primer jugador en tocar los pies de {player1}, reparte {shots} tragos.',
        en: 'The first player to touch the feet of {player1}, deals {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, si te quedas 5 minutos sin hablar a partir de este momento, podrás elegir a una persona que se deberá acabar su vaso',
        en: '{player1}, if you stay 5 minutes without talking from this moment, you can choose a person who must finish their glass',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡El siguiente jugador en beber, tendrá que duplicar su número de tragos!',
        en: 'The next player to drink will have to double their number of shots!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Hasta el fínal del juego, el primer jugador en decir la palabra "sí" bebe todo su vaso de un solo trago.',
        en: 'Until the end of the game, the first player to say the word "yes" drinks all their glass in one go.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'El último jugador en haberse duchado bebe {shots} tragos.',
        en: 'The last player to have showered drinks {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} debes sonreír durante 1 minuto sino {shots} tragos por cada falta',
        en: '{player1} you must smile for 1 minute otherwise {shots} shots per fault',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquél o aquella que lea esta frase bebe {shots} tragos',
        en: 'The person who reads this sentence drinks {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellos o aquellas en oír esta frase beben {shots} tragos',
        en: 'Those who hear this sentence drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, haznos 5 segundos de Tap dance sino bebes {shots} tragos',
        en: '{player1}, do 5 seconds of Tap dance otherwise drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, tienes 3 minutos de inmunidad (puedes dejar descansar tu hígado)',
        en: '{player1}, you have 3 minutes of immunity (you can let your liver rest)',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquél que tiene menos pelo bebe {shots} tragos',
        en: 'The one with the least hair drinks {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Los tres jugadores menos peludos toman {shots} tragos!',
        en: 'The three least hairy players drink {shots} shots!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Los tres jugadores más grandes toman {shots} tragos!',
        en: 'The three biggest players drink {shots} shots!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Los tres jugadores más estúpidos toman {shots} tragos!',
        en: 'The three stupidest players drink {shots} shots!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Los tres jugadores menos bronceados toman {shots} tragos!',
        en: 'The three least tanned players drink {shots} shots!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Los tres jugadores más tacaños toman {shots} tragos!',
        en: 'The three stingiest players drink {shots} shots!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Los tres jugadores con menos dinero en efectivo en la cartera toman {shots} tragos!',
        en: 'The three players with the least cash in their wallet drink {shots} shots!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡El trío {player1}, {player2} y {player3} beben todos {shots} tragos!',
        en: 'The trio {player1}, {player2} and {player3} all drink {shots} shots!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡El/La primero/a en decir un refrán reparte {shots} tragos!',
        en: 'The first person to say a proverb deals {shots} shots!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Los tres más jóvenes del grupo beben {shots} tragos!',
        en: 'The three youngest in the group drink {shots} shots!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, si alguna vez te has desnudado en público, repartes {shots} tragos sino bebes.',
        en: '{player1}, if you have ever stripped in public, you deal {shots} shots otherwise you drink.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellas o aquellos que hoy no se hayan duchado beben {shots} tragos.',
        en: 'Those who have not showered today drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, si llevas puestas unas sandalias repartes {shots} tragos, en caso contrario, bebes tú.',
        en: '{player1}, if you are wearing sandals you deal {shots} shots, otherwise, you drink.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellas y aquellas que han practicado más de dos deportes reparten {shots} tragos.',
        en: 'Those who have practiced more than two sports deal {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, si tienes el pelo rizado debes repartir {shots} tragos sino bébelos.',
        en: '{player1}, if you have curly hair you must deal {shots} shots otherwise drink them.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'El Anfitrión de la fiesta reparte {shots} tragos, si nadie es anfitrión, {player1} repartes {shots2} tragos',
        en: 'The Host of the party deals {shots} shots, if no one is the host, {player1} deals {shots2} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, imita otro a jugador, la primera persona en saber de quién se trate reparte {shots} tragos',
        en: '{player1}, imitate another player, the first person to know who it is deals {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, debes hacer lo que mande {player2}, si te niegas bebes {shots} tragos',
        en: '{player1}, you must do what {player2} says, if you refuse you drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellas y aquellos que hayan aparecido en Televisión beben {shots} tragos',
        en: 'Those who have appeared on Television drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellas y aquellos que han leído a escondidas los mensajes de texto de su novio/novia beben {shots} tragos',
        en: 'Those who have secretly read the text messages of their boyfriend/girlfriend drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellas y aquellos que hayan copiado en un examen beben {shots} tragos',
        en: 'Those who have copied on an exam drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellas y aquellos que hayan escrito algo en Facebook estando borrachos beben {shots} tragos',
        en: 'Those who have written something on Facebook while drunk drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, si has declarado tu amor estando borracho(a) por mensaje, bebe {shots} tragos sino repártelos',
        en: '{player1}, if you have declared your love while drunk by message, drink {shots} shots otherwise deal them',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, si te has tomado una siesta en el trabajo/escuela, bebes {shots} tragos sino repártelos.',
        en: '{player1}, if you have taken a nap at work/school, drink {shots} shots otherwise deal them.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, si has robado en una tienda, bebe {shots} tragos sino repártelos.',
        en: '{player1}, if you have stolen in a store, drink {shots} shots otherwise deal them.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, si alguna vez has tenido pérdidas de memoria a causa del alcohol, bebe {shots} tragos sino repártelos',
        en: '{player1}, if you have ever had memory loss due to alcohol, drink {shots} shots otherwise deal them',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, si alguna vez te han echado de un bar o club bebes {shots} tragos, sino repártelos',
        en: '{player1}, if you have ever been kicked out of a bar or club drink {shots} shots, otherwise deal them',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, si has roto con alguien por SMS bebes {shots} tragos, sino repártelos.',
        en: '{player1}, if you have broken up with someone by SMS drink {shots} shots, otherwise deal them.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, si has mentido sobre tu edad para gustarle a alguien bebes {shots} tragos, sino repártelos.',
        en: '{player1}, if you have lied about your age to like someone drink {shots} shots, otherwise deal them.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, si le has pedido a alguien su teléfono sin estar borracho(a) bebe {shots} tragos, sino repártelos.',
        en: '{player1}, if you have asked someone for their phone number without being drunk drink {shots} shots, otherwise deal them.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Si nunca has hecho un Strip-tease bebe {shots} tragos.',
        en: 'If you have never done a Strip-tease drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, deja a {player2} enviar un Snapchat desde tu teléfono sino bebe {shots} tragos.',
        en: '{player1}, let {player2} send a Snapchat from your phone otherwise drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellas y aquellos que alguna vez hayan utilizado preservativos perfumados beben {shots} tragos',
        en: 'Those who have ever used scented condoms drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las y los que nunca hayan estado borrachos durante tres días seguidos reparten {shots} tragos.',
        en: 'Those who have never been drunk for three days in a row deal {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las y los que hayan bebido alguna vez antes de las diez de la mañana beben {shots} tragos',
        en: 'Those who have ever drunk before ten in the morning drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellas y aquellos que alguna vez hayan estado sin utilizar ropa interior durante 3 días consecutivos o más, beben {shots} tragos.',
        en: 'Those who have ever been without wearing underwear for 3 consecutive days or more drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los tres jugadores más imberbes toman {shots} tragos.',
        en: 'The three most beardless players drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los ateos beben {shots} tragos.',
        en: 'Atheists drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los y las que creen en espíritus beben {shots} tragos.',
        en: 'Those who believe in spirits drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellas y aquellos que ayer se emborracharon beben {shots} tragos.',
        en: 'Those who got drunk yesterday drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Quienes terminasen muy mal su última noche de fiesta beben {shots} tragos.',
        en: 'Those who ended their last party night very badly drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, si crees que eres más hermosa que {player2} bebe {shots} tragos.',
        en: '{player1}, if you think you are more beautiful than {player2} drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, si alguna vez has tenido una pelea a puñetazos con alguíen bebes {shots} tragos.',
        en: '{player1}, if you have ever had a fist fight with someone drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, alguna vez has provocado una pelea debes beber {shots} tragos',
        en: '{player1}, if you have ever started a fight you must drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, alguna vez has estado involucrado/da en una pelea de borrachos bebes {shots} tragos',
        en: '{player1}, if you have ever been involved in a drunken fight you drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, si hoy has tomado menos que dos vasos de alcohol bebe {shots} tragos.',
        en: '{player1}, if today you have drunk less than two glasses of alcohol drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellas y aquellos que bebieron durante el turno anterior beben {shots} tragos',
        en: 'Those who drank during the previous turn drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las y los que bebieron con el turno anterior reparten {shots} tragos.',
        en: 'Those who drank with the previous turn deal {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, si has bebido más que {player2}, puedes repartir {shots} tragos.',
        en: '{player1}, if you have drunk more than {player2}, you can deal {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellas y aquellos que trabajan o estudian en el sector comercial beben {shots} tragos.',
        en: 'Those who work or study in the commercial sector drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las y los que trabajan o estudian en cualquier tipo de ingeniería beben {shots} tragos.',
        en: 'Those who work or study in any type of engineering drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellas y aquellos que trabajan o estudian en la comercialización beben {shots} tragos.',
        en: 'Those who work or study in marketing drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellas y aquellos que trabajan o estudian en el sector de la sanidad beben {shots} tragos.',
        en: 'Those who work or study in the health sector drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellas y aquellos que trabajan o estudian ciencias sociales beben {shots} tragos.',
        en: 'Those who work or study social sciences drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las y los que trabajan en el sector ecológico beben {shots} tragos.',
        en: 'Those who work in the ecological sector drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellas y aquellos que prefieren decir "Party" y no "Fiesta" beben {shots} tragos.',
        en: 'Those who prefer to say "Party" and not "Fiesta" drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellas y aquellos que han consultado hoy su Facebook beben {shots} tragos.',
        en: 'Those who have checked their Facebook today drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las y los que todavía no han repartido tragos beben {shots} tragos.',
        en: 'Those who have not yet dealt shots drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Entre {player1} y {player2} aquél o aquella que hoy haya bebido menos, bebe {shots} tragos.',
        en: 'Between {player1} and {player2} the one who has drunk less today, drinks {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'La primera persona en enviar un SMS a un miembro de su familia repárte {shots} tragos.',
        en: 'The first person to send an SMS to a family member deals {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'El siguiente jugador que beba, podrá repartir {shots} tragos.',
        en: 'The next player to drink, can deal {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellas y aquellos que se hayan cambiado el color de su pelo beben {shots} tragos.',
        en: 'Those who have changed the color of their hair drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellas y aquellos que tiengan un animal doméstico o más, beben {shots} tragos.',
        en: 'Those who have a pet or more, drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las y los que lleven las uñas pintadas beben {shots} tragos.',
        en: 'Those who wear painted nails drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellas y aquellos que llevan ropa limpia, beben {shots} tragos.',
        en: 'Those who wear clean clothes, drink {shots} shots.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellas y aquellos que hayan retocado su foto de perfil de Facebook beben {shots} tragos',
        en: 'Those who have retouched their Facebook profile picture drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'La última persona que haya llegado esta noche bebe {shots} tragos',
        en: 'The last person to arrive tonight drinks {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Aquellas y aquellos que hayan "hackeado" la cuenta de Facebook de un jugador beben {shots} tragos!',
        en: 'Those who have "hacked" a player\'s Facebook account drink {shots} shots!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Aquellas y aquellos a los que les hayan "hackeado" su cuenta de Facebook beben {shots} tragos!',
        en: 'Those who have had their Facebook account "hacked" drink {shots} shots!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las y los que hayan chateado con MSN beben {shots} tragos',
        en: 'Those who have chatted with MSN drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las y los que hayan bailado la canción de Ricky Martin- "Livin\' la Vida Loca" beben {shots} tragos',
        en: 'Those who have danced to Ricky Martin\'s song - "Livin\' la Vida Loca" drink {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Aquellas y aquellos que tienen una edad par (ej. 22 años) deben enviar una foto a alguien o beber {shots} tragos!',
        en: 'Those who have an even age (e.g. 22 years) must send a photo to someone or drink {shots} shots!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Los diestros y las diestras beben {shots} tragos!',
        en: 'Right-handers drink {shots} shots!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Aquellas y aquellos que están enfermos beben {shots} tragos!',
        en: 'Those who are sick drink {shots} shots!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Aquellas y aquellos que hayan bailado una canción romántica con alguien sin que pase nada más beben {shots} tragos!',
        en: 'Those who have danced a romantic song with someone without anything else happening drink {shots} shots!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Aquellas y aquellos que han tenido una cita con alguien a partir de un mensaje enviado durante una clase beben {shots} tragos!',
        en: 'Those who have had a date with someone from a message sent during a class drink {shots} shots!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellas y aquellos a los que un amigo les ha robado su pareja beben {shots} tragos!',
        en: 'Those who have had a friend steal their partner drink {shots} shots!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Las y los que hayan cagado en un baño público beben {shots} tragos!',
        en: 'Those who have pooped in a public bathroom drink {shots} shots!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Si hoy has bailado bebe {shots} tragos!',
        en: 'If you have danced today drink {shots} shots!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Muerte a los Frikis! La última persona en haber utilizado su teléfono móvil (salvo el que tiene Tragos Locos) bebe {shots} tragos',
        en: 'Death to the Geeks! The last person to have used their mobile phone (except for the one with Tragos Locos) drinks {shots} shots',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Aquellas y aquellos que conocen a alguno de los fundadores de Tragos Locos beben {shots} tragos!',
        en: 'Those who know any of the founders of Tragos Locos drink {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Aquellas o aquellos que hayan peleado en un Ring de Boxeo beben {shots} tragos!',
        en: 'Those who have fought in a Boxing Ring drink {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡{player1} haz 6 abdominales y bebe un trago entre cada una!',
        en: '{player1} do 6 sit-ups and take a drink between each one!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡{player1} paséate entre los jugadores y da una palmadita en la espalda a quienes deberán beber dos tragos!',
        en: '{player1} walk around the players and pat on the back those who will have to drink two shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Los Jugadores con más estudios que {player1} beben {shots} tragos!',
        en: 'Players with more education than {player1} drink {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Las personas que no puedan juntar sus dos manos detrás de la espalda (una desde arriba, otra desde abajo) beben {shots} tragos!',
        en: 'People who cannot join their hands behind their back (one from above, one from below) drink {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡El jugador que esté a la derecha de la persona que acaba de leer este mensaje bebe {shots} tragos!',
        en: 'The player to the right of the person who just read this message drinks {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡El jugador que esté a la derecha de la persona que acaba de leer este mensaje reparte {shots} tragos!',
        en: 'The player to the right of the person who just read this message gives out {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡El jugador que está a la izquierda de la persona que acaba de leer este mensaje reparte {shots} tragos!',
        en: 'The player to the left of the person who just read this message gives out {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡El jugador que está a la izquierda de la persona que acaba de leer este mensaje bebe {shots} tragos!',
        en: 'The player to the left of the person who just read this message drinks {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Cada uno bebe el mismo número de tragos que años haya pasado en la Universidad!',
        en: 'Everyone drinks as many shots as years they spent in University!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Aquellas y aquellos que contengan la letra A en su nombre beben {shots} tragos!',
        en: 'Those who have the letter A in their name drink {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Aquellas y aquellos que contengan la letra F en su nombre beben {shots} tragos!',
        en: 'Those who have the letter F in their name drink {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Aquellas y aquellos que contengan la letra S en su nombre beben {shots} tragos!',
        en: 'Those who have the letter S in their name drink {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Aquellas y aquellos que contengan la letra O en su nombre beben {shots} tragos!',
        en: 'Those who have the letter O in their name drink {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Los hijos únicos beben {shots} tragos!',
        en: 'Only children drink {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Las personas que han repetido un año escolar beben {shots} tragos!',
        en: 'People who have repeated a school year drink {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡{player1} reparte en tragos el número de hermanos y hermanas que tengas!',
        en: '{player1} give out as many shots as siblings you have!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡{player1} bebes en tragos el mismo número de países, que hayas visitado!',
        en: '{player1} drink as many shots as countries you have visited!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Los que son buenos trabajando con actividades manuales beben {shots} tragos!',
        en: 'Those who are good at working with their hands drink {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Los que tengan los brazos delgados beben {shots} tragos! Será un buen ejercicio.',
        en: 'Those with thin arms drink {shots} shots! It will be a good exercise.'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Los barbudos beben {shots} tragos!',
        en: 'The bearded ones drink {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Las y los que hayan cagado en el mar beben {shots} tragos!',
        en: 'Those who have pooped in the sea drink {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Aquellas y aquellos que han cagado en la calle beben {shots} tragos, panda de cerdos!',
        en: 'Those who have pooped in the street drink {shots} shots, you bunch of pigs!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡{player1} si tu edad es un número par bebe {shots} tragos, {shots2} tragos si es impar!',
        en: '{player1} if your age is an even number drink {shots} shots, {shots2} shots if it\'s odd!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Elegid a la persona con más mal humor y que beba {shots} tragos!',
        en: 'Choose the person with the worst mood and have them drink {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡{player1} , {player2} te va a pellizcar el culo sino te toca beber {shots} tragos!',
        en: '{player1}, {player2} will pinch your butt unless you drink {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Aquellos jugadores que han llegado tarde a la partida de Tragos Locos beben {shots} tragos!',
        en: 'Those players who arrived late to the Tragos Locos game drink {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡La primera persona en haber tenido la idea de jugar a Tragos Locos puede repartir {shots} tragos!',
        en: 'The first person who had the idea to play Tragos Locos can give out {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Las mujeres beben {shots} tragos!',
        en: 'Women drink {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Los hombres beben {shots} tragos!',
        en: 'Men drink {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Quien haya leído el libro "La casa de los espíritus" bebe {shots} tragos!',
        en: 'Whoever has read the book "The House of the Spirits" drinks {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡La última persona en haber ido a un parque de atracciones reparte {shots} tragos!',
        en: 'The last person to have gone to an amusement park gives out {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Quien haya vivido en más de 3 ciudades beben {shots} tragos!',
        en: 'Those who have lived in more than 3 cities drink {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡{player1}, di una virtud de cada uno de los jugadores y bebe un trago por cada virtud que digas!',
        en: '{player1}, say one virtue of each player and take a drink for each virtue you mention!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡{player1}, di un defecto de cada jugador y bebe un trago por cada defecto!',
        en: '{player1}, say one flaw of each player and take a drink for each flaw!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Quien haya tenido sueños eróticos con alguno de los presentes bebe {shots} tragos!',
        en: 'Whoever has had erotic dreams about anyone present drinks {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Los que se hayan despertado hablando en medio de la noche beben {shots} tragos!',
        en: 'Those who have woken up talking in the middle of the night drink {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, bebe 3 chupitos seguidos o reparte {shots} tragos',
        en: '{player1}, drink 3 shots in a row or give out {shots} shots'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} debes beber {shots} tragos mientras que {player2} te sopla a la oreja',
        en: '{player1} you must drink {shots} shots while {player2} blows in your ear'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los que sean más altos que {player1} beben la diferencia de centímetros en tragos (ej. 5cm = 5 tragos).',
        en: 'Those who are taller than {player1} drink the difference in centimeters in shots (e.g. 5cm = 5 shots).'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, invita un o una amigo/a a esta fiesta o bebe {shots} tragos',
        en: '{player1}, invite a friend to this party or drink {shots} shots'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿A quién le gusta acariciar a los gatos? Pues bebed {shots} tragos',
        en: 'Who likes to pet cats? Well, drink {shots} shots'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Quien no pueda meterse todo el borde de su vaso en la boca bebe {shots} tragos.',
        en: 'Whoever cannot fit the entire rim of their glass in their mouth drinks {shots} shots.'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Quien tenga pelo entre las cejas bebe {shots} tragos',
        en: 'Whoever has hair between their eyebrows drinks {shots} shots'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'El último que haya tocado la pantalla de su teléfono bebe {shots} tragos',
        en: 'The last person to have touched their phone screen drinks {shots} shots'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡{player1}, finge ser una serpiente durante 5 largos segundos o bebes {shots} tragos!',
        en: '{player1}, pretend to be a snake for 5 long seconds or drink {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡{player1}, imita una babosa durante 5 largos segundos o bebes {shots} tragos!',
        en: '{player1}, imitate a slug for 5 long seconds or drink {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡{player1}, imita una tortuga durante 5 largos segundos o bebes {shots} tragos!',
        en: '{player1}, imitate a turtle for 5 long seconds or drink {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡{player1} haz una mueca mientras {player2} te toma una foto, y bebe {shots} tragos!',
        en: '{player1} make a face while {player2} takes a photo of you, and drink {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Quien haya nacido a 100 kilómetros de aquí o más bebe {shots} tragos!',
        en: 'Whoever was born 100 kilometers from here or more drinks {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Quien haya nacido a 50 kilómetros de aquí o menos repárten {shots} tragos!',
        en: 'Whoever was born 50 kilometers from here or less gives out {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Quien haya utilizado la frase "mejor quedamos como amigos" beben {shots} tragos!',
        en: 'Whoever has used the phrase "let\'s just be friends" drinks {shots} shots!'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si dejas la puerta abierta cuando vas al baño en tu casa.',
        en: 'Drink {shots} shots if you leave the door open when you go to the bathroom at home.'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si tuviste un orgasmo hoy.',
        en: 'Drink {shots} shots if you had an orgasm today.'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si alguna vez has conducido por una rotonda al revés.',
        en: 'Drink {shots} shots if you have ever driven around a roundabout in the wrong direction.'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has tenido sexo con alguien por las razones equivocadas.',
        en: 'Drink {shots} shots if you have had sex with someone for the wrong reasons.'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si te encanta el sabor de los genitales de tu pareja',
        en: 'Drink {shots} shots if you love the taste of your partner\'s genitals'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si alguna vez has pasado 3 días sin lavarte',
        en: 'Drink {shots} shots if you have ever gone 3 days without washing yourself'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si alguna vez has enviado a alguien al hospital.',
        en: 'Drink {shots} shots if you have ever sent someone to the hospital.'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has comparado el tamaño de tu pene (o el de tu pareja) con tus amigos',
        en: 'Drink {shots} shots if you have compared the size of your penis (or your partner\'s) with your friends'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si tu amor platónico esta hoy aquí',
        en: 'Drink {shots} shots if your crush is here today'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si quieres pasar el resto de tu vida con tu pareja, finge beber en el peor de los casos.',
        en: 'Drink {shots} shots if you want to spend the rest of your life with your partner, pretend to drink at worst.'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si alguna vez le has mentido a alguien que esté hoy aquí para no ir a una de sus fiestas o reuniones.',
        en: 'Drink {shots} shots if you have ever lied to someone who is here today to avoid going to one of their parties or gatherings.'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los jugadores que no votaron durante las últimas elecciones reparten {shots} tragos',
        en: 'Players who didn\'t vote in the last election give out {shots} shots'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si siempre te lavas las manos al salir del baño, bebe {shots} tragos si estás fingiendo',
        en: 'Drink {shots} shots if you always wash your hands after using the bathroom, drink {shots} shots if you\'re pretending'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si  has enviado alguna solicitud a un programa de televisión.',
        en: 'Drink {shots} shots if you have ever applied to a TV show.'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has robado algo a uno de los jugadores presentes.',
        en: 'Drink {shots} shots if you have stolen something from one of the players present.'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has trabajado ilegalmente',
        en: 'Drink {shots} shots if you have worked illegally'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si le has sacado dinero de la cartera a tu novio/a sin decírselo.',
        en: 'Drink {shots} shots if you have taken money from your boyfriend/girlfriend\'s wallet without telling them.'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has mentido sobre el tamaño de tu pene o del pene de tu pareja .',
        en: 'Drink {shots} shots if you have lied about the size of your penis or your partner\'s penis.'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si la policia te ha hecho algún tipo de control',
        en: 'Drink {shots} shots if the police have ever stopped you for any kind of check'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si te han arrestado',
        en: 'Drink {shots} shots if you have been arrested'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si alguna vez te has puesto la ropa interior de tu pareja',
        en: 'Drink {shots} shots if you have ever worn your partner\'s underwear'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si eres mujer y has usado un bóxer o una camiseta de tu pareja como pijama',
        en: 'Drink {shots} shots if you are a woman and have used your partner\'s boxer shorts or t-shirt as pajamas'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si aceptas tener sexo con cualquier persona por 10.000 dólares.',
        en: 'Drink {shots} shots if you would accept having sex with anyone for $10,000.'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has tenido sueños eróticos esta semana.',
        en: 'Drink {shots} shots if you have had erotic dreams this week.'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has visto a alguno de los jugadores desnudo/a.',
        en: 'Drink {shots} shots if you have seen any of the players naked.'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has tenido sexo en el trabajo o universidad',
        en: 'Drink {shots} shots if you have had sex at work or university'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has bebido alcohol solo/a',
        en: 'Drink {shots} shots if you have drunk alcohol alone'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si te duermes enseguida después de hacer el amor',
        en: 'Drink {shots} shots if you fall asleep right after making love'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si la última película que has visto era una película romántica.',
        en: 'Drink {shots} shots if the last movie you watched was a romantic movie.'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si la última película que has visto era de acción.',
        en: 'Drink {shots} shots if the last movie you watched was an action movie.'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has medido tu pene o el de tu pareja.',
        en: 'Drink {shots} shots if you have measured your penis or your partner\'s.'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si te has despertado en la cama de alguien preguntándote como llegaste ahí.',
        en: 'Drink {shots} shots if you have woken up in someone\'s bed wondering how you got there.'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si alguna vez has tenido sexo en el agua',
        en: 'Drink {shots} shots if you have ever had sex in water'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si le dices a tu pareja "te quiero" a cada llamada telefónica (o casi).',
        en: 'Drink {shots} shots if you tell your partner "I love you" on every phone call (or almost).'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los idiotas que dicen "comparte" cuando uno come patatillas beben {shots} tragos',
        en: 'The idiots who say "share" when someone eats chips drink {shots} shots'
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Si has buscado algo que resultaba estar en tu bolsillo bebes {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Si has olvidado cuantos años tienes a causa del alcohol bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Si has utilizado un bolígrafo de 4 colores y has usado los 4 colores al mismo tiempo bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Hola tontos! Bebe {shots} tragos si cuando te duchas juegas a llenar un guante de baño con agua.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has levantado tu móvil lo más alto posible, como un idiota, cuando no tenías cobertura.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'El jugador que haya salido con la mujer más guapa bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Quien haya salido con el chico más feo bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has le has quitado la virginad a alguien.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las mujeres, beben según la copa de su sujetador (A =1 trago, B = 2 tragos, etc...)',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Si has tenido sexo con un menor mientras ya eras mayor de edad, bebes {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si te has puesto leggings.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, da los tragos que quieras a {player2}',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, bebe el número de tus conquistas en tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, reta a {player2} a hacer alguna cosa, si acepta el reto, podrá repártir {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Quien haya repetido algún curso beben {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los empollones a los que hayan adelantado un año escolar beben {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los aburridos que trabajan o estudian en finanzas o contabilidad beben {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los Nerds con acné, pelo alisado y que trabajan o estudian informática beben {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los bobos que trabajen o estudien comercio o ventas beben {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Aquellos que se están quedando calvos beben {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si tienes la rutina de café - cigarrillo - caca por la mañana.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si eres un Casanova',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has tenido varios compañeros sexuales al mismo tiempo',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si tu pareja te ha sido infiel',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} envía un mensaje caliente a una persona elegida por {player2}, sino bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} envía "te quiero" por mensaje (sin enviar nada más) a una persona elegida por {player2}, sino bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} debes mandar 10 solicitudes de amistad en Facebook sino bebes {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, envía una solicitud de amistad a una persona, por Facebook, elegida por {player2} sino bebes {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, publica una foto en Facebook tomada por {player2} sino bebes {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Tiempo muerto : si la hora indica un número par, todos deben beber {shots} tragos, sino {player1} reparte {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si tus zapatos tienen cordones.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'La chica con los pechos más grandes repárte {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'El chico con menos barba bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'La persona que tenga la nariz más grande bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Reparte {shots} tragos si usas zapatos más grandes que la talla 46',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Reparte {shots} tragos si usas zapatos de talla más pequeña que la 38',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si usas zapatos entre la talla 40 y 44',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Reparte {shots} tragos si llevas puestos calcetines blancos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Reparte {shots} tragos si no has visto ninguna película de Star Wars',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Reparte {shots} tragos si no has visto ninguna película del Señor de los anillos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Repárte {shots} tragos si no has visto ninguna película de Harry Potter',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Cuando la hora muestra un múltiple de 10 (20h, 20h10, 20h20, etc...) el primer jugador en gritar "mierda me he olvidado al perro en el parque" reparte 10 tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'De ahora en adelante hasta el fin de la partida, ¡prohibido fumar! Trago para los anarquistas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si alguna vez has gastado más de 1000 dólares en un solo día.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has tenido el mejor polvo de tu vida con tu actual pareja',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si el mejor polvo de tu vida fué con tu expareja.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Muerte a los Nerds! Bebe {shots} tragos si has jugado un video juego mas de 4h seguidas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los idiotas que hayan robado dinero a un familiar beben {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si ultimamente has tenido sueños que nunca podrás contar.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si, estando borracho, te pasaste tu parada de autobús porque estabas durmiendo.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'El jugador que hoy haya empezado a beber más pronto hoy reparte {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'El último en haber servido una bebida bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si tu móvil es un Windows Phone',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Quien haya jugado más de 10 veces a Tragos Locos pueden celebrarlo! {shots} tragos amigos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has tenido un malentendido con tu pareja esta semana',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Bebe {shots} tragos si te comes las uñas!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Los jugadores de Tenis beben {shots} tragos!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Los futbolistas beben {shots} tragos!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Los jugadores de básket beben {shots} tragos!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Los jugadores de Volleyball beben {shots} tragos!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los estúpidos que hayan conducido borrachos beben {shots} tragos. Los demás, a esconderles las llaves...',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Reparte {shots} tragos si estás en una relación desde hace más de tres años',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Reparte un trago a quienes lleven en una relación desde hace menos de tres años.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si prefieres tener un gato a un perro',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Reparte {shots} tragos si has viajado a Asia',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Reparte {shots} tragos si has tenido un animal diferente a un perro o gato',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los casanovas y que le hayan robado el corazón a más de tres personas reparten {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Los menores que 21 años beben {shots} tragos!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Los mayores que 25 años beben {shots} tragos!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Los que sepan tocar la guitarra beben {shots} tragos!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las personas de buen corazón que hayan donado dinero a una obra caritativa reparten {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si usabas aparatos dentales.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si eres fan de gorras',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si llevas ropa de más de 200 dólares.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Reparte {shots} tragos si has vivido en el extranjero',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Reparte {shots} tragos si tu coche tiene un regulador de velocidad.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has comprado un móvil de más de 300 dólares.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las personas que están a favor de la pena de muerte beben {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los locos del gimnasio beben {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si alguna vez has orinado sin utilizar las manos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'La primera persona en encontrar un objeto triangular reparte {shots} tragos!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Los aracnofóbicos beben {shots} tragos!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Si alguna vez has confundido el nombre de tu pareja por el de tu ex reparte {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las personas que hayan sido atacadas por algún animal beben {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si alguna vez le has pedido a alguien que se ponga tu ropa interior.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Reparte {shots} tragos si alguna vez te has negado a una persona que esté muy buena.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los fans de Avengers o de otras mierd*s del estilo beben {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡El último jugador en haber celebrado su cumpleaños puede repartir {shots} tragos!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has chantajeado a tu pareja',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si mañana piensas tomarte una aspirina.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si hace más que una semana que no has salido de fiesta.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has previsto para mañana el agua/zumo de limón/ citrato de bethania u otro remedio para la resaca.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Reparte {shots} tragos si tienes que trabajar mañana.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡{player1} elige la próxima canción, es una orden!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} elige la próxima canción, a quien le guste le toca beber {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} elige la próxima canción, a quien no le guste le toca beber {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si tienes un partido político favorito.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si tuviste suerte con alguien después de haber bailado una balada lenta.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Reparte {shots} tragos si algún periódico ha publicado un artículo donde salgas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los pianistas que sepan tocar utilizando sus 10 dedos reparten {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si alguna vez has montado a caballo.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si estás bebiendo un alcohol que no pagaste.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Reparte {shots} tragos si estás bebiendo un alcohol que pagaste.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} elige con quien bailar lentamente durante 30 segundos, con las manos en el culo. Si la otra persona no te deja bebes {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los que hayan tenido suerte ligando en la discoteca reparten {shots} tragos.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si no estás en contra de pagar por sexo.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si nunca has donado sangre (¡Maldito bastardo!).',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si nunca has visto ningún capítulo de South Park.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Bebe si tienes más de 2 títulos superiores.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Las mujeres con pintalabios rojo beben {shots} tragos.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si tu nombre Facebook no es el verdadero.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, di el nombre de 3 ex\'s de {player2} o bebe {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las mujeres beben tantos tragos como hombres guapos estén jugando.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los hombres beben tantos tragos como mujeres guapas estén jugando.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Cada persona bebe tantos tragos como personas follables haya en el juego.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} da el número de habitantes de Tayikistán (con una precisión de 1 000 000) o bebe {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Reparte {shots} tragos si alguna vez has tenido un accidente de tráfico.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Reparte {shots} tragos si te han operado.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los jugadores que vivan solos beben {shots} tragos.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Las tres personas más jóvenes eligen un jugador que deberá beber {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las mujeres eligen un jugador que deberá beber {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los amantes del vino beben {shots} tragos.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si miras a menudo "Los Kardashians".',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Si estas tomando whisky estás de suerte, bebes {shots} tragos.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si tus calcetines son blancos.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has estado en el paro.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Los que no son vegetarianos beben {shots} tragos.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si aún no has descargado Tragos Locos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los que hayan tenido barba en forma de collar beben {shots} tragos jaja.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'La encantadora persona, propietaria del teléfono con el que están jugando, reparte {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has coqueteado con la pareja de un(a) amigo(a).',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has ido a un bar de strip-tease.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has intentado escaparte de un control policial.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has besado a alguien de tu mismo sexo.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has besado con lengua a alguien del mismo sexo.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has falsificado alguna firma.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si puedes chuparte el dedo gordo de tu pie.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si slguna vez te has inventado alguna excusa para no ir al trabajo.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has tenido sexo en las últimas  48h.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si crees que alguien en esta fiesta es muy soso o poco gracioso.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si piensas que hay alguien en esta fiesta que es súper imbécil.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si no te gusta tu suegra.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si tienes mal beber.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Reparte {shots} tragos si has tenido sexo más de dos veces en los últimos 7 días.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si entre tus amigos tienes un o una ex.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: '{player1}, bebe 3 vasos seguidos o puntúa Tragos Locos con 5 estrellas en el store ;)',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si piensas que TODOS los otros jugadores son geniales.',
    },
    tags: ['preparty', 'drinkIf'],
}, {
    locales: {
        es: 'Reparte {shots} tragos si te comes las uñas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has hecho el amor en la cama de tus padres.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si crees que los genitales de tu pareja tiene una forma extraña.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Reparte {shots} tragos si han roto contigo más de 4 veces.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si alguna vez te has puesto ropa sucia todo el día, sabiendo que no estaba limpia.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si te has acostado con varios miembros de una misma familia.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si tu pareja tiene más apetito sexual que tú.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si miraste tus genitales en el espejo esta semana.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si te has mast*rbad* sin que tu pareja lo sepa.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si te has arrepentido de haberte acostado con alguien.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si le has dicho a alguien, a la cara, que es feo.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Reparte {shots} tragos si tu cuenta bancaria esta normalmente casi vacía.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Reparte {shots} tragos si te has soltado algún pedo durante un polvete.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Reparte {shots} tragos si alguna vez te has tirado un pedo mientras besabas a alguien.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si te has mast*rbad* en los últimos 3 días.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Reparte {shots} tragos si ya te has mast*rbad* en tu trabajo.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Reparte {shots} tragos si has tenido sexo mientras tus amigos dormían en el mismo cuarto.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si te has tirado algún pedo con sorpresa.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si piensas que algún jugador tiene un nombre de mi*rd*.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, reparte {shots} tragos a la persona que consideres la más inteligente.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, reparte {shots} tragos a la persona que consideres la más guapa.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, reparte {shots} tragos a la persona que consideres la más sexy.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, si tu primera vez fue pasados los 16 años, bebe {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si tienes pies griegos (el segundo dedo del pie es más largo que el dedo gordo).',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si has visto más de 3 capítulos de un reality show.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Bebe {shots} tragos si alguna vez le has contado a un niño el secreto de Santa Claus y/o el Ratoncito Pérez',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} y {player2} duelo a un piedra, papel o tijera! Quien pierda bebá {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Quién de ustedes es un cobarde? Entre los jugadores deberéis señalar al jugador que quiera beber menos, por flojo toma {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Qué rima con "ito"? ¡El jugador que repita o se quede sin ideas bebe {shots} tragos! {player1} empiezas tú',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Decir nombres conocidos de pizzas, el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los adjetivos que describen a {player1}", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player2} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Palabras o expresiones sinónimos de "pene", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las palabras o expresiones sinónimos de "vagina", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las palabras o expresiones sinónimos de "emborracharse", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos! {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las palabras o expresiones sinónimos de "prostituta", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las palabras/expresiones sinónimos de "hacer el amor", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los adjetivos que describen a {player1}", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player2} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las palabras o expresiones sinónimos de "masturbarse", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Las ex parejas de {player1}", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player2} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Las cosas que más le gustan a {player1} ", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player2} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Las cosas que {player1} odia", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player2} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los criterios de selección que tiene {player1} para encontrar una pareja", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player2} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Lo negativo de ser alguien famoso", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Películas aburridas", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Marcas de Whisky", el jugador que repita o que se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los enanitos de Blancanieves", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los títulos de canciones de Shakira", el jugador que repita o que se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los personajes de simpsons", el jugador que repita o que se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los números impares entre 324 y 332", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los insultos que se dicen en la alta sociedad", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Todo lo que mata al amor", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los protagonistas de South Park", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Las zonas erógenas de una mujer", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las frases que riman con "ajo", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Las frases que riman con "mar", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Insultos terminados en "-on", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los pokémons que conoces", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los personajes de Dragon Ball Z", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los personajes del Señor de los Anillos", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los nombres de los dedos de la mano", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos! {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"El nombre de los dedos de la mano", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los personajes de Harry Potter", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los nombres de las películas de Harry Potter", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los personajes de los Looney Toons", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los personajes de Super Mario", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los personajes de la Guerra de las Galaxias", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Todo lo que es rojo y blanco", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los animales de granja", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Las posiciones sexuales", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los menús de McDonald\'s", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los colores de Power Rangers", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los dibujos animados de Disney", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Las razas de perros", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los países de Africa ", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Perros famosos", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Las monedas extrangeras", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"El nombre de los dedos de la mano", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Las palabras que empiecen por Z", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los criminales más conocidos", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los personajes o actores más sexy\'s en escenas de traje de baño", el jugador que repita o se haya quedad sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Lo que encontramos en el bolso de una mujer", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los nombres de ciudadades que comiencen con una letra elegida por {player1}", el jugador que repita o que se haya quedado sin ideas bebe {shots} tragos. {player2} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Eslogans publicitarios", el jugador que repita o que se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los objetos azules en la habitación", el jugador que repita o que se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los nombres de salsas conocidas sin contar kétchup y la mayonesa", el jugador que repita o que se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los medios sociales de la web", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los puntos en común entre {player1} y {player2}", el jugador que repita o que se haya quedado sin ideas bebe {shots} tragos. {player3} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Las drogas", el jugador que repita o que se haya quedado sin ideas bebe {shots} tragos. {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "los personajes del Rey Léon", {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "los huesos del cuerpo humano", {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "los presentadores de la TV" {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "las protagonistas de Mujeres desesperadas", {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "Nombres de estaciones de radio ", {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "los clubs o discotecas a menos de 20 km", {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "las/los mejores cantantes", {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego: "las/los cantantes más sexys", {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "las canciones de David Guetta", {player1} empiece',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "cosas que {player1} tiene más que {player2}", {player3} empiezas (ej.más carisma)',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "los méritos de ser un hombre", {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "los méritos de ser una mujer", {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "los animales que pueden describir a una persona", {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "los beneficios de ser un borracho", {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "los daños del alcohol", {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "lo que {player1} tiene de menos que {player2}", {player3} empiezas (ej. menos carisma)',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "nombres de cócteles", {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "los protagonistas de "El libro de la Selva", {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "los pretagonistas de Los Vengadores, de Marvel", {player1} empiece',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "comida del KFC", {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "las canciones de Mickael Jackson", {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "los signos astrológicos", {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "las asignaturas actuales del bachillerato", {player1} empiezas (ej. biología).',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "los clubes de fútbol más importantes", {player1} empiezas!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "los clubes de fútbol en Primera", {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "los protagonistas malvados de películas de comedias ", {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Juego de temas y {shots} tragos en juego : "las canciones de Maná", {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Juego de temas y {shots} tragos en juego : "las canciones de Enrique Iglesias", {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Juego de temas y {shots} tragos en juego : "las canciones de Queen", {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Juego de temas y {shots} tragos en juego : "las canciones de Luis Miguel", {player1} empiece',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "los momentos más aburridos", {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Juego de temas y {shots} tragos en juego : "Series de televisión", {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Juego de temas y {shots} tragos en juego : "Programas de TV" {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Todo lo que rime con "ate" y {shots} tragos en juego. {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Todo lo que rime con "ote" y {shots} tragos en juego. {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Todo lo que rime con "eron" y {shots} tragos en juego. {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Todo lo que rime con "ana" y {shots} tragos en juego. {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Todo lo que rime con "uche" y {shots} tragos en juego. {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Juego de temas y {shots} tragos en juego : "los pitufos", {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Juego de temas y {shots} tragos en juego : "las expresiones más conocidas", {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Juego de temas y {shots} tragos en juego : "las partes mecánicas de un ordenador", {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Juego de temas y {shots} tragos en juego : "los personajes armados con una espada", {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "los equipos de Basketball profesional ", {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Imitar sucesivamente un gesto inapropriado, quien repita el gesto o se haya quedado sin inspiración bebe {shots} tragos. {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema con {shots} tragos en juego : "los momentos más importantes en la historia ", {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema con {shots} tragos en juego : "Insectos", {player1} comienzas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nuevo tema y {shots} tragos en juego : "diferentes tipos de alcohol" , {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Juego de temas y {shots} tragos en juego : "Películas con alienígenas", {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Los deportes que {player1} ha practicado ", la persona que repita o no encuentra más ideas bebe {shots} tragos. {player2} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Decid páginas y apps de citas por internet hasta que un jugador se repita o se quede sin ideas, éste deberá beber {shots} tragos, {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"objetos con 100 años de antigüedad que todavía se utilizan", el primer jugador que se repita o se quede sin ideas bebe {shots} tragos, {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Decid nombres de "Los dúos cómicos", el jugador que se quede sin ideas o se repita bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Dedid nombres de "Los impuestos que el gobierno nos mete por el c*l*", el jugador que se quede sin ideas o se repita bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '"Las películas con dos personajes principales", el jugador que se quede sin ideas o se repita bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Nombres de "Las calles de Monopoly", el primer jugador que se repita o se quede sin ideas bebe {shots} tragos, {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} va a hacernos el favor de terminar su vaso...',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Los dos jugadores con los vasos más llenos deben acabárselos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Hasta el fondo para los calvos y los pelirrojos!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Hasta el fondo para las personas que pesan más de 80kg!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Hasta el fondo para {player1}!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Hasta el fondo para {player1} y {player2}!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Hasta el fondo para {player1}, {player2} y {player3}!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡La primera persona en terminar su copa reparte un trago!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡Recitad el alfabeto enunciando una letra por persona. Si {player1} termina su copa primero, un trago para todos!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡{player1}, cuenta hasta 40 antes que {player2} termine su copa. Si fallas pues un trago para ti también!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '!Trago para la última persona que llegó a esta fiesta!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¡{player1} recita el alfabeto al revés, trago si cometes un error!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} termina el vaso de uno de los jugadores',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Prefieres poder volar o teletransportarte? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Prefieres ver un documental de Justin Bieber o beber una cucharada de pintura? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres ir a la ópera durante 4h o beber un poco de agua salada? Voten todos juntos, la minoría bebe {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres cortarte una mano o un pie? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres comer tierra o hacer un maratón? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres comerte un gato o un perro? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres darle la muerte a 100 personas desconocidas o la muerte de un amigo? Voten todos juntos, la minoría bebe {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres ganar 1 millón de dólares o una espada láser de verdad? Voten todos juntos, la minoría bebe {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres hablar 9 lenguas o comer sin nunca engordar? Voten todos juntos, la minoría bebe {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres beber ron o whisky? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres a Zac Efron o Justien Bieber? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres a los Asiáticos o los Latinos? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres las hamburguesas o los perritos calientes? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres el fútbol o el rugby? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Estás a favor o en contra del vómito a mitad de la fiesta? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Estás a favor o en contra de tener la tarjeta de crédito en un bar o discoteca? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres tener una alfombra mágica o un refrigerador que se llena solito de comida? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Estás, a favor o en contra del gel de ducha en el pelo? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Estás a favor o en contra de vivir eternamente pero con solo 10 dólares al día? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Estás a favor o en contra de los baños unisex? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Estás a favor o en contra de ver un lanzador de cuchillos fallar en su actuación en un circo en directo? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres vivir la vida de Harry Potter o de Bill Gates? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres ganar mil millones de dólares o poder cruzar las paredes? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres comer un plato de pasta o una ensalada superbuena y natural? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres ganar un auto nuevo o viajar por Europa? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres ver la emisión "Novela de las 7" o "Las noticias"? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres no tener internet o no tener un móvil? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres no tener invitados en tu boda o en tu funeral? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres vivir en un mundo sin problemas o dirigirlo? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres encontrar el verdadero amor o 10 millones de dólares? Votad todos en el mismo tiempo, la mínoria bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres los piercings o los tatuajes? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres ser abogado o médico? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres el pollo o la carne? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres la música a Rock o electrónica? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres la Playstation o la Xbox? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres ganar a la lotería o vivir lo equivalente a dos vidas? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres ser famoso o el/la mejor amigo/a de una celebridad? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres conocer la fecha o las condiciones de tu muerte? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Estás a favor o en contra de jugar a la ruleta rusa una vez en tu vida por 100.000.000 dólares? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres tener más dinero o más tiempo? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres Pepsi o CocaCola? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres Macdonalds o Burger King? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres a Dumbldore o Gandalf? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres un día lluvioso o de nieve? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿A favor o en contra de eliminar del planeta tierra a One Direction o Justin Bieber? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres Star Trek o Star Wars? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres ir al paraíso o vivir en la tierra para siempre? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres la música de antes o la música moderna? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres a Emma Watson o Nathalie Portman? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres estar peinado al estilo ochentero o estar vestido al estilo ochentero? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres tener pesadillas toda la noche o ver fantasmas? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres practicar surf en el mar o navegar en internet? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Estas a favor o en contra de borrar tú historial de navegación todas las semanas? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres trabajar en Google o en Facebook? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres Super Smash Bros o Mario Kart? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Estás a favor o en contra del traje de baño de una pieza? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Estás a favor o en contra de las colecciones de sellos? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Estás a favor o en contra de las parrillas eléctricas? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Estás a favor o en contra de los suéteres sin mangas? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Estás a favor o en contra de tener un tractor? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres poder cambiar de sexo cuando quieras o tener un Pokémon de Verdad? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres viajar al futuro o al pasado? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres tener un interruptor "vuelta atrás" o un interruptor "pausa" en la vida cotidiana? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres que las sirenas sean reales o los unicornios? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres perder la mitad de tu peso o doblarla? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres tener conocimientos ilimitados o dirigir el mundo entero? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres poder volar o leer los pensamientos? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres ser la persona más rica de la tierra o ser inmortal? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres conocer todas las lenguas del mundo o poder hablar con los animales? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres ser la persona más lista del mundo o la más sexy? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres ser un gran intérprete de todos los instrumentos musicales o hablar 15 lenguas perfectamente? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres poder ver tus sueños en la TV o poder dormirte fácilmente? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres vivir la vida de Hermione Granger o de Bella de Crepúsculo? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres quedarte atrapado 5h en un ascensor o en un teleférico? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Estas a favor o en contra de transformarte en otra persona de forma definitiva? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres no poder ver tu reflejo en en el espejo o no tener agua para ducharte? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres deshacerte de todos los malos conductores o nunca más esperar en las colas? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres quedarte atrapado en una isla desierta con las 4 personas que odias o estar en solo? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres no tener ningún amigo o no poder utilizar aparatos electrónicos? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres ver una película muda o escuchar una película sin imagen? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres ser vista como una persona muy extraña o ser una persona normal y no tener nada de especial? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres jugar mil millones de dólares a cara o cruz o ganar mil dólares? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres tener una jubilación anticipada con 1 millón de dólares o tener el trabajo de tus sueños por 2000 dólares al mes? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres tener una increíble casa en un lugar común o viceversa? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres vivir en un mundo sin matrimonio o sin divorcio? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres inventar una nueva legislación o eleminar una existente? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres nunca más tener momentos embarazosos o recuperar 100 dólares por cada momento de embarazoso? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres nunca más tener que dormir o poder mover los objetos con la mente? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres sacarte un ojo o gatear durante un año? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres beber de gasolina o fumar plástico? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Estás a favor o en contra que tus gases huelan el perfume Hugo Boss, pero tirarse 100 pedos por día? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres orinar zumo de naranja o tener una saliva con sabor a limón? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Durante un día , prefieres tener pelo en la barbilla o pelos púbicos sobre los pómulos? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres hablar solamente japonés o ir disfrazado de pirata todos los días? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres ganar una gira mundial o nunca volver a necesitar hacer caca? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres tener un pie en lugar de una mano o un solo ojo en la frente? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres tatuarse "Johnny" en la frente, la nariz o en la mejilla? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres tener ambos brazos de corcho o adoptar un ciego? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Estás en favor o en contra de llamar a tu perro "Daisy"? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres poder caminar sobre los arcoiris o hablar con las moscas? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres cambiar tu apellido de familia por Hitler o nunca más comer chocolate? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres comer un cucaracha viva o ser calvo? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres morir con tu cabeza atascada en un elevador o resbalándote a causa de una cáscara de plátano? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres tener un gato siamés o nunca poder acercarse una persona más de 5m? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres adoptar a un bebé pingüino o un bebé mono? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres ser un ninja o un pirata? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres estar sordo de una oreja o tener aceso a internet solamente 1h por semana? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres poder controlar tus sueños o poder grabarlos para verlos? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres deshacerte de todos los malos conductores del mundo o nunca más esperar en las colas? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Durante los próximos 5 años, prefieres estar en coma o tetraplégico? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres estar discapacitado y ser super listo o no tener un problema físico pero ser un verdadero imbécil? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Prefieres ser atacado por un león o por 100 gatos completamente histéricos? Voten todos juntos, la minoría bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿A quién prefieres entre {player1} y {player2}? Votad todos al mismo tiempo, la minoría bebe {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿A favor o en contra de tatuarse "Impuesto" en la frente y nunca más pagarlos? Voten todos al mismo tiempo, la minoría bebe {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Qué prefieres, vivir en otro país o cambiar de ciudad cada 6 meses? Votad todos al mismo tiempo, la minoría bebe {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Qué prefieres un año en prisión o vivir solo (a) en la Tierra?  Votad todos al mismo tiempo, la minoría bebe {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿A quién prefieres Zach Galifianakis o Steve Carell? Votad todos al mismo tiempo, la minoría bebe {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿A quién prefieres Jim Carrey o Mariah Carey? Votad todos al mismo tiempo, la minoría bebe {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'La primera persona que encuentre un objeto blanco reparte {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} y {player2} deben jugar "marinero que se fue a mar y mar y mar"! El/la que se equivoque bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} debes hacer una pregunta. La primera persona en responder reparte {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} canta una canción con la boca llena (llénala con lo que puedas). La primera persona en saber de que canción se trata reparte {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Cada persona bebe un trago y lee a voz alta el contenido de su último sms o mensaje de Whatsapp enviado, {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Decid cualquier letra, el objetivo es formar una palabra correcta. El jugador que no sepa qué decir o diga un término que no existe bebe {shots} tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} imita una película, el primerjugador en adivinar reparte {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Cada uno nombra a una persona, esta persona tiene que beber 2 tragos, {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Cada jugador tiene que decir sucesivamente algo que nunca antes haya hecho, los que lo han hecho beben, {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Cada jugador tiene que deir sucesivamente algo que alguna vez haya hecho, los que no lo han hecho beben, {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Sucesivamente, tienes exactamente 2 segundos para decir una palabra relacionada con la palabra dicha antes. El jugador que pierda bebe {player1} tragos. {player2} elige tu palabra y comenzamos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} dices "en mi maleta hay ..", comienza añadiendo cualquier cosa, cada jugador repite y añade un elemento, el primer que se equivoqué bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1} comienzas con "había una vez...", añade 3 palabras como máximo. Sucesivamente, todos repiten lo que se ha dicho y añaden una parte de la historia, el primero que se equivoque bebe {shots} tragos',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Hacer un gesto, el siguiente lo repite hasta que alguien pierda y tenga que beber {shots} tragos. {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Sucesivamente, tienes 1 segundo para decir una palabra con el fin de crear una frase coherente y completa. ¡Quien pierde bebe {shots} tragos, {player1} empiezas!',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Sucesivamente, deletrea el apellido del jugador de tu derecha, quien se equivoque bebe {shots} tragos. {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Sucesivamente, deletrea el nombre del jugador de tu derecha, quien se equivoque bebe {shots} tragos. {player1} empiezas',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'Todos deben nombrar la última película que han visto, quienes hayan visto la misma película beben {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '¿Verdad o Castigo? Pregúntale algo a tu vecino de la derecha, {shots} tragos si la persona se rehúsa a contestar, así una ronda de todos los jugadores. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'A cada turno, cada persona reparte en tragos la cantidad de nombres que tiene (ej. Miguel Ángel: 2). {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'A cada turno repetid 5 veces seguidas "Pedro pica pasa con un pico" en menos de 5 segundos. {shots} tragos a repartir a los ganadores y los perdedores beben 5 tragos. {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, elige una palabra. La primera persona en cantar una canción que contenga la palabra reparte {shots} tragos.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, bebe {shots} tragos. Tu vecino(a) de la derecha una menos, y así sucesivamente hasta llegar a 0.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: '{player1}, recita los nombres y la edad de cada uno de los participantes. Si te equivocas el jugador debe darte tantos tragos como deseé.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: 'A cada turno, bebe en tragos la cantidad de puntos que te falten en tu carnet de conducir, {player1} empiezas.',
    },
    tags: ['preparty'],
}, {
    locales: {
        es: "{player1}, cuenta la historia más vergonzosa de tu vida o bebe {shots} tragos",
        en: "{player1}, tell the most embarrassing story of your life or drink {shots}"
    },
    tags: ["preparty"]
},{
    locales: {
        es: "Todos los que hayan fingido estar enfermos para faltar al trabajo o escuela, beban {shots} tragos",
        en: "Everyone who has ever faked being sick to skip work or school, drink {shots}"
    },
    tags: ["preparty"]
}, {
    locales: {
        es: "{player1}, imita a otra persona del grupo durante 30 segundos",
        en: "{player1}, imitate another person in the group for 30 seconds"
    },
    tags: ["preparty"]
}, {
    locales: {
        es: "Todos los que hayan enviado un mensaje al contacto equivocado y se hayan arrepentido, beban {shots} tragos",
        en: "Everyone who has sent a message to the wrong person and regretted it, drink {shots}"
    },
    tags: ["preparty"]
}, {
    locales: {
        es: "{player1}, deja que el grupo revise tu historial de búsqueda reciente o bebe {shots} tragos",
        en: "{player1}, let the group check your recent search history or drink {shots}"
    },
    tags: ["preparty"]
}, {
    locales: {
        es: "{player1} y {player2} intercambien zapatos por el resto del juego",
        en: "{player1} and {player2} exchange shoes for the rest of the game"
    },
    tags: ["preparty"]
}, {
    locales: {
        es: "Todos los que hayan bailado frente al espejo usando un cepillo como micrófono, beban {shots} tragos",
        en: "Everyone who has danced in front of the mirror using a brush as a microphone, drink {shots}"
    },
    tags: ["preparty"]
}, {
    locales: {
        es: "Todos los que hayan comido directamente del refrigerador a medianoche, repartan {shots} tragos",
        en: "Everyone who has eaten directly from the fridge at midnight, give out {shots} drinks"
    },
    tags: ["preparty"]
}, {
    locales: {
        es: "Todos los que tengan una anécdota divertida con {player1} que el resto no conozca, beban {shots} tragos",
        en: "Everyone who has a funny anecdote with {player1} that others don't know about, drink {shots}"
    },
    tags: ["preparty"]
}, {
    locales: {
        es: "Toma {shots} tragos si alguna vez has mentido sobre conocer a un famoso",
        en: "Take {shots} drinks if you've ever lied about meeting a celebrity"
    },
    tags: ["preparty"]
}, {
    locales: {
        es: "Las personas que han pasado más de 3 horas seguidas en redes sociales, beban {shots} tragos",
        en: "People who have spent more than 3 consecutive hours on social media, drink {shots}"
    },
    tags: ["preparty"]
}, {
    locales: {
        es: "Todos los que se han quedado dormidos en un lugar inapropiado, repartan {shots} tragos",
        en: "Everyone who has fallen asleep in an inappropriate place, give out {shots} drinks"
    },
    tags: ["preparty"]
}, {
    locales: {
        es: "Todos los que crean que {player1} sería el mejor compañero de aventuras, beban {shots} tragos",
        en: "Everyone who thinks {player1} would be the best adventure buddy, drink {shots}"
    },
    tags: ["preparty"]
}, {
    locales: {
        es: "{player1}, cuenta un talento oculto que tengas o bebe {shots} tragos",
        en: "{player1}, share a hidden talent you have or drink {shots}"
    },
    tags: ["preparty"]
}, {
    locales: {
        es: "Todos los que hayan intentado aprender un idioma y lo hayan abandonado, beban {shots} tragos",
        en: "Everyone who has tried to learn a language and given up, drink {shots}"
    },
    tags: ["preparty"]
}, ...BestFriendsQuestions, ...crazyQuestions, ...hotQuestions, ...TeamQuestions];

/*

solidman,,Decidid entre todos quién es el jugador más fuerte y que beba {shots} tragos.,1,0
,solidman,¡Chuck Norris no puede tolerar esto! El jugador más fuerte bebe {shots} tragos más. ,1,0
,solidman,"Hulk quiere vengarse, el jugador más fuerte reparte {shots} tragos.  ",1,0
married,,"%s se van a casar %s, eso significa que tendrán que tomar la misma cantidad de tragos durante el juego",2,3
,married,¡Divorcio! %s y %s ya no tienen que tomar la misma cantidad de tragos,2,2
group-3,,"¡%s, %s y %s van a formar un grupo, todos deberán pagar el mismo precio (Tragos)!",2,4
,group-3,"%s, %s y %s su grupo se ha ido a la mierda. ",2,3
waiter,,¡Denle las gracias a %s por que va hacer de camarero! ¡A servir bebidas!,2,1
,waiter,"%s ha echo ya bastante, el /ella puede dejar de servir",2,1
king-of-silence,,%s es el rey de silencio. (¡Shhhh no puedes hablar!),2,1
,king-of-silence,%s puedes hablar de nuevo,2,1
raise-hand-to-speak,,%s de ahora en adelante debes levantar el dedo para hablar y %s que te dará la palabra,2,2
,raise-hand-to-speak,%s puedes hablar de nuevo sin pedir permiso,2,2
parrot,,¡%s haz el loro! Debes repetir todo lo que %s te diga,2,2
,parrot,¡%s deja de repetir lo que dice %s aburres! ,2,2
give-phone,,%s da tu móvil a %s hasta nuevo aviso,2,2
,give-phone,%s puedes recuperar tu móvil,2,1
chinese-accent,,%s debes hablar con acento chino,2,1
,chinese-accent,%s puedes volver a hablar normalmente. ,2,1
,chinese-accent,"%s, puedes dejar de hablar con el acento chino",2,1
stare,,"%s, fija tu mirada en %s hasta nuevo aviso",2,2
,stare,%s puede dejar de fijar a %s,2,2
massage,,"%s, empieza a masajear a %s sin quejarte",2,2
,massage,"%s, puedes dejar de masajear",2,1
,massage,%s puedes dejar de masajear y %s bebes {shots} tragos,2,2
questions,,"%s, podemos hacerte unas preguntas en cualquier momento. Si no encuentras una respuesta, bebes.",2,1
,questions,"%s, puedes dejar de responder a las todas preguntas tontas que te han preguntado.",2,1
must-tell-drink,,"%s, elige una palabra que tendrás que decir cada vez que hay alguíen beba",2,1
,must-tell-drink,"%s, ya no tienes que decir tu palabra cada vez que alguíen beba.",2,1
other-drink,,"%s, prohibido beber de tu vaso. Debes elegir el de otra persona a cada turno.",2,1
,other-drink,"%s, puedes volver a beber en tu vaso",2,1
crazy-claper,,¡%s aplaude con locura! Cada vez que aplaudes todo el mundo debe beber (tú no),2,1
,crazy-claper,%s puedes dejar de aplaudir.,2,1
animal-noise,,"%s deberás hacer un ruido de un animal después de cada trago, %s elige un animal",2,2
,animal-noise,%s puedes dejar de hacer ruidos de animal.,2,1
,animal-noise,%s puedes dejar de hacer ruidos de animal y bebes {shots} tragos por el insulto que has tenido que soportar. ,2,2
seat-knees,,%s siéntate en las rodillas de %s,2,2
,seat-knees,%s puedes dejar de sentarte en las rodillas de %s,2,2
switch-glass,,%s y %s intercambian sus vasos,2,2
,switch-glass,%s y %s pueden recuperar sus bebidas,2,2
pronoun,,"%s no tienes derecho de usar pronombres personales hasta nuevo aviso (yo, tú, él ...) castigo de {shots} tragos ",2,1
,pronoun,¡%s puedes hablar de nuevo normalmente!,2,1
timewatch,,"¡%s haz de reloj! Debes decir la hora cada minuto, {shots} tragos par cada falta",2,1
,timewatch,%s puedes dejar de ser reloj tick - tack.,2,1
one-eyed,,¡%s estas tuerto/a! Cierra un ojo hasta nuevo aviso,2,1
,one-eyed,%s puedes volver a ver normalmente.,2,1
talkative,,¡%s seras un loro! No puedes quedarte más de 3 segundos sin hablar hasta nuevo aviso,2,1
,talkative,%s puedes de dejar de hablar sin parar y hablar normalmente. ,2,1
sing123,,"%s debes ahora cantar todo lo que se dice con la tonadita de "Un elefante se balanceaba sobre la tela de una araña" hasta nuevo aviso.",2,1
,sing123,¡%s puedes hablar de nuevo normalmente!,2,1
mouthfuls-mirror,,"Hasta nuevo aviso, en cuanto %s habla, %s debe beber un trago y viceversa.",2,2
,mouthfuls-mirror,¡%s y %s pueden de nuevo hablar sin que el otro/a tenga que beber!,2,2
sub-shit,,"¡%s eres un mierda! Nadie se le puede dirigir por su nombre, en vez de eso llámenle por todos los insultos posibles, no se puede protestar.",2,1
,sub-shit,Todo el mundo bebe {shots} tragos excepto %s que ha dejado de ser una mierda,2,1
swap-tshirt,,"%s y %s, intercambien sus camisetas hasta nuevo aviso, sino tendrán beber 2 tragos cada vez que alguien beba. ",2,2
,swap-tshirt,%s y %s pueden recuperar sus camisetas.,2,2
vigilante,,¡%s es el vengador! Cada vez que alguien te manda beber puedes elegir dárselos a alguien más.,2,1
,vigilante,¡%s deja de vengarte! Ya no podrás infligir dolor. ,2,1
tourette-man,,"¡%s tienes el síndrome de Tourette! Cuando grites" taco", la última persona en imitarte bebe {shots} tragos.",2,1
,tourette-man,¡%s ha curado su síndrome de Tourette!,2,1
upset-man,,"¡%s estás enfadado/a! Cada vez que sonríes o te rías,bebes {shots} tragos ",2,1
,upset-man,"¡%s deja de estar enfadado/a, el mal humor es lo peor que existe!",2,1
bipolar,,¡%s eres bipolar! Debes decir exactamente lo contrario de lo que piensas hasta nuevo aviso!,2,1
,bipolar,¡%s deja de ser bipolar!,2,1
speak-future,,¡Volver al futuro para %s! Debes hablar en tiempo futuro. Castigo de {shots} tragos por cada falta!,2,1
,speak-future,¡%s puedes regresar al presente!,2,1
african-accent,,¡%s desde ahora debes de hablar con acento africano hasta nuevo aviso!,2,1
,african-accent,¡%s puedes recuperar tu acento normal! ,2,1
english-accent,,¡%s debes hablar con un acento burgués hasta nuevo aviso! ,2,1
,english-accent,¡%s puedes recuperar tu acento normal!,2,1
thats-obvious,,"¡%s a partir de ahora debe decir "Pues vale" cada vez que una persona termina de hablar, bajo castigo de un trago por cada falta!",2,1
,thats-obvious,"Fin de la regla "pues vale" para %s ",2,1
imitate-gesture,,"¡%s, debes imitar los movimientos de %s hasta que se te diga lo contrario!",2,2
,imitate-gesture,¡%s deja de imitar a %s!,2,2
ally,,%s y %s crearán una alianza! Pueden repartir entre ellos todos los tragos destinados al uno o al otro! ,2,2
,ally,¡%s y %s rompen su alianza!,2,2
answer-no,,"¡%s debes responder "no" cuando te pregunten algo y tienes que dar explicaciones de por qué no!",2,1
,answer-no,"¡%s puedes dejar de responder "no" a todas las preguntas!",2,1
on-your-knees,,¡%s arrodíllate ... No té preocupes ta van a avisar cuando te puedes volver a levantar!,2,1
,on-your-knees,¡%s deja de arrodillarte! No quieren casarse contigo ,2,1
on-one-leg,,"¡%s debes quedarte de pie a la pata coja, no te preocupes te van a avisar cuando puedas ponerte normal otra vez!",2,1
,on-one-leg,¡%s puedes volver a una posición cómoda!,2,1
switch-up-n-down,,¡%s debes alternar entre ponerte de pie y sentarte entre cada nuevo turno! ¡Síno bebes {shots} tragos por cada falta!,2,1
,switch-up-n-down,¡%s puedes de nuevo mantenerte en una sola posición!,2,1
back-to-everyone,,"¡%s dale la espalda a todo el mundo,ya te avisarán cuando puedas volverte a sentar correctamente!",2,1
,back-to-everyone,%s puedes volver a ser una persona social y dejar de darle la espalda al mundo,2,1
dance-now,,"¡%s baila sin moverte de tu sitio y no pares, si paras bebes un trago como castigo a cada nuevo turno!",2,1
,dance-now,¡%s puedes dejar de bailar!,2,1
dont-stop-walking,,"¡%s debes caminar sin parar, por cada vez que pares bebes {shots} tragos! ",2,1
,dont-stop-walking,¡%s puedes dejar de caminar como un loco/a!,2,1
without-fingers,,¡%s te quedaste manco! Ya no puedes utilizar tus dedos!,2,1
,without-fingers,¡%s puedes de nuevo utilizar tus dedos!,2,1
keep-hands-on-your-head,,¡%s mantén las dos manos sobre tu cabeza salvo para beber!,2,1
,keep-hands-on-your-head,¡%s Puedes bajar las manos!,2,1
sprich-deutsch,,¡%s eres Alemán! Habla con acento Alemán! ,2,1
,sprich-deutsch,¡%s puedes hablar normalmente!,2,1
shy-man,,¡%s eres muy tímido/a! No puedes responder a ninguna pregunta bajo castigo de {shots} tragos! ,2,1
,shy-man,¡%s puedes de nuevo responder a cualquier pregunta! ,2,1
paparazzi,,¡%s eres un Paparazzi! Cada vez que saques una foto de alguien sin que se de cuenta él/ella bebe {shots} tragos! ,2,1
,paparazzi,¡%s puedes dejar de ser un Paparazzi!,2,1
mouth-full,,"¡%s de ahora en adelante tienes que hablar con la boca llena, castigo de {shots} tragos si cometes una falta!",2,1
,mouth-full,¡%s puedes hablar de nuevo normalmente! ,2,1
impolite,,¡%s eres el maleducado/da de la Fiesta! Coloca ambos codos sobre la mesa hasta un nuevo aviso.,2,1
,impolite,¡%s has comprendido lo que son los buenos modales! Quita los codos de la mesa.,2,1
hug-way-of-life,,"¡%s eres el cariñoso/sa de esta noche! Cada vez que acaricias la nuca de alguien, él o ella bebe {shots} tragos",2,1
,hug-way-of-life,"¡%s deja de ser tan cariñoso, no eres Winnie Pooh!",2,1
dancing-queen,,"%s eres la reina del baile: la reina baila cuando quiere, la última persona en imitarla bebe dos tragos ",2,1
,dancing-queen,¡%s puedes dejar de ser la reina del baile!,2,1
team-captain-hand,,"¡%s eres el capitán del equipo! Puedes poner tu mano sobre la mesa cuando quieras, el último jugador en hacer lo mismo bebe {shots} tragos ",2,1
,team-captain-hand,¡%s ya no eres el capitán!,2,1
cheers-man,,"%s eres el alma de la fiesta, cada vez que bebes tienes que brindar con alguien que te seguirá sin importar el número de tus tragos que bebas. ",2,2
,cheers-man,%s puedes dejar de ser el alma de la fiesta. ,2,2
western-referee,,%s eres el árbitro de una película de vaqueros! Designa cuando quieras a dos jugadores: los vaqueros. El primero en recibir un disparo bebe {shots} tragos.,2,3
,western-referee,¡%s puedes dejar de ser el árbitro de la película de vaqueros más mala del mundo!,2,3
batman,,¡%s eres Batman! Habla como él o bebe {shots} tragos cada vez que hables.   ,2,1
,batman,¡%s ya no eres Batman! ,2,1
act-like-someone,,"¡%s, tienes que imitar a %s con sus gestos y voz hasta nuevo aviso!",2,2
,act-like-someone,"¡%s, deja de imitar a %s! ",2,2
david-guetta-man,,¡%s eres el David Guetta de los pobres! Elige las canciones hasta nuevo orden. ,2,1
,david-guetta-man,%s ya no eres el DJ. ,2,1
not-sociable,,¡%s eres asocial! Háblale sólo a %s es tu único amigo.,2,2
,not-sociable,¡%s puedes volver a hablar con todo el mundo!,2,2
snake-man,,"¡%s tienes una mirada hipnótica! Cada vez que mires a alguien a los ojos, la persona debe beber.",2,1
,snake-man,%s ya no tienes mirada hipnótica.,2,1
compliment-man,,"%s, cada vez que hables, tienes que decirle un cumplido a %s, {shots} tragos por vez que no lo hagas. ",2,2
,compliment-man,"%s, ya no tienes la obligación de decirle cumplidos a %s. ",2,2
magician,,"¡%s, eres el mago! Intercambia los vasos de los jugadores cuando y como quieras.",2,1
,magician,"%s, ya no eres un mago. ",2,1
drink-verb-forbidden,,"¡Prohibido utilizar el verbo "beber" bajo castigo de un trago por cada falta cometida!",3,0
,drink-verb-forbidden,"Podemos utilizar de nuevo el verbo "beber"",3,0
vouvoyer,,"¡Ahora nos tenemos que tratarnos de "usted", bajo castigo de un trago por cada falta cometida!",3,0
,vouvoyer,Podemos dejar de tratarnos de ''usted ''.,3,0
insult,,Ahora hay que insultar la persona a quién le tengas que dirigir la palabra. ,3,0
,insult,¡Dejen de insultarse Caray!,3,0
bad-word,,"De ahora en adelante,en cada frase que utilices debes introducir una mala palabra.",3,0
,bad-word,"¡Pu*ta de verdad, que hay que dejar de decir malas palabras! ",3,0
no-right-hand,,Prohibido de beber con la mano derecha ,3,0
,no-right-hand,Pueden todos utilizar de nuevo su mano derecha para beber .,3,0
right-firstname,,"Cada uno toma el nombre de la persona a su derecha, el que se equivoque bebe",3,0
,right-firstname,¡Todos volvemos a tener el nombre que nos dió nuestra madre!,3,0
ponctuation,,"Ahora, tienen que utilizar la expresión ''punto final'' (ejemplo : "bebe un trago, punto final")",3,0
,ponctuation,"¡Dejen de utlizar la expresión ''punto final"! ",3,0
love-you,,"Ahora, hay que acabar cada frase con un "te quiero" cada vez que nos dirijamos a otro jugador. ",3,0
,love-you,"Ya no es necesario terminar tus frases con "te quiero" ",3,0
all-waitress,,¡Las mujeres hacen de camareras! ¡A servir copas! ,3,0
,all-waitress,"¡Mujeres muy buen trabajo, ya es suficiente! ",3,0
no-yes,,"¡Ni "sí", ni "no"! Quien que pronuncié una de las dos palabras bebe {shots} tragos hasta nuevo aviso!",3,0
,no-yes,"El juego de Ni "sí", Ni "no" ha acabado ",3,0
point-finger,,¡Prohibido! apuntar con el dedo a cualquier jugador.,3,0
,point-finger,Podemos apuntar con el dedo a los jugadores ,3,0
thumb-king,,%s eres el rey de los pulgares. Puede poner tú pulgar sobre la mesa a cualquier momento. El último jugador que te imite bebe,3,1
,thumb-king,¡%s Abdicación! Ya no eres el Rey de los Pulgares,3,1
alcool-waste,,Todo desperdicio de alcohol será penalizado por {shots} tragos (el pipí es un desperdicio),3,0
,alcool-waste,"Ya no hay penalización por el desperdicio de alcohol, puedes derramar bebidas y vaciar la vejiga.",3,0
master-name,,"Todo el mundo debe dirigirse hacia %s con "Mi Dios/sa"",3,1
,master-name,%s puedes dejar de ser Dios,3,1
rule-before-drink,,%s inventa una nueva regla ,3,1
,rule-before-drink,¡La regla de %s ya no existe!,3,1
no-firstname,,Prohibido dirigirse a cualquier persona presente por su nombre.,3,0
,no-firstname,¡Podemos de nuevo dirigirnos a las personas por su nombre!,3,0
no-question,,"Prohibido hacer preguntas, por cada falta existe un castigo de {shots} tragos",3,0
,no-question,¡Podemos volver a formular preguntas! ,3,0
ignore,,"Todo el mundo debe ignorar a %s, prohibido mirarlo/la o hablar con él/ella.",3,1
,ignore,Podemos dejar de ignorar a %s!,3,1
no-choose-word,,%s elige una palabra que no se podrá pronunciar.,3,1
,no-choose-word,¡La palabra prohibida por %s es de nuevo permitida!,3,1
odd-doubled,,¡Los tragos impar serán duplicados!,3,0
,odd-doubled,Los tragos impar ya no son duplicados. ,3,0
insult-right,,¡Debes insultar tu vecino/a de la derecha cada vez que se beba un trago de alcohol! ,3,0
,insult-right,Ya no más insultos para tu vecino de la derecha,3,0
replace-a-i,,"Hay que sustituir la letra "a" por la letra "i"  cuando se habla (ej : "quiero a mi papá" se convierte en "quiero a mi pipí""",3,0
,replace-a-i,"El sonido "a" ya no será sustituido por el sonido "i"",3,0
neighbors-eyes,,Los vecinos no pueden mirarse directamente a los ojos.,3,0
,neighbors-eyes,Los vecinos pueden volver a mirarse en los ojos,3,0
phrase-high-five,,"Cuando hables con alguien debes terminar con "choca esos cinco" y darse una gran choque de manos!",3,0
,phrase-high-five,"Los "choca esos cinco" ya no son obligatorios",3,0
grab-right,,¡Debes pegarte a tu vecino/a de la derecha a cada trago!,3,0
,grab-right,¡Ya no es necesario que te pegues a tu vecino/a de la derecha a cada trago!,3,0
straw,,¡Nueva regla! Todos deben imaginar tener una pajita en su vaso que deberán quitar cada vez que tengan que beber y volver a poner la pajita en el vaso.,3,0
,straw,Pueden dejar de pretender tener pajitas en los vasos! Que parece una estupidez. ,3,0
fuck-you,,"¡Nueva regla! Cada vez que alguien dice una frase tiene que terminarla con "jo*der, de verdad que %s es un mierda"",3,1
,fuck-you,"¡%s no te preocupes, todos te quieren! Puedes repartir {shots} tragos. ",3,1
freezer,,"%s tienes el hielo. Cada vez que dejes de moverte (discretamente), el último jugador en hacer lo mismo bebe {shots} tragos",3,1
,Freezer,%s ya no tiene el hielo,3,1
sniper,,"¡Juego del Francotirador! Discretamente, %s guiña un ojo a un jugador, que a su vez bebe 2 tragos y se convertirá en Francotirador, así sucesivamente!",3,1
,sniper,¡El juego del Francotirador ha terminado! El último Francotirador bebe {shots} tragos,3,0
buffalo,,"¡Regla del Búfalo! NADIE PUEDE SOSTENER SU VASO con su mano buena (derecha/izquierda), castigo será beber TODO lo que quede en el vaso de un solo trago",3,0
,buffalo,La Regla del Búfalo ha terminado,3,0
yoda,,¡Nueva regla! Debes como el Maestro Yoda hablar o {shots} tragos vas a beber,3,0
,yoda,¡Puedes dejar de hablar como Maestro Yoda!,3,0
sign,,"¡Nueva regla! Cada uno elige una señal, a partir de ahora cada jugador deberá hacer la seña de la persona a quien quiera dirigirse!",3,0
,sign,¡Podéis dejar de hacer señas!,3,0
library-time,,"¡Todo el mundo a la biblioteca! Todos deben Susurrar, hasta nuevo aviso sino beben {shots} tragos!",3,0
,library-time,!Pueden dejar de susurrar!,3,0
no-slang,,"¡Nueva regla: No a la vulgaridad! El jugador que diga una mala palabra, bebe {shots} tragos!",3,0
,no-slang,"¡Podemos de nuevo decir malas palabras, co*ño!",3,0
give-up-glass-to-right,,¡Todo el mundo cambia su vaso por el del vecino/a de la derecha! ,3,0
,give-up-glass-to-right,¡Cada uno recupera su vaso!,3,0
slow-motion,,¡Nueva regla! Todo el mundo tiene que hablar lento,3,0
,slow-motion,¡Todos pueden hablar a ritmo normal de nuevo! ,3,0
only-questions,,¡Nueva regla! Tenemos que hablar entre nosotros únicamente con preguntas.,3,0
,only-questions,¡Ya no hace falta hablar solo con preguntas!,3,0
everyone-lisps,,¡Tenemos que cecear hasta nuevo aviso!,3,0
,everyone-lisps,Hay que dejar de cecear (salvo para los que no lo hacen adrede),3,0
heads-tails-rule,,"¡Nueva regla! Ahora debemos jugar a la moneda, ¡Cara o cruz! Si ganan no beben, si pierden beben el doble",3,0
,heads-tails-rule,¡Ya no pueden jugar a la moneda con sus tragos!,3,0
spin-each-song,,"De ahora en adelante cada vez que se acaba una canción todos deben dar una vuelta de 360 grados, el último jugador en hacerlo bebe {shots} tragos ",3,0
,spin-each-song,Ya no hace falta dar una vuelta al final de cada canción.,3,0
scapegoat,,"Cada uno elige a su víctima, todos los tragos destinados hacia ti serán destinado hacia tu víctima, los tragos solo se transfieren una única vez",3,0
,scapegoat,¡Dejen de hacerse la víctima!,3,0
dont-touch-head,,Prohibido tocarse el pelo o la cara! {shots} tragos por cada falta.,3,0
,dont-touch-head,Todo el mundo puede tocarse de nuevo la cara. ,3,0
dont-touch-table,,"Prohibido tocar la mesa, castigo de {shots} tragos a quien la toque. ",3,0
,dont-touch-table,Se puede de nuevo tocar la mesa. ,3,0
no-receiving,,Nueva regla: prohibido recibir objetos de parte de otro jugador. Sentencia: {shots} tragos para la persona que recibe el objeto. ,3,0
,no-receiving,Se pueden de nuevo intercambiar objetos sin miedo a una sentencia. ,3,0
sexy-actress,,""Las actrices de cine súper sexys", el jugador que repita o se haya quedado sin ideas bebe {shots} tragos. %s empiezas.",4,1
,sexy-actress,Quien haya dicho Megan Fox reparten {shots} tragos ,4,0
,sexy-actress,Quien haya dicho Scarlett Johansson beben {shots} tragos ,4,0
,sexy-actress,Quien haya dicho Natahalie Portman o Jessica Alba reparten {shots} tragos ,4,0
rugby-game,,"¿Prefieres ver un partido de rugby o ganar la lotería? Voten todos juntos, la minoría bebe {shots} tragos.",14,1
,rugby-game,"¡Quien haya respondido "ganar la lotería" beben {shots} tragos panda de interesados! ",14,0
,rugby-game,"¡Quien haya respondido "ver un partido de rugby" pueden repartir {shots} tragos! ",14,0
,rugby-game,"¡Quien haya respondido "ver un partido de rugby" beben {shots} tragos panda de estúpidos! ",14,0

white-black,,"¡Todo el mundo elige entre el color negro o blanco, aquellas o aquellos que pierdan beben {shots} tragos! (elige un color y comprenderas...)",23,0
,white-black,¡Blanco!,23,0
,white-black,¡Negro!,23,0
,white-black,¡Gris! Todos han perdido! ,23,0

shoes-price,,¿Cúal es el precio de tus zapatos? La siguiente persona es ....%s empiezas. ,23,1
,shoes-price,Quien tenga el par más caro bebe {shots} tragos ,23,0
,shoes-price,Quien tenga el par más barato bebe {shots} tragos ,23,0
,shoes-price,Quien tengan un par de zapatos que cuesten más de 30 dólares beben {shots} tragos ,23,0
heads-tails,,¿Cara o cruz? %s empiezas (Ya veras lo que sigue ..) ,23,1
,heads-tails,Las personas que han dicho Cruz beben {shots} tragos ,23,0
,heads-tails,Las personas que han dicho Cara beben {shots} tragos ,23,0
,heads-tails,Las personas que han dicho Cruz reparten {shots} tragos ,23,0
,heads-tails,Las personas que han dicho Cara reparten {shots} tragos ,23,0
dumbest-player,,Designar todos juntos al jugador más estúpido entre ustedes y tendrá beber {shots} tragos ,23,0
,dumbest-player,La persona más estúpida puede vengarse y repartir {shots} tragos ,23,0
,dumbest-player,"En la vida no hay ser estúpido, 1 trago más para ti por imbécil. ",23,0
beautiful-player,,"Designar todos juntos, a la persona más guapa de la fiesta que deberá beber {shots} tragos ",23,0
,beautiful-player,Sólo por que eres un bombón puedes vengarte y repartir {shots} tragos ,23,0
,beautiful-player,"El dios de los feos se quiere vengar, la persona más hermosa debe beber 1 trago más",23,0
smart-player,,Designar todos juntos a la persona más inteligente y deberá beber {shots} tragos ,23,0
,smart-player,Ya que el alcohol te hace interesante bebes 1 trago más ,23,0
,smart-player,"Einstein, te puedes vengar y repartir {shots} tragos ",23,0
*/