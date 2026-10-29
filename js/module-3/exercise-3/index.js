"use strict";

const dogs = [];

for (let i = 0; i < 6; i++) {
    const name = prompt(`Enter dog number #${i+1}'s name`);
    dogs.push(name);
}

dogs.sort().reverse();

for (const x of dogs) {
    const node = document.createElement("li");
    const text = document.createTextNode(`${x}`)
    node.appendChild(text);
    document.getElementById("out").appendChild(node);
}