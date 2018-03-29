const router = require("express").Router();
const flightsController = require("../../controllers/flightsController");

// Matches with "/api/books"
router.route("/")
  .get(flightsController.findAll)
  .post(flightsController.create);

// // Matches with "/api/books/:id"
router
  .route("/:id")
//   .get(booksController.findById)
  .get(flightsController.findTrip)
  .put(flightsController.update)
//   .delete(booksController.remove);

module.exports = router;
