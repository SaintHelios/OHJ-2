"use strict";

const year = prompt("Enter a year");

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    document.querySelector("#out").innerHTML = "The year " + year + " is a leap year.";
}
else {
    document.querySelector("#out").innerHTML = "The year " + year + " is not a leap year."; 
}