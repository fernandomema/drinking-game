import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';

export const requestNotificationPermission = async () => {
    try {
        if (Capacitor.isNativePlatform()) {
            await LocalNotifications.requestPermissions();
        }
    } catch (err) {
        console.error('Notification permission error', err);
    }
};

export const getRemindersEnabled = (): boolean => {
    return localStorage.getItem('remindersEnabled') === 'true';
};

export const setRemindersEnabled = (value: boolean) => {
    localStorage.setItem('remindersEnabled', value.toString());
};

export const cancelReminders = async () => {
    if (!Capacitor.isNativePlatform()) return;
    try {
        await LocalNotifications.cancel({ notifications: [] });
    } catch (err) {
        console.error('Cancel reminders error', err);
    }
};

export const scheduleDailyReminder = async () => {
    if (!Capacitor.isNativePlatform() || !getRemindersEnabled()) return;

    try {
        const perm = await LocalNotifications.checkPermissions();
        if (perm.display !== 'granted') return;

        await cancelReminders();

        const now = new Date();
        const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);

        await LocalNotifications.schedule({
            notifications: [
                {
                    id: 1,
                    title: '¡Hora de jugar Tragos Locos!',
                    body: 'Vuelve y continúa con la diversión.',
                    schedule: { at: tomorrow },
                },
            ],
        });

        const friday = new Date(now);
        friday.setDate(now.getDate() + ((5 - now.getDay() + 7) % 7));
        friday.setHours(18, 0, 0, 0);

        if (friday.getTime() > now.getTime()) {
            await LocalNotifications.schedule({
                notifications: [
                    {
                        id: 2,
                        title: 'Es viernes por la noche \uD83C\uDF7B',
                        body: 'Reúne a tus amigos y juega Tragos Locos.',
                        schedule: { at: friday },
                    },
                ],
            });
        }
    } catch (err) {
        console.error('Schedule reminder error', err);
    }
};
