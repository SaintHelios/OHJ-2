'use strict'; 

const sides = parseInt(prompt("Enter the amount of sides for the dice"))

function roll(foo) {
    const roll = Math.floor(Math.random() * foo) + 1;
    return roll;
}

let meow = 0;

// might be malicious, idk
while (meow != sides) {

    meow = roll(sides);
    
    const node = document.createElement("li");
    node.innerText = meow;
    
    document.getElementById("out").appendChild(node);
}

