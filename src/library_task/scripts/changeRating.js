import { starGenerate } from './renderCards.js';

function changeRating(e) {
    const target = e.target;
    const starNumber = target.className.split('')[4];
    const allStars = target.parentNode;
    allStars.innerHTML = `
    <span class="star1"></span>
    <span class="star2"></span>
    <span class="star3"></span>
    <span class="star4"></span>
    <span class="star5"></span>
    `;
    const id = allStars.parentNode.id.split('')[4];
    starGenerate(id, starNumber);
}

document.querySelector('.cards').addEventListener('click', changeRating);
