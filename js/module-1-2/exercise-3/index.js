"use strict";

const numbers = [];

for (let i=1; i <= 3; i++) {
    let value = prompt(`Enter number ${i}`);
    numbers.push(value)
}

let sum = 0;
let product = 1; 
let avg = 0;

for (let x of numbers) {
    sum += parseInt(x);
    product *= parseInt(x);
    avg = sum / 3;
}

document.querySelector("#out").innerHTML = "Sum: " + sum + "<br>" + "Product: " + product + "<br>" + "Average: " + avg;