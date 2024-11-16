import { c as create_ssr_component, h as compute_rest_props, i as spread, j as escape_object, e as escape } from "./ssr.js";
const PageContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: "h-dvh max-h-screen min-h-dvh w-full bg-[#794fea] font-[Fredoka] font-bold text-white " + escape($$props.class, true)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  PageContainer as P
};
