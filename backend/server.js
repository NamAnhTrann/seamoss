const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());

const contactRouter = require("./router/contactUsRouter");

const allowedOrigins = ["http://localhost:4200", "http://3.107.97.50:3030"];

app.use(
  cors({
    origin: allowedOrigins,
    methods: "GET, POST, PUT, DELETE",
    credential: true,
    allowedHeaders: "Content-Type, Authorization",
  })
);
app.use(contactRouter);

const db_url = process.env.MONGO_DB_URL;
const port_no = process.env.PORT_NO;

app.listen(port_no, function (err) {
  if (!err) {
    console.log(`listens on ${port_no}`);
  } else {
    console.log("Error", err);
  }
});

app.get("/", function (req, res) {
  res.send(`backend is running`);
});

async function connectDB() {
  try {
    await mongoose.connect(db_url);
    console.log("Conneted to the database");
  } catch (err) {
    console.log("Connection Error");
  }
}

connectDB();
app.get("/", (req, res) => {
  res.send(" Backend is Running!");
});
