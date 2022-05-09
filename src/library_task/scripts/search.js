import { data } from '../data.js';
import { renderCards } from './renderCards.js';

const search = document.querySelector('.search');
const input = document.querySelector('.search-input');

function filterByInputData(inputValue, changeData) {
    const regexp = new RegExp(`${inputValue}`, 'i');

    const filterData = changeData.filter((elem) => (elem.title.match(regexp)
    || elem.author.match(regexp) != null));
    return filterData;
}

export function searchByUserInput() {
    const userInput = input.value;

    if (!userInput) return;
    const filteredCards = filterByInputData(userInput, data);
    document.querySelector('.cards').innerHTML = '';
    renderCards(filteredCards);
}

search.addEventListener('input', searchByUserInput);
