import {v4 as uuidv4} from 'uuid';

export const getUserId = () => {
    let userId = localStorage.getItem('userId');
    if (!userId) {
        userId = uuidv4();
        localStorage.setItem('userId', userId);
    }
    return userId;
}

export const incrementDaysPlayed = (): number => {
    const days: string[] = JSON.parse(localStorage.getItem('daysPlayed') || '[]');
    const today = new Date().toISOString().slice(0, 10);
    if (!days.includes(today)) {
        days.push(today);
        localStorage.setItem('daysPlayed', JSON.stringify(days));
    }

    if (days.length >= 15) {
        localStorage.setItem('premium', 'true');
    }

    return days.length;
};

export const isPremiumUser = (): boolean => {
    return localStorage.getItem('premium') === 'true';
};

export const getDaysPlayed = (): number => {
    const days: string[] = JSON.parse(localStorage.getItem('daysPlayed') || '[]');
    return days.length;
};
