"use strict";

const confirmation = confirm("Should i calculate the root?");

if (confirmation == true) {
    const foo = prompt("Enter a number");
    if (foo < 0) {
        document.querySelector("#out").innerHTML = "You cannot calculate the square root of negative numbers."
    }
    else {
        const foo_sqrt = Math.sqrt(foo);
        document.querySelector("#out").innerHTML = "The square root of " + foo + " is " + foo_sqrt;
    }
}
else if (confirmation == false) {
    document.querySelector("#out").innerHTML = "The square root is not calculated";
}