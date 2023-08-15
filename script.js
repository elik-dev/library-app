let myLibrary = [
    {
        title: "Flowers for Algernon",
        author: "Daniel Keyes",
        isRead: true,
    },
    {
        title: "The Way of Zen",
        author: "Alan Watts",
        isRead: true,
    },
    {
        title: "Do Androids Dream of Electric Sheep?",
        author: "Philip K. Dick",
        isRead: false,
    },
];

function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
}

function addBookToLibrary() {
    
}

function refreshBookShelf() {
    const bookshelf = document.querySelector(".bookshelf");
    myLibrary.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book")
        const bookTitle = document.createElement("h2");
        bookTitle.classList.add("book-title");
        bookTitle.textContent = book.title;
        const bookAuthor = document.createElement("p");
        bookAuthor.classList.add("book-author");
        bookAuthor.textContent = book.author;
        const readStatus = document.createElement("p");
        readStatus.classList.add("read-status");
        readStatus.textContent = book.isRead ? "Read" : "Not read yet";
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(readStatus);
        bookshelf.appendChild(bookCard);
    });
}

window.addEventListener("load", refreshBookShelf);

/*
Requirements
1. Has empty array for book objects
2. Has book object constructor function
3. Has add book object to library array function
4. Has button that brings up a form for new book
5. Book cards have remove from library button



*/