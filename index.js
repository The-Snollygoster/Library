const button = document.getElementById('newBook');
const table = document.getElementById('table');
const dialog = document.querySelector('dialog');
const submit = document.querySelector('dialog button');
const cancel = document.querySelector('dialog #cancel')
const input = document.querySelectorAll('input');
const form = document.querySelector('form');

function Book(title,author,year,pages,read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;
};

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien','1954', '304', 'No');
const shogun = new Book('Shogun', 'James Clavell','1975', '1136', 'Yes');
const dune = new Book('Dune', 'Frank Herbet','1965', '896', 'No');

const myLibrary = [theHobbit, shogun, dune];

function displayLibrary() {
    table.innerHTML = '';
    myLibrary.forEach(function (book) {
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        cell1.innerHTML = book.title;
        cell2.innerHTML = book.author;
        cell3.innerHTML = book.year;
        cell4.innerHTML = book.pages;
        cell5.innerHTML = book.read;
        if (book.read == 'Yes') {
            cell5.innerHTML = '<img id="check" src="./icons/check-bold.svg" alt="check">';
        } else {
            cell5.innerHTML = '<img id="cross" src="./icons/close-thick.svg" alt="cross">';
        }
    });
};

button.addEventListener('click', () => {
    dialog.showModal();
});

submit.addEventListener('click', (event) => {
    if (form.checkValidity() == true) {
        event.preventDefault();
        let title = input[0].value;
        let author = input[1].value;
        let year = input[2].value
        let pages = input[3].value;
        let read = input[4].value;
        let newBook = new Book(`${title}`, `${author}`, `${year}`, `${pages}`, `${read}`);
        myLibrary.push(newBook);
        displayLibrary();
        document.getElementById('form').reset();
        dialog.close();
    }
});

cancel.addEventListener('click', () => {
    dialog.close();
});

displayLibrary();