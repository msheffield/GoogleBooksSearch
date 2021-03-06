import axios from "axios";

export default {
    // Search Google API
    searchBooks: function(query) {
        return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + query);
    },
    // Gets all books
    getBooks: function () {
        return axios.get("/api/books");
    },
    // Deletes the book with the given id
    deleteBook: function (book) {
        let id = book.bookId;
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
};
