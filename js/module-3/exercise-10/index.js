'use strict';

const candidates = parseInt(prompt("How many candidates?"));
const arr = []
for (let i = 1; i<=candidates; i++) {
    const fuu = prompt(`Enter candidate number #${i}'s name`);
    const foo = 
    {
        name: fuu,
        votes: 0,
    };
    arr.push(foo);
}

const voters = parseInt(prompt("How many voters?"));
for (let i = 1; i<=voters; i++) {
    const vote = prompt(`Voter number #${i}, who are you voting for?`);

    if (vote != null) {
        for (const x of arr) {
            if (vote == x.name) {
                x.votes += 1;
            }
        }
    }
}

arr.sort((a, b) => {
  return b.votes - a.votes;
});

document.querySelector("#out").innerHTML = `The winner is ${arr[0].name} <br> results:`; 
for (const x of arr) {
    const node = document.createElement("p");
    const text = document.createTextNode(`${x.name}: ${x.votes} votes`);
    node.appendChild(text);
    document.getElementById("list").appendChild(node);
}
