import type { PostData } from "$lib/types/PostData";
import PostContent from "./PostContent.svelte";

export const postData: PostData = {
    title: "Juegos para beber en la playa de San Juan: ideas para flipar frente al fuego",
    seoTag: "juegos-para-beber-playa-san-juan",
    description: "Disfruta la noche de San Juan con juegos para beber en la playa. Música, fuego y risas aseguradas con estos retos y tragos sanjuaneros.",
    date: new Date("2025-06-20"),
    image: "/blog/what-is-tragos-locos/cover.png",
    tags: ["juegos para beber playa", "San Juan", "fiesta"],
    lang: "es",
    component: PostContent
};
