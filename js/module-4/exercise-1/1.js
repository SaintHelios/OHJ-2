"use strict";

const ul = document.getElementById("target");
const html = 
    `<li>First item</li>
    <li>Second item</li>
    <li>Third item</li>`;

ul.innerHTML = html;
ul.setAttribute("class", "my-list")