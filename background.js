

chrome.browserAction.onClicked.addListener(function(tab) {

	chrome.tabs.executeScript({
		file: 'jank-frame.js'
	}, res => console.log( 'result', res ) );

});
