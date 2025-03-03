import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.sveltekit.capacitor', // TODO: add your app id
	appName: 'SvelteKit Capacitor',
	webDir: 'build',
	bundledWebRuntime: false,
	plugins: {
		"SplashScreen": {
			"launchShowDuration": 0
		}
	},
	// remove server section before making production build
	server: {
		// for android only, below settings will work out of the box
		// for iOS or both, change the url to http://your-device-ip 
		// To discover your workstation IP, just run ifconfig
		"url": "http://192.168.1.140:5001/add-players",
		"cleartext": true
	}
};

export default config;
