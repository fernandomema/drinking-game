import type { PostData } from "$lib/types/PostData";
import PostContent from "./PostContent.svelte";

export const postData: PostData = {
    title: "100 preguntas hot para jugar con tus amigos 🔥",
    seoTag: "preguntas-hot-para-beber",
    description: "Una lista con 100 preguntas hot para beber y descubrir todos los secretos entre amigos. Perfectas para animar cualquier fiesta y jugar a verdad o shot.",
    date: new Date("2025-06-15"),
    image: "/blog/preguntas-hot-para-beber/cover.webp",
    tags: ["preguntas hot para beber", "juegos de fiesta", "verdad o shot", "Tragos Locos"],
    lang: "es",
    component: PostContent
};
