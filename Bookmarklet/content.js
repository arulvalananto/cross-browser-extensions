console.log("Chrome Extension Works!");

let spanner = document.getElementsByTagName("span");

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.txt) {
        for (elt of spanner) {
            elt.style["background-color"] = "red";
        }
    }
});
