import { Preferences } from '@capacitor/preferences';
import { v4 as uuidv4 } from 'uuid';

let userId = '';
let days: string[] = [];
let premium = false;

export const loadUserInfo = async () => {
    if (typeof window === 'undefined') return;

    const legacyUserId = localStorage.getItem('userId');
    const legacyDays = localStorage.getItem('daysPlayed');
    const legacyPremium = localStorage.getItem('premium');

    if (legacyUserId) await Preferences.set({ key: 'userId', value: legacyUserId });
    if (legacyDays) await Preferences.set({ key: 'daysPlayed', value: legacyDays });
    if (legacyPremium) await Preferences.set({ key: 'premium', value: legacyPremium });

    if (legacyUserId || legacyDays || legacyPremium) {
        localStorage.removeItem('userId');
        localStorage.removeItem('daysPlayed');
        localStorage.removeItem('premium');
    }

    const { value: storedId } = await Preferences.get({ key: 'userId' });
    userId = storedId || uuidv4();
    if (!storedId) await Preferences.set({ key: 'userId', value: userId });

    const { value: storedDays } = await Preferences.get({ key: 'daysPlayed' });
    days = storedDays ? JSON.parse(storedDays) : [];

    const { value: storedPremium } = await Preferences.get({ key: 'premium' });
    premium = storedPremium === 'true';
};

export const getUserId = () => userId;

export const incrementDaysPlayed = (): number => {
    const today = new Date().toISOString().slice(0, 10);
    if (!days.includes(today)) {
        days.push(today);
        Preferences.set({ key: 'daysPlayed', value: JSON.stringify(days) });
    }
    if (days.length >= 15) {
        premium = true;
        Preferences.set({ key: 'premium', value: 'true' });
    }
    return days.length;
};

export const isPremiumUser = (): boolean => premium;

export const getDaysPlayed = (): number => days.length;
