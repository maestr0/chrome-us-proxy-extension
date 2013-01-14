console.log("loading...");

chrome.proxy.settings.set({
	value: {
		mode: "pac_script",
		pacScript: {
			//url: "https://mediahint.com/default.pac"
			data: 'function FindProxyForURL(e,t){var n=myIpAddress();var r=n.split(".");var i=parseInt(r[3]);if(i==Math.floor(i/2)*2){proxy="PROXY 165.225.138.135:80; PROXY 165.225.136.212:80"}else{proxy="PROXY 165.225.136.212:80; PROXY 165.225.138.135:80"}if(t=="localhost"||shExpMatch(t,"localhost.*")||shExpMatch(t,"*.local")||t=="127.0.0.1"){return"DIRECT"}if(shExpMatch(t,"/^d+.d+.d+.d+$/g")){if(isInNet(t,"10.0.0.0","255.0.0.0")||isInNet(t,"192.168.0.0","255.255.0.0")){return"DIRECT"}}if(/(^link\.theplatform\.com$)|(^urs\.pbs\.org$)/.test(t)){return"PROXY mediahint.cloudapp.net:80"}if(/songza\.com\/config\.js|\/video\/geolocation|geoCountry\.xml|geo-check|\.ism\/manifest|\/services\/viewer\/(htmlFederated|federated_f9)|\/services\/messagebroker\/amf/.test(e)){return proxy}if(/atv-(ps|ext)\.amazon\.com/.test(t)){return proxy}if(/oscarapp\/config/.test(e)){return proxy}if(/^api\.abc\.com$|^w88\.go\.com$|^videoservices\.nbcuni\.com$/.test(t)){return proxy}if(/songza\.com\/(api|advertising)\/|hulu\.com\/mozart\/.*|\.(ico|jpg|png|gif|mp3|js|css|mp4|flv|swf|json)(\?.*)?$|^crackle\.com\/flash\/$/.test(e)||/^(contactus|presentationtracking|blog|nordicsblog)\.netflix\.com$|^(r|p|t2|ll\.a|t|t-l3|ads|assets|urlcheck)\.hulu\.com$|^(stats|blog|audio.*|const.*|mediaserver.*|cont.*)\.pandora\.com$/.test(t)){return"DIRECT"}if(/(^([\w\.-]+\.)?(hulu|netflix|pandora|songza|www\.iheart|www\.crackle)\.com$)/.test(t)){return proxy}return"DIRECT"}'
		}
	}, scope: "regular"
});