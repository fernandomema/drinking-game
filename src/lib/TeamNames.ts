import { Locales } from '$lib/types/Locales';

export const teamNames = {
    [Locales.es]: [
        'Cazafantasmas', 'Ratones', "Botellón Royale", "Chupitos", "Mojito Mafiosos", "Resaca", "DerramaCopas", "Birras", "Chupis", "Shots", 
        "Chispitas", "CañaLoca", "Tequilocos", "Cerveceros", "Borrachos", "Bebidos", "Bombones"
    ],
    [Locales.en]: [
        'Ghostbusters', 'Mice', "Royal Bottling", "Shots", "Mojito Mafiosos", "Hangover", "SpillCups", "Beers", "Shots", 
        "Sparkles", "CrazyBeer", "Tequilocos", "BeerLovers", "Drunkies", "Drunkies", "Bombs"
    ]
};

export const getRandomTeamName = (locale: Locales) => {
    const names: string[] = teamNames[locale];
    return names[Math.floor(Math.random() * names.length)];
}

export const getRandomizedTeamNames = (locale: Locales) => {
    const names: string[] = teamNames[locale];
    return names.sort(() => Math.random() - 0.5);
}