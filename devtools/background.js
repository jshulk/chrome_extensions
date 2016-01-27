(function(){
	chrome.runtime.onConnect.addListener(function(devtoolsPort){
		devtoolsPort.onMessage.addListener(function(message){
			console.log(message.greeting);
		});
	});
})();