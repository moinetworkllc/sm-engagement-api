const DB = require("./discord_db.json");

const getLevel = () => {
    return Math.floor(
        Math.random() * (10 - 1) + 1
    );
};

module.exports = {
    getLevel,
};