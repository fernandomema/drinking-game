import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { P as PageContainer } from "../../../chunks/PageContainer.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(PageContainer, "PageContainer").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="h-full w-full bg-gradient-to-b from-[#794fea] via-white via-[60px] to-white" data-svelte-h="svelte-19sl6cd"><div class="in-circle-hesitate absolute flex h-screen w-screen animate-circle-in-hesitate items-center justify-center bg-[#794fea]"><img src="/AppImages/ios/256.png" width="200px" alt=""></div></div>`;
    }
  })}`;
});
export {
  Page as default
};
