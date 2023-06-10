var date = new Date();
clock = document.getElementById("clock");
dateHTML = document.getElementById("date");
const searchbar = document.getElementById("searchbar");
const toggleBackground = document.getElementById("toggle-background");
var change = 0;

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var day;
var month;

/* var hours = time.getHours();
  var ampm = hours >= 12 ? "PM" : "AM"; */
  
function updateClock() {
  var time = new Date();
  var currentTime24 = time.toTimeString().split(" ")[0];
  clock.innerHTML = currentTime24;
}

updateClock();

setInterval(updateClock, 1000);

days.forEach((days, index) => {
  if (index == new Date().getDay()) {
    day = days;
  }
});
months.forEach((months, index) => {
  if (index == new Date().getMonth()) {
    month = months;
  }
});

dateHTML.innerHTML = day + " " + date.getDate() + " " + month;

searchbar.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    window.location = "https://www.google.com/search?q=" + searchbar.value;
  }
});

toggleBackground.addEventListener("click", () => {
  if (change == 0) {
    change = 1;
    document.body.style.background = "rgb(8, 8, 8)";
    document.cookie = "toggle=color";
    return;
  }
  if (change == 1) {
    change = 0;
    document.body.style.background = "";
    document.cookie = "toggle=image";
    return;
  }
});

window.onload = function () {
  if (document.cookie == "toggle=color") {
    document.body.style.background = "rgb(8, 8, 8)";
    change = 1;
    return;
  }
  if (document.cookie == "toggle=image") {
    document.body.style.background = "";
    change = 0;
    return;
  }
};
