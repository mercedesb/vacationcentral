const router = require("express").Router();
const businessController = require("../../controllers/businessesController");

// Matches with "/api/businesses"
router.route("/")
  .get(businessController.findAll)
  .post(businessController.create);

// Matches with "/api/businesses/:id"
router
  .route("/:id")
  .put(businessController.update)
  .delete(businessController.remove);

module.exports = router;
