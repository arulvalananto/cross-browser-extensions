$(document).ready(function () {
    $("body").css(
        "background-image",
        `url("https://source.unsplash.com/random/?videogames")`
    );
    const changeTime = () => {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let day = hours > 12 ? "PM" : "AM";
        let hour = hours > 12 ? hours - 12 : hours;
        let formattedHour = hour < 10 ? "0" + hour : hour;
        $("#time").text(formattedHour + ":" + minutes + " " + day);
        setTimeout(changeTime, 60000);
    };
    changeTime();
});
