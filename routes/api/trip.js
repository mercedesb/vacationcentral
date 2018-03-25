const router = require("express").Router();
const tripsController = require("../../controllers/tripsController");

//Matches "api/trips"
router.route("/")
  .get(flightsController.findAll)
  .post(flightsController.create);

// Matches with "/api/trips/:id"
router
  .route("/:id")
//   .get(businessController.findById)
  .put(flightsController.update);
//   .delete(businessController.remove);


module.exports = router;



