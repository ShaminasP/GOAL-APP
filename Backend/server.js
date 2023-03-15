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

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,POST,DELETE',
  preflightContinue: true,
  optionsSuccessStatus: 200,
  credentials: true
};

app.use(cors(corsOptions));



app.use("/api/goals", goalRouter);
app.use("/api/users", userRouter);
// app.use(cors());

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
