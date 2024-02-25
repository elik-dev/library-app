const myLibrary = [
    new Book("Flowers for Algernon", "Daniel Keyes", true),
    new Book("The Way of Zen", "Alan Watts", true),
    new Book("Do Androids Dream of Electric Sheep?", "Philip K. Dick", false)
];

function Book(title, author, readStatus) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
    this.toggleReadStatus = () => {
        this.readStatus = !this.readStatus;
        return;
    }
}

function addBookToLibrary() {
    // create form to get user input
    // create book object based on user input
    // create remove book button and attach it to the book
    // add book object to the library array and to the page
}

function removeBookFromLibrary() {
    // remove book from the library array and from the page
}

function toggleReadStatus() {
    // add a method to book constructor that toggles its read status
    // change read status of the book
}

function buildBookshelf() {
    myLibrary.forEach((book) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("card");
        bookCard.setAttribute("data-book", myLibrary.indexOf(book));

        const removeBookButton = document.createElement("button");
        removeBookButton.classList.add("remove-btn");
        removeBookButton.setAttribute("type", "button");
        removeBookButton.textContent = "x";
        removeBookButton.addEventListener("click", () => {
            bookCard.remove();
            myLibrary.splice(myLibrary.indexOf(book), 1);
        });
        
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

        bookCard.append(removeBookButton, bookTitle, bookAuthor, bookStatus);
        const bookshelf = document.querySelector(".bookshelf");
        bookshelf.insertBefore(bookCard, newBookButton);
    });
}

window.addEventListener("load", buildBookshelf);