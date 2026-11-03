'use strict';

function ImageChange() {
    const image = document.getElementById("target");
    image.src = `img/picB.jpg`
}

const foo = document.getElementById("trigger");
foo.addEventListener("pointerenter", ImageChange);

