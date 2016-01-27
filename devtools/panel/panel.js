(function(){

	'use strict';
	var devtoolsPort = chrome.runtime.connect({
		name: 'devtools'
	});

	document.addEventListener('click', function(){
		devtoolsPort.postMessage({
			greeting: "Hello from devtools panel"
		});
	});

})();