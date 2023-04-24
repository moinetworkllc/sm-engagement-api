const TwitterEngagementDB = require("../database/TwitterEnagagement");
const TelegramEngagementDB = require("../database/TelegramEnagagement");
const DiscordEngagementDB = require("../database/DiscordEnagagement");
const { v4: uuid } = require("uuid");


const getTwitterEngagementLevel = (id) => {
    const level = TwitterEngagementDB.getLevel(id);
    return level;
}

const getTelegramEngagementLevel = (id) => {
    const level = TelegramEngagementDB.getLevel(id);
    return level;
}

const getDiscordEngagementLevel = (id) => {
    const level = DiscordEngagementDB.getLevel(id);
    return level;
}

module.exports = {
    getTwitterEngagementLevel,
    getTelegramEngagementLevel,
    getDiscordEngagementLevel,
};