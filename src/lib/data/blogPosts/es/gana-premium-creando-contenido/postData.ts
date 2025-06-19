import type { PostData } from "$lib/types/PostData";
import PostContent from "./PostContent.svelte";

export const postData: PostData = {
    title: "Cómo obtener Premium gratis creando contenido",
    seoTag: "gana-premium-creando-contenido",
    description: "Participa enviando preguntas, imágenes o videos a Tragos Locos y recibe un código Premium sin costo.",
    date: new Date("2025-06-19"),
    image: "/blog/what-is-tragos-locos/cover.png",
    tags: ["Tragos Locos", "ugc", "premium"],
    lang: "es",
    component: PostContent
};
