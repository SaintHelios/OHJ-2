"use strict";

const rolls = prompt("How many rolls?");

let sum = 0

for (let i = 0; i<rolls; i++) {
    sum += Math.floor(Math.random() * 6) + 1;
}

document.querySelector("#out").innerHTML = "The sum of the dice rolls is " + sum;
