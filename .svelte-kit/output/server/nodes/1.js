

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b264ae62.js","_app/immutable/chunks/scheduler.fc18af13.js","_app/immutable/chunks/index.b2400071.js","_app/immutable/chunks/stores.a0d7e483.js","_app/immutable/chunks/singletons.3020cb73.js"];
export const stylesheets = [];
export const fonts = [];
