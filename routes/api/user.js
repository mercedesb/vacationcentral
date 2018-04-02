const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("../../config/passport");

// Matches with "/api/users"
router.route("/")
  .post(usersController.create);

router.route("/login")
  .post(passport.authenticate("local"), usersController.login);

module.exports = router;
