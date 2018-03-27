const router = require("express").Router();
const tripsController = require("../../controllers/tripsController");

//Matches "api/trips"
router.route("/")
  .get(tripsController.findAll)
  .post(tripsController.create);

// Matches with "/api/trips/:id"
router
  .route("/:id")

//   .get(businessController.findById)
  .put(tripsController.update);
//   .delete(businessController.remove);


module.exports = router;



