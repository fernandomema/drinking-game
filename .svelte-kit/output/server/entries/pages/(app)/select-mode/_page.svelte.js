import { c as create_ssr_component, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import "@capacitor/app";
import { P as PageContainer } from "../../../../chunks/PageContainer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(PageContainer, "PageContainer").$$render(
    $$result,
    {
      class: "flex flex-col items-center justify-center pb-5"
    },
    {},
    {
      default: () => {
        return `<div class="${escape(
          "-translate-y-1/2 top-1/2",
          true
        ) + " h-fit-content absolute flex w-screen animate-fade-in items-center justify-center text-center font-[Fredoka] text-6xl font-bold text-white transition-all duration-700"}">Let&#39;s select a mode to play!</div> ${``}`;
      }
    }
  )}`;
});
export {
  Page as default
};
