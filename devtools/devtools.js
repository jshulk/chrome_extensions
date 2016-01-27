chrome.devtools.panels.create(
	"Example Panel",
	null,
	"panel/panel.html",
	null
);

chrome.devtools.panels.sources.createSidebarPane("My Sidebar pane", function(pane){
	pane.setPage("pane/pane.html");
	pane.setHeight("200px");
	pane.onShown.addListener(function(){
		pane.setExpression('(' + getAllDivs.toString() + ')()');
	});
});

function getAllDivs(){
	return Array.prototype.slice.call(document.getElementsByTagName("div"));
}