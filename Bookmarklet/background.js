console.log("background.js is running....");

chrome.browserAction.onClicked.addListener(function (tab) {
    let msg = {
        txt: "Hello New Tab",
    };
    chrome.tabs.sendMessage(tab.id, msg);
});
