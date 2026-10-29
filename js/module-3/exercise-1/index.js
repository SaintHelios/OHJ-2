"use strict";

const arr = [];

for (let i = 0; i<5; i++) {
    let input = prompt(`Enter number ${i+1}`);
    arr.push(input);
}

for (let i = 4; i >= 0; i--) {
    const v = document.createElement("li");
    const x = document.createTextNode(`${arr[i]}`);
    v.appendChild(x)
    document.getElementById("out").appendChild(v)
    console.log(`${arr[i]}`);
}