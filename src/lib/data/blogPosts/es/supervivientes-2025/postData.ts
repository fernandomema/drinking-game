import type { PostData } from "$lib/types/PostData";
import PostContent from "./PostContent.svelte";

export const postData: PostData = {
    title: "Supervivientes 2025: disfruta del reality con un toque de Tragos Locos 🏝️🍻",
    seoTag: "supervivientes-2025",
    description: "Supervivientes 2025 está en boca de todos. Descubre cómo convertir cada gala en un juego de beber con Tragos Locos y vive la emoción a tope.",
    date: new Date("2025-07-05"),
    image: "/blog/best-drinking-questions-and-challenges/cover.png",
    tags: ["Supervivientes", "televisión", "juegos para beber"],
    lang: "es",
    component: PostContent
};
