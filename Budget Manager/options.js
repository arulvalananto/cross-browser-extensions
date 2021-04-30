$(function () {
    $("#saveLimit").click(function () {
        let limit = $("#limit").val();
        if (limit) {
            chrome.storage.sync.set({ limit: limit }, function () {
                close();
            });
        }
    });

    $("#resetTotal").click(function () {
        chrome.storage.sync.set({ total: 0 }, function () {
            let notify = {
                type: "basic",
                iconUrl: "icon48.png",
                title: "Total Resettted",
                message: "Reset total is successfully completed",
            };
            chrome.notifications.create("TotalReset", notify);
            close();
        });
    });
});
