const router = require("express").Router();
const packingController = require("../../controllers/packingController");

// Matches with "/api/packing"
router.route("/")
  .get(packingController.findAll)
  .post(packingController.create);


// Matches with "/api/packing/:id"
router
  .route("/:id")
  .put(packingController.update)


module.exports = router;