function setup() {
    noCanvas();
    let userinput = select("#userinput");
    userinput.input(function () {
        // Send a message to the content script
        chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tab) {
                let message = userinput.value();
                let msg = {
                    txt: message,
                };
                chrome.tabs.sendMessage(tab[0].id, msg);
            }
        );
    });
}

function draw() {}
