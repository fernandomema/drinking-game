import type { PostData } from "$lib/types/PostData";
import PostContent from "./PostContent.svelte";

export const postData: PostData = {
    title: "How to Make a Midnight Sparkle Martini 🌟✨",
    seoTag: "midnight-sparkle-martini",
    description: "Want to learn how to make a magical Midnight Sparkle Martini? In this post, we'll show you how to create this enchanting cocktail step by step. Surprise your friends with this stunning drink and enjoy an unforgettable night. Let's get started! 🚀",
    date: new Date("2025-03-27"),
    image: "/blog/coctel-explosion-tropical/cover.webp",
    tags: ["Crazy Drinks"],
    lang: "en",
    component: PostContent
}; 