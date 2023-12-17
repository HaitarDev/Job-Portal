const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const Jobs = require("./models/Jobs");

const jobRoute = require("./routes/jobRoute");
const authRoute = require("./routes/authRoute");

require("dotenv").config();

const port = process.env.PORT || 5000;
// express
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(helmet());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, // Enable credentials (cookies, authorization headers, etc.)
};
app.use(cors(corsOptions));
app.use(morgan("dev"));

// Routes ---------------------
app.use("/auth", authRoute);
app.use("/jobs", jobRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`app listening on ${port}`);
    });
  })
  .catch((err) => console.log(err));
