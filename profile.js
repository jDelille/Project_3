let color = document.querySelector('#color');
let place = document.querySelector("#place");
let ritual = document.querySelector("#ritual");

function favColor() {
    alert("Blue");
}

color.addEventListener('click', favColor);

function favPlace() {
    alert("Cave Creek, Arizona")
}

place.addEventListener('click', favPlace);

function favRitual() {
    alert(`Get out of bed and immediately make some black coffee!!!!!!! Can't function without it.`)
}

ritual.addEventListener('click', favRitual);
