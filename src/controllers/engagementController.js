const engagementService = require("../services/engagementService");

const getTwitterEngagementLevel = (req, res) => {
    const {params: {id}} = req;
    if (!id) {
        res.status(400).send({
            status: "NOT OK",
            data: "Bad request. Did not receive a legitimate Discord ID."
        });
        return;
    }
    const level = engagementService.getTwitterEngagementLevel(id);
    res.status(200).send({status: "OK", data: {id: id, level: level}});
};

const getTelegramEngagementLevel = (req, res) => {
    const {params: {id}} = req;
    if (!id) {
        res.status(400).send({
            status: "NOT OK",
            error: "Bad request. Did not receive a legitimate Discord ID."
        });
        return;
    }
    const level = engagementService.getTelegramEngagementLevel(id);
    res.status(200).send({status: "OK", data: {id: id, level: level}});
};

const getDiscordEngagementLevel = (req, res) => {
    const {params: {id}} = req;
    if (!id) {
        res.status(400).send({
            status: "NOT OK",
            error: "Bad request. Did not receive a legitimate Discord ID."
        });
        return;
    }
    const level = engagementService.getDiscordEngagementLevel(id);
    res.status(200).send({status: "OK", data: {id: id, level: level}});
};

module.exports = {
    getTwitterEngagementLevel,
    getTelegramEngagementLevel,
    getDiscordEngagementLevel,
};