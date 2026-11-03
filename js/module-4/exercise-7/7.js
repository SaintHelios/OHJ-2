'use strict';

const image = document.getElementById("target")

const foo = document.getElementById("trigger");
foo.addEventListener("pointerenter", function (evt) {
    image.src = `img/picB.jpg`
});

foo.addEventListener("mouseleave", function (evt) {
    image.src = `img/picA.jpg`
})