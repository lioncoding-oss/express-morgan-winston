const express = require("express");
const morganMiddleware = require("./middlewares/morgan.middleware");

const logger = require("./utils/logger");

const app = express();

// Add the morgan middleware
app.use(morganMiddleware);

app.get("/api/status", (req, res) => {
    logger.info("Checking the API status: Everything is OK");
    res.status(200).send({
        status: "UP",
        message: "The API is up and running!"
    });
});

// Startup
app.listen(3000, () => {
    logger.info('Server is running on port 3000');
});