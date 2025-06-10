import { Preferences } from '@capacitor/preferences';

let players: any[] = [];
let teams: any[] = [];

export const loadPlayers = async () => {
    if (typeof window === 'undefined') return;
    const sessionData = sessionStorage.getItem('players');
    if (sessionData) {
        await Preferences.set({ key: 'players', value: sessionData });
        sessionStorage.removeItem('players');
    }
    const { value } = await Preferences.get({ key: 'players' });
    players = value ? JSON.parse(value) : [];
};

export const getPlayers = () => players;

export const setPlayers = async (list: any[]) => {
    players = list;
    await Preferences.set({ key: 'players', value: JSON.stringify(players) });
};

export const clearPlayers = async () => {
    players = [];
    await Preferences.remove({ key: 'players' });
};

export const loadTeams = async () => {
    if (typeof window === 'undefined') return;
    const legacy = localStorage.getItem('teams');
    if (legacy) {
        await Preferences.set({ key: 'teams', value: legacy });
        localStorage.removeItem('teams');
    }
    const { value } = await Preferences.get({ key: 'teams' });
    teams = value ? JSON.parse(value) : [];
};

export const getTeams = () => teams;

export const setTeams = async (list: any[]) => {
    teams = list;
    await Preferences.set({ key: 'teams', value: JSON.stringify(teams) });
};
