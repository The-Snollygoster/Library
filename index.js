const button = document.getElementById('newBook');
const table = document.getElementById('table');
const dialog = document.querySelector('dialog');
const submit = document.querySelector('dialog button');
const cancel = document.querySelector('dialog #cancel')
const input = document.querySelectorAll('input');
const form = document.querySelector('form');

class Book {
    constructor(title,author,year,pages,read) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.pages = pages;
        this.read = read;
    };

    toggleRead() {
        if (this.read === 'Yes') {
            this.read = 'No';
        } else {
            this.read = 'Yes';
        };

        displayLibrary();
    };
};

// function Book(title,author,year,pages,read) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//     this.pages = pages;
//     this.read = read;
// };

// Book.prototype.toggleRead = function() {
//     if (this.read === 'Yes') {
//         this.read = 'No';
//     } else {
//         this.read = 'Yes';
//     }
// };

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien','1954', '304', 'No');
const shogun = new Book('Shogun', 'James Clavell','1975', '1136', 'No');
const neuromancer = new Book('Neuromancer', 'William Gibson', '1984', '320', 'Yes');
const dune = new Book('Dune', 'Frank Herbert','1965', '896', 'No');
const groan = new Book('Titus Groan', 'Mervyn Peake', '1946', '438', 'Yes');

const myLibrary = [theHobbit, shogun, neuromancer, dune, groan];

function displayLibrary() {
    table.innerHTML = '';
    myLibrary.forEach(function (book, index) {
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        cell1.innerHTML = book.title;
        cell2.innerHTML = book.author;
        cell3.innerHTML = book.year;
        cell4.innerHTML = book.pages;
        if (book.read == 'Yes') {
            cell5.innerHTML = `<img id="check" src="./icons/check.svg" alt="check" data-index='${index}'>`;
        } else {
            cell5.innerHTML = `<img id="cross" src="./icons/cross.svg" alt="cross" data-index='${index}'>`;
        }
        cell6.innerHTML = `<button id="del" data-index='${index}'>Delete</button>`
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
    document.getElementById('form').reset();
    dialog.close();
});

table.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON' && e.target.id === 'del') {
        myLibrary.splice((e.target.dataset.index), 1);
        displayLibrary();
    };

    if (e.target.id === 'check' || e.target.id === 'cross') {
        console.log(myLibrary[e.target.dataset.index])
        myLibrary[e.target.dataset.index].toggleRead();
        console.log(myLibrary[e.target.dataset.index])
        if (e.target.id === 'check') {
            e.target.parentNode.innerHTML = `<img id="cross" src="./icons/cross.svg" alt="cross" data-index='${e.target.dataset.index}'>`
        } else if (e.target.id === 'cross') {
            e.target.parentNode.innerHTML = `<img id="check" src="./icons/check.svg" alt="check" data-index='${e.target.dataset.index}'>`
        };
    };
});

displayLibrary();