import { modes } from "$lib/modes";
import { EntryGenerator } from "./$types";


export const entries: EntryGenerator = () => {
    return Object.keys(modes).map((key) => {
        return {
            mode: key,
        };
    });
};
