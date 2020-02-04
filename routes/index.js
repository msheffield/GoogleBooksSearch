const db = require("../models");

module.exports = (app) => {
  // -------- SEARCH PAGE API ENDPOINTS -------- //

  // Save a book
  app.post("api/books", (req, res) => {
    console.log("Saving book: ");
    console.log(req.body);
    let {
      bookId,
      title,
      authors,
      description,
      image,
      link
    } = req.body;

    db.Book.create({
      bookId,
      title,
      authors,
      description,
      image,
      link
    })
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
