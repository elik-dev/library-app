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

function buildBookshelf() {
    // iterate through the library array and add books to the page
    // create new book button
}

function removeBookFromLibrary() {
    // remove book from the library array and from the page
}

function toggleReadStatus() {
    // change read status of the book
}