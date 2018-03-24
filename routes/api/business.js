const router = require("express").Router();
const businessController = require("../../controllers/businessesController");

// Matches with "/api/businesses"
router.route("/")
  .get(businessController.findAll)
  .post(businessController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
//   .get(businessController.findById)
  .put(businessController.update);
//   .delete(businessController.remove);

module.exports = router;
