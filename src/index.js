const express = require("express");
const bodyParser = require("body-parser");

const v1EngagementRouter = require("./v1/routes/engagementRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/v1/engagement", v1EngagementRouter);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});
