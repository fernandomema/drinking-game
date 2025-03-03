import { PostData } from "$lib/types/PostData";
import PostContent from "./PostContent.svelte";

export const postData: PostData = {
    title: "What is Tragos Locos?",
    description: "Discover the Tragos Locos app. What is it? How does it work? And why should you use it? Published for everyone interested in learning more about the Tragos Locos app.",
    date: new Date("2025-02-21"),
    seoTag: "what-is-tragos-locos",
    image: "/blog/what-is-tragos-locos/cover.png",
    tags: ["informative"],
    lang: "en",
    component: PostContent
};