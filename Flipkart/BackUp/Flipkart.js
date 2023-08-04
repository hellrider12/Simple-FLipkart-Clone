let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');

let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let itemsLength = items.length - 1;

next.onclick = function () {
    if (active + 1 > itemsLength) {
        active = 0;
    }
    else {
        active += 1;
    }
    reloadSlider();
}

prev.onclick = function () {
    if (active - 1 < 0) {
        active = itemsLength;
    }
    else {
        active -= 1;
    }
    reloadSlider();
}

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';
    clearInterval(refreshSlider);
    setTimeout(refreshSlider = setInterval(() => { next.click() }, 3000), 3000);
}

let refreshSlider = setInterval(() => { next.click() }, 3000);



const productContainers = [...document.querySelectorAll('.SliderBadge1')];


const Bnext = [...document.querySelectorAll('#B1next')];
const Bprev = [...document.querySelectorAll('#B1prev')];

let count=0;

productContainers.forEach((item, i) => {
    let containerDimension = item.getBoundingClientRect();
    let containerWidth = containerDimension.width-200;

    
    Bnext[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth;
    })

    Bprev[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth;
    })
})