const router = require("express").Router();
const userRoutes = require("./user");
const businessRoutes = require("./business");
const commentRoutes = require("./comment");
const flightRoutes = require("./flight");
const profileRoutes = require("./profile");
const tripRoutes = require("./trip");

// Book routes
router.use("/users", userRoutes);
router.use("/business", businessRoutes);
router.use("/comment", commentRoutes);
router.use("/flight", flightRoutes);
router.use("/profile", profileRoutes);
router.use("/trip", tripRoutes);

module.exports = router;
