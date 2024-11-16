export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["AppImages/android/android-launchericon-144-144.png","AppImages/android/android-launchericon-192-192.png","AppImages/android/android-launchericon-48-48.png","AppImages/android/android-launchericon-512-512.png","AppImages/android/android-launchericon-72-72.png","AppImages/android/android-launchericon-96-96.png","AppImages/icons.json","AppImages/ios/100.png","AppImages/ios/1024.png","AppImages/ios/114.png","AppImages/ios/120.png","AppImages/ios/128.png","AppImages/ios/144.png","AppImages/ios/152.png","AppImages/ios/16.png","AppImages/ios/167.png","AppImages/ios/180.png","AppImages/ios/192.png","AppImages/ios/20.png","AppImages/ios/256.png","AppImages/ios/29.png","AppImages/ios/32.png","AppImages/ios/40.png","AppImages/ios/50.png","AppImages/ios/512.png","AppImages/ios/57.png","AppImages/ios/58.png","AppImages/ios/60.png","AppImages/ios/64.png","AppImages/ios/72.png","AppImages/ios/76.png","AppImages/ios/80.png","AppImages/ios/87.png","AppImages/windows11/LargeTile.scale-100.png","AppImages/windows11/LargeTile.scale-125.png","AppImages/windows11/LargeTile.scale-150.png","AppImages/windows11/LargeTile.scale-200.png","AppImages/windows11/LargeTile.scale-400.png","AppImages/windows11/SmallTile.scale-100.png","AppImages/windows11/SmallTile.scale-125.png","AppImages/windows11/SmallTile.scale-150.png","AppImages/windows11/SmallTile.scale-200.png","AppImages/windows11/SmallTile.scale-400.png","AppImages/windows11/SplashScreen.scale-100.png","AppImages/windows11/SplashScreen.scale-125.png","AppImages/windows11/SplashScreen.scale-150.png","AppImages/windows11/SplashScreen.scale-200.png","AppImages/windows11/SplashScreen.scale-400.png","AppImages/windows11/Square150x150Logo.scale-100.png","AppImages/windows11/Square150x150Logo.scale-125.png","AppImages/windows11/Square150x150Logo.scale-150.png","AppImages/windows11/Square150x150Logo.scale-200.png","AppImages/windows11/Square150x150Logo.scale-400.png","AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png","AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png","AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png","AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png","AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png","AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png","AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png","AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png","AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png","AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png","AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png","AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png","AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png","AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png","AppImages/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png","AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-16.png","AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-20.png","AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-24.png","AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-256.png","AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-30.png","AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-32.png","AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-36.png","AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-40.png","AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-44.png","AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-48.png","AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-60.png","AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-64.png","AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-72.png","AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-80.png","AppImages/windows11/Square44x44Logo.altform-unplated_targetsize-96.png","AppImages/windows11/Square44x44Logo.scale-100.png","AppImages/windows11/Square44x44Logo.scale-125.png","AppImages/windows11/Square44x44Logo.scale-150.png","AppImages/windows11/Square44x44Logo.scale-200.png","AppImages/windows11/Square44x44Logo.scale-400.png","AppImages/windows11/Square44x44Logo.targetsize-16.png","AppImages/windows11/Square44x44Logo.targetsize-20.png","AppImages/windows11/Square44x44Logo.targetsize-24.png","AppImages/windows11/Square44x44Logo.targetsize-256.png","AppImages/windows11/Square44x44Logo.targetsize-30.png","AppImages/windows11/Square44x44Logo.targetsize-32.png","AppImages/windows11/Square44x44Logo.targetsize-36.png","AppImages/windows11/Square44x44Logo.targetsize-40.png","AppImages/windows11/Square44x44Logo.targetsize-44.png","AppImages/windows11/Square44x44Logo.targetsize-48.png","AppImages/windows11/Square44x44Logo.targetsize-60.png","AppImages/windows11/Square44x44Logo.targetsize-64.png","AppImages/windows11/Square44x44Logo.targetsize-72.png","AppImages/windows11/Square44x44Logo.targetsize-80.png","AppImages/windows11/Square44x44Logo.targetsize-96.png","AppImages/windows11/StoreLogo.scale-100.png","AppImages/windows11/StoreLogo.scale-125.png","AppImages/windows11/StoreLogo.scale-150.png","AppImages/windows11/StoreLogo.scale-200.png","AppImages/windows11/StoreLogo.scale-400.png","AppImages/windows11/Wide310x150Logo.scale-100.png","AppImages/windows11/Wide310x150Logo.scale-125.png","AppImages/windows11/Wide310x150Logo.scale-150.png","AppImages/windows11/Wide310x150Logo.scale-200.png","AppImages/windows11/Wide310x150Logo.scale-400.png","favicon.png","file.png","hand_right.png","high-five.png","icn_mokel_red.png","manifest.json","plus-18-light.png","preparty.png","svelte_cap.png"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.a4bbe507.js","app":"_app/immutable/entry/app.51561451.js","imports":["_app/immutable/entry/start.a4bbe507.js","_app/immutable/chunks/scheduler.fc18af13.js","_app/immutable/chunks/singletons.3020cb73.js","_app/immutable/entry/app.51561451.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.fc18af13.js","_app/immutable/chunks/index.b2400071.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(app)/add-players",
				pattern: /^\/add-players\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(app)/play/[mode]",
				pattern: /^\/play\/([^/]+?)\/?$/,
				params: [{"name":"mode","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(app)/select-mode",
				pattern: /^\/select-mode\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
