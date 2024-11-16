import * as universal from '../entries/pages/(app)/_layout.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(app)/+layout.ts";
export const imports = ["_app/immutable/nodes/2.ee4b2073.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.fc18af13.js","_app/immutable/chunks/index.b2400071.js","_app/immutable/chunks/index.900be693.js"];
export const stylesheets = ["_app/immutable/assets/2.692e337f.css"];
export const fonts = [];
