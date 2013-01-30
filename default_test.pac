function FindProxyForURL(url, host) {
	if (Math.random() > 0.5) {
		proxy = 'PROXY 165.225.138.135:80; PROXY 165.225.136.212:80';
	} else {
		proxy = 'PROXY 165.225.136.212:80; PROXY 165.225.138.135:80';
	}
	if ((host == 'localhost') || (shExpMatch(host, 'localhost.*')) || (shExpMatch(host, '*.local')) || (host == '127.0.0.1')) {
		return 'DIRECT';
	}
	if (shExpMatch(host, '/^\d+\.\d+\.\d+\.\d+$/g')) {
		if (isInNet(host, '10.0.0.0', '255.0.0.0') || isInNet(host, '192.168.0.0', '255.255.0.0')) {
			return 'DIRECT';
		}
	}
	if ((/songza\.com\/(api|advertising)\/|hulu\.com\/mozart\/.*|\.(ico|jpg|png|gif|mp3|js|css|mp4|flv|swf|json)(\?.*)?$|^crackle\.com\/flash\/$/).test(url) || (/^(contactus|presentationtracking|blog|nordicsblog)\.netflix\.com$|^(r|p|t2|ll\.a|t|t-l3|ads|assets|urlcheck)\.hulu\.com$|^(stats|blog|audio.*|const.*|mediaserver.*|cont.*)\.pandora\.com$/).test(host)) {
		return 'DIRECT';
	}
	if ((/(^([\w\.-]+\.)?(hulu|netflix|pandora|songza|www\.iheart|www\.crackle)\.com$)/).test(host)) {
		return proxy;
	}
	return 'DIRECT';
}
