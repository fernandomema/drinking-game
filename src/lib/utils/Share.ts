import { Share } from "@capacitor/share";

export const shareApp = async () => {
    if (!await Share.canShare().then(v => v.value)) return;
    await Share.share({
        title: '¡Únete a la fiesta con Tragos Locos! 🎉',
        text: '¿Estás listo para reírte y beber con los panas? ¡Descarga ya Tragos Locos y juega ahora mismo! 🍻🔥',
        url: 'https://tragos-locos.servitimo.net',
        dialogTitle: '¡Comparte la diversión con tus colegas!',
    });
};