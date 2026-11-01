"use strict";

const arr = ["First item", "Second item", "Third item"];

for (const x of arr) {
    const li = document.createElement("li");
    li.innerText = x;
    document.getElementById("target").appendChild(li);
}

document.getElementById("target").setAttribute("class", "my-item");

