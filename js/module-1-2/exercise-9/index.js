'use strict';

const foo = parseInt(prompt("Enter a number, the program will tell you whether its a prime number or not"));
let result = foo > 1;

for (let i = 2; i<foo; i++) {
    if (foo % i == 0) {
        result = false;
        break
    }
}

if (result) { 
    const out = document.getElementById("out").innerHTML = `${foo} is a prime number.`;
} else {
    const out = document.getElementById("out").innerHTML = `${foo} is not a prime number.`
}