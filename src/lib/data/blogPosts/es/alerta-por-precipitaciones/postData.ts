import type { PostData } from "$lib/types/PostData";
import PostContent from "./PostContent.svelte";

export const postData: PostData = {
    title: "Alerta por Precipitaciones: Lo Que Debes Saber",
    seoTag: "alerta-por-precipitaciones",
    description: "Conoce cómo prepararte ante una alerta por precipitaciones y descubre un cóctel para disfrutar con Tragos Locos mientras esperas a que pase la lluvia.",
    date: new Date("2025-06-15"),
    image: "/blog/best-drinking-questions-and-challenges/cover.png",
    tags: ["alertas", "clima", "seguridad", "Tragos Locos"],
    lang: "es",
    component: PostContent
};
