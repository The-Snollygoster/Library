const button = document.getElementById('newBook');
const table = document.getElementById('table');
const dialog = document.querySelector('dialog');
const submit = document.querySelector('dialog button');

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '304', 'No');
const shogun = new Book('Shogun', 'James Clavell', '1136', 'No');
const dune = new Book('Dune', 'Frank Herbet', '896', 'No');

const myLibrary = [theHobbit, shogun, dune];

// I probably need to put this inside another function so that I can call it again after
// a new book is added.
myLibrary.forEach(function (book) {
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = book.title;
    cell2.innerHTML = book.author;
    cell3.innerHTML = book.pages;
    cell4.innerHTML = book.read;
});

// function addBookToLibrary() {

// };

button.addEventListener('click', () => {
    dialog.showModal();
});

submit.addEventListener('click', () => {
    click.preventDefault();

    let newBook = new Book( , , , )

    dialog.close();
});