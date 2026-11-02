'use strict'

function even(arr) {
    const even_arr = [];

    for (const x of arr) {
        if (x % 2 == 0) {
            even_arr.push(x);
        }
    }
    return even_arr;
} 

const arr_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr_2 = even(arr_1);

console.log(`Original array: {${arr_1}}`);
console.log(`Evened array: {${arr_2}}`)

document.getElementById("out").innerHTML = `Original array: {${arr_1}} <br> Evened array: {${arr_2}}`;