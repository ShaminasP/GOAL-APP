const { urlencoded } = require("body-parser");
const express = require("express");
const dotenv = require("dotenv").config();
const goalRouter = require("./Routes/goalRoutes");
const userRouter = require("./Routes/userRoutes");
const { errorHandler } = require("./Middleware/middleware");
const connectDB = require("./Config/db");
const cors = require("cors");
const port = process.env.PORT ;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,POST,DELETE', // include DELETE method
  preflightContinue: true,
  optionsSuccessStatus: 200,
  credentials: true
};

app.use(cors(corsOptions));



app.use("/api/goals", goalRouter);
app.use("/api/users", userRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
