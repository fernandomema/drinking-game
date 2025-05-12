import type { PostData } from "$lib/types/PostData";
import PostContent from "./PostContent.svelte";
import cover from "./cover.png";

export const postData: PostData = {
    title: "Cómo Hacer el Cóctel Paloma: La Receta Mexicana Perfecta para Fiestas 2025 🍹",
    seoTag: "como-hacer-coctel-paloma-receta",
    description: "Aprende a preparar el auténtico cóctel Paloma mexicano paso a paso. Descubre los ingredientes secretos, variaciones y trucos de bartender para el mejor Paloma. ¡Perfecta para fiestas con amigos! 🇲🇽",
    date: new Date("2025-05-12"),
    image: cover,
    tags: ["recetas", "cócteles", "tequila", "bebidas mexicanas"],
    lang: "es",
    component: PostContent
};