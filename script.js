var date = new Date();
clock = document.getElementById("clock");
dateHTML = document.getElementById("date");
const searchbar = document.getElementById("searchbar");

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
