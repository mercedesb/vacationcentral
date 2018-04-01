const router = require("express").Router();
const userRoutes = require("./user");
const businessRoutes = require("./business");
const flightRoutes = require("./flight");
const profileRoutes = require("./profile");
const packingRoutes = require("./packing");
const tripRoutes = require("./trip");

// Model routes
router.use("/users", userRoutes);
router.use("/businesses", businessRoutes);
router.use("/flights", flightRoutes);
router.use("/profiles", profileRoutes);
router.use("/packing", packingRoutes);
router.use("/trips", tripRoutes);

module.exports = router;
