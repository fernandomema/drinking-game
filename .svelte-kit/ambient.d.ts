
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const GJS_DEBUG_TOPICS: string;
	export const forgit_cherry_pick: string;
	export const forgit_rebase: string;
	export const USER: string;
	export const WARP_HONOR_PS1: string;
	export const TTY: string;
	export const npm_config_user_agent: string;
	export const GIO_MODULE_DIR: string;
	export const forgit_revert_commit: string;
	export const XDG_SESSION_TYPE: string;
	export const GTK_EXE_PREFIX_VSCODE_SNAP_ORIG: string;
	export const BUN_INSTALL: string;
	export const GIT_ASKPASS: string;
	export const npm_node_execpath: string;
	export const GDK_BACKEND_VSCODE_SNAP_ORIG: string;
	export const SHLVL: string;
	export const forgit_blame: string;
	export const npm_config_noproxy: string;
	export const HOME: string;
	export const LOCPATH_VSCODE_SNAP_ORIG: string;
	export const CHROME_DESKTOP: string;
	export const OLDPWD: string;
	export const DESKTOP_SESSION: string;
	export const GTK_PATH: string;
	export const TERM_PROGRAM_VERSION: string;
	export const forgit_clean: string;
	export const NVM_BIN: string;
	export const npm_package_json: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const GTK_IM_MODULE_FILE: string;
	export const NVM_INC: string;
	export const WARP_USE_SSH_WRAPPER: string;
	export const GNOME_SHELL_SESSION_MODE: string;
	export const GTK_MODULES: string;
	export const GSETTINGS_SCHEMA_DIR_VSCODE_SNAP_ORIG: string;
	export const forgit_log: string;
	export const forgit_fixup: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const NIX_PROFILES: string;
	export const MANAGERPID: string;
	export const forgit_checkout_branch: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const GLFW_IM_MODULE: string;
	export const FIG_SET_PARENT_CHECK: string;
	export const SYSTEMD_EXEC_PID: string;
	export const GSM_SKIP_SSH_AGENT_WORKAROUND: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const COLORTERM: string;
	export const FIG_PID: string;
	export const COLOR: string;
	export const DEBUGINFOD_URLS: string;
	export const CONDA_CHANGEPS1: string;
	export const NVM_DIR: string;
	export const GTK_IM_MODULE: string;
	export const LOGNAME: string;
	export const JOURNAL_STREAM: string;
	export const forgit_checkout_tag: string;
	export const _: string;
	export const npm_config_prefix: string;
	export const npm_config_npm_version: string;
	export const XDG_CONFIG_DIRS_VSCODE_SNAP_ORIG: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const XDG_SESSION_CLASS: string;
	export const XDG_DATA_DIRS_VSCODE_SNAP_ORIG: string;
	export const LC_FIG_SET_PARENT: string;
	export const forgit_branch_delete: string;
	export const USER_ZDOTDIR: string;
	export const USERNAME: string;
	export const SSH_SOCKET_DIR: string;
	export const forgit_diff: string;
	export const TERM: string;
	export const npm_config_cache: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const forgit_ignore: string;
	export const WARP_IS_LOCAL_SHELL_SESSION: string;
	export const WINDOWPATH: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const SESSION_MANAGER: string;
	export const INVOCATION_ID: string;
	export const GTK_EXE_PREFIX: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const XDG_MENU_PREFIX: string;
	export const BAMF_DESKTOP_FILE_HINT: string;
	export const XDG_RUNTIME_DIR: string;
	export const GDK_BACKEND: string;
	export const DISPLAY: string;
	export const LOCPATH: string;
	export const forgit_add: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const DOTNET_BUNDLE_EXTRACT_BASE_DIR: string;
	export const VSCODE_INJECTION: string;
	export const GIO_MODULE_DIR_VSCODE_SNAP_ORIG: string;
	export const XDG_DATA_HOME: string;
	export const XMODIFIERS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const TERM_PROGRAM: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const GSETTINGS_SCHEMA_DIR: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const QT_ACCESSIBILITY: string;
	export const GDMSESSION: string;
	export const NO_AT_BRIDGE: string;
	export const GTK_PATH_VSCODE_SNAP_ORIG: string;
	export const forgit_reset_head: string;
	export const NIX_SSL_CERT_FILE: string;
	export const GTK_IM_MODULE_FILE_VSCODE_SNAP_ORIG: string;
	export const GPG_AGENT_INFO: string;
	export const GJS_DEBUG_OUTPUT: string;
	export const FORGIT_INSTALL_DIR: string;
	export const QT_IM_MODULE: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_DATA_DIRS: string;
	export const FIG_SET_PARENT: string;
	export const NVM_CD_FLAGS: string;
	export const ZDOTDIR: string;
	export const npm_config_global_prefix: string;
	export const QTWEBENGINE_DICTIONARIES_PATH: string;
	export const npm_command: string;
	export const forgit_stash_push: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const forgit_stash_show: string;
	export const forgit_checkout_commit: string;
	export const GTK_THEME: string;
	export const forgit_checkout_file: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		GJS_DEBUG_TOPICS: string;
		forgit_cherry_pick: string;
		forgit_rebase: string;
		USER: string;
		WARP_HONOR_PS1: string;
		TTY: string;
		npm_config_user_agent: string;
		GIO_MODULE_DIR: string;
		forgit_revert_commit: string;
		XDG_SESSION_TYPE: string;
		GTK_EXE_PREFIX_VSCODE_SNAP_ORIG: string;
		BUN_INSTALL: string;
		GIT_ASKPASS: string;
		npm_node_execpath: string;
		GDK_BACKEND_VSCODE_SNAP_ORIG: string;
		SHLVL: string;
		forgit_blame: string;
		npm_config_noproxy: string;
		HOME: string;
		LOCPATH_VSCODE_SNAP_ORIG: string;
		CHROME_DESKTOP: string;
		OLDPWD: string;
		DESKTOP_SESSION: string;
		GTK_PATH: string;
		TERM_PROGRAM_VERSION: string;
		forgit_clean: string;
		NVM_BIN: string;
		npm_package_json: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		GTK_IM_MODULE_FILE: string;
		NVM_INC: string;
		WARP_USE_SSH_WRAPPER: string;
		GNOME_SHELL_SESSION_MODE: string;
		GTK_MODULES: string;
		GSETTINGS_SCHEMA_DIR_VSCODE_SNAP_ORIG: string;
		forgit_log: string;
		forgit_fixup: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		NIX_PROFILES: string;
		MANAGERPID: string;
		forgit_checkout_branch: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		GLFW_IM_MODULE: string;
		FIG_SET_PARENT_CHECK: string;
		SYSTEMD_EXEC_PID: string;
		GSM_SKIP_SSH_AGENT_WORKAROUND: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		COLORTERM: string;
		FIG_PID: string;
		COLOR: string;
		DEBUGINFOD_URLS: string;
		CONDA_CHANGEPS1: string;
		NVM_DIR: string;
		GTK_IM_MODULE: string;
		LOGNAME: string;
		JOURNAL_STREAM: string;
		forgit_checkout_tag: string;
		_: string;
		npm_config_prefix: string;
		npm_config_npm_version: string;
		XDG_CONFIG_DIRS_VSCODE_SNAP_ORIG: string;
		MEMORY_PRESSURE_WATCH: string;
		XDG_SESSION_CLASS: string;
		XDG_DATA_DIRS_VSCODE_SNAP_ORIG: string;
		LC_FIG_SET_PARENT: string;
		forgit_branch_delete: string;
		USER_ZDOTDIR: string;
		USERNAME: string;
		SSH_SOCKET_DIR: string;
		forgit_diff: string;
		TERM: string;
		npm_config_cache: string;
		GNOME_DESKTOP_SESSION_ID: string;
		forgit_ignore: string;
		WARP_IS_LOCAL_SHELL_SESSION: string;
		WINDOWPATH: string;
		npm_config_node_gyp: string;
		PATH: string;
		SESSION_MANAGER: string;
		INVOCATION_ID: string;
		GTK_EXE_PREFIX: string;
		NODE: string;
		npm_package_name: string;
		XDG_MENU_PREFIX: string;
		BAMF_DESKTOP_FILE_HINT: string;
		XDG_RUNTIME_DIR: string;
		GDK_BACKEND: string;
		DISPLAY: string;
		LOCPATH: string;
		forgit_add: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		DOTNET_BUNDLE_EXTRACT_BASE_DIR: string;
		VSCODE_INJECTION: string;
		GIO_MODULE_DIR_VSCODE_SNAP_ORIG: string;
		XDG_DATA_HOME: string;
		XMODIFIERS: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		TERM_PROGRAM: string;
		VSCODE_GIT_IPC_HANDLE: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		GSETTINGS_SCHEMA_DIR: string;
		SHELL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		QT_ACCESSIBILITY: string;
		GDMSESSION: string;
		NO_AT_BRIDGE: string;
		GTK_PATH_VSCODE_SNAP_ORIG: string;
		forgit_reset_head: string;
		NIX_SSL_CERT_FILE: string;
		GTK_IM_MODULE_FILE_VSCODE_SNAP_ORIG: string;
		GPG_AGENT_INFO: string;
		GJS_DEBUG_OUTPUT: string;
		FORGIT_INSTALL_DIR: string;
		QT_IM_MODULE: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		PWD: string;
		npm_execpath: string;
		XDG_CONFIG_DIRS: string;
		XDG_DATA_DIRS: string;
		FIG_SET_PARENT: string;
		NVM_CD_FLAGS: string;
		ZDOTDIR: string;
		npm_config_global_prefix: string;
		QTWEBENGINE_DICTIONARIES_PATH: string;
		npm_command: string;
		forgit_stash_push: string;
		MEMORY_PRESSURE_WRITE: string;
		forgit_stash_show: string;
		forgit_checkout_commit: string;
		GTK_THEME: string;
		forgit_checkout_file: string;
		INIT_CWD: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
