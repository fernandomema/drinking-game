import type { PostData } from "$lib/types/PostData";
import PostContent from "./PostContent.svelte";

export const postData: PostData = {
    title: "Resurrection Fest 2025: ¡Disfruta al Máximo con Tragos Locos! 🤘🍻",
    seoTag: "resurrection-fest-con-tragos-locos",
    description: "Descubre cómo Tragos Locos puede acompañarte en el Resurrection Fest. Explora nuestro modo especial para el festival y lleva la diversión a otro nivel.",
    date: new Date("2025-06-20"),
    image: "/blog/best-drinking-questions-and-challenges/cover.png",
    tags: ["Resurrection Fest", "festival", "modo especial"],
    lang: "es",
    component: PostContent
};
