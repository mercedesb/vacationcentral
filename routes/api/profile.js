const router = require("express").Router();
const profilesController = require("../../controllers/profilesController");

// Matches with "/api/profile"
router.route("/")
  .get(profilesController.findAll)
  .get(profilesController.findByType)
  .post(profilesController.create);


// Matches with "/api/profiles/:id"
router
  .route("/:id")
//   .get(profilesController.findById)
  .put(profilesController.update)
  .delete(profilesController.remove);

//Matches with "/api/profiles/:UserId/:type"
router
  .route("/:UserId/:type")
  .get(profilesController.findByType)


module.exports = router;
