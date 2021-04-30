$(function () {
    // chrome.storage.sync.get("total", function (budget) {
    //     $("#total").text(budget.total);
    // });
    // chrome.storage.sync.get("limit", function (budget) { // For getting single value from chrome storage
    //     $("#limit").text(budget.limit || 0);
    // });
    chrome.storage.sync.get(["total","limit"], function (budget) {
        $("#total").text(budget.total);
        $("#limit").text(budget.limit || 0);
    });
    $("#spendAmount").click(function () {
        chrome.storage.sync.get(["total", "limit"], function (budget) {
            let newTotal = 0;
            if (budget.total) {
                newTotal += +budget.total;
            }
            let amount = $("#amount").val();
            if (amount) {
                newTotal += +amount;
            }
            chrome.storage.sync.set({ total: newTotal }, function(){
                if(amount && newTotal >= budget.limit) {
                    let notify = {
                        type: 'basic',
                        iconUrl: 'icon48.png',
                        title: "Limit Reached",
                        message: "Uh oh! You reached your limit :("
                    }
                    chrome.notifications.create("LimitNotification", notify)
                }
            });

            $("#total").text(newTotal);
            $("#amount").val("");
        });
    });
});
