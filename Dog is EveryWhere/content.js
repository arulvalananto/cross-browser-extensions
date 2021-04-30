console.log("Dog Extension");

const images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
    select = Math.floor(Math.random() * 7 + 1);
    url = chrome.extension.getURL("dogs/" + select + ".jpg");
    images[i].src = url;
    images[i].style.objectFit = "cover";
}
