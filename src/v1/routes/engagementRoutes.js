const express = require("express");
const router = express.Router();

const engagementController = require("../../controllers/engagementController");

router.get("/twitter/:id", engagementController.getTwitterEngagementLevel);

router.get("/telegram/:id", engagementController.getTelegramEngagementLevel);

router.get("/discord/:id", engagementController.getDiscordEngagementLevel);

module.exports = router;
