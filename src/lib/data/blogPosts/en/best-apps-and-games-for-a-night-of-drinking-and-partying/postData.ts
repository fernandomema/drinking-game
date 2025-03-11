import type { PostData } from "$lib/types/PostData";
import PostContent from "./PostContent.svelte";

export const postData: PostData = {
    title: "The Best Apps and Games for a Night of Drinking and Partying 🍹🎉",
    seoTag: "best-apps-and-games-for-a-night-of-drinking-and-partying",
    description: "Are you looking for the best apps and games to spice up your party? Here's a list of the most fun options to keep everyone entertained. From crazy challenges to awkward questions, these apps will make your night epic. Let's get started! 🚀",
    date: new Date("2025-02-24"),
    modifiedDate: new Date("2025-03-11"),
    image: "/blog/best-apps-and-games-for-a-night-of-drinking-and-partying/cover.webp",
    tags: ["informative"],
    lang: "en",
    component: PostContent
};