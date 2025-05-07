import type { PostData } from "$lib/types/PostData";
import PostContent from "./PostContent.svelte";
import cover from "./cover.png";

export const postData: PostData = {
    title: "15 Juegos para Beber en la Noche de San Juan 2025: La Guía Definitiva 🔥",
    seoTag: "juegos-para-beber-noche-san-juan",
    description: "Descubre los mejores juegos para beber en San Juan. Hogueras, playa, amigos y diversión garantizada con estas ideas para juegos y apps. Convierte tu noche de San Juan en una celebración inolvidable. 🎉",
    date: new Date("2025-06-10"),
    image: cover,
    tags: ["San Juan", "juegos para beber", "fiesta", "hogueras"],
    lang: "es",
    component: PostContent
};