chrome.topSites.get(function(topSites){
	console.log(topSites);
});

chrome.bookmarks.getRecent(10, function(bookmarks){
	console.log(bookmarks);
});

chrome.history.search({text: ""}, function(history){
	console.log(history);
});