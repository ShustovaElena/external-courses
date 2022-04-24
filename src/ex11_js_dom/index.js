// CONST

const wrapper = document.querySelector('.wrapper');
const leftArrowSlider = document.querySelector('.left-arrow-slider');
const rightArrowSlider = document.querySelector('.right-arrow-slider');
const dotsArray = document.querySelectorAll('.switcher > label > input');
const span = document.querySelector('.change-span');
const switcher = document.querySelector('.switcher');

// FUNCTION

const arraySlider = ['assets/img/welcome-slider-1.jpg', 'assets/img/welcome-slider-2.jpg', 'assets/img/welcome-slider-3.jpg', 'assets/img/welcome-slider-4.jpg', 'assets/img/welcome-slider-5.jpg'];

let currentIndex = 0;

function toggleSliderRight() {
    currentIndex++;
    if (currentIndex >= arraySlider.length) {
        currentIndex = 0;
    }
    wrapper.style.backgroundImage = `url(${arraySlider[currentIndex]})`;
    span.innerHTML = `0${currentIndex + 1}`;
}

function toggleSliderLeft() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = arraySlider.length - 1;
    }

    wrapper.style.backgroundImage = `url(${arraySlider[currentIndex]})`;
    span.innerHTML = `0${currentIndex + 1}`;
}

let currentDotsIndex = 0;
dotsArray[0].style.backgroundColor = '#9d8665';

function toggleDotsNext() {
    dotsArray[currentDotsIndex].style.backgroundColor = '#ffffff';
    currentDotsIndex++;
    if (currentDotsIndex >= dotsArray.length) {
        currentDotsIndex = 0;
    }
    dotsArray[currentDotsIndex].style.backgroundColor = '#9d8665';
}

function toggleDotsPrev() {
    dotsArray[currentDotsIndex].style.backgroundColor = '#ffffff';
    currentDotsIndex--;
    if (currentDotsIndex < 0) {
        currentDotsIndex = dotsArray.length - 1;
    }
    dotsArray[currentDotsIndex].style.backgroundColor = '#9d8665';
}

switcher.onclick = function (e) {
    const target = e.target || window.EventTarget;
    const number = target.getAttribute('id');

    dotsArray[currentDotsIndex].style.backgroundColor = '#ffffff';
    currentDotsIndex = number;
    dotsArray[currentDotsIndex].style.backgroundColor = '#9d8665';

    wrapper.style.backgroundImage = `url(${arraySlider[number]})`;
    span.innerHTML = `0${+number + 1}`;
};

// EVENTS

rightArrowSlider.addEventListener('click', toggleSliderRight);
rightArrowSlider.addEventListener('click', toggleDotsNext);
leftArrowSlider.addEventListener('click', toggleSliderLeft);
leftArrowSlider.addEventListener('click', toggleDotsPrev);
