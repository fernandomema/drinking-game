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
},{
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
},
{
    locales: {
        es: "El/la último/a en levantarse bebe {shots} tragos",
        en: "The last person to stand up drinks {shots} shots"
    },
    tags: ["preparty"]
},{
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
},
{
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
}];

/*
,,%s si eres una mujer reparte $ tragos o tendrás que beberlos tú,1,1
,,El/la último/a en levantarse bebe $ tragos,1,0
,,%s hace beber $ tragos a %s o $ tragos a %s,1,3
,,%s reparte $ tragos sino %s reparte $ tragos,1,3
,,%s bebe $ tragos y reparte $,1,1
,,%s la siguiente persona que te mire a los ojos debe beber $ tragos,1,1
,,La primera persona en quitarse dos prendas reparte $ tragos,1,0
,,El/la primero/a en lamer su codo reparte 100 tragos,1,0
,,%s y %s tendrán que ponerse de acuerdo para repartir $ tragos a una sola persona,1,3
,,Los/las zurdos/as beben $ tragos,1,0
,,Aquellos/as que tengan sus teléfonos sobre la mesa reparten $ tragos,1,0
,,La primera persona que señale a la jugadora más joven reparte $ tragos,1,0
,,"La persona con el vaso más lleno, bebe $ tragos",1,0
,,El más peludo bebe $ tragos,1,0
,,"Todas las personas cuyos nombres contengan una ""e"" beben $ tragos",1,0
,,%s muestra las últimas 5 fotos de tu móvil o bebes $ tragos,1,1
,,Todos/as los/las que lleven alguna prenda marrón beben $ tragos,1,0
,,La última persona en haber tenido sexo bebe $ trago,1,0
,,El jugador más alto reparte $ tragos,1,0
,,Todos/as los/as rubios/as beben $ tragos,1,0
,,Todas las personas más jóvenes que %s beben $ tragos,1,1
,,Todas las personas mayores que %s beben $ tragos,1,1
,,Todas las personas más altas que %s beben $ tragos,1,1
,,Todas las personas más bajas que %s beben $ tragos,1,1
,,Las personas más bronceadas que %s beben $ tragos,1,1
,,Las personas que estén más borrachas que %s beben $ tragos,1,1
,,Las personas que estén menos borrachas que %s beben $ tragos,1,1
,,Las personas con agujeros en los calcetines beben $ tragos,1,0
,,%s dejas a %s acceso libre de tu facebook durante 2 minutos o te acabas tu vaso.,1,2
,,"Aquellos/ Aquellas con una pulsera, brazalete o reloj beben $ tragos",1,0
,,Las personas con tatuajes o piercing beben $ tragos ,1,0
,,Las personas originarias del norte beben $ tragos,1,0
,,Las personas originarias del sur beben $ tragos,1,0
,,Aquellos/ aquellas que se depilan las axilas beben $ tragos,1,0
,,"Duelo entre %s y %s ! La persona que tenga las manos más grandes, bebe $ tragos.",1,2
,,La última persona que haya ido al baño bebe $ tragos.,1,0
,,"Duelo entre %s y %s, el que lleve los calzoncillos más oscuros bebe $ tragos.",1,2
,,Los que tengan los ojos azules beben $ tragos.,1,0
,,"%s, si NO tienes las piernas depiladas, bebes $ tragos.",1,1
,,"Sin dolor no hay recompensa, %s bebe un trago sin usar tus manos.",1,1
,,"%s, cuenta algo sobre %s o bebes $ tragos.",1,2
,,¡Todo el mundo bebe $ tragos! ,1,0
,,La persona que está a la derecha de %s bebe $ tragos.,1,1
,,La persona que está a la izquierda de %s bebe $ tragos.,1,1
,,¡Manos arriba! La última persona en levantar las manos bebe $ tragos.,1,0
,,"Efecto Boomerang, %s puede transferir sus tragos a cualquier jugador para el turno siguiente",1,1
,,Las personas que conocen a %s desde hace menos de un mes beben $ tragos,1,1
,,Los aficionados al fútbol beben $ tragos,1,0
,,¡No más teléfono! La primera persona en consultar su teléfono bebe 10 tragos,1,0
,,Aquellos/ aquellas que tienen un iPhone beben $ tragos,1,0
,,Aquellos/ aquellas que tienen un producto fabricado por Samsung beben $ tragos,1,0
,,Los que usan gafas o lentillas beben $ tragos,1,0
,,"Las personas, que nunca hayan jugado a Picolo, beben $ tragos",1,0
,,$ tragos para todos los fumadores,1,0
,,"%s, bebe la cantidad de tragos que quieras, %s tiene que beber el doble",1,2
,,La persona con el culo más grande bebe $ tragos,1,0
,,El jugador o jugadora con más alcohol en el vaso bebe $ tragos,1,0
,,"%s, si tu bebida es más barata que la de %s, bebe $ tragos",1,2
,,"Si el día de tu cumpleaños cae en un número par, bebe $ tragos",1,0
,,"Si el día de tu cumpleaños cae en un número impar, bebe $ tragos",1,0
,,"%s, aquellos/aquellas que no estén en los contactos de tu teléfono beben $ tragos.",1,1
,,"%s, di el título de la última película que hayas visto en el cine, aquellos/aquellas que no la hayan visto beben $ tragos.",1,1
,,"%s elige tu esclavo, podrás transferirle dos veces los tragos que debes beber.",1,1
,,"Verdad o mentira, %s elige ""verdad o mentira"" para %s",1,2
,,"La amistad lo es todo, %s y %s es hora de crear un juego de señas que deberán mantener hasta el fin del juego.",1,2
,,Todos Aquellos / aquellas que se puedan tocar la nariz con la lengua reparten $ tragos ,1,0
,,Los solteros deben obligar a una sola persona a beber $ tragos,1,0
,,Las personas con pareja deben hacer beber $ tragos a un solo jugador,1,0
,,La última persona que ha publicado un Status en facebook bebe $ tragos,1,0
,,%s debes darle un beso en el trasero a %s sino bebes $ tragos,1,2
,,La primera persona que enseñe un condón reparte $ tragos,1,0
,,La última persona en quitar los pies del suelo bebe $ tragos,1,0
,,"%s, designas un accesorio (cintúron, collar, bolso...). Todas las personas que llevan puesto este accesorio deben beber $ tragos",1,1
,,"¡Una foto de recuerdo, %s y %s haced un selfie!",1,2
,,%s añade zumo o alcohol en el vaso de %s,1,2
,,Aquellos/aquellas que tenían menos de 8 años durante el mundial del 98 beben $ tragos.,1,0
,,"%s, Si alguna vez te has limpiado el culo con hojas de árbol en vez de papel de baño , bebe $ tragos",1,1
,,"%s, bebes el mismo número de tragos que de jugadores.",1,1
,,"Si hay alguien ya vomitó esta noche, puede repartir $ tragos.",1,1
,,¡La última persona en haber vomitado (durante una fiesta anterior) reparte $ tragos! Campeón.,1,0
,,"%s y %s, beben al mismo tiempo $ tragos.",1,2
,,Las personas que han tenido una ETS (Enfermedad de Transmission Sexual) reparten $ tragos.,1,0
,,"A cada turno, un jugador debe añadir un poco de alcohol a su vaso, %s empiezas.",1,1
,,La persona que se emborrachó de más joven reparte $ tragos,1,0
,,Aquél/Aquella que tenga más amigos en Facebook bebe $ tragos,1,0
,,"¿%s, has tenido ya una aventura de una noche? Si es tu respuesta es SI repartes $ tragos sino, te los bebes.",1,1
,,"Hasta que %s no vea su nombre escrito en una pantalla de téléfono, él/ ella debera beber a cada turno..",1,1
,,"¡Juego del lobo! El lobo debe tocar a un jugador que de debe beber un trago y se convierte automáticamente en lobo, y así sucesivamente hasta el final de la partida.%s es el lobo.",1,1
,,Aquellos/aquellas que tengan un paquete de cigarrillos beben un trago por cada cigarrillo que tenga (8 máximo),1,0
,,"Aquellos/ aquellas que siguen bebiendo alcoholes suaves (vino, cerveza) beben $ tragos.",1,0
,,Aquellos /aquellas que se hayan masturbado haciendo un vídeo porno beben $ tragos.,1,0
,,"%s, haznos tres pasos de baile o bebe $ tragos",1,1
,,"%s, adivina la edad de %s si fallas, bebe $ tragos",1,2
,,"%s, di el signo astrológico de %s si fallas, bebe $ tragos",1,2
,,"%s, cierra tus ojos y di el color de ojos de %s sino bebes $ tragos",1,2
,,"%s, cierra tus ojos y di el color de los zapatos de %s sino bebe $ tragos",1,2
,,"%s, tienes 3 segundos para decir el número exacto de la personas en la sala. Si fallas, beberás $ tragos",1,1
,,"%s, di el color favorito de %s sino bebe $ tragos",1,2
,,La siguiente persona que sonría toma $ tragos.,1,0
,,La persona que obtuvo su primer teléfono siendo más joven bebe $ tragos.,1,0
,,"Los jugadores que NO puedan tocar el suelo ,estando de pie con las piernas estiradas beben $ tragos.",1,0
,,"El primer jugador en tocar los pies de %s, reparte $ tragos.",1,1
,,"%s, si te quedas 5 minutos sin hablar a partir de este momento, podrás elegir a una persona que se deberá acabar su vaso",1,1
,,"¡El siguiente jugador en beber, tendrá que duplicar su número de tragos!",1,0
,,"Hasta el fínal del juego, el primer jugador en decir la palabra ""sí"" bebe todo su vaso de un solo trago.",1,0
,,El último jugador en haberse duchado bebe $ tragos.,1,0
,,%s debes sonreír durante 1 minuto sino $ tragos por cada falta,1,1
,,Aquél o aquella que lea esta frase bebe $ tragos,1,0
,,Aquellos o aquellas en oír esta frase beben $ tragos,1,0
,,"%s, haznos 5 segundos de Tap dance sino bebes $ tragos",1,1
,,"%s, tienes 3 minutos de inmunidad (puedes dejar descansar tu hígado)",1,1
,,Aquél que tiene menos pelo bebe $ tragos,1,0
,,¡Los tres jugadores menos peludos toman $ tragos!,1,3
,,¡Los tres jugadores más grandes toman $ tragos!,1,3
,,¡Los tres jugadores más estúpidos toman $ tragos!,1,3
,,¡Los tres jugadores menos bronceados toman $ tragos!,1,3
,,¡Los tres jugadores más tacaños toman $ tragos!,1,3
,,¡Los tres jugadores con menos dinero en efectivo en la cartera toman $ tragos!,1,3
,,"¡El trío %s, %s y %s beben todos $ tragos!",1,3
,,¡El/La primero/a en decir un refrán reparte $ tragos!,1,0
,,¡Los tres más jóvenes del grupo beben $ tragos!,1,3
,,"%s, si alguna vez te has desnudado en público, repartes $ tragos sino bebes.",1,1
,,Aquellas o aquellos que hoy no se hayan duchado beben $ tragos.,1,0
,,"%s, si llevas puestas unas sandalias repartes $ tragos, en caso contrario, bebes tú.",1,1
,,Aquellas y aquellas que han practicado más de dos deportes reparten $ tragos.,1,0
,,"%s, si tienes el pelo rizado debes repartir $ tragos sino bébelos.",1,1
,,"El Anfitrión de la fiesta reparte $ tragos, si nadie es anfitrión, %s repartes $ tragos ",1,1
,,"%s, imita otro a jugador, la primera persona en saber de quién se trate reparte $ tragos",1,1
,,"%s, debes hacer lo que mande %s, si te niegas bebes $ tragos",1,2
,,Aquellas y aquellos que hayan aparecido en Televisión beben $ tragos,1,0
,,Aquellas y aquellos que han leído a escondidas los mensajes de texto de su novio/novia beben $ tragos,1,0
,,Aquellas y aquellos que hayan copiado en un examen beben $ tragos,1,0
,,Aquellas y aquellos que hayan escrito algo en Facebook estando borrachos beben $ tragos,1,0
,,"%s, si has declarado tu amor estando borracho(a) por mensaje, bebe $ tragos sino repártelos",1,1
,,"%s, si te has tomado una siesta en el trabajo/escuela, bebes $ tragos sino repártelos.",1,1
,,"%s, si has robado en una tienda, bebe $ tragos sino repártelos.",1,1
,,"%s, si alguna vez has tenido pérdidas de memoria a causa del alcohol, bebe $ tragos sino repártelos",1,1
,,"%s, si alguna vez te han echado de un bar o club bebes $ tragos, sino repártelos",1,1
,,"%s, si has roto con alguien por SMS bebes $ tragos, sino repártelos.",1,1
,,"%s, si has mentido sobre tu edad para gustarle a alguien bebes $ tragos, sino repártelos.",1,1
,,"%s, si le has pedido a alguien su teléfono sin estar borracho(a) bebe $ tragos, sino repártelos.",1,1
,,Si nunca has hecho un Strip-tease bebe $ tragos.,1,0
,,"%s, deja a %s enviar un Snapchat desde tu teléfono sino bebe $ tragos.",1,2
,,Aquellas y aquellos que alguna vez hayan utilizado preservativos perfumados beben $ tragos,1,0
,,Las y los que nunca hayan estado borrachos durante tres días seguidos reparten $ tragos.,1,0
,,Las y los que hayan bebido alguna vez antes de las diez de la mañana beben $ tragos,1,0
,,"Aquellas y aquellos que alguna vez hayan estado sin utilizar ropa interior durante 3 días consecutivos o más, beben $ tragos.",1,0
,,Los tres jugadores más imberbes toman $ tragos.,1,3
,,Los ateos beben $ tragos.,1,0
,,Los y las que creen en espíritus beben $ tragos.,1,0
,,Aquellas y aquellos que ayer se emborracharon beben $ tragos.,1,0
,,Quienes terminasen muy mal su última noche de fiesta beben $ tragos.,1,0
,,"%s, si crees que eres más hermosa que %s bebe $ tragos.",1,2
,,"%s, si alguna vez has tenido una pelea a puñetazos con alguíen bebes $ tragos.",1,1
,,"%s, alguna vez has provocado una pelea debes beber $ tragos",1,1
,,"%s, alguna vez has estado involucrado/da en una pelea de borrachos bebes $ tragos ",1,1
,,"%s, si hoy has tomado menos que dos vasos de alcohol bebe $ tragos.",1,1
,,Aquellas y aquellos que bebieron durante el turno anterior beben $ tragos,1,0
,,Las y los que bebieron con el turno anterior reparten $ tragos.,1,0
,,"%s, si has bebido más que $ copas puedes repartir $ tragos.",1,1
,,Aquellas y aquellos que trabajan o estudian en el sector comercial beben $ tragos.,1,0
,,Las y los que trabajan o estudian en cualquier tipo de ingeniería beben $ tragos.,1,0
,,Aquellas y aquellos que trabajan o estudian en la comercialización beben $ tragos.,1,0
,,Aquellas y aquellos que trabajan o estudian en el sector de la sanidad beben $ tragos.,1,0
,,Aquellas y aquellos que trabajan o estudian ciencias sociales beben $ tragos.,1,0
,,Las y los que trabajan en el sector ecológico beben $ tragos.,1,0
,,"Aquellas y aquellos que prefieren decir ""Party"" y no ""Fiesta"" beben $ tragos.",1,0
,,Aquellas y aquellos que han consultado hoy su Facebook beben $ tragos.,1,0
,,Las y los que todavía no han repartido tragos beben $ tragos.,1,0
,,"Entre %s y %s aquél o aquella que hoy haya bebido menos, bebe $ tragos.",1,2
,,La primera persona en enviar un SMS a un miembro de su familia repárte $ tragos.,1,0
,,"El siguiente jugador que beba, podrá repartir $ tragos.",1,0
,,Aquellas y aquellos que se hayan cambiado el color de su pelo beben $ tragos.,1,0
,,"Aquellas y aquellos que tiengan un animal doméstico o más, beben $ tragos.",1,0
,,Las y los que lleven las uñas pintadas beben $ tragos.,1,0
,,"Aquellas y aquellos que llevan ropa limpia, beben $ tragos.",1,0
,,Aquellas y aquellos que hayan retocado su foto de perfil de Facebook beben $ tragos,1,0
,,La última persona que haya llegado esta noche bebe $ tragos,1,0
,,"¡Aquellas y aquellos que hayan ""hackeado"" la cuenta de Facebook de un jugador beben $ tragos!",1,0
,,"¡Aquellas y aquellos a los que les hayan ""hackeado"" su cuenta de Facebook beben $ tragos!",1,0
,,Las y los que hayan chateado con MSN beben $ tragos,1,0
,,"Las y los que hayan bailado la canción de Ricky Martin- ""Livin' la Vida Loca"" beben $ tragos",1,0
,,¡Aquellas y aquellos que tienen una edad par (ej. 22 años) deben enviar una foto a alguien o beber $ tragos!,1,0
,,¡Los diestros y las diestras beben $ tragos!,1,0
,,¡Aquellas y aquellos que están enfermos beben $ tragos!,1,0
,,¡Aquellas y aquellos que hayan bailado una canción romántica con alguien sin que pase nada más beben $ tragos!,1,0
,,¡Aquellas y aquellos que han tenido una cita con alguien a partir de un mensaje enviado durante una clase beben $ tragos!,1,0
,,Aquellas y aquellos a los que un amigo les ha robado su pareja beben $ tragos!,1,0
,,¡Las y los que hayan cagado en un baño público beben $ tragos!,1,0
,,¡Si hoy has bailado bebe $ tragos!,1,0
,,¡Muerte a los Frikis! La última persona en haber utilizado su teléfono móvil (salvo el que tiene Picolo) bebe $ tragos,1,0
,,¡Las y los que están fumando beben $ tragos!,1,0
,,¡Aquellas y aquellos que conocen a alguno de los fundadores de Picolo beben $ tragos!,1,0
,,¡Aquellas o aquellos que hayan peleado en un Ring de Boxeo beben $ tragos!,1,0
,,¡%s haz 6 abdominales y bebe un trago entre cada una!,1,1
,,¡%s paséate entre los jugadores y da una palmadita en la espalda a quienes deberán beber dos tragos!,1,1
,,¡Los Jugadores con más estudios que %s beben $ tragos! ,1,1
,,"¡Las personas que no puedan juntar sus dos manos detrás de la espalda (una desde arriba, otra desde abajo) beben $ tragos!",1,0
,,¡El jugador que esté a la derecha de la persona que acaba de leer este mensaje bebe $ tragos!,1,0
,,¡El jugador que esté a la derecha de la persona que acaba de leer este mensaje reparte $ tragos!,1,0
,,¡El jugador que está a la izquierda de la persona que acaba de leer este mensaje reparte $ tragos!,1,0
,,¡El jugador que está a la izquierda de la persona que acaba de leer este mensaje bebe $ tragos!,1,0
,,¡Cada uno bebe el mismo número de tragos que años haya pasado en la Universidad! ,1,0
,,¡Aquellas y aquellos que contengan la letra A en su nombre beben $ tragos!,1,0
,,¡Aquellas y aquellos que contengan la letra F en su nombre beben $ tragos!,1,0
,,¡Aquellas y aquellos que contengan la letra S en su nombre beben $ tragos!,1,0
,,¡Aquellas y aquellos que contengan la letra O en su nombre beben $ tragos!,1,0
,,¡Los hijos únicos beben $ tragos!,1,0
,,¡Las personas que han repetido un año escolar beben $ tragos!,1,0
,,¡%s reparte en tragos el número de hermanos y hermanas que tengas!,1,1
,,"¡%s bebes en tragos el mismo número de países, que hayas visitado!",1,1
,,¡Los que son buenos trabajando con actividades manuales beben $ tragos!,1,0
,,¡Los que tengan los brazos delgados beben $ tragos! Será un buen ejercicio.,1,0
,,¡Los barbudos beben $ tragos!,1,0
,,¡Las y los que hayan cagado en el mar beben $ tragos!,1,0
,,"¡Aquellas y aquellos que han cagado en la calle beben $ tragos, panda de cerdos!",1,0
,,"¡%s si tu edad es un número par bebe $ tragos, $ tragos si es impar!",1,1
,,¡Elegid a la persona con más mal humor y que beba $ tragos!,1,0
,,"¡%s ,%s te va a pellizcar el culo sino te toca beber $ tragos!",1,2
,,¡Aquellos jugadores que han llegado tarde a la partida de Picolo beben $ tragos!,1,0
,,¡La primera persona en haber tenido la idea de jugar a Picolo puede repartir $ tragos!,1,0
,,¡Las mujeres beben $ tragos!,1,0
,,¡Los hombres beben $ tragos!,1,0
,,"¡Quien haya leído el libro ""La casa de los espíritus"" bebe $ tragos!",1,0
,,¡La última persona en haber ido a un parque de atracciones reparte $ tragos!,1,0
,,¡Quien haya vivido en más de 3 ciudades beben $ tragos!,1,0
,,"¡%s, di una virtud de cada uno de los jugadores y bebe un trago por cada virtud que digas!",1,1
,,"¡%s, di un defecto de cada jugador y bebe un trago por cada defecto!",1,1
,,¡Quien haya tenido sueños eróticos con alguno de los presentes bebe $ tragos! ,1,0
,,¡Los que se hayan despertado hablando en medio de la noche beben $ tragos!,1,0
,,"%s, bebe 3 chupitos seguidos o reparte $ tragos ",1,1
,,%s debes beber $ tragos mientras que %s te sopla a la oreja ,1,2
,,Los que sean más altos que %s beben la diferencia de centímetros en tragos (ej. 5cm = 5 tragos).,1,1
,,"%s, invita un o una amigo/a a esta fiesta o bebe $ tragos ",1,1
,,¿A quién le gusta acariciar a los gatos? Pues bebed $ tragos,1,0
,,Quien no pueda meterse todo el borde de su vaso en la boca bebe $ tragos.,1,0
,,Quien tenga pelo entre las cejas bebe $ tragos,1,0
,,El último que haya tocado la pantalla de su teléfono bebe $ tragos,1,0
,,"¡%s, finge ser una serpiente durante 5 largos segundos o bebes $ tragos!",1,1
,,"¡%s, imita una babosa durante 5 largos segundos o bebes $ tragos!",1,1
,,"¡%s, imita una tortuga durante 5 largos segundos o bebes $ tragos!",1,1
,,"¡%s haz una mueca mientras %s te toma una foto, y bebe $ tragos!",1,2
,,¡Quien haya nacido a 100 kilómetros de aquí o más bebe $ tragos!,1,0
,,¡Quien haya nacido a 50 kilómetros de aquí o menos repárten $ tragos!,1,0
,,"¡Quien haya utilizado la frase ""mejor quedamos como amigos"" beben $ tragos!",1,0
,,Bebe $ tragos si dejas la puerta abierta cuando vas al baño en tu casa.,1,0
,,Bebe $ tragos si tuviste un orgasmo hoy.,1,0
,,Bebe $ tragos si alguna vez has conducido por una rotonda al revés.,1,0
,,Bebe $ tragos si has tenido sexo con alguien por las razones equivocadas.,1,0
,,Bebe $ tragos si te encanta el sabor de los genitales de tu pareja,1,0
,,Bebe $ tragos si alguna vez has pasado 3 días sin lavarte,1,0
,,Bebe $ tragos si alguna vez has enviado a alguien al hospital. ,1,0
,,Bebe $ tragos si has comparado el tamaño de tu pene (o el de tu pareja) con tus amigos,1,0
,,Bebe $ tragos si tu amor platónico esta hoy aquí,1,0
,,"Bebe $ tragos si quieres pasar el resto de tu vida con tu pareja, finge beber en el peor de los casos. ",1,0
,,Bebe $ tragos si alguna vez le has mentido a alguien que esté hoy aquí para no ir a una de sus fiestas o reuniones. ,1,0
,,Los jugadores que no votaron durante las últimas elecciones reparten $ tragos,1,0
,,"Bebe $ tragos si siempre te lavas las manos al salir del baño, bebe $ tragos si estás fingiendo",1,0
,,Bebe $ tragos si  has enviado alguna solicitud a un programa de televisión.,1,0
,,Bebe $ tragos si has robado algo a uno de los jugadores presentes. ,1,0
,,Bebe $ tragos si has trabajado ilegalmente,1,0
,,Bebe $ tragos si le has sacado dinero de la cartera a tu novio/a sin decírselo. ,1,0
,,Bebe $ tragos si has mentido sobre el tamaño de tu pene o del pene de tu pareja . ,1,0
,,Bebe $ tragos si la policia te ha hecho algún tipo de control,1,0
,,Bebe $ tragos si te han arrestado,1,0
,,Bebe $ tragos si alguna vez te has puesto la ropa interior de tu pareja,1,0
,,Bebe $ tragos si eres mujer y has usado un bóxer o una camiseta de tu pareja como pijama,1,0
,,Bebe $ tragos si aceptas tener sexo con cualquier persona por 10.000 dólares.,1,0
,,Bebe $ tragos si has tenido sueños eróticos esta semana.,1,0
,,Bebe $ tragos si has visto a alguno de los jugadores desnudo/a.,1,0
,,Bebe $ tragos si has tenido sexo en el trabajo o universidad,1,0
,,Bebe $ tragos si has bebido alcohol solo/a,1,0
,,Bebe $ tragos si te duermes enseguida después de hacer el amor,1,0
,,Bebe $ tragos si la última película que has visto era una película romántica.,1,0
,,Bebe $ tragos si la última película que has visto era de acción.,1,0
,,Bebe $ tragos si has medido tu pene o el de tu pareja.,1,0
,,Bebe $ tragos si te has despertado en la cama de alguien preguntándote como llegaste ahí.,1,0
,,Bebe $ tragos si alguna vez has tenido sexo en el agua,1,0
,,"Bebe $ tragos si le dices a tu pareja ""te quiero"" a cada llamada telefónica (o casi).",1,0
,,"Los idiotas que dicen ""comparte"" cuando uno come patatillas beben $ tragos",1,0
,,Si has buscado algo que resultaba estar en tu bolsillo bebes $ tragos,1,0
,,Si has olvidado cuantos años tienes a causa del alcohol bebe $ tragos,1,0
,,Si has utilizado un bolígrafo de 4 colores y has usado los 4 colores al mismo tiempo bebe $ tragos,1,0
,,¡Hola tontos! Bebe $ tragos si cuando te duchas juegas a llenar un guante de baño con agua.,1,0
,,"Bebe $ tragos si has levantado tu móvil lo más alto posible, como un idiota, cuando no tenías cobertura.",1,0
,,El jugador que haya salido con la mujer más guapa bebe $ tragos,1,0
,,Quien haya salido con el chico más feo bebe $ tragos,1,0
,,Bebe $ tragos si has le has quitado la virginad a alguien.,1,0
,,"Las mujeres, beben según la copa de su sujetador (A =1 trago, B = 2 tragos, etc...)",1,0
,,"Si has tenido sexo con un menor mientras ya eras mayor de edad, bebes $ tragos",1,0
,,Bebe $ tragos si te has puesto leggings.,1,0
,,"%s, da los tragos que quieras a %s",1,2
,,"%s, bebe el número de tus conquistas en tragos",1,1
,,"%s, reta a %s a hacer alguna cosa, si acepta el reto, podrá repártir $ tragos",1,2
,,Quien haya repetido algún curso beben $ tragos,1,0
,,Los empollones a los que hayan adelantado un año escolar beben $ tragos,1,0
,,Los aburridos que trabajan o estudian en finanzas o contabilidad beben $ tragos,1,0
,,"Los Nerds con acné, pelo alisado y que trabajan o estudian informática beben $ tragos ",1,0
,,Los bobos que trabajen o estudien comercio o ventas beben $ tragos,1,0
,,Aquellos que se están quedando calvos beben $ tragos,1,0
,,Bebe $ tragos si tienes la rutina de café - cigarrillo - caca por la mañana.,1,0
,,Bebe $ tragos si eres un Casanova,1,0
,,Bebe $ tragos si has tenido varios compañeros sexuales al mismo tiempo,1,0
,,Bebe $ tragos si tu pareja te ha sido infiel ,1,0
,,"%s envía un mensaje caliente a una persona elegida por %s, sino bebe $ tragos ",1,2
,,"%s envía ""te quiero"" por mensaje (sin enviar nada más) a una persona elegida por %s, sino bebe $ tragos ",1,2
,,%s debes mandar 10 solicitudes de amistad en Facebook sino bebes $ tragos ,1,1
,,"%s, envía una solicitud de amistad a una persona, por Facebook, elegida por %s sino bebes $ tragos ",1,2
,,"%s, publica una foto en Facebook tomada por %s sino bebes $ tragos",1,2
,,"Tiempo muerto : si la hora indica un número par, todos deben beber $ tragos, sino %s reparte $ tragos. ",1,1
,,Bebe $ tragos si tus zapatos tienen cordones.,1,0
,,La chica con los pechos más grandes repárte $ tragos,1,0
,,El chico con menos barba bebe $ tragos ,1,0
,,La persona que tenga la nariz más grande bebe $ tragos,1,0
,,Reparte $ tragos si usas zapatos más grandes que la talla 46,1,0
,,Reparte $ tragos si usas zapatos de talla más pequeña que la 38 ,1,0
,,Bebe $ tragos si usas zapatos entre la talla 40 y 44 ,1,0
,,Reparte $ tragos si llevas puestos calcetines blancos,1,0
,,Reparte $ tragos si no has visto ninguna película de Star Wars ,1,0
,,Reparte $ tragos si no has visto ninguna película del Señor de los anillos.,1,0
,,Repárte $ tragos si no has visto ninguna película de Harry Potter,1,0
,,"Cuando la hora muestra un múltiple de 10 (20h, 20h10, 20h20, etc...) el primer jugador en gritar ""mierda me he olvidado al perro en el parque"" reparte 10 tragos.",1,0
,,"De ahora en adelante hasta el fin de la partida, ¡prohibido fumar! Trago para los anarquistas.",1,0
,,Bebe $ tragos si alguna vez has gastado más de 1000 dólares en un solo día.,1,0
,,Bebe $ tragos si has tenido el mejor polvo de tu vida con tu actual pareja,1,0
,,Bebe $ tragos si el mejor polvo de tu vida fué con tu expareja.,1,0
,,¡Muerte a los Nerds! Bebe $ tragos si has jugado un video juego mas de 4h seguidas,1,0
,,Los idiotas que hayan robado dinero a un familiar beben $ tragos ,1,0
,,Bebe $ tragos si ultimamente has tenido sueños que nunca podrás contar. ,1,0
,,"Bebe $ tragos si, estando borracho, te pasaste tu parada de autobús porque estabas durmiendo.",1,0
,,El jugador que hoy haya empezado a beber más pronto hoy reparte $ tragos,1,0
,,El último en haber servido una bebida bebe $ tragos,1,0
,,Bebe $ tragos si tu móvil es un Windows Phone,1,0
,,¡Quien haya jugado más de 10 veces a Picolo pueden celebrarlo! $ tragos amigos.,1,0
,,Bebe $ tragos si has tenido un malentendido con tu pareja esta semana,1,0
,,¡Bebe $ tragos si te comes las uñas!,1,0
,,¡Los jugadores de Tenis beben $ tragos!,1,0
,,¡Los futbolistas beben $ tragos!,1,0
,,¡Los jugadores de básket beben $ tragos!,1,0
,,¡Los jugadores de Volleyball beben $ tragos!,1,0
,,"Los estúpidos que hayan conducido borrachos beben $ tragos. Los demás, a esconderles las llaves...",1,0
,,Reparte $ tragos si estás en una relación desde hace más de tres años,1,0
,,Reparte un trago a quienes lleven en una relación desde hace menos de tres años.,1,0
,,Bebe $ tragos si prefieres tener un gato a un perro,1,0
,,Reparte $ tragos si has viajado a Asia,1,0
,,Reparte $ tragos si has tenido un animal diferente a un perro o gato,1,0
,,Los casanovas y que le hayan robado el corazón a más de tres personas reparten $ tragos ,1,0
,,¡Los menores que 21 años beben $ tragos!,1,0
,,¡Los mayores que 25 años beben $ tragos!,1,0
,,¡Los que sepan tocar la guitarra beben $ tragos!,1,0
,,Las personas de buen corazón que hayan donado dinero a una obra caritativa reparten $ tragos ,1,0
,,Bebe $ tragos si usabas aparatos dentales.,1,0
,,Bebe $ tragos si eres fan de gorras,1,0
,,Bebe $ tragos si llevas ropa de más de 200 dólares.,1,0
,,Reparte $ tragos si has vivido en el extranjero,1,0
,,Reparte $ tragos si tu coche tiene un regulador de velocidad.,1,0
,,Bebe $ tragos si has comprado un móvil de más de 300 dólares. ,1,0
,,Las personas que están a favor de la pena de muerte beben $ tragos.,1,0
,,Los locos del gimnasio beben $ tragos. ,1,0
,,Bebe $ tragos si alguna vez has orinado sin utilizar las manos.,1,0
,,La primera persona en encontrar un objeto triangular reparte $ tragos!,1,0
,,¡Los aracnofóbicos beben $ tragos!,1,0
,,Si alguna vez has confundido el nombre de tu pareja por el de tu ex reparte $ tragos.,1,0
,,Las personas que hayan sido atacadas por algún animal beben $ tragos.  ,1,0
,,Bebe $ tragos si alguna vez le has pedido a alguien que se ponga tu ropa interior. ,1,0
,,Reparte $ tragos si alguna vez te has negado a una persona que esté muy buena.,1,0
,,Los fans de Avengers o de otras mierd*s del estilo beben $ tragos.,1,0
,,¡El último jugador en haber celebrado su cumpleaños puede repartir $ tragos!,1,0
,,Bebe $ tragos si has chantajeado a tu pareja,1,0
,,Bebe $ tragos si mañana piensas tomarte una aspirina.  ,1,0
,,Bebe $ tragos si hace más que una semana que no has salido de fiesta.,1,0
,,Bebe $ tragos si has previsto para mañana el agua/zumo de limón/ citrato de bethania u otro remedio para la resaca.,1,0
,,Reparte $ tragos si tienes que trabajar mañana. ,1,0
,,"¡%s elige la próxima canción, es una orden!",1,1
,,"%s elige la próxima canción, a quien le guste le toca beber $ tragos.  ",1,1
,,"%s elige la próxima canción, a quien no le guste le toca beber $ tragos.  ",1,1
,,Bebe $ tragos si tienes un partido político favorito.  ,1,0
,,Bebe $ tragos si tuviste suerte con alguien después de haber bailado una balada lenta.,1,0
,,Reparte $ tragos si algún periódico ha publicado un artículo donde salgas.,1,0
,,Los pianistas que sepan tocar utilizando sus 10 dedos reparten $ tragos. ,1,0
,,Bebe $ tragos si alguna vez has montado a caballo. ,1,0
,,Bebe $ tragos si estás bebiendo un alcohol que no pagaste. ,1,0
,,Reparte $ tragos si estás bebiendo un alcohol que pagaste. ,1,0
,,"%s elige con quien bailar lentamente durante 30 segundos, con las manos en el culo. Si la otra persona no te deja bebes $ tragos.  ",1,1
,,Los que hayan tenido suerte ligando en la discoteca reparten $ tragos. ,1,0
,,Bebe $ tragos si no estás en contra de pagar por sexo.,1,0
,,Bebe $ tragos si nunca has donado sangre (¡Maldito bastardo!).,1,0
,,Bebe $ tragos si nunca has visto ningún capítulo de South Park. ,1,0
,,Bebe si tienes más de 2 títulos superiores. ,1,0
,,Las mujeres con pintalabios rojo beben $ tragos. ,1,0
,,Bebe $ tragos si tu nombre Facebook no es el verdadero. ,1,0
,,"%s, di el nombre de 3 ex's de %s o bebe $ tragos. ",1,2
,,Las mujeres beben tantos tragos como hombres guapos estén jugando.,1,0
,,Los hombres beben tantos tragos como mujeres guapas estén jugando.,1,0
,,Cada persona bebe tantos tragos como personas follables haya en el juego.,1,0
,,%s da el número de habitantes de Tayikistán (con una precisión de 1 000 000) o bebe $ tragos.  ,1,1
,,Reparte $ tragos si alguna vez has tenido un accidente de tráfico.,1,0
,,Reparte $ tragos si te han operado. ,1,0
,,Los jugadores que vivan solos beben $ tragos. ,1,0
,,Las tres personas más jóvenes eligen un jugador que deberá beber $ tragos.,1,4
,,Las mujeres eligen un jugador que deberá beber $ tragos. ,1,0
,,Los amantes del vino beben $ tragos. ,1,0
,,"Bebe $ tragos si miras a menudo ''Los Kardashians"". ",1,0
,,"Si estas tomando whisky estás de suerte, bebes $ tragos. ",1,0
,,Bebe $ tragos si tus calcetines son blancos. ,1,0
,,Bebe $ tragos si has estado en el paro. ,1,0
,,Los que no son vegetarianos beben $ tragos.  ,1,0
,,Bebe $ tragos si aún no has descargado Picolo.  ,1,0
,,Los que hayan tenido barba en forma de collar beben $ tragos jaja. ,1,0
,,"La encantadora persona, propietaria del teléfono con el que están jugando, reparte $ tragos.  ",1,0
,,Bebe $ tragos si has coqueteado con la pareja de un(a) amigo(a). ,1,0
,,Bebe $ tragos si has ido a un bar de strip-tease. ,1,0
,,Bebe $ tragos si has intentado escaparte de un control policial.,1,0
,,Bebe $ tragos si has besado a alguien de tu mismo sexo. ,1,0
,,Bebe $ tragos si has besado con lengua a alguien del mismo sexo. ,1,0
,,Bebe $ tragos si has falsificado alguna firma. ,1,0
,,Bebe $ tragos si puedes chuparte el dedo gordo de tu pie. ,1,0
,,Bebe $ tragos si slguna vez te has inventado alguna excusa para no ir al trabajo.,1,0
,,Bebe $ tragos si has tenido sexo en las últimas  48h. ,1,0
,,Bebe $ tragos si crees que alguien en esta fiesta es muy soso o poco gracioso. ,1,0
,,Bebe $ tragos si piensas que hay alguien en esta fiesta que es súper imbécil.,1,0
,,Bebe $ tragos si no te gusta tu suegra. ,1,0
,,Bebe $ tragos si tienes mal beber.,1,0
,,Reparte $ tragos si has tenido sexo más de dos veces en los últimos 7 días.,1,0
,,Bebe $ tragos si entre tus amigos tienes un o una ex.  ,1,0
,,"%s, bebe 3 vasos seguidos o puntúa Picolo con 5 estrellas en el store ;)",1,1
,,Bebe $ tragos si piensas que TODOS los otros jugadores son geniales.  ,1,0
,,Reparte $ tragos si te comes las uñas.  ,1,0
,,Bebe $ tragos si has hecho el amor en la cama de tus padres. ,1,0
,,Bebe $ tragos si crees que los genitales de tu pareja tiene una forma extraña. ,1,0
,,Reparte $ tragos si han roto contigo más de 4 veces. ,1,0
,,"Bebe $ tragos si alguna vez te has puesto ropa sucia todo el día, sabiendo que no estaba limpia.",1,0
,,Bebe $ tragos si te has acostado con varios miembros de una misma familia. ,1,0
,,Bebe $ tragos si tu pareja tiene más apetito sexual que tú.,1,0
,,Bebe $ tragos si miraste tus genitales en el espejo esta semana.  ,1,0
,,Bebe $ tragos si te has mast*rbad* sin que tu pareja lo sepa.,1,0
,,Bebe $ tragos si te has arrepentido de haberte acostado con alguien.  ,1,0
,,"Bebe $ tragos si le has dicho a alguien, a la cara, que es feo. ",1,0
,,Reparte $ tragos si tu cuenta bancaria esta normalmente casi vacía.  ,1,0
,,Reparte $ tragos si te has soltado algún pedo durante un polvete.,1,0
,,Reparte $ tragos si alguna vez te has tirado un pedo mientras besabas a alguien.,1,0
,,Bebe $ tragos si te has mast*rbad* en los últimos 3 días.  ,1,0
,,Reparte $ tragos si ya te has mast*rbad* en tu trabajo. ,1,0
,,Reparte $ tragos si has tenido sexo mientras tus amigos dormían en el mismo cuarto. ,1,0
,,Bebe $ tragos si te has tirado algún pedo con sorpresa.,1,0
,,Bebe $ tragos si piensas que algún jugador tiene un nombre de mi*rd*.,1,0
,,"%s, reparte $ tragos a la persona que consideres la más inteligente.  ",1,1
,,"%s, reparte $ tragos a la persona que consideres la más guapa.  ",1,1
,,"%s, reparte $ tragos a la persona que consideres la más sexy.  ",1,1
,,"%s, si tu primera vez fue pasados los 16 años, bebe $ tragos.",1,1
,,"Los que no hayan puesto un ""like"" a la página FB de Picolo beben $ tragos, excepto si le dan a ''me gusta'' ahora mismo... ;)",1,0
,,Bebe $ tragos si tienes pies griegos (el segundo dedo del pie es más largo que el dedo gordo).  ,1,0
,,Bebe $ tragos si has visto más de 3 capítulos de un reality show.,1,0
,,Bebe $ tragos si alguna vez le has contado a un niño el secreto de Santa Claus y/o el Ratoncito Pérez,1,0
,,"%s y %s duelo a un piedra, papel o tijera! Quien pierda bebá $ tragos ",1,2
,,"¿Quién de ustedes es un cobarde? Entre los jugadores deberéis señalar al jugador que quiera beber menos, por flojo toma $ tragos ",1,0
solidman,,Decidid entre todos quién es el jugador más fuerte y que beba $ tragos.,1,0
,solidman,¡Chuck Norris no puede tolerar esto! El jugador más fuerte bebe $ tragos más. ,1,0
,solidman,"Hulk quiere vengarse, el jugador más fuerte reparte $ tragos.  ",1,0
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
,massage,%s puedes dejar de masajear y %s bebes $ tragos,2,2
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
,animal-noise,%s puedes dejar de hacer ruidos de animal y bebes $ tragos por el insulto que has tenido que soportar. ,2,2
seat-knees,,%s siéntate en las rodillas de %s,2,2
,seat-knees,%s puedes dejar de sentarte en las rodillas de %s,2,2
switch-glass,,%s y %s intercambian sus vasos,2,2
,switch-glass,%s y %s pueden recuperar sus bebidas,2,2
pronoun,,"%s no tienes derecho de usar pronombres personales hasta nuevo aviso (yo, tú, él ...) castigo de $ tragos ",2,1
,pronoun,¡%s puedes hablar de nuevo normalmente!,2,1
timewatch,,"¡%s haz de reloj! Debes decir la hora cada minuto, $ tragos par cada falta",2,1
,timewatch,%s puedes dejar de ser reloj tick - tack.,2,1
one-eyed,,¡%s estas tuerto/a! Cierra un ojo hasta nuevo aviso,2,1
,one-eyed,%s puedes volver a ver normalmente.,2,1
wait-2secs,,¡%s estás obligado/a esperar 2 segundos entre cada palabra que pronuncies! $ tragos por cada falta.,2,1
,wait-2secs,¡%s puedes hablar de nuevo normalmente!,2,1
talkative,,¡%s seras un loro! No puedes quedarte más de 3 segundos sin hablar hasta nuevo aviso,2,1
,talkative,%s puedes de dejar de hablar sin parar y hablar normalmente. ,2,1
sing123,,"%s debes ahora cantar todo lo que se dice con la tonadita de ""Un elefante se balanceaba sobre la tela de una araña"" hasta nuevo aviso.",2,1
,sing123,¡%s puedes hablar de nuevo normalmente!,2,1
mouthfuls-mirror,,"Hasta nuevo aviso, en cuanto %s habla, %s debe beber un trago y viceversa.",2,2
,mouthfuls-mirror,¡%s y %s pueden de nuevo hablar sin que el otro/a tenga que beber!,2,2
sub-shit,,"¡%s eres un mierda! Nadie se le puede dirigir por su nombre, en vez de eso llámenle por todos los insultos posibles, no se puede protestar.",2,1
,sub-shit,Todo el mundo bebe $ tragos excepto %s que ha dejado de ser una mierda,2,1
swap-tshirt,,"%s y %s, intercambien sus camisetas hasta nuevo aviso, sino tendrán beber 2 tragos cada vez que alguien beba. ",2,2
,swap-tshirt,%s y %s pueden recuperar sus camisetas.,2,2
vigilante,,¡%s es el vengador! Cada vez que alguien te manda beber puedes elegir dárselos a alguien más.,2,1
,vigilante,¡%s deja de vengarte! Ya no podrás infligir dolor. ,2,1
tourette-man,,"¡%s tienes el síndrome de Tourette! Cuando grites"" taco"", la última persona en imitarte bebe $ tragos.",2,1
,tourette-man,¡%s ha curado su síndrome de Tourette!,2,1
upset-man,,"¡%s estás enfadado/a! Cada vez que sonríes o te rías,bebes $ tragos ",2,1
,upset-man,"¡%s deja de estar enfadado/a, el mal humor es lo peor que existe!",2,1
bipolar,,¡%s eres bipolar! Debes decir exactamente lo contrario de lo que piensas hasta nuevo aviso!,2,1
,bipolar,¡%s deja de ser bipolar!,2,1
speak-future,,¡Volver al futuro para %s! Debes hablar en tiempo futuro. Castigo de $ tragos por cada falta!,2,1
,speak-future,¡%s puedes regresar al presente!,2,1
african-accent,,¡%s desde ahora debes de hablar con acento africano hasta nuevo aviso!,2,1
,african-accent,¡%s puedes recuperar tu acento normal! ,2,1
english-accent,,¡%s debes hablar con un acento burgués hasta nuevo aviso! ,2,1
,english-accent,¡%s puedes recuperar tu acento normal!,2,1
thats-obvious,,"¡%s a partir de ahora debe decir ""Pues vale"" cada vez que una persona termina de hablar, bajo castigo de un trago por cada falta!",2,1
,thats-obvious,"Fin de la regla ""pues vale"" para %s ",2,1
imitate-gesture,,"¡%s, debes imitar los movimientos de %s hasta que se te diga lo contrario!",2,2
,imitate-gesture,¡%s deja de imitar a %s!,2,2
ally,,%s y %s crearán una alianza! Pueden repartir entre ellos todos los tragos destinados al uno o al otro! ,2,2
,ally,¡%s y %s rompen su alianza!,2,2
answer-no,,"¡%s debes responder ""no"" cuando te pregunten algo y tienes que dar explicaciones de por qué no!",2,1
,answer-no,"¡%s puedes dejar de responder ""no"" a todas las preguntas!",2,1
on-your-knees,,¡%s arrodíllate ... No té preocupes ta van a avisar cuando te puedes volver a levantar!,2,1
,on-your-knees,¡%s deja de arrodillarte! No quieren casarse contigo ,2,1
on-one-leg,,"¡%s debes quedarte de pie a la pata coja, no te preocupes te van a avisar cuando puedas ponerte normal otra vez!",2,1
,on-one-leg,¡%s puedes volver a una posición cómoda!,2,1
switch-up-n-down,,¡%s debes alternar entre ponerte de pie y sentarte entre cada nuevo turno! ¡Síno bebes $ tragos por cada falta!,2,1
,switch-up-n-down,¡%s puedes de nuevo mantenerte en una sola posición!,2,1
back-to-everyone,,"¡%s dale la espalda a todo el mundo,ya te avisarán cuando puedas volverte a sentar correctamente!",2,1
,back-to-everyone,%s puedes volver a ser una persona social y dejar de darle la espalda al mundo,2,1
dance-now,,"¡%s baila sin moverte de tu sitio y no pares, si paras bebes un trago como castigo a cada nuevo turno!",2,1
,dance-now,¡%s puedes dejar de bailar!,2,1
dont-stop-walking,,"¡%s debes caminar sin parar, por cada vez que pares bebes $ tragos! ",2,1
,dont-stop-walking,¡%s puedes dejar de caminar como un loco/a!,2,1
without-fingers,,¡%s te quedaste manco! Ya no puedes utilizar tus dedos!,2,1
,without-fingers,¡%s puedes de nuevo utilizar tus dedos!,2,1
keep-hands-on-your-head,,¡%s mantén las dos manos sobre tu cabeza salvo para beber!,2,1
,keep-hands-on-your-head,¡%s Puedes bajar las manos!,2,1
sprich-deutsch,,¡%s eres Alemán! Habla con acento Alemán! ,2,1
,sprich-deutsch,¡%s puedes hablar normalmente!,2,1
shy-man,,¡%s eres muy tímido/a! No puedes responder a ninguna pregunta bajo castigo de $ tragos! ,2,1
,shy-man,¡%s puedes de nuevo responder a cualquier pregunta! ,2,1
paparazzi,,¡%s eres un Paparazzi! Cada vez que saques una foto de alguien sin que se de cuenta él/ella bebe $ tragos! ,2,1
,paparazzi,¡%s puedes dejar de ser un Paparazzi!,2,1
mouth-full,,"¡%s de ahora en adelante tienes que hablar con la boca llena, castigo de $ tragos si cometes una falta!",2,1
,mouth-full,¡%s puedes hablar de nuevo normalmente! ,2,1
impolite,,¡%s eres el maleducado/da de la Fiesta! Coloca ambos codos sobre la mesa hasta un nuevo aviso.,2,1
,impolite,¡%s has comprendido lo que son los buenos modales! Quita los codos de la mesa.,2,1
hug-way-of-life,,"¡%s eres el cariñoso/sa de esta noche! Cada vez que acaricias la nuca de alguien, él o ella bebe $ tragos",2,1
,hug-way-of-life,"¡%s deja de ser tan cariñoso, no eres Winnie Pooh!",2,1
dancing-queen,,"%s eres la reina del baile: la reina baila cuando quiere, la última persona en imitarla bebe dos tragos ",2,1
,dancing-queen,¡%s puedes dejar de ser la reina del baile!,2,1
team-captain-hand,,"¡%s eres el capitán del equipo! Puedes poner tu mano sobre la mesa cuando quieras, el último jugador en hacer lo mismo bebe $ tragos ",2,1
,team-captain-hand,¡%s ya no eres el capitán!,2,1
cheers-man,,"%s eres el alma de la fiesta, cada vez que bebes tienes que brindar con alguien que te seguirá sin importar el número de tus tragos que bebas. ",2,2
,cheers-man,%s puedes dejar de ser el alma de la fiesta. ,2,2
western-referee,,%s eres el árbitro de una película de vaqueros! Designa cuando quieras a dos jugadores: los vaqueros. El primero en recibir un disparo bebe $ tragos.,2,3
,western-referee,¡%s puedes dejar de ser el árbitro de la película de vaqueros más mala del mundo!,2,3
batman,,¡%s eres Batman! Habla como él o bebe $ tragos cada vez que hables.   ,2,1
,batman,¡%s ya no eres Batman! ,2,1
act-like-someone,,"¡%s, tienes que imitar a %s con sus gestos y voz hasta nuevo aviso!",2,2
,act-like-someone,"¡%s, deja de imitar a %s! ",2,2
david-guetta-man,,¡%s eres el David Guetta de los pobres! Elige las canciones hasta nuevo orden. ,2,1
,david-guetta-man,%s ya no eres el DJ. ,2,1
not-sociable,,¡%s eres asocial! Háblale sólo a %s es tu único amigo.,2,2
,not-sociable,¡%s puedes volver a hablar con todo el mundo!,2,2
snake-man,,"¡%s tienes una mirada hipnótica! Cada vez que mires a alguien a los ojos, la persona debe beber.",2,1
,snake-man,%s ya no tienes mirada hipnótica.,2,1
compliment-man,,"%s, cada vez que hables, tienes que decirle un cumplido a %s, $ tragos por vez que no lo hagas. ",2,2
,compliment-man,"%s, ya no tienes la obligación de decirle cumplidos a %s. ",2,2
magician,,"¡%s, eres el mago! Intercambia los vasos de los jugadores cuando y como quieras.",2,1
,magician,"%s, ya no eres un mago. ",2,1
drink-verb-forbidden,,"¡Prohibido utilizar el verbo ""beber"" bajo castigo de un trago por cada falta cometida!",3,0
,drink-verb-forbidden,"Podemos utilizar de nuevo el verbo ""beber""",3,0
vouvoyer,,"¡Ahora nos tenemos que tratarnos de ""usted"", bajo castigo de un trago por cada falta cometida!",3,0
,vouvoyer,Podemos dejar de tratarnos de ''usted ''.,3,0
insult,,Ahora hay que insultar la persona a quién le tengas que dirigir la palabra. ,3,0
,insult,¡Dejen de insultarse Caray!,3,0
bad-word,,"De ahora en adelante,en cada frase que utilices debes introducir una mala palabra.",3,0
,bad-word,"¡Pu*ta de verdad, que hay que dejar de decir malas palabras! ",3,0
no-right-hand,,Prohibido de beber con la mano derecha ,3,0
,no-right-hand,Pueden todos utilizar de nuevo su mano derecha para beber .,3,0
right-firstname,,"Cada uno toma el nombre de la persona a su derecha, el que se equivoque bebe",3,0
,right-firstname,¡Todos volvemos a tener el nombre que nos dió nuestra madre!,3,0
ponctuation,,"Ahora, tienen que utilizar la expresión ''punto final'' (ejemplo : ""bebe un trago, punto final"")",3,0
,ponctuation,"¡Dejen de utlizar la expresión ''punto final""! ",3,0
love-you,,"Ahora, hay que acabar cada frase con un ""te quiero"" cada vez que nos dirijamos a otro jugador. ",3,0
,love-you,"Ya no es necesario terminar tus frases con ""te quiero"" ",3,0
all-waitress,,¡Las mujeres hacen de camareras! ¡A servir copas! ,3,0
,all-waitress,"¡Mujeres muy buen trabajo, ya es suficiente! ",3,0
no-yes,,"¡Ni ""sí"", ni ""no""! Quien que pronuncié una de las dos palabras bebe $ tragos hasta nuevo aviso!",3,0
,no-yes,"El juego de Ni ""sí"", Ni ""no"" ha acabado ",3,0
point-finger,,¡Prohibido! apuntar con el dedo a cualquier jugador.,3,0
,point-finger,Podemos apuntar con el dedo a los jugadores ,3,0
thumb-king,,%s eres el rey de los pulgares. Puede poner tú pulgar sobre la mesa a cualquier momento. El último jugador que te imite bebe,3,1
,thumb-king,¡%s Abdicación! Ya no eres el Rey de los Pulgares,3,1
alcool-waste,,Todo desperdicio de alcohol será penalizado por $ tragos (el pipí es un desperdicio),3,0
,alcool-waste,"Ya no hay penalización por el desperdicio de alcohol, puedes derramar bebidas y vaciar la vejiga.",3,0
master-name,,"Todo el mundo debe dirigirse hacia %s con ""Mi Dios/sa""",3,1
,master-name,%s puedes dejar de ser Dios,3,1
rule-before-drink,,%s inventa una nueva regla ,3,1
,rule-before-drink,¡La regla de %s ya no existe!,3,1
no-firstname,,Prohibido dirigirse a cualquier persona presente por su nombre.,3,0
,no-firstname,¡Podemos de nuevo dirigirnos a las personas por su nombre!,3,0
no-question,,"Prohibido hacer preguntas, por cada falta existe un castigo de $ tragos",3,0
,no-question,¡Podemos volver a formular preguntas! ,3,0
ignore,,"Todo el mundo debe ignorar a %s, prohibido mirarlo/la o hablar con él/ella.",3,1
,ignore,Podemos dejar de ignorar a %s!,3,1
no-choose-word,,%s elige una palabra que no se podrá pronunciar.,3,1
,no-choose-word,¡La palabra prohibida por %s es de nuevo permitida!,3,1
odd-doubled,,¡Los tragos impar serán duplicados!,3,0
,odd-doubled,Los tragos impar ya no son duplicados. ,3,0
insult-right,,¡Debes insultar tu vecino/a de la derecha cada vez que se beba un trago de alcohol! ,3,0
,insult-right,Ya no más insultos para tu vecino de la derecha,3,0
replace-a-i,,"Hay que sustituir la letra ""a"" por la letra ""i""  cuando se habla (ej : ""quiero a mi papá"" se convierte en ""quiero a mi pipí""""",3,0
,replace-a-i,"El sonido ""a"" ya no será sustituido por el sonido ""i""",3,0
neighbors-eyes,,Los vecinos no pueden mirarse directamente a los ojos.,3,0
,neighbors-eyes,Los vecinos pueden volver a mirarse en los ojos,3,0
phrase-high-five,,"Cuando hables con alguien debes terminar con ""choca esos cinco"" y darse una gran choque de manos!",3,0
,phrase-high-five,"Los ""choca esos cinco"" ya no son obligatorios",3,0
grab-right,,¡Debes pegarte a tu vecino/a de la derecha a cada trago!,3,0
,grab-right,¡Ya no es necesario que te pegues a tu vecino/a de la derecha a cada trago!,3,0
straw,,¡Nueva regla! Todos deben imaginar tener una pajita en su vaso que deberán quitar cada vez que tengan que beber y volver a poner la pajita en el vaso.,3,0
,straw,Pueden dejar de pretender tener pajitas en los vasos! Que parece una estupidez. ,3,0
fuck-you,,"¡Nueva regla! Cada vez que alguien dice una frase tiene que terminarla con ""jo*der, de verdad que %s es un mierda""",3,1
,fuck-you,"¡%s no te preocupes, todos te quieren! Puedes repartir $ tragos. ",3,1
freezer,,"%s tienes el hielo. Cada vez que dejes de moverte (discretamente), el último jugador en hacer lo mismo bebe $ tragos",3,1
,Freezer,%s ya no tiene el hielo,3,1
sniper,,"¡Juego del Francotirador! Discretamente, %s guiña un ojo a un jugador, que a su vez bebe 2 tragos y se convertirá en Francotirador, así sucesivamente!",3,1
,sniper,¡El juego del Francotirador ha terminado! El último Francotirador bebe $ tragos,3,0
buffalo,,"¡Regla del Búfalo! NADIE PUEDE SOSTENER SU VASO con su mano buena (derecha/izquierda), castigo será beber TODO lo que quede en el vaso de un solo trago",3,0
,buffalo,La Regla del Búfalo ha terminado,3,0
yoda,,¡Nueva regla! Debes como el Maestro Yoda hablar o $ tragos vas a beber,3,0
,yoda,¡Puedes dejar de hablar como Maestro Yoda!,3,0
sign,,"¡Nueva regla! Cada uno elige una señal, a partir de ahora cada jugador deberá hacer la seña de la persona a quien quiera dirigirse!",3,0
,sign,¡Podéis dejar de hacer señas!,3,0
library-time,,"¡Todo el mundo a la biblioteca! Todos deben Susurrar, hasta nuevo aviso sino beben $ tragos!",3,0
,library-time,!Pueden dejar de susurrar!,3,0
no-slang,,"¡Nueva regla: No a la vulgaridad! El jugador que diga una mala palabra, bebe $ tragos!",3,0
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
spin-each-song,,"De ahora en adelante cada vez que se acaba una canción todos deben dar una vuelta de 360 grados, el último jugador en hacerlo bebe $ tragos ",3,0
,spin-each-song,Ya no hace falta dar una vuelta al final de cada canción.,3,0
scapegoat,,"Cada uno elige a su víctima, todos los tragos destinados hacia ti serán destinado hacia tu víctima, los tragos solo se transfieren una única vez",3,0
,scapegoat,¡Dejen de hacerse la víctima!,3,0
dont-touch-head,,Prohibido tocarse el pelo o la cara! $ tragos por cada falta.,3,0
,dont-touch-head,Todo el mundo puede tocarse de nuevo la cara. ,3,0
dont-touch-table,,"Prohibido tocar la mesa, castigo de $ tragos a quien la toque. ",3,0
,dont-touch-table,Se puede de nuevo tocar la mesa. ,3,0
no-receiving,,Nueva regla: prohibido recibir objetos de parte de otro jugador. Sentencia: $ tragos para la persona que recibe el objeto. ,3,0
,no-receiving,Se pueden de nuevo intercambiar objetos sin miedo a una sentencia. ,3,0
,,"¿Qué rima con ""ito""? ¡El jugador que repita o se quede sin ideas bebe $ tragos! %s empiezas tú",4,1
,,"Decir nombres conocidos de pizzas, el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas",4,1
,,"""Los adjetivos que describen a %s"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,2
,,"Palabras o expresiones sinónimos de ""pene"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"Las palabras o expresiones sinónimos de ""vagina"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"Las palabras o expresiones sinónimos de ""emborracharse"", el jugador que repita o se haya quedado sin ideas bebe $ tragos! %s empiezas.",4,1
,,"Las palabras o expresiones sinónimos de ""prostituta"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"Las palabras/expresiones sinónimos de ""hacer el amor"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Los adjetivos que describen a %s"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,2
,,"Las palabras o expresiones sinónimos de ""masturbarse"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Las ex parejas de %s"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,2
,,"""Las cosas que más le gustan a %s "", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,2
,," ""Las cosas que %s odia"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,2
,,"""Los criterios de selección que tiene %s para encontrar una pareja"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,2
,,"""Lo negativo de ser alguien famoso"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Películas aburridas"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Marcas de Whisky"", el jugador que repita o que se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Los enanitos de Blancanieves"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas. ",4,1
,,"""Los títulos de canciones de Shakira"", el jugador que repita o que se haya quedado sin ideas bebe $ tragos. %s empiezas. ",4,1
,,"""Los personajes de simpsons"", el jugador que repita o que se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Los números impares entre 324 y 332"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Los insultos que se dicen en la alta sociedad"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Todo lo que mata al amor"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Los protagonistas de South Park"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Las zonas erógenas de una mujer"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"Las frases que riman con ""ajo"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"Las frases que riman con ""mar"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"Insultos terminados en ""-on"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Los pokémons que conoces"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas",4,1
,,"""Los personajes de Dragon Ball Z"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas",4,1
,,"""Los personajes del Señor de los Anillos"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas",4,1
,,"""Los nombres de los dedos de la mano"", el jugador que repita o se haya quedado sin ideas bebe $ tragos! %s empiezas.",4,1
,,"""El nombre de los dedos de la mano"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Los personajes de Harry Potter"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Los nombres de las películas de Harry Potter"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Los personajes de los Looney Toons"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Los personajes de Super Mario"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Los personajes de la Guerra de las Galaxias"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Todo lo que es rojo y blanco"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas",4,1
,,"""Los animales de granja"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Las posiciones sexuales"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Los menús de McDonald's"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Los colores de Power Rangers"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Los dibujos animados de Disney"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
sexy-actress,,"""Las actrices de cine súper sexys"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,sexy-actress,Quien haya dicho Megan Fox reparten $ tragos ,4,0
,sexy-actress,Quien haya dicho Scarlett Johansson beben $ tragos ,4,0
,sexy-actress,Quien haya dicho Natahalie Portman o Jessica Alba reparten $ tragos ,4,0
,,"""Las razas de perros"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Los países de Africa "", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Perros famosos"",el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Las monedas extrangeras"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""El nombre de los dedos de la mano"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Las palabras que empiecen por Z"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Los criminales más conocidos"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Los personajes o actores más sexy's en escenas de traje de baño"", el jugador que repita o se haya quedad sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Lo que encontramos en el bolso de una mujer"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas.",4,1
,,"""Los nombres de ciudadades que comiencen con una letra elegida por %s"", el jugador que repita o que se haya quedado sin ideas bebe $ tragos. %s empiezas",4,2
,,"""Eslogans publicitarios"", el jugador que repita o que se haya quedado sin ideas bebe $ tragos. %s empiezas",4,1
,,"""Los objetos azules en la habitación"", el jugador que repita o que se haya quedado sin ideas bebe $ tragos. %s empiezas",4,1
,,"""Los nombres de salsas conocidas sin contar kétchup y la mayonesa"", el jugador que repita o que se haya quedado sin ideas bebe $ tragos. %s empiezas",4,1
,,"""Los medios sociales de la web"", el jugador que repita o se haya quedado sin ideas bebe $ tragos. %s empiezas",4,1
,,"""Los puntos en común entre %s y %s"",el jugador que repita o que se haya quedado sin ideas bebe $ tragos. %s empiezas",4,3
,,"""Las drogas"", el jugador que repita o que se haya quedado sin ideas bebe $ tragos. %s empiezas",4,1
,,"Nuevo tema y $ tragos en juego : ""los personajes del Rey Léon"", %s empiezas",4,1
,,"Nuevo tema y $ tragos en juego : ""los huesos del cuerpo humano"", %s empiezas ",4,1
,,"Nuevo tema y $ tragos en juego : ""los presentadores de la TV"" %s empiezas",4,1
,,"Nuevo tema y $ tragos en juego : ""las protagonistas de Mujeres desesperadas"", %s empiezas",4,1
,,"Nuevo tema y $ tragos en juego : ""Nombres de estaciones de radio "", %s empiezas.",4,1
,,"Nuevo tema y $ tragos en juego : ""los clubs o discotecas a menos de 20 km"", %s empiezas.",4,1
,,"Nuevo tema y $ tragos en juego : ""las/los mejores cantantes"", %s empiezas.",4,1
,,"Nuevo tema y $ tragos en juego: ""las/los cantantes más sexys"", %s empiezas.",4,1
,,"Nuevo tema y $ tragos en juego : ""las canciones de David Guetta"", %s empiece",4,1
,,"Nuevo tema y $ tragos en juego : ""cosas que %s tiene más que %s"", %s empiezas (ej.más carisma) ",4,3
,,"Nuevo tema y $ tragos en juego : ""los méritos de ser un hombre"", %s empiezas.",4,1
,,"Nuevo tema y $ tragos en juego : ""los méritos de ser una mujer"", %s empiezas. ",4,1
,,"Nuevo tema y $ tragos en juego : ""los animales que pueden describir a una persona"", %s empiezas ",4,1
,,"Nuevo tema y $ tragos en juego : ""los beneficios de ser un borracho"", %s empiezas.",4,1
,,"Nuevo tema y $ tragos en juego : ""los daños del alcohol"", %s empiezas.",4,1
,,"Nuevo tema y $ tragos en juego : ""lo que %s tiene de menos que %s"", %s empiezas (ej. menos carisma) ",4,3
,,"Nuevo tema y $ tragos en juego : ""nombres de cócteles"", %s empiezas.",4,1
,,"Nuevo tema y $ tragos en juego : ""los protagonistas de ""El libro de la Selva"", %s empiezas",4,1
,,"Nuevo tema y $ tragos en juego : ""los pretagonistas de Los Vengadores, de Marvel"", %s empiece",4,1
,,"Nuevo tema y $ tragos en juego : ""comida del KFC"", %s empiezas",4,1
,,"Nuevo tema y $ tragos en juego : ""las canciones de Mickael Jackson"", %s empiezas ",4,1
,,"Nuevo tema y $ tragos en juego : ""los signos astrológicos"", %s empiezas",4,1
,,"Nuevo tema y $ tragos en juego : ""las asignaturas actuales del bachillerato"", %s empiezas (ej. biología).",4,1
,,"Nuevo tema y $ tragos en juego : ""los clubes de fútbol más importantes"", %s empiezas!",4,1
,,"Nuevo tema y $ tragos en juego : ""los clubes de fútbol en Primera"", %s empiezas ",4,1
,,"Nuevo tema y $ tragos en juego : ""los protagonistas malvados de películas de comedias "", %s empiezas",4,1
,,"Juego de temas y $ tragos en juego : ""las canciones de Maná"", %s empiezas",4,1
,,"Juego de temas y $ tragos en juego : ""las canciones de Enrique Iglesias"", %s empiezas",4,1
,,"Juego de temas y $ tragos en juego : ""las canciones de Queen"", %s empiezas",4,1
,,"Juego de temas y $ tragos en juego : ""las canciones de Luis Miguel"", %s empiece ",4,1
,,"Nuevo tema y $ tragos en juego : ""los momentos más aburridos"", %s empiezas",4,1
,,"Juego de temas y $ tragos en juego : ""Series de televisión"", %s empiezas",4,1
,,"Juego de temas y $ tragos en juego : ""Programas de TV"" %s empiezas",4,1
,,"Todo lo que rime con ""ate"" y $ tragos en juego. %s empiezas",4,1
,,"Todo lo que rime con ""ote"" y $ tragos en juego. %s empiezas",4,1
,,"Todo lo que rime con ""eron"" y $ tragos en juego. %s empiezas",4,1
,,"Todo lo que rime con ""ana"" y $ tragos en juego. %s empiezas",4,1
,,"Todo lo que rime con ""uche"" y $ tragos en juego. %s empiezas",4,1
,,"Juego de temas y $ tragos en juego : ""los pitufos"", %s empiezas",4,1
,,"Juego de temas y $ tragos en juego : ""las expresiones más conocidas"", %s empiezas",4,1
,,"Juego de temas y $ tragos en juego : ""las partes mecánicas de un ordenador"", %s empiezas",4,1
,,"Juego de temas y $ tragos en juego : ""los personajes armados con una espada"", %s empiezas",4,1
,,"Nuevo tema y $ tragos en juego : ""los equipos de Basketball profesional "", %s empiezas",4,1
,,"Imitar sucesivamente un gesto inapropriado, quien repita el gesto o se haya quedado sin inspiración bebe $ tragos. %s empiezas",4,1
,,"Nuevo tema con $ tragos en juego : ""los momentos más importantes en la historia "", %s empiezas",4,1
,,"Nuevo tema con $ tragos en juego : ""Insectos"", %s comienzas",4,1
,,"Nuevo tema y $ tragos en juego : ""diferentes tipos de alcohol"" , %s empiezas",4,1
,,"Juego de temas y $ tragos en juego : ""Películas con alienígenas"", %s empiezas",4,1
,,"""Los deportes que %s ha practicado "", la persona que repita o no encuentra más ideas bebe $ tragos. %s empiezas",4,2
,,"Decid páginas y apps de citas por internet hasta que un jugador se repita o se quede sin ideas, éste deberá beber $ tragos, %s empiezas.",4,1
,,"""objetos con 100 años de antigüedad que todavía se utilizan"", el primer jugador que se repita o se quede sin ideas bebe $ tragos, %s empiezas.",4,1
,,"Decid nombres de ""Los dúos cómicos"", el jugador que se quede sin ideas o se repita bebe $ tragos. %s empiezas.",4,1
,,"Dedid nombres de ""Los impuestos que el gobierno nos mete por el c*l*"", el jugador que se quede sin ideas o se repita bebe $ tragos. %s empiezas.",4,1
,,"""Las películas con dos personajes principales"", el jugador que se quede sin ideas o se repita bebe $ tragos. %s empiezas.",4,1
,,"Nombres de ""Las calles de Monopoly"", el primer jugador que se repita o se quede sin ideas bebe $ tragos, %s empiezas.",4,1
,,%s va a hacernos el favor de terminar su vaso...,5,1
,,Los dos jugadores con los vasos más llenos deben acabárselos.,5,3
,,¡Hasta el fondo para los calvos y los pelirrojos!,5,0
,,¡Hasta el fondo para las personas que pesan más de 80kg! ,5,0
,,¡Hasta el fondo para %s! ,5,1
,,¡Hasta el fondo para %s y %s!,5,3
,,"¡Hasta el fondo para %s, %s y %s!",5,4
,,¡La primera persona en terminar su copa reparte un trago! ,5,0
,,"¡Recitad el alfabeto enunciando una letra por persona. Si %s termina su copa primero, un trago para todos! ",5,1
,,"¡%s, cuenta hasta 40 antes que %s termine su copa. Si fallas pues un trago para ti también! ",5,2
,,!Trago para la última persona que llegó a esta fiesta!,5,0
,,"¡%s recita el alfabeto al revés, trago si cometes un error! ",5,1
,,%s termina el vaso de uno de los jugadores,5,1
,,"Prefieres poder volar o teletransportarte? Voten todos juntos, la minoría bebe $ tragos",14,1
,,"Prefieres ver un documental de Justin Bieber o beber una cucharada de pintura? Voten todos juntos, la minoría bebe $ tragos",14,1
,,"¿Prefieres ir a la ópera durante 4h o beber un poco de agua salada? Voten todos juntos, la minoría bebe $ tragos.",14,1
,,"¿Prefieres cortarte una mano o un pie? Voten todos juntos, la minoría bebe $ tragos",14,1
,,"¿Prefieres comer tierra o hacer un maratón? Voten todos juntos, la minoría bebe $ tragos",14,1
,,"¿Prefieres comerte un gato o un perro? Voten todos juntos, la minoría bebe $ tragos",14,1
,,"¿Prefieres darle la muerte a 100 personas desconocidas o la muerte de un amigo? Voten todos juntos, la minoría bebe $ tragos.",14,1
,,"¿Prefieres ganar 1 millón de dólares o una espada láser de verdad? Voten todos juntos, la minoría bebe $ tragos.",14,1
,,"¿Prefieres hablar 9 lenguas o comer sin nunca engordar? Voten todos juntos, la minoría bebe $ tragos.",14,1
rugby-game,,"¿Prefieres ver un partido de rugby o ganar la lotería? Voten todos juntos, la minoría bebe $ tragos.",14,1
,rugby-game,"¡Quien haya respondido ""ganar la lotería"" beben $ tragos panda de interesados! ",14,0
,rugby-game,"¡Quien haya respondido ""ver un partido de rugby"" pueden repartir $ tragos! ",14,0
,rugby-game,"¡Quien haya respondido ""ver un partido de rugby"" beben $ tragos panda de estúpidos! ",14,0
,,"¿Prefieres beber ron o whisky? Voten todos juntos, la minoría bebe $ tragos",14,1
,,"¿Prefieres a Zac Efron o Justien Bieber? Voten todos juntos, la minoría bebe $ tragos",14,1
,,"¿Prefieres a los Asiáticos o los Latinos? Voten todos juntos, la minoría bebe $ tragos",14,1
,,"¿Prefieres las hamburguesas o los perritos calientes? Voten todos juntos, la minoría bebe $ tragos",14,1
,,"¿Prefieres el fútbol o el rugby? Voten todos juntos, la minoría bebe $ tragos",14,1
,,"¿Estás a favor o en contra del vómito a mitad de la fiesta? Voten todos juntos, la minoría bebe $ tragos",14,1
,,"¿Estás a favor o en contra de tener la tarjeta de crédito en un bar o discoteca? Voten todos juntos, la minoría bebe $ tragos",14,1
,,"¿Prefieres tener una alfombra mágica o un refrigerador que se llena solito de comida? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Estás, a favor o en contra del gel de ducha en el pelo? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Estás a favor o en contra de vivir eternamente pero con solo 10 dólares al día? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Estás a favor o en contra de los baños unisex? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Estás a favor o en contra de ver un lanzador de cuchillos fallar en su actuación en un circo en directo? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres vivir la vida de Harry Potter o de Bill Gates? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres ganar mil millones de dólares o poder cruzar las paredes? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres comer un plato de pasta o una ensalada superbuena y natural? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres ganar un auto nuevo o viajar por Europa? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres ver la emisión ""Novela de las 7"" o ""Las noticias""? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres no tener internet o no tener un móvil? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres no tener invitados en tu boda o en tu funeral? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres vivir en un mundo sin problemas o dirigirlo? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres encontrar el verdadero amor o 10 millones de dólares? Votad todos en el mismo tiempo, la mínoria bebe $ tragos",14,0
,,"¿Prefieres los piercings o los tatuajes? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres ser abogado o médico? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres el pollo o la carne? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres la música a Rock o electrónica? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres la Playstation o la Xbox? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres ganar a la lotería o vivir lo equivalente a dos vidas? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres ser famoso o el/la mejor amigo/a de una celebridad? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres conocer la fecha o las condiciones de tu muerte? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Estás a favor o en contra de jugar a la ruleta rusa una vez en tu vida por 100.000.000 dólares? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres tener más dinero o más tiempo? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres Pepsi o CocaCola? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres Macdonalds o Burger King? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres a Dumbldore o Gandalf? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres un día lluvioso o de nieve? Voten todos juntos, la minoría bebe $ tragos",14,0
,," ¿A favor o en contra de eliminar del planeta tierra a One Direction o Justin Bieber? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres Star Trek o Star Wars? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres ir al paraíso o vivir en la tierra para siempre? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres la música de antes o la música moderna? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres a Emma Watson o Nathalie Portman? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres estar peinado al estilo ochentero o estar vestido al estilo ochentero? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres tener pesadillas toda la noche o ver fantasmas? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres practicar surf en el mar o navegar en internet? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Estas a favor o en contra de borrar tú historial de navegación todas las semanas? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres trabajar en Google o en Facebook? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres Super Smash Bros o Mario Kart? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Estás a favor o en contra del traje de baño de una pieza? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Estás a favor o en contra de las colecciones de sellos? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Estás a favor o en contra de las parrillas eléctricas? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Estás a favor o en contra de los suéteres sin mangas? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Estás a favor o en contra de tener un tractor? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres poder cambiar de sexo cuando quieras o tener un Pokémon de Verdad? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres viajar al futuro o al pasado? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres tener un interruptor ""vuelta atrás"" o un interruptor ""pausa"" en la vida cotidiana? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres que las sirenas sean reales o los unicornios? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres perder la mitad de tu peso o doblarla? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres tener conocimientos ilimitados o dirigir el mundo entero? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres poder volar o leer los pensamientos? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres ser la persona más rica de la tierra o ser inmortal? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres conocer todas las lenguas del mundo o poder hablar con los animales? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres ser la persona más lista del mundo o la más sexy? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres ser un gran intérprete de todos los instrumentos musicales o hablar 15 lenguas perfectamente? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres poder ver tus sueños en la TV o poder dormirte fácilmente? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres vivir la vida de Hermione Granger o de Bella de Crepúsculo? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres quedarte atrapado 5h en un ascensor o en un teleférico? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Estas a favor o en contra de transformarte en otra persona de forma definitiva? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres no poder ver tu reflejo en en el espejo o no tener agua para ducharte? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres deshacerte de todos los malos conductores o nunca más esperar en las colas? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres quedarte atrapado en una isla desierta con las 4 personas que odias o estar en solo? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres no tener ningún amigo o no poder utilizar aparatos electrónicos? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres ver una película muda o escuchar una película sin imagen? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres ser vista como una persona muy extraña o ser una persona normal y no tener nada de especial? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres jugar mil millones de dólares a cara o cruz o ganar mil dólares? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres tener una jubilación anticipada con 1 millón de dólares o tener el trabajo de tus sueños por 2000 dólares al mes? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres tener una increíble casa en un lugar común o viceversa? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres vivir en un mundo sin matrimonio o sin divorcio? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres inventar una nueva legislación o eleminar una existente? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres nunca más tener momentos embarazosos o recuperar 100 dólares por cada momento de embarazoso? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres nunca más tener que dormir o poder mover los objetos con la mente? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres sacarte un ojo o gatear durante un año? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres beber de gasolina o fumar plástico? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Estás a favor o en contra que tus gases huelan el perfume Hugo Boss, pero tirarse 100 pedos por día? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres orinar zumo de naranja o tener una saliva con sabor a limón? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Durante un día , prefieres tener pelo en la barbilla o pelos púbicos sobre los pómulos? Voten todos juntos, la minoría bebe $ tragos ",14,0
,,"¿Prefieres hablar solamente japonés o ir disfrazado de pirata todos los días? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres ganar una gira mundial o nunca volver a necesitar hacer caca? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres tener un pie en lugar de una mano o un solo ojo en la frente? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres tatuarse ""Johnny"" en la frente, la nariz o en la mejilla? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres tener ambos brazos de corcho o adoptar un ciego? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Estás en favor o en contra de llamar a tu perro ""Daisy""? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres poder caminar sobre los arcoiris o hablar con las moscas? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres cambiar tu apellido de familia por Hitler o nunca más comer chocolate? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres comer un cucaracha viva o ser calvo? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres morir con tu cabeza atascada en un elevador o resbalándote a causa de una cáscara de plátano? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres tener un gato siamés o nunca poder acercarse una persona más de 5m? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres adoptar a un bebé pingüino o un bebé mono? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres ser un ninja o un pirata? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres estar sordo de una oreja o tener aceso a internet solamente 1h por semana? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres poder controlar tus sueños o poder grabarlos para verlos? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres deshacerte de todos los malos conductores del mundo o nunca más esperar en las colas? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Durante los próximos 5 años, prefieres estar en coma o tetraplégico? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres estar discapacitado y ser super listo o no tener un problema físico pero ser un verdadero imbécil? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿Prefieres ser atacado por un león o por 100 gatos completamente histéricos? Voten todos juntos, la minoría bebe $ tragos",14,0
,,"¿A quién prefieres entre %s y %s? Votad todos al mismo tiempo, la minoría bebe $ tragos.",14,2
,,"¿A favor o en contra de tatuarse ""Impuesto"" en la frente y nunca más pagarlos? Voten todos al mismo tiempo, la minoría bebe $ tragos.",14,0
,,"¿Qué prefieres, vivir en otro país o cambiar de ciudad cada 6 meses? Votad todos al mismo tiempo, la minoría bebe $ tragos.",14,0
,,"¿Qué prefieres un año en prisión o vivir solo (a) en la Tierra?  Votad todos al mismo tiempo, la minoría bebe $ tragos.",14,0
,,"¿A quién prefieres Zach Galifianakis o Steve Carell? Votad todos al mismo tiempo, la minoría bebe $ tragos.",14,0
,,"¿A quién prefieres Jim Carrey o Mariah Carey? Votad todos al mismo tiempo, la minoría bebe $ tragos.",14,0
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""abandonar"", ""salmón"", ""Superman"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""tumbar"", ""cura"", ""los Pitufos"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""estropear"", ""moco"", ""reina de Inglaterra"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""abordar"", ""mosca"", ""Barack Obama""  y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""ladrar"", ""concha"", ""Hillary Clinton""  y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""abusar"", ""antena"", ""Angela Merkel""  y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""acelerar"", ""suicidio"", ""%s"", ""Robin Hood"", y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,3
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""acompañar"", ""Lolita"", ""%s"", ""tanga"", y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,3
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""acoger"", ""prisión"", ""Asterix""  y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""acusar"", ""desvirgar"", ""Obelix"", y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""obstinado"", ""limusina"", ""%s"" y ""Idefix"", y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,3
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""activar"", ""%s"", ""Neo"" y ""Camembert"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""flatulento"", ""%s"", ""Iron Man"" y ""Camembert"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""admitir"", ""yoghurt"", ""%s"" y""Hulk"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""admirar"", ""%s"", ""Pink Floyd"" y ""pistacho"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""adoptar"", ""%s"", ""bacalao"" y ""Babar"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""adorar"", ""%s"", ""Eminem"" y ""bolas"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""enviar"", ""%s"", ""Totally Spies"" y ""costra"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""airear"", ""coliflor"", ""%s"" y ""Jedi"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""visualizar"", ""pantufla"", ""Luke Skywalker"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso. ",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""arrodillarse"", ""Luis Miguel"", ""Danonino"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso. ",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""agitar"", ""%s"" y ""jirafa"", termínala por #picoloapp... Si no termina tu vaso. ",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""grapadora"", ""sardina"", ""feto"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso. ",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""ayudar"", ""abuela"", ""costra"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso. ",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""afilar"", ""banana"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso. ",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""amar"", ""ganglio"", ""%s"" y ""Dora la exploradora"", termínala por #picoloapp... Si no termina tu vaso. ",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""alertar"", ""Marge Simpson"", ""corpiño"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso. ",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""amarrar"", ""luna"", ""ciprina"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso. ",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""divertir"", ""peste"", ""costura"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso. ",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""animar"", ""riñón"", ""lechería"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""llamar"", ""Zidane"", ""%s"" y ""empanada"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""aprender"", ""volcán"", ""vómito"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""arrancar"", ""baño"", ""gastroenteritis"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""regar"", ""ducha"", ""envía"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""aspirar"", ""higo"", ""arena"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""asesinar"", ""Papa Noel"", ""corrida"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""satisfacer"", ""cartas"", ""%s"" y ""pecado"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""tragar"", ""marea"", ""%s"" y ""morcilla"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""confesar"", ""pipí"", ""verruga"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""bañar"", ""fotocopia"", ""pedo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""pasear"", ""eructo"", ""calabaza"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""barrer"", ""strip-tease"", ""pera de ducha"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""excitado"", ""%s"", ""pavo"" y ""playa"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""prohibir"", ""%s"", ""Bob Esponja"" y ""toga"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""bautizar"", ""mayonesa"", ""%s"" y ""vaca"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""luchar"", ""guiso"", ""%s"" y ""padre"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""charlar"", ""calceta"", ""esperma"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""babear"", ""canción"", ""condón"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""tartamudear"", ""fiesta"", ""%s"" y ""juguete sexual"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""bendecir"", ""%s"", ""Zoo"" y ""viga"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""mecer"", ""%s"", ""Bee Gees"" y ""chorro"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""bromear"", ""%s"", ""malvavisco"" y ""tortuga"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""beber"", ""LSD"", ""arco iris"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""mal humor"", ""hoyo"", ""%s"" y ""salchicha"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""tragar"", ""dormir"", ""mohoso"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""hervir"", ""mano"", ""orgasmo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""PornHub"", ""Pulgarcito"", ""brillar"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""arreglar"", ""pedo"", ""Rafiki"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""cepillarme"", ""Tiger"", ""anal"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""pastar"", ""cola de espera"", ""tallo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""moler"", ""caja de chocolates"", ""Barney"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""quemar"", ""chocolate"", ""cotonete"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""esconder"", ""simio"", ""ano"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""acariciar"", ""cola"", ""ganado"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""romper"", ""hoja"", ""albóndiga"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""celebrar"", ""Jesús"", ""%s"" y ""pino"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""cantar"", ""porno"", ""Pikachu"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""cargar"", ""p*to"", ""Charizard"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""encantar"", ""policía"", ""%s"" y ""fistfucking"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""cazar"", ""dedo"", ""%s"" y ""zanahoria"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""castigar"", ""dentista"", ""%s"" y ""zanahoria"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""cabalgar"", ""caña"", ""%s"" y ""hijo de p*t*"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""llorar"", ""clamidia"", ""marica"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""c*gar"", ""cera"", ""dolor"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""atrapar"", ""toallita húmeda"", ""Iron Man"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""circuncisión"", ""pescado"", ""cuchara"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""lustrar"", ""pirámide"", ""nalgas"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""gastar"", ""placa de sheriff"", ""%s"" y ""tobogán"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""parpadear"", ""sándwich"", ""el gato Silvestre"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""clonar"", ""chimpancé"", ""César"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""clavar"", ""Ratoncito"", ""desarmador"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""golpear"", ""skateboard"", ""Jennifer Aniston"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""atrapar"", ""nabo"", ""tetón"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""recoger"", ""feto"", ""%s"" y ""jardín"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""pegar"", ""sándwich"", ""Vegeta"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""colorear"", ""almohada"", ""semilla"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""pedir"", ""pepinillo"", ""%s"" y ""Torre Eiffel"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""comentar"", ""fea"", ""%s"" y ""pelea"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""entender"", ""espárrago"", ""Don Juan"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""concebir"", ""tomate"", ""tubo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""concluir"", ""Flash Gordon"", ""%s"" y ""sierra de arco"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""confesar"", ""petanca"", ""excremento"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""congelar"", ""pito"", ""%s"" y ""cachorro"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""consumir"", ""kiwi"", ""%s"" y ""Linterna Verde"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""construir"", ""%s"", ""salchicha"" y""jacuzzi"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""consumir"", ""vampiro"", ""%s"" y ""salchichón"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""contemplar"", ""prepucio"", ""Lucky Luke"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""copiar"", ""carnes"", ""examen"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""cosquillas"", ""pepinillo"", ""plaza San Pedro"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""corregir"", ""revolcón"", ""Catwoman"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""acostarse"", ""palomitas"", ""de caballito"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""coser"", ""Capitán Garfio"", ""imbécil"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""chillar"", ""salchichón"", ""prensa"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""escupir"", ""agujero negro"", ""champiñón"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""quemar"", ""Roquefort"", ""pezón"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""fumar"", ""berenjena"", ""Lancelot"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""romper"", ""Quasimodo"", ""rodaja"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""copular"", ""fiesta"", ""Pokemon"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""crear"", ""Pitufina"", ""semen"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""morir"", ""hermana"", ""Lobezno"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""gritar"", ""sandía"", ""sal gruesa"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""criticar"", ""Justin Bieber"", ""tanga"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""morder"", ""Megan Fox"", ""melón"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""recoger"", ""pelo del culo"", ""pecho"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""coser"", ""tostada"", ""viejito"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""cocinar"", ""nutria"", ""espermatozoide"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""curar"", ""hongo"", ""labio"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""bailar"", ""gorila"", ""huevos"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""destapar"", ""rusa"", ""Emma Watson"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""decepcionar"", ""anal"", ""leche"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""descargar"", ""viga"", ""a voluntad"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""destrozar"", ""primo"", ""recto"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""rasgar"", ""vagina"", ""puente levadizo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""despegar"", ""parque"", ""ceja"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""bromear"", ""ladrillo"", ""nariz"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""decorar"", ""cola"", ""piercing"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""recortar"", ""pie"", ""mousse de chocolate"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""defender"", ""gallo"", ""cigarro"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""desafiar"", ""pino"", ""Snoop Dog"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""derribar"", ""Jacky Chan"", ""diente de leche"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""degustar"", ""gluten"", ""mapache"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""desayunar"", ""diarrea"", ""charco"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""renunciar"", ""mascota"", ""pistola"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""demoler"", ""bebé"", ""WC"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""desmontar"", ""baño"", ""erizo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""reparar"", ""Cancún"", ""misil"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""desplumar"", ""T-rex"", ""swag"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""desvirgar"", ""Mickael Jackson"", ""tortilla"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""desvestir"", ""Mickael Jordan"", ""enchufe anal"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""desear"", ""trampolín"", ""autista"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""dibujar"", ""p*ta"", ""isla flotante"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""desatar"", ""abuela"", ""paracaídas"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""desatornillar"", ""peluche"", ""Ibiza"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""devorar"", ""albaricoque"", ""Jessica Biel"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""digerir"", ""ciprina"", ""tía"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""cenar"", ""surf"", ""orina"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""dirigir"", ""calamar"", ""patinete eléctrico"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""divertir"", ""alcohol"", ""delfín"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""divorciar"", ""coyote"", ""ombligo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""dedear"", ""Leonardo Di Caprio"", ""baño de pies"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""dominar"", ""tijeras"", ""camarón"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""dar"", ""ciego"", ""caña de pescar"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""dopar"", ""niño"", ""piojo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""dormir"", ""hambre"", ""m*m*da"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""coquetear"", ""metralleta"", ""Scooby Doo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""adiestrar"", ""siameses"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""engañar"", ""nene"", ""cáscara de huevo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""endurecer"", ""erección"", ""discapacidad"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""deslumbrar"", ""copa"", ""caramelo suave"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""apartar"", ""dulce"", ""rata muerta"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""intercambiar"", ""eyaculación"", ""misil"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""escapar"", ""pirámide"", ""marihuana"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""fallar"", ""Niagara"", ""piano"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""salpicar"", ""picadura"", ""mermelada"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""aclarar"", ""cintura"", ""sinagoga"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""aclarar"", ""tempestad"", ""poppers"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""aplastar"", ""dentadura"", ""orina"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""acariciar"", ""reptil"", ""Jean Dujardin"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""perder"", ""martes"", ""elefante"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""escurrir"", ""Elephant man"", ""serpiente"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""eyacular"", ""hippie"", ""langosta"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""alargar"", ""mentira"", ""sodomía"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""eliminar"", ""100 cigarros"", ""gorra"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""elegir"", ""nutria"", ""bacalao ahumado"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""envolver"", ""tenedor"", ""Varsovia"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""vergüenza"", ""básket"", ""fuma"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""contratar"", ""culo"", ""Paris Hilton"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""molestar"", ""senos"", ""ressort"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""besar"", ""Lassie"", ""supositorio"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""mudarse"", ""tridente"", ""New York"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""impedir"", ""gas"", ""saxofon"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""apestar"", ""telé"", ""concha"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""patrón"", ""desatascador"", ""Cañón"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""pedir prestado"", ""huevo"", ""adolescente"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""alentar"", ""piojo"", ""Denis Brogniart"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""enfadar"", ""kárate"", ""Película XX"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""enfermar"", ""paloma"", ""pie descalzo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""humear"", ""tanga de hilo dental"", ""Jessica Alba"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""ponerse"", ""flamenco"", ""Sean Penn"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""incendiar"", ""aguacate"", ""c*ñ*"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""meterle"", ""cubo"", ""aceite de oliva"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""gritar"", ""erección furtiva"", ""vaselina"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""quitar"", ""nudo"", ""camiseta verde"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""aburrí"", ""hoyo de pino"", ""coger"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""investigar"", ""cortina"", ""tequila"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""enseñar"", ""dentadura"", ""patata"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""hechizar"", ""gofre"", ""ballena"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""entablar"", ""crepe"", ""columpio"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""enterrar"", ""radio"", ""crema depilatoria"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""rodear"", ""bolsa de grasa"", ""plegaria"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""entrenar"", ""patata"", ""camisón"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""entrar"", ""pierna"", ""pinta labios"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""envolver"", ""farmacia"", ""lápiz"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""enviar"", ""hielo"", ""asado"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""salir volando"", ""gay"", ""huevos"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""enviar"", ""sarcófago"", ""liquido seminal"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""salvar"", ""pelo del culo"", ""espinaca"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""impresionar"", ""Brasil"", ""orgía"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""espiar"", ""aborto"", ""pediatra"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""depilar"", ""lanzallamas"", ""Papel higiénico"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""pelar"", ""casado"", ""sandwich"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""casarse"", ""halloween"", ""Sophie Marceau"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""cansado"", ""galáctica"", ""doctor"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""equipar"", ""botón verde"", ""orgasmo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""secar"", ""estiércol"", ""píldora anticonceptiva"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""estornudar"", ""Pitufo"", ""enano de jardín"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""estirar"", ""computadora"", ""p*ut* virgen"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""asombrarse"", ""pene"", ""montaña rusa"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""ahogarse"", ""clítoris"", ""cacerola"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""ahorcar"", ""chihuahua"", ""dulce de fresa"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""estudiar"", ""poligamia"", ""Joaquín Sabina"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""evolucionar"", ""estrella fugaz"", ""sexo oral"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""excitar"", ""mamada"", ""mejillones con patatas"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""disculparse"", ""clorofila"", ""Mike Tyson"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""enviar"", ""panda"", ""sierra"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""explorar"", ""cráter"", ""pirómano"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""explotar"", ""stripper"", ""curling"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""extraer"", ""Mark Anthony"", ""pústula"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""filtrar"", ""llaga"", ""ninfómano"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""fisurar"", ""hígado"", ""urinal"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""flotar"", ""testículo"", ""planta"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""fumar"", ""tourette"", ""trío"" y ""%s"", termine-la par #picoloapp... Ou finis ton verre",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""desperdiciar"", ""col"", ""burdel"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""ganar"", ""segundo hoyo"", ""caniche"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""galopar"", ""matadero"", ""coito"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""guardar"", ""dulce"", ""béchamel"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""estacionar"", ""trompa"", ""urinal"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""desperdiciar"", ""hongo"", ""Eddy Murphy"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""consentir"", ""chino"", ""pluma"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""tirar gas"", ""botiquín"", ""granjero"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""congelar"", ""Zeus"", ""sida"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""gemir"", ""garrote"", ""simulación"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""pasar el rato"", ""síndrome de Down"", ""burbujas de jabón"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""resbalar"", ""pluf"", ""parada de bus"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""inflar"", ""saco"", ""sexo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""probar"", ""tuba"", ""cornudo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""crecer"", ""monopatín"", ""pito"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""rascar"", ""radiador"", ""pubis"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""grabar"", ""pubis"", ""chorreado"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""mordisquear"", ""píldora"", ""estimulo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""asar"", ""bistec de soja"", ""rueda grande"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""escalar"", ""teta"", ""tienda de campaña"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""gruñir"", ""pañuelo"", ""lamida"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""regañar"", ""asqueroso"", ""clic-clac"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""engordar"", ""vodka"", ""cambio de aceite"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""sanar"", ""Ron"", ""erótico"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""gritar"", ""chupito"", ""mareado"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""guiar"", ""Harry Potter"", ""pelicano"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""habituar"", ""paintball"", ""salsa de tomate"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""picar"", ""juego de cartas"", ""gorra"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""atormentar"", ""buzón"", ""bocal"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""acosar"", ""bucal"", ""jengibre"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""alojar"", ""10 000"", ""le gustan jóvenes"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""dudar"", ""fistfuck"", ""martillo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""humiliar"", ""justo"", ""sacudida"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""gritar"", ""sismo"", ""camiseta"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""ignorar"", ""diente de león"", ""lengua"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""imitar"", ""margarita"", ""El chavo del 8 "" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""impresionar"", ""anaconda"", ""arenas movedizas"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""imprimir"", ""mocasín"", ""quiste"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""informar"", ""nalgada"", ""lavaplatos"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""inundar"", ""basura"", ""lavanda"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""inquietarse"", ""diarrea"", ""tulipán"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""insistir"", ""malabarista"", ""castrar"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""prohibir"", ""tampón"", ""MacGyver"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""interview"", ""rinoplastia"", ""cuco"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""introducir"", ""cirugía"", ""lobo feroz"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""inventar"", ""fideo"", ""fermentación"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""investir"", ""Tadjikistan"", ""tribu Maorí"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""irritar"", ""bollo"", ""Pakistan"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""tirar"", ""couscous"", ""murciélago"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""malabarear"", ""cromosoma"", ""avión"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""jugar"", ""monogamia"", ""pene gigante"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""gozar"", ""sábana"", ""depilación"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""jurar"", ""plumero"", ""Tasmania"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""disfrutar"", ""kétchup"", ""disco"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""claxonar"", ""koala"", ""Antártica"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""lamer"", ""fox terrier"", ""posición fetal"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""lavar"", ""nube"", ""cueva"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""lamer"", ""sol"", ""Donald Trump"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""liberar"", ""larva"", ""aire acondicionado"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""despedir"", ""podóloga"", ""México"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""leer"", ""letras mayúsculas"", ""Witney Houston"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""entregar"", ""lémur"", ""yeso"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""masticar"", ""Biblia"", ""bici eléctrica"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""adelgazar"", ""ropa interior"", ""acabado"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""comer"", ""teja"", ""facial"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""manifestar"", ""cocción"", ""pulmón"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""faltar"", ""tejido"", ""matrimonio"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""maquillar"", ""orangután"", ""cohete"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""casarse"", ""bonobo"", ""Alejandro Sanz"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""masaje"", ""hormiga"", ""URSS"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""mirar"", ""paraguas"", ""Martini"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""mezclar"", ""chicharro"", ""cometa"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""meter"", ""psicópata"", ""espinilla"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""amenazar"", ""mormón"", ""pedo de babosa"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""maullar"", ""babosa"", ""Patagonia"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""mimar"", ""araña"", ""incesto"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""adelgazar"", ""caracol"", ""maracas"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""apostar"", ""hepatitis C"", ""saltamontes"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""pudrir"", ""tráfico"", ""virgen"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""morder"", ""virgen"", ""enfermo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""sonar"", ""gasolina"", ""Cristiano Ronaldo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""moler"", ""vinagre"", ""Londres"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""mojar"", ""leoncinto"", """" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""moldear"", ""raviolis"", ""escalera"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""murmurar"", ""kanguro"", ""kamasutra"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""nadar"", ""bosque"", ""reja"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""nacer"", ""vía láctea"", ""pastel"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""nevar"", ""leche"", ""Australia"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""limpiar"", ""éxtasis"", ""alcantarilla"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""negar"", ""miembro viril"", ""foca"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""manchar"", ""pajarito"", ""ciruela"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""alimentar"", ""vulva"", ""tomate"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""ahogar"", ""ratoncito"", ""zumo de naranja"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""obedecer"", ""perro loco"", ""estudio"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""obligar"", ""hámster"", ""impresora"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""obsesionar"", ""Hiroshima"", ""collar hawaiano"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""ofrecer"", ""colonoscopia"", ""Donald Trump"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""operar"", ""valija"", ""Nicolas Sarkozy"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""ordenar"", ""muela del juicio"", ""Pascua"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""organizar"", ""cotonete"", ""Navidad"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""atreverse"", ""cerilla"", ""verano indio"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""olvidar"", ""calienta huevos"", ""mediterráneo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""abrir"", ""confesionario"", ""magrebí"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""remar"", ""5 estrellas"", ""muñeca"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""perdonar"", ""estómago"", ""desecho tóxico"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""perfumar"", ""muñeca inflable"", ""margarita"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""apostar"", ""atún"", ""enrabiado"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""patrocinar"", ""pan"", ""Uzbekistán"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""compartir"", ""sémola"", ""Bolivia"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""esperar"", ""cabello"", ""Japón"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""pagar"", ""anzuelo"", ""Chile"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""pecado"", ""herrero"", ""dedo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""pedalear"", ""espada"", ""Ámsterdam"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""peinar"", ""pato"", ""Julio Iglesias"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""pintar"", ""Chile, ""Canadá"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""pelar"", ""dedo del pie"", ""rosa"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""tomar"", ""avispa"", ""puente"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""penetrar"", ""avispón"", ""Yugi-oh"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""perforar"", ""puerco"", ""canalización"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""perder"", ""oreja"", ""Islandia"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""pesar"", ""dignidad"", ""cárcel"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""romper"", ""honor"", ""castillo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""fotocopiar"", ""coraje"", ""don juan"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""fotografiar"", ""garrapiñadas"", ""castillo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""engañar"", ""océano"", ""piedra papel o tijera"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""pilotear"", ""suegra"", ""arco"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""pellizcar"", ""palma"", ""catapulta"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""orinar"", ""colonia"", ""solitaria"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""agradar"", ""uña"", ""lombriz"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""bromear"", ""pasito"", ""tijerilla"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""plantar"", ""Céline Dion"", ""patata"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""llorar"", ""saltamontes"", ""bukkake"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""bucear"", ""tren"", ""estrella"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""pulir"", ""barricada"", ""pegamento"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""contaminar"", ""proteína"", ""guardabarros"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""pulir"", ""ciencias"", ""sonajero"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""empollar"", ""médico"", ""hija"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""portar"", ""hombre"", ""cordón umbilical"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""póster"", ""reloj solar"", ""reunión"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""empujar"", ""leñador"", ""vela"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""practicar"", ""tonelada"", ""lavadora"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""tomar"", ""electrodomésticos"", ""árbol joven"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""preparar"", ""velero"", ""reina"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""apretar"", ""caravana"", ""contaminación"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""prestar"", ""antebrazo"", ""rabia"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""prever"", ""vaselina"", ""horno"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""pasear"", ""zodiaco"", ""aeropuerto"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""prometer"", ""temblor submarino"", ""oasis"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""probar"", torsión"", electricista"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""castigar"", ""baño"", ""patatas fritas"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""acortar"", ""dromedario"", ""estudios"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""colgar"", ""champagne"", ""apache"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""compar"", ""écrémage"", ""souterrain"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""comprar"", ""miope"", ""prisma"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""rígido"", ""masa"", ""tesoro"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""frenar"", ""grasa de cerdo"", ""alcohólico"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""quejarse"", ""galaxia"", ""gota"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""llevar"", ""hielo"", ""entierro"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""ablandar"", ""escritor"", ""cable"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""guardar"", ""pulgar"", ""Beatles"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""recordar"", ""colisión"", ""Perú"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""afeitar"", ""hipopótamo"", ""timbre"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""tranquilizar"", ""yunque"", ""casa"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""fallar"", ""pasta dental"", ""herida"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""rebotar"", ""telescopio"", ""castigo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""recalentar"", ""gatito"", ""microondas"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""recitar"", ""corona"", ""trompeta"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""reconciliar"", ""corpiño"", ""aspiradora"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""copiar"", ""humano"", ""terraza"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""contratar"", ""médico"", ""pollito"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""retroceder"", ""publicidad"", ""gym"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""redactar"", ""facultad"", ""paleta"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""caimán"", ""cocodrilo"", ""aclarar"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""enfriar"", ""caimán"", ""alumbrar"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""rechazar"", ""buzo"", ""rancho"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""disfrutar"", ""demonio"", ""ciprina"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""solucionar"", ""etiqueta"", ""demoníaco"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""lamentar"", ""Marzo"", ""tiburón"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""unirse"", ""bozal"", ""deshidratado"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""señalar"", ""Molière"", ""quiste"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""devolver"", ""edificio"", ""cabra"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""remediar"", ""leopardo"", ""vestimenta"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""agradecer"", ""orquesta"", ""radical"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""remplazar"", ""soñar"", ""rábano"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""llenar"", ""cerámica"", ""ambulancia"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""revólver"", ""venta al por menor"", ""ruleta"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""conocer"", ""labio"", ""prisionero"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""negar"", ""chimenea"", ""erección"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""olfatear"", ""voluntad"", ""lata de pintura"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""derramar"", ""software"", ""zapatilla"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""reparar"", ""líquido"", ""albañil"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""repartir"", ""equipo"", ""mosquitero"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""planchar"", ""ceja"", ""doméstico"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""pintar"", ""revista"", ""campamento"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""repetir"", ""poema"", ""látex"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""responder"", ""río"", ""skateboard"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""reservar"", ""ajedrez"", ""león"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""resistir"", ""feo"", ""claustrofobia"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""resonar"", ""cueva"", ""pino"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""resolver"", ""inmortalidad"", ""suerte"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""respetar"", ""país"", ""minuto"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""respirar"", ""suerte"", ""orgullo gay"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""resplandecer"", ""bienestar"", ""claqué"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""juntar"", ""piel muerta"", ""Kim Kardashian"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""apretar"", ""pomada"", ""aro"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""resucitar"", ""arpón"", ""profesor"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""restablecer"", ""lavado"", ""oliva"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""retrasar"", ""cianuro"", ""calibre"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""retener"", ""brutalmente"", ""mosquito"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""caer"", ""carretilla"", ""recién nacido"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""volver"", ""trapo"", ""camiseta"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""encoger"", ""partición"", ""mina"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""lograr"", ""pizarra"", ""bikini"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""revelar"", ""maíz"", ""self-service"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""soñar"", ""rótulo"", ""aspirina"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""examinar"", ""chaleco"", ""verga"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""reír"", ""básket"", ""prepucio"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""enjuagar"", ""deportista"", ""bechamel"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""reír"", ""tarta"", ""cangrejo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""arriesgar"", ""reloj de arena"", ""gelatina"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""roncar"", ""experiencia"", ""barbacoa"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""ronronear"", ""casino"", ""orangután"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""eructar"", ""húmedo"", ""tronco"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""rostizar"", ""mamut"", ""desodorante"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""sonrojarse"", ""viaje"", ""Bill Clinton"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""quejarse"", ""acné"", ""nuca"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""sacrificar"", ""urgencía"", ""cajón"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""sangrar"", ""bruja"", ""waterpolo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""salar"", ""mocasín"", ""volley"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""salir"", ""jabalí"", ""jungla"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""ensuciar"", ""zambullida"", ""lesbiana"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""saluer"", ""pepita de oro"", ""chimenea"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""llorar"", ""esquí"", ""fuegos artificiales"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebok que contenga las palabras ""borracho"", ""mascota"", ""Transilvana"" y ""%s"", termínala por #picoloapp... si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebok que contenga las palabras ""olvidar"", ""arquitecta"", ""fosa nasal"" y ""%s"", termínala por #picoloapp... si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebok que contenga las palabras ""satisfacer"", ""limón"", ""orificio"" y ""%s"", termínala por #picoloapp... si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""saltar"", ""cartero"", ""fax"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""salvar"", ""manubrio"", ""Apocalipsis"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""enjabonar"", ""lunes"", ""presidente"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""saborear"", ""edad media"", ""cosquilla"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""escáner"", ""joya"", ""Caribe"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""cortar"", ""tío"", ""Mallorca"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""secar"", ""camping"", ""artista"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""sacudir"", ""encías"", ""control"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""ayudar"", ""maleta"", ""cuchara"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""seducir"", ""prima"", ""Guatemala"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""sembrar"", ""asteroide"", ""Albert Einstein"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""señalar"", ""pan tostado"", ""walkie-talkie"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""beber"", ""Juegos Olímpicos"", ""papaya"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""esquiar"", ""sábana"", ""muleta"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""sanar"", ""brazalete"", ""ninja"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""sonar"", ""pirata"", ""equipaje"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""salir"", ""pinza de depilar"", ""quemado"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""soldar"", ""seda"", ""jeroglíficos"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""soplar"", ""calvo"", ""oso"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""desear"", ""corneta"", ""sordo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""aliviar"", ""erizo"", ""durito"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""levantar"", ""manguera"", ""crustáceo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""chupar"", ""submarino"", ""eléctrico"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""sudar"", ""tía"", ""Torre de Pisa"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""sofocar"", ""calzón"", ""piojo"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""sorprender"", ""diagonal"", ""detective"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""talar"", ""Canarias"", ""payaso"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""golpear"", ""libélula"", ""sierra de disco"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""burlarse"", ""gacela"", ""traje de baño"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""compactar"", ""garganta"", ""boomerang"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""llamar"", ""trillizos"", ""tanque"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""tierno"", ""cañón"", ""pierna"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""probar"", ""arco"", ""niño pequeño"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""mamar"", ""rata"", ""Ricky Martin"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""tirar"", ""caries"", ""monje"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""burlarme"", ""pastilla"", ""One Direction"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""limpiar"", ""diente"", ""Jennifer"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""ordeñar"", ""morsa"", ""lata"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""manosear"", ""cura"", ""cortacésped"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""mear"", ""parroquia"", ""Mongolia"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""vaciar"", ""balón"", ""mariscos"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""violar"", ""erizo"", ""Denzel Washington"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
,,"%s, postea una frase tonta en Facebook que contenga las palabras ""vomitar"", ""museo"", ""tapas"" y ""%s"", termínala por #picoloapp... Si no termina tu vaso.",15,2
white-black,,"¡Todo el mundo elige entre el color negro o blanco, aquellas o aquellos que pierdan beben $ tragos! (elige un color y comprenderas...)",23,0
,white-black,¡Blanco!,23,0
,white-black,¡Negro!,23,0
,white-black,¡Gris! Todos han perdido! ,23,0
,,La primera persona que encuentre un objeto blanco reparte $ tragos,23,0
,,"%s y %s deben jugar ""marinero que se fue a mar y mar y mar""! El/la que se equivoque bebe $ tragos",23,2
,,%s debes hacer una pregunta. La primera persona en responder reparte $ tragos ,23,1
,,%s canta una canción con la boca llena (llénala con lo que puedas). La primera persona en saber de que canción se trata reparte $ tragos ,23,1
,,"Cada persona bebe un trago y lee a voz alta el contenido de su último sms o mensaje de Whatsapp enviado, %s empiezas.",23,1
shoes-price,,¿Cúal es el precio de tus zapatos? La siguiente persona es ....%s empiezas. ,23,1
,shoes-price,Quien tenga el par más caro bebe $ tragos ,23,0
,shoes-price,Quien tenga el par más barato bebe $ tragos ,23,0
,shoes-price,Quien tengan un par de zapatos que cuesten más de 30 dólares beben $ tragos ,23,0
,,"Decid cualquier letra, el objetivo es formar una palabra correcta. El jugador que no sepa qué decir o diga un término que no existe bebe $ tragos. %s empiezas.",23,1
heads-tails,,¿Cara o cruz? %s empiezas (Ya veras lo que sigue ..) ,23,1
,heads-tails,Las personas que han dicho Cruz beben $ tragos ,23,0
,heads-tails,Las personas que han dicho Cara beben $ tragos ,23,0
,heads-tails,Las personas que han dicho Cruz reparten $ tragos ,23,0
,heads-tails,Las personas que han dicho Cara reparten $ tragos ,23,0
dumbest-player,,Designar todos juntos al jugador más estúpido entre ustedes y tendrá beber $ tragos ,23,0
,dumbest-player,La persona más estúpida puede vengarse y repartir $ tragos ,23,0
,dumbest-player,"En la vida no hay ser estúpido, 1 trago más para ti por imbécil. ",23,0
beautiful-player,,"Designar todos juntos, a la persona más guapa de la fiesta que deberá beber $ tragos ",23,0
,beautiful-player,Sólo por que eres un bombón puedes vengarte y repartir $ tragos ,23,0
,beautiful-player,"El dios de los feos se quiere vengar, la persona más hermosa debe beber 1 trago más",23,0
smart-player,,Designar todos juntos a la persona más inteligente y deberá beber $ tragos ,23,0
,smart-player,Ya que el alcohol te hace interesante bebes 1 trago más ,23,0
,smart-player,"Einstein, te puedes vengar y repartir $ tragos ",23,0
,,"%s imita una película, el primerjugador en adivinar reparte $ tragos ",23,1
,,"Cada uno nombra a una persona, esta persona tiene que beber 2 tragos, %s empiezas.",23,1
,,"Cada jugador tiene que decir sucesivamente algo que nunca antes haya hecho, los que lo han hecho beben, %s empiezas",23,1
,,"Cada jugador tiene que deir sucesivamente algo que alguna vez haya hecho, los que no lo han hecho beben, %s empiezas.",23,1
,,"Sucesivamente, tienes exactamente 2 segundos para decir una palabra relacionada con la palabra dicha antes. El jugador que pierda bebe %s tragos. %s elige tu palabra y comenzamos",23,2
,,"%s dices ""en mi maleta hay .."", comienza añadiendo cualquier cosa, cada jugador repite y añade un elemento, el primer que se equivoqué bebe $ tragos ",23,1
,,"%s comienzas con ""había una vez..."", añade 3 palabras como máximo. Sucesivamente, todos repiten lo que se ha dicho y añaden una parte de la historia, el primero que se equivoque bebe $ tragos ",23,1
,,"Hacer un gesto, el siguiente lo repite hasta que alguien pierda y tenga que beber $ tragos. %s empiezas",23,1
,,"Sucesivamente, tienes 1 segundo para decir una palabra con el fin de crear una frase coherente y completa. ¡Quien pierde bebe $ tragos, %s empiezas!",23,1
,,"Sucesivamente, deletrea el apellido del jugador de tu derecha, quien se equivoque bebe $ tragos. %s empiezas",23,1
,,"Sucesivamente, deletrea el nombre del jugador de tu derecha, quien se equivoque bebe $ tragos. %s empiezas",23,1
,,"Todos deben nombrar la última película que han visto, quienes hayan visto la misma película beben $ tragos.",23,0
,,"¿Verdad o Castigo? Pregúntale algo a tu vecino de la derecha, $ tragos si la persona se rehúsa a contestar, así una ronda de todos los jugadores. %s empiezas. ",23,1
,,"A cada turno, cada persona reparte en tragos la cantidad de nombres que tiene (ej. Miguel Ángel: 2). %s empiezas.  ",23,1
,,"A cada turno repetid 5 veces seguidas ""Pedro pica pasa con un pico"" en menos de 5 segundos. $ tragos a repartir a los ganadores y los perdedores beben 5 tragos. %s empiezas. ",23,1
,,"%s, elige una palabra. La primera persona en cantar una canción que contenga la palabra reparte $ tragos.",23,1
,,"%s, bebe $ tragos. Tu vecino(a) de la derecha una menos, y así sucesivamente hasta llegar a 0. ",23,1
,,"%s, recita los nombres y la edad de cada uno de los participantes. Si te equivocas el jugador debe darte tantos tragos como deseé.  ",23,1
,,"A cada turno, bebe en tragos la cantidad de puntos que te falten en tu carnet de conducir, %s empiezas. ",23,1
    
*/