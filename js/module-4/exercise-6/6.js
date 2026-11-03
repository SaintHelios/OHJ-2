"use strict";

function meow(){
    alert("Button Clicked");
}

const button = document.querySelector("button");
button.addEventListener("click", meow);