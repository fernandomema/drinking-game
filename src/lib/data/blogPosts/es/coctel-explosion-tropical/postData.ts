import type { PostData } from "$lib/types/PostData";
import PostContent from "./PostContent.svelte";

export const postData: PostData = {
    title: "Como Preparar un Coctel Explosión Tropical 🍹🎉",
    seoTag: "coctel-explosion-tropical",
    description: "¿Quieres aprender a preparar un coctel explosión tropical? En este post te enseñamos cómo hacerlo paso a paso. Sorprende a tus amigos con esta deliciosa bebida y disfruta de una noche inolvidable. ¡Vamos allá! 🚀",
    date: new Date("2025-03-03"),
    image: "/blog/coctel-explosion-tropical/cover.webp",
    tags: ["informative"],
    lang: "es",
    component: PostContent
};