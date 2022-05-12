import { data } from '../data.js';
import { renderCards } from './renderCards.js';

const addBookButton = document.querySelector('.add-button');

function addBook() {
    const title = document.querySelector('.book-title');
    const author = document.querySelector('.book-author');
    const bookImg = document.querySelector('.book-img');
    const newBook = {
        src: URL.createObjectURL(bookImg.files[0]),
        title: title.value,
        author: author.value,
        rating: 1,
    };
    data.push(newBook);
    document.querySelector('.cards').innerHTML = '';
    renderCards(data);
    document.querySelector('.overlay').remove();
}

function modalWindow() {
    const div = document.createElement('div');
    div.className = 'overlay';
    div.innerHTML = `
        <div class="modal-window">
            <h2>Add book</h2>
            <label>Title <input class="book-title" type="text"></label>
            <label>Author <input class="book-author" type="text"></label>
            <label>Добавьте обложку: <input class="book-img" type="file" accept="image/png, image/jpeg"></label>  
            <button class="new-book">Add</button>
        </div>
    `;
    document.querySelector('main').append(div);
    document.querySelector('.new-book').addEventListener('click', addBook);
}

addBookButton.addEventListener('click', modalWindow);
