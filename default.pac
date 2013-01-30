function FindProxyForURL(url, host){
	var myip = myIpAddress();
	var ipbits = myip.split(".");
	var myseg = parseInt(ipbits[3]);
	if(myseg == Math.floor(myseg/2)*2){
		proxy = 'PROXY 165.225.131.153:80; PROXY 165.225.130.193:80';
	} else {
		proxy = 'PROXY 165.225.130.193:80; PROXY 165.225.131.153:80';
	}
	if((host == 'localhost')||(shExpMatch(host, 'localhost.*'))||(shExpMatch(host, '*.local'))||(host == '127.0.0.1')){
		return 'DIRECT';
	}
	if(shExpMatch(host, '/^\d+\.\d+\.\d+\.\d+$/g')){
		if(isInNet(host, '10.0.0.0', '255.0.0.0')||isInNet(host, '192.168.0.0', '255.255.0.0')) {
			return 'DIRECT';
		}
	}
	if((/(^link\.theplatform\.com$)|(^urs\.pbs\.org$)/).test(host)){
		return 'PROXY mediahint.cloudapp.net:80';
	}
	if((/songza\.com\/config\.js|geofilter|\/video\/geolocation|geoCountry\.xml|geo-check|\.ism\/manifest|\/services\/viewer\/(htmlFederated|federated_f9)|\/services\/messagebroker\/amf/).test(url)){
		return proxy;
	}
	if((/atv-(ps|ext)\.amazon\.com/).test(host)){
		return proxy;
	}
	if((/oscarapp\/config/).test(url)){
		return proxy;
	}
	if((/^api\.abc\.com$|^w88\.go\.com$/).test(host)){
		return proxy;
	}
	if((/^(www\.)?thewb\.com$/).test(host)){
		return proxy;
	}
	if((/^(www\.|ext\.)?last\.fm$/).test(host)){
		return "PROXY 165.225.130.193:80";
	}
	if((/songza\.com\/(api|advertising)\/|hulu\.com\/mozart\/.*|\.(ico|jpg|png|gif|mp3|js|css|mp4|flv|swf|json)(\?.*)?$|^crackle\.com\/flash\/$/).test(url)||(/^(contactus|presentationtracking|blog|nordicsblog)\.netflix\.com$|^(r|p|t2|ll\.a|t|t-l3|ads|assets|urlcheck)\.hulu\.com$|^(stats|blog|audio.*|const.*|mediaserver.*|cont.*)\.pandora\.com$/).test(host)){
		return 'DIRECT';
	}
	if((/(^([\w\.-]+\.)?(netflix|pandora|spotify|songza|www\.iheart|www\.crackle)\.com$)/).test(host)){
		return proxy;
	}
	if((/^([\w\.-]+\.)?hulu\.com$/).test(host)){
		return "PROXY 165.225.130.193:80";
	}
	return 'DIRECT';
}
