const router = require("express").Router();
const userRoutes = require("./user");
const businessRoutes = require("./business");
const commentRoutes = require("./comment");
const flightRoutes = require("./flight");
const profileRoutes = require("./profile");
const tripRoutes = require("./trip");

// Book routes
router.use("/users", userRoutes);
router.use("/businesses", businessRoutes);
router.use("/comments", commentRoutes);
router.use("/flights", flightRoutes);
router.use("/profiles", profileRoutes);
router.use("/trips", tripRoutes);

module.exports = router;
