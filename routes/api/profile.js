const router = require("express").Router();
const profilesController = require("../../controllers/profilesController");

// Matches with "/api/profile"
router.route("/")
  .get(profilesController.findAll)
  .post(profilesController.create);

// // Matches with "/api/books/:id"
router
  .route("/:id")
//   .get(booksController.findById)
  .put(profilesController.update)
//   .delete(booksController.remove);

module.exports = router;
