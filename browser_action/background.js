function handleClick(){
	chrome.tabs.create({
		index: 0,
		url: "http://google.com"
	}, function(tab){
		console.log(tab.url);
	});
}