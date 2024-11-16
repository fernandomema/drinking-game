
import root from '../root.svelte';
import { set_building } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_private_env, set_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	track_server_fetches: false,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n\t\t<link rel=\"manifest\" href=\"/manifest.json\" />\n\n\t\t<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/gh/philfung/add-to-homescreen@2.8/dist/add-to-homescreen.min.css\"/>\n\t  \t<script src=\"https://cdn.jsdelivr.net/gh/philfung/add-to-homescreen@2.8/dist/add-to-homescreen_es.min.js\"></script>\n\t\n\n\t\t" + head + "\n\t</head>\n\t<body data-sveltekit-preload-data=\"hover\">\n\t\t<div style=\"display: contents\">" + body + "</div>\n\n\t\t<!-- <script>\n\t\t\tdocument.addEventListener('DOMContentLoaded', function () {\n\t\t\t window.AddToHomeScreenInstance = window.AddToHomeScreen({\n\t\t\t  appName: 'Aardvark',                                   // Name of the app.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t // Required.\n\t\t\t  appNameDisplay: 'standalone',                          // If set to 'standalone' (the default), the app name will be diplayed\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t // on it's own, beneath the \"Install App\" header. If set to 'inline', the\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t // app name will be displayed on a single line like \"Install MyApp\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t // Optional. Default 'standalone'\n\t\t\t  appIconUrl: 'apple-touch-icon.png',                    // App icon link (square, at least 40 x 40 pixels).\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t // Required.\n\t\t\t  assetUrl: 'https://cdn.jsdelivr.net/gh/philfung/add-to-homescreen@2.8/dist/assets/img/',  // Link to directory of library image assets.\n\t\t\t\n\t\t\t  maxModalDisplayCount: -1                               // If set, the modal will only show this many times.\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t // [Optional] Default: -1 (no limit).  (Debugging: Use this.clearModalDisplayCount() to reset the count)\n\t\t\t});\n\t\t\t\n\t\t\t ret = window.AddToHomeScreenInstance.show('en');        // show \"add-to-homescreen\" instructions to user, or do nothing if already added to homescreen\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t // [optional] language.  If left blank, then language is auto-decided from (1) URL param locale='..' (e.g. /?locale=es) (2) Browser language settings\n\t\t\t});\n\t\t</script> -->\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--safe-area-inset-top: env(safe-area-inset-top);\n\t\t\t\t--safe-area-inset-bottom: env(safe-area-inset-bottom);\n\t\t\t\theight: calc(100% + (var(--safe-area-inset-top) + var(--safe-area-inset-bottom)));\n\t\t\t}\n\t\t</style>\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "4cwlfg"
};

export function get_hooks() {
	return {};
}

export { set_assets, set_building, set_private_env, set_public_env };
