import { c as create_ssr_component } from "../../chunks/ssr.js";
const pwaInfo = { "pwaInDevEnvironment": false, "webManifest": { "href": "/manifest.webmanifest", "useCredentials": false, "linkTag": '<link rel="manifest" href="/manifest.webmanifest">' } };
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let webManifest;
  webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : "";
  return `${$$result.head += `<!-- HEAD_svelte-bmum8y_START --><!-- HTML_TAG_START -->${webManifest}<!-- HTML_TAG_END --><!-- HEAD_svelte-bmum8y_END -->`, ""} <main>${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
