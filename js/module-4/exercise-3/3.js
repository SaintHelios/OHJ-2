'use strict';
const names = ['John', 'Paul', 'Jones'];

for (const x of names) {
    const node = document.createElement("li")
    const text = document.createTextNode(`${x}`)
    node.appendChild(text);
    document.getElementById("target").appendChild(node);
}