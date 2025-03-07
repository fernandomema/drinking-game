import { PostData } from "$lib/types/PostData";
import PostContent from "./PostContent.svelte";

// Import related posts if needed
import { postData as whatIsTragosLocosPost } from "../what-is-tragos-locos/postData";
import { postData as bestDrinkingPartyCardsPost } from "../best-drinking-party-cards/postData";

// Get current date for the modified date
const today = new Date();
today.setHours(0, 0, 0, 0); // Reset time to midnight for consistent date comparison

export const postData: PostData = {
    title: "A Night to Remember: How Tragos Locos Turned a Boring Reunion into an Epic Adventure",
    description: "Discover how a simple gathering of old friends transformed into an unforgettable night of laughter, confessions, and unexpected moments thanks to Tragos Locos. A true story that shows the magic of bringing people together through fun and games.",
    date: new Date("2025-03-15"),
    modifiedDate: today, // This will update automatically each day
    seoTag: "night-to-remember-tragos-locos-story",
    image: "/blog/night-to-remember-tragos-locos-story/cover.png",
    tags: ["story", "party", "experience"],
    lang: "en",
    relatedPosts: [whatIsTragosLocosPost, bestDrinkingPartyCardsPost],
    component: PostContent
};