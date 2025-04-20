require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");

const app = express();

require("./strategy/local");

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

const allowedOrigins = ["http://localhost:4200", "http://3.107.97.50:3030"];
app.use(
  cors({
    origin: allowedOrigins,
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
    allowedHeaders: "Content-Type, Authorization",
  })
);

const contactRouter = require("./router/contactUsRouter");
const userRouter = require("./router/userRouter");

app.use(contactRouter);
app.use(userRouter);

const db_url = process.env.MONGO_DB_URL;
const port_no = process.env.PORT_NO;

app.listen(port_no, function (err) {
  if (!err) console.log(`listens on ${port_no}`);
  else console.log("Error", err);
});

app.get("/", (req, res) => {
  res.send("Backend is Running!");
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
