import { SvelteComponent } from "svelte";

export type PostData = {
    title: string;
    seoTag: string;
    description: string;
    date: Date;
    modifiedDate?: Date;
    image: string;
    tags: string[];
    lang: string;
    component: any;
}