import type { PostData } from "$lib/types/PostData";
import PostContent from "./PostContent.svelte";
import cover from "./cover.png";

export const postData: PostData = {
    title: "Las 5 Mejores Alternativas Gratuitas a Picolo en 2025 🎮",
    seoTag: "alternativas-gratuitas-picolo",
    description: "¿Buscas juegos para beber gratis como Picolo? Descubre las mejores alternativas gratuitas para Android e iOS que harán tus fiestas inolvidables. ¡Incluye juegos en español! 🎯",
    date: new Date("2025-05-12"),
    image: cover,
    tags: ["juegos para beber", "alternativas picolo", "apps gratuitas", "juegos para fiestas"],
    lang: "es",
    component: PostContent
};
