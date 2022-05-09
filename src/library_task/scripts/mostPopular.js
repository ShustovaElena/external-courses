import { data } from '../data.js';
import { renderCards } from './renderCards.js';

const mostPopular = document.querySelector('.most-popular');

function filterByInputData(inputValue, changeData) {
    const regexp = new RegExp(`${inputValue}`, 'i');

    const filterData = changeData.filter((elem) => (elem.rating.match(regexp) != null));
    return filterData;
}

export function searchByUserInput() {
    const filteredCards = filterByInputData('5', data);
    document.querySelector('.cards').innerHTML = '';
    renderCards(filteredCards);
}

mostPopular.addEventListener('click', searchByUserInput);
