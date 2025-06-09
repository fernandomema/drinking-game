import { Capacitor } from '@capacitor/core';
import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';

export const impact = async (style: ImpactStyle = ImpactStyle.Medium) => {
    try {
        if (Capacitor.isNativePlatform()) {
            await Haptics.impact({ style });
        } else if (window.navigator?.vibrate) {
            navigator.vibrate([60, 20, 60]);
        }
    } catch (err) {
        console.error('Haptics impact error', err);
    }
};

export const notification = async (type: NotificationType = NotificationType.Success) => {
    try {
        if (Capacitor.isNativePlatform()) {
            await Haptics.notification({ type });
        } else if (window.navigator?.vibrate) {
            navigator.vibrate([100, 50, 100]);
        }
    } catch (err) {
        console.error('Haptics notification error', err);
    }
};

export const vibrate = async (duration = 300) => {
    try {
        if (Capacitor.isNativePlatform()) {
            await Haptics.vibrate({ duration });
        } else if (window.navigator?.vibrate) {
            navigator.vibrate(duration);
        }
    } catch (err) {
        console.error('Haptics vibrate error', err);
    }
};
