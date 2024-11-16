

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.4f18b95a.js","_app/immutable/chunks/scheduler.fc18af13.js","_app/immutable/chunks/index.b2400071.js","_app/immutable/chunks/PageContainer.9a7123d8.js","_app/immutable/chunks/navigation.b22eb3be.js","_app/immutable/chunks/singletons.3020cb73.js","_app/immutable/chunks/index.900be693.js"];
export const stylesheets = [];
export const fonts = [];
