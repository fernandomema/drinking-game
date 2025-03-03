import type { PostData } from "$lib/types/PostData";
import PostContent from "./PostContent.svelte";

export const postData: PostData = {
    title: "Las Mejores Apps y Juegos para una Noche de Fiesta y Bebidas 🍹🎉",
    seoTag: "mejores-apps-y-juegos-para-noche-de-fiesta-y-bebidas",
    description: "¿Buscas las mejores apps y juegos para animar tu fiesta? Aquí te traemos una lista de las opciones más divertidas para que nadie se aburra. Desde retos alocados hasta preguntas incómodas, estas apps harán que tu noche sea épica. ¡Vamos allá! 🚀",
    date: new Date("2025-02-24"),
    image: "/blog/best-apps-and-games-for-a-night-of-drinking-and-partying/cover.webp",
    tags: ["informative"],
    lang: "es",
    component: PostContent
};