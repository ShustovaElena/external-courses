import { data } from '../data.js';

const cardsWrapper = document.querySelector('.cards');

function starGenerate(id, starCount) {
    const card = document.getElementById(`card${id}`);
    const cardRate = card.querySelector('.rating-result');
    for (let i = 1; i <= starCount; i++) {
        cardRate.querySelector(`.star${i}`).classList.add('active');
    }
}

function drawCard(id, src, title, author, rating) {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('id', `card${id}`);
    card.innerHTML = `
        <img class="card-img"
        src=${src}
        alt=""/>
        <h2 class="card-name">${title}</h2>
        <p class="card-author">by ${author}</p>
        <div class="rating-result">
            <span class="star1"></span>
            <span class="star2"></span>
            <span class="star3"></span>
            <span class="star4"></span>
            <span class="star5"></span>
        </div>
    `;
    cardsWrapper.appendChild(card);
    starGenerate(id, rating);
}

export function renderCards(content) {
    content.map((item) => drawCard(item.id, item.src, item.title, item.author, item.rating));
}

renderCards(data);
