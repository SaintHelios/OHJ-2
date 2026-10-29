"use strict";

const arr = [];
let x; 

while (x != 0) {
    x = prompt("Input a number. Inputting 0 stops the loop.");
    if (x != 0) {
        arr.push(x);   
    }
}

arr.sort((a, b) => b - a);

for (const x of arr) {
    const node = document.createElement("li");
    const text = document.createTextNode(`${x}`);
    node.appendChild(text);
    document.getElementById("out").appendChild(node);
}
console.log(arr);