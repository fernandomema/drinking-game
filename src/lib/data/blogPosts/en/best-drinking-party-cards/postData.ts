import type { PostData } from "$lib/types/PostData";
import PostContent from "./PostContent.svelte";

import { postData as truthOrDarePost } from "../best-truth-or-dare-questions/postData";
import { postData as bestAppsPost } from "../best-apps-and-games-for-a-night-of-drinking-and-partying/postData";

export const postData: PostData = {
    title: "The Best Drinking Party Cards to Spice Up Your Night 🍻🔥",
    seoTag: "best-drinking-party-cards",
    description: "Looking for the ultimate drinking party cards to make your night unforgettable? Check out our collection of the best cards from Tragos Locos that will have everyone laughing, drinking, and creating memories that will last a lifetime!",
    date: new Date("2025-03-10"),
    modifiedDate: new Date("2025-03-10"),
    image: "/blog/best-drinking-party-cards/cover.webp",
    tags: ["informative", "party", "drinking games"],
    lang: "en",
    relatedPosts: [truthOrDarePost, bestAppsPost],
    component: PostContent
};