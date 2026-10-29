"use strict";

const start = prompt("Enter the start year");
const end = prompt("Enter the end year");

for (let year = start; year<=end; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        const node = document.createElement("li");
        const nodeyear = document.createTextNode(year);
        node.appendChild(nodeyear);
        document.getElementById("out").appendChild(node);
    }
}