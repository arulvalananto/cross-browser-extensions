let contextMenuItem = {
    id: "spendMoney",
    title: "Spend Money",
    contexts: ["selection"],
};
chrome.contextMenus.create(contextMenuItem);

function isInt(value) {
    return (
        !isNaN(value) &&
        parseInt(Number(value)) == value &&
        !isNaN(parseInt(value, 10))
    );
}

chrome.contextMenus.onClicked.addListener(function (clickData) {
    if (clickData.menuItemId == "spendMoney" && clickData.selectionText) {
        if (isInt(clickData.selectionText)) {
            chrome.storage.sync.get(["total", "limit"], function (budget) {
                let newTotal = 0;
                if (budget.total) {
                    newTotal += +budget.total;
                }
                newTotal += +clickData.selectionText;
                chrome.storage.sync.set({ total: newTotal }, function () {
                    if (newTotal >= budget.limit) {
                        let notify = {
                            type: "basic",
                            iconUrl: "icon48.png",
                            title: "Limit Reached",
                            message: "Uh oh! You reached your limit :(",
                        };
                        chrome.notifications.create(
                            "LimitNotification",
                            notify
                        );
                    }
                });
            });
        }
    }
});

chrome.storage.onChanged.addListener(function (changes, storageName) {
    console.log(changes);
    chrome.browserAction.setBadgeText({
        Text: changes.total.newValue.toString(),
    });
});
