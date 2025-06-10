import type { PostData } from "$lib/types/PostData";
import PostContent from "./PostContent.svelte";

export const postData: PostData = {
    title: "Los Mejores Juegos de Cartas para Beber en 2025 🃏🍻",
    seoTag: "juegos-de-cartas-para-beber",
    description: "Descubre juegos de cartas ideales para animar tus fiestas. Desde King's Cup hasta UNO Shots, estas opciones te garantizan diversión asegurada.",
    date: new Date("2025-06-01"),
    image: "/blog/what-is-tragos-locos/cover.png",
    tags: ["juegos para beber", "cartas", "fiesta"],
    lang: "es",
    component: PostContent
};
