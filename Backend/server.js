const { urlencoded } = require("body-parser");
const express = require("express");
const dotenv = require("dotenv").config();
const goalRouter = require("./Routes/goalRoutes");
const { errorHandlet, errorHandler } = require("./Middleware/middleware");
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use("/api/goals", goalRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
