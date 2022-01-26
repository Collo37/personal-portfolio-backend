const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");

const projectRoutes = require("./routes/projects.js");
const messageRoutes = require("./routes/contact");

dotenv.config(process.env);

const app = express();

// constants

const port = process.env.PORT || 5000;
const database = process.env.DB;

// middleware

app.use(express.json());
app.use(cors());
app.use("/static", express.static(path.join(__dirname, "public")));

app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/contact", messageRoutes);

//app.use(express.static(path.join(__dirname, "/client/build")));

//app.get('*', (req, res) => {
//  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
//});

// connecting to database

const connectDB = async () => {
  try {
    await mongoose.connect(database, () => {
      console.log("Connection to database was successful");
    });
  } catch (error) {
    console.error(error);
  }
};

// starting the server

app.listen(port, () => {
  connectDB();
  console.log("Server started successfully");
});
