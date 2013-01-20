console.log("loading...");

chrome.proxy.settings.set({
	value: {
		mode: "pac_script",
		pacScript: {
			//url: "https://mediahint.com/default.pac"
			url:"https://raw.github.com/maestr0/chrome-us-proxy-extension/master/default.pac"
		}
	},
	scope: "regular"
});