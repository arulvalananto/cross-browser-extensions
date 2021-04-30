console.log("Content.js is running...");

chrome.runtime.onMessage.addListener(function (
    message,
    sender,
    senderResponse
) {
    console.log(message);
    if (message.txt) {
        let paragraph = document.getElementsByTagName("p");
        for (el of paragraph) {
            el.innerHTML = message.txt;
        }
    }
});
