import { PostData } from "$lib/types/PostData";
import PostContent from "./PostContent.svelte";

export const postData: PostData = {
    title: "Que es Tragos Locos?",
    description: "Descubre la aplicación Tragos Locos. ¿Qué es? ¿Cómo funciona? ¿Y por qué deberías usarla? Publicado para todos los que estén interesados en aprender más sobre la aplicación Tragos Locos.",
    date: new Date("2025-02-21"),
    seoTag: "que-es-tragos-locos",
    image: "/blog/what-is-tragos-locos/cover.png",
    tags: ["informative"],
    lang: "es",
    component: PostContent
};