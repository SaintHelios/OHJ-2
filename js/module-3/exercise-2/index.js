"use strict";

const foo = prompt("Enter the number of participants");

const arr = []

for (let i = 0; i < foo; i++) {
    const name = prompt(`Enter participant number #${i+1}'s name`);
    arr.push(name);
}

arr.sort();
console.log(arr)
for (const x of arr) {
    const node = document.createElement("li");
    const text = document.createTextNode(`${x}`);
    node.appendChild(text);
    document.getElementById("out").appendChild(node);
}