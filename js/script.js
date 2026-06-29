let btn3 = document.getElementById("btnIncrease");
let btn4 = document.getElementById("btnDecrease");
let element = document.getElementById("element");

let initialSize = window.getComputedStyle(element).fontSize;
// console.log(initialSize, typeof(initialSize));

// console.log(initialSize.substring(0, (initialSize.length - 2)), typeof(initialSize))

initialSize = parseInt(initialSize.substring(0, (initialSize.length - 2)));

// console.log(initialSize, typeof(initialSize));

btn3.addEventListener('click', function() {

    initialSize = initialSize + 10;
    // console.log(initialSize);

    element.style.fontSize = initialSize + "px";

})

btn4.addEventListener('click', function() {

    initialSize = initialSize - 10;
    // console.log(initialSize);

    element.style.fontSize = initialSize + "px";

})