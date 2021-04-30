chrome.tabs.query({ active: true, currentWindow: true }, function (tab) {
    chrome.action.show(tabs[0].id);
});
