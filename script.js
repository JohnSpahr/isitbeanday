//IS IT BEAN DAY? script by John Spahr

var today = new Date();
var dayOfMonth = String(today.getDate()).padStart(2, '0')
var currentMonth = String(today.getMonth() + 1).padStart(2, '0');

today = currentMonth + "/" + dayOfMonth;

var label = document.getElementById("answer");

if (today == "01/06") {
    //Today is Bean Day
    label.style.color = "#ffff00";
    label.innerText = "Yes! Today is Bean Day, obviously the most important holiday of the year! Hooray!"
} else {
    //Today is not Bean Day
    label.style.color = "#ff0000";
    label.innerText = "No. Bean Day is not today, unfortunately. Check back on January 6th!"
}