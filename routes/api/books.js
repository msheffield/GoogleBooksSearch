const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Routes for Search page
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Routes for Saved page
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
