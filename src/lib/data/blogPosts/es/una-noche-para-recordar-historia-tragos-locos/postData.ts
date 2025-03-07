import { PostData } from "$lib/types/PostData";
import PostContent from "./PostContent.svelte";

// Import related posts if needed
import { postData as queEsTragosLocosPost } from "../que-es-tragos-locos/postData";
import { postData as mejoresPreguntasPost } from "../mejores-preguntas-y-retos-para-beber/+page.svelte";

// Get current date for the modified date
const today = new Date();
today.setHours(0, 0, 0, 0); // Reset time to midnight for consistent date comparison

export const postData: PostData = {
    title: "Una Noche Para Recordar: Cómo Tragos Locos Transformó una Reunión Aburrida en una Aventura Épica",
    description: "Descubre cómo un simple encuentro de viejos amigos se transformó en una noche inolvidable de risas, confesiones y momentos inesperados gracias a Tragos Locos. Una historia real que muestra la magia de unir a las personas a través de la diversión y los juegos.",
    date: new Date("2025-03-15"),
    modifiedDate: today, // This will update automatically each day
    seoTag: "una-noche-para-recordar-historia-tragos-locos",
    image: "/blog/night-to-remember-tragos-locos-story/cover.png",
    tags: ["historia", "fiesta", "experiencia"],
    lang: "es",
    relatedPosts: [queEsTragosLocosPost],
    component: PostContent
};