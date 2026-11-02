'use strict'; 

function roll() {
    const roll = Math.floor(Math.random() * 6) + 1;
    return roll;
}

let meow = 0;

while (meow != 6) {

    meow = roll();
    
    const node = document.createElement("li");
    node.innerText = meow;
    
    document.getElementById("out").appendChild(node);
}