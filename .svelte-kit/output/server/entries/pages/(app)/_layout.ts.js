const prerender = true;
function load({ url }) {
  return {
    url: url.pathname
  };
}
export {
  load,
  prerender
};
