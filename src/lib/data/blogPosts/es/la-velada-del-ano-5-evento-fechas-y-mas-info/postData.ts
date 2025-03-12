import type { PostData } from "$lib/types/PostData";
import PostContent from "./PostContent.svelte";
import { postData as coctelExplosionTropical } from "../coctel-explosion-tropical/postData";
import { postData as mejoresAppsJuegos } from "../mejores-apps-y-juegos-para-noche-de-fiesta-y-bebidas/postData";

export const postData: PostData = {
    title: "La velada del año 5 - Evento, fechas y más info",
    seoTag: "la-velada-del-ano-5-evento-fechas-y-mas-info",
    description: "¿Listo para La Velada del Año 2025? Descubre toda la info, los combates, y los mejores consejos para disfrutar al máximo este evento histórico con tus amigos. ¡Haz que esta noche de boxeo sea inolvidable! 🥊🎉",
    date: new Date("2025-03-10"),
    image: "/blog/la-velada-del-ano-5-evento-fechas-y-mas-info/cover.webp",
    tags: ["informative", "eventos"],
    lang: "es",
    relatedPosts: [coctelExplosionTropical, mejoresAppsJuegos],
    component: PostContent
};