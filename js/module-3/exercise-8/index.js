'use strict';

const sounds = ["Meow", "Woof", "Moo"];

function concat(arr) {
    let y = "";

    for (const x of arr) {
        y += x; 
    }
    return y;
}

const foo = concat(sounds);

document.querySelector("#out").innerHTML = foo;
