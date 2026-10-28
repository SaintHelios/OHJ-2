"use strict";

const name = prompt("Enter your name");

const foo = Math.floor(Math.random() * 4) + 1;

if (foo == 1) {
    document.querySelector("#out").innerHTML = name + ", You are Griffyndor";
}
else if (foo == 2) {
    document.querySelector("#out").innerHTML = name + ", You are Ravenclaw";
}
else if (foo == 3) {
    document.querySelector("#out").innerHTML = name + ", You are Hufflepuff";
}
else if (foo == 4) {
    document.querySelector("#out").innerHTML = name + ", You are Slytherin";
}