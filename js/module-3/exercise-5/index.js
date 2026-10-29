const y = [];

let cond = true;

while (cond == true) {
    let x = prompt("Input a number");
    if (y.includes(x)) {
        cond = false;
    } else {
        y.push(x);
    }
}

y.sort((a, b) => a - b);
console.log(y);

for (const z of y) {
    const node = document.createElement("li");
    const text = document.createTextNode(`${z}`);
    node.appendChild(text);
    document.getElementById("out").appendChild(node);
}