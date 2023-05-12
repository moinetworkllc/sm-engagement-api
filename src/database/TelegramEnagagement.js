const DB = require("./telegram_db.json");

const getLevel = (username) => {
    const user = DB.levels.find((user) => user.username === username);
    if (!user) {
        return 0;
    }
    return user.level;
};

module.exports = {
    getLevel,
};