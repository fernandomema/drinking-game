import type { PostData } from "$lib/types/PostData";
import PostContent from "./PostContent.svelte";

export const postData: PostData = {
    title: "10 Juegos para Beber con tus Amigos (Gratis)",
    seoTag: "juegos-para-beber-gratis",
    description: "Los mejores juegos para beber sin gastar nada. Descubre 10 opciones gratuitas para animar tus reuniones con amigos.",
    date: new Date("2025-07-01"),
    image: "/blog/what-is-tragos-locos/cover.png",
    tags: ["juegos para beber", "gratis", "fiesta"],
    lang: "es",
    component: PostContent
};
