

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.0bb8656e.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.fc18af13.js","_app/immutable/chunks/index.b2400071.js"];
export const stylesheets = [];
export const fonts = [];
