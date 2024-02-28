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
    };
};

function createNewBookDialog() {
    // create and show the dialog
    const newBookDialog = document.createElement("dialog");
    newBookDialog.classList.add("new-book-dialog");

    const newBookForm = document.createElement("form");
    newBookForm.classList.add("new-book-form");

    const newBookHeading = document.createElement("h2");
    newBookHeading.classList.add("new-book-heading");
    newBookHeading.textContent = "Add new book";

    const newBookTitleLabel = document.createElement("label");
    newBookTitleLabel.classList.add("new-book-title-label");
    newBookTitleLabel.textContent = "Title:";
    newBookTitleLabel.setAttribute("for", "new-book-input-label");

    const newBookTitleInput = document.createElement("input");
    newBookTitleInput.id = "new-book-input-label";

    const newBookAuthorLabel = document.createElement("label");
    newBookAuthorLabel.classList.add("new-book-author-label");
    newBookAuthorLabel.textContent = "Author:";
    newBookAuthorLabel.setAttribute("for", "new-book-author-input");

    const newBookAuthorInput = document.createElement("input");
    newBookAuthorInput.id = "new-book-author-input";

    const newBookReadStatusText = document.createElement("p");
    newBookReadStatusText.classList.add("new-book-read-status-text");
    newBookReadStatusText.textContent = "Read status:";

    const newBookReadStatusOption1 = document.createElement("input");
    newBookReadStatusOption1.id = "new-book-read-status-option1";
    newBookReadStatusOption1.setAttribute("type", "radio");
    newBookReadStatusOption1.setAttribute("name", "read-status");
    newBookReadStatusOption1.setAttribute("value", "false");
    newBookReadStatusOption1.setAttribute("checked", "");

    const newBookReadStatusLabel1 = document.createElement("label");
    newBookReadStatusLabel1.classList.add("new-book-read-status-label1");
    newBookReadStatusLabel1.textContent = "Not read";
    newBookReadStatusLabel1.setAttribute("for", "new-book-read-status-option1");

    const newBookReadStatusOption2 = document.createElement("input");
    newBookReadStatusOption2.id = "new-book-read-status-option2";
    newBookReadStatusOption2.setAttribute("type", "radio");
    newBookReadStatusOption2.setAttribute("name", "read-status");
    newBookReadStatusOption2.setAttribute("value", "true");

    const newBookReadStatusLabel2 = document.createElement("label");
    newBookReadStatusLabel2.classList.add("new-book-read-status-label2");
    newBookReadStatusLabel2.textContent = "Read";
    newBookReadStatusLabel2.setAttribute("for", "new-book-read-status-option2");

    const newBookCancelButton = document.createElement("button");
    newBookCancelButton.classList.add("new-book-cancel-btn");
    newBookCancelButton.textContent = "Cancel";

    const newBookConfirmButton = document.createElement("button");
    newBookConfirmButton.classList.add("new-book-confirm-btn");
    newBookConfirmButton.textContent = "Confirm";

    const htmlMain = document.querySelector("main");
    htmlMain.appendChild(newBookDialog);
    newBookDialog.appendChild(newBookForm);
    newBookForm.append(newBookHeading, newBookTitleLabel, newBookTitleInput, newBookAuthorLabel, newBookAuthorInput, newBookReadStatusText, newBookReadStatusOption1, newBookReadStatusLabel1, newBookReadStatusOption2, newBookReadStatusLabel2, newBookCancelButton, newBookConfirmButton);

    newBookDialog.showModal();

    // add events
    newBookCancelButton.addEventListener("click", (event) => {
        event.preventDefault();
        newBookDialog.close();
    })

    newBookConfirmButton.addEventListener("click", (event) => {
        event.preventDefault();
        const checkedReadStatus = document.querySelector("input[name='read-status']:checked");
        addBookToLibrary(newBookTitleInput.value, newBookAuthorInput.value, checkedReadStatus.value === "true");
        newBookDialog.close();
    });

    newBookDialog.addEventListener("close", (event) => {
        newBookDialog.remove();
    });
};

function createBookCard(book) {
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
    bookStatus.addEventListener("click", (event) => {
        myLibrary[myLibrary.indexOf(book)].toggleReadStatus();
        bookStatus.textContent = `${book.readStatus ? "Read" : "Not read"}`;
    });

    const newBookButton = document.querySelector(".new-book-btn");

    bookCard.append(removeBookButton, bookTitle, bookAuthor, bookStatus);
    const bookshelf = document.querySelector(".bookshelf");
    bookshelf.insertBefore(bookCard, newBookButton);
};

function addBookToLibrary(title, author, readStatus) {
    let newBook = new Book(title, author, readStatus);
    myLibrary.push(newBook);
    createBookCard(newBook);
};

function buildBookshelf() {
    myLibrary.forEach((book) => {
        createBookCard(book);
    });
};

window.addEventListener("load", buildBookshelf);
const newBookButton = document.querySelector(".new-book-btn");
newBookButton.addEventListener("click", () => {
    createNewBookDialog();
});