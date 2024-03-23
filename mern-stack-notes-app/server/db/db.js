require("dotenv").config();
const Mongoose = require("mongoose");

Mongoose.set("strictQuery", false);
Mongoose.connect(process.env.API_KEY)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));
