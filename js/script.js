const myLibrary = [
    {
        title: "Flowers for Algernon",
        author: "Daniel Keyes",
        readStatus: true
    },
    {
        title: "The Way of Zen",
        author: "Alan Watts",
        readStatus: true
    },
    {
        title: "Do Androids Dream of Electric Sheep?",
        author: "Philip K. Dick",
        readStatus: false
    }
];

function Book(title, author, readStatus) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
}

function addBookToLibrary() {
    // create form to get user input
    // create book object based on user input
    // create remove book button and attach it to the book
    // add book object to the library array and to the page
}

// extract function that creates book card from buildBookshelf

function buildBookshelf() {
    myLibrary.forEach((book) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("card");
        bookCard.classList.add(`data-${myLibrary.indexOf(book)}`);

        const bookTitle = document.createElement("h2");
        bookTitle.classList.add("book-title");
        bookTitle.textContent = `${book.title}`;

        const bookAuthor = document.createElement("p");
        bookAuthor.classList.add("book-author");
        bookAuthor.textContent = `${book.author}`;

        const bookStatus = document.createElement("p");
        bookStatus.classList.add("book-status");
        bookStatus.textContent = `${book.readStatus ? "Read" : "Not read"}`;

        const newBookButton = document.querySelector(".new-book-btn");

        bookCard.append(bookTitle, bookAuthor, bookStatus);
        const bookshelf = document.querySelector(".bookshelf");
        bookshelf.insertBefore(bookCard, newBookButton);

        // add remove book button
    });
}

function removeBookFromLibrary() {
    // remove book from the library array and from the page
}

function toggleReadStatus() {
    // change read status of the book
}