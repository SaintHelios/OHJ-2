'use strict';

const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];


for (const x of students) {
  const node = document.createElement("option");
  const foo = document.createTextNode(`${x.name}`);
  node.appendChild(foo);
  node.setAttribute("value", `${x.id}`);
  document.getElementById("target").appendChild(node)
}