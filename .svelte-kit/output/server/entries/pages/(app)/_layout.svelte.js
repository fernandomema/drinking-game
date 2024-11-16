import { c as create_ssr_component } from "../../../chunks/ssr.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="h-dvh w-full bg-[#794fea]"><div>${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Layout as default
};
