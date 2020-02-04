const db = require("../models");

module.exports = (app) => {
  // -------- SEARCH PAGE API ENDPOINTS -------- //

  // Save a book
  app.post("/api/books", (req, res) => {
    console.log("Saving book: ");
    console.log(req.body);
    let book = {
      bookId: req.body.bookId,
      title: req.body.title,
      author: req.body.author[0],
      description: req.body.description,
      image: req.body.image,
      link: req.body.link
    };

    db.Book.create(book)
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


  // -------- SAVED PAGE API ENDPOINTS -------- //

  // Get all books from DB
  app.get("/api/books", (req, res) => {
    db.Book.find()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  // Delete a book
  app.get("/api/books/:id", (req, res) => {
    db.book.deleteOne(
      { bookId: req.params.id }
    )
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
}
