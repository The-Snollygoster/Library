const myLibrary = [theHobbit, shogun, dune];

function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '304', 'not');
const shogun = new Book('Shogun', 'James Clavell', '1136', 'not');
const dune = new Book('Dune', 'Frank Herbet', '896', 'not');

function addBookToLibrary() {

};