const DB = require("./twitter_db.json");

const getLevel = () => {
    return Math.floor(
        Math.random() * (10 - 1) + 1
    );
};

module.exports = {
    getLevel,
};