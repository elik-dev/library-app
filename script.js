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

function addBookToLibrary(event) {

}

function refreshBookShelf(event) {
    const bookshelf = document.querySelector(".bookshelf");
    myLibrary.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card")
        bookCard.setAttribute("data-index", `${myLibrary.indexOf(book)}`)

        const bookTitle = document.createElement("h2");
        bookTitle.classList.add("book-title");
        bookTitle.textContent = book.title;

        const bookAuthor = document.createElement("p");
        bookAuthor.classList.add("book-author");
        bookAuthor.textContent = book.author;

        const readStatus = document.createElement("p");
        readStatus.classList.add("book-read-status");
        readStatus.textContent = book.isRead ? "Read" : "Not read yet";

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(readStatus);
        bookshelf.appendChild(bookCard);
    });
}

function showNewBookDialog(event) {
    const form = document.createElement("form");
    form.classList.add("new-book-form")
    const titleLabel = document.createElement("label");
    const titleInput = document.createElement("input");
    const authorLabel = document.createElement("label");
    const authorInput = document.createElement("input");
    const readStatusLabel = document.createElement("label");
    const readStatusInput = document.createElement("input");
}

function hideNewBookDialog(event) {

}

const newBookButton = document.querySelector(".new-book-btn");
newBookButton.addEventListener("click", createBookDialog);
window.addEventListener("load", refreshBookShelf);

/*

*/