const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("../../config/passport");

// Matches with "/api/users"
router.route("/")
  // .get(booksController.findAll)
  .post(usersController.create);

router.route("/login")
  .post(passport.authenticate("local"), usersController.login);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
