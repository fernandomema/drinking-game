import type { PostData } from "$lib/types/PostData";
import PostContent from "./PostContent.svelte";

import { postData as bestAppsPost } from "../best-apps-and-games-for-a-night-of-drinking-and-partying/postData";

export const postData: PostData = {
    title: "The Best Truth or Dare Questions for an Unforgettable Night 🤩🔥",
    seoTag: "best-truth-or-dare-questions",
    description: "Want to take your Truth or Dare game to the next level? Here’s a list of the best questions to make your party wild, fun, and maybe even a little embarrassing. Ready to spill the truth or take on the craziest dares? Let's go! 😈",
    date: new Date("2025-02-24"),
    modifiedDate: new Date("2025-03-06"),
    image: "/blog/best-truth-or-dare-questions/cover.webp",
    tags: ["informative"],
    lang: "en",
    relatedPosts: [bestAppsPost],
    component: PostContent
};
