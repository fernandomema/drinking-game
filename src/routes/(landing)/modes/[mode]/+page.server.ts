import { modes } from '$lib/modes';
import type { EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
    return Object.keys(modes).map((key) => ({ mode: key }));
};
