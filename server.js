const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const env = require('dotenv').config();

const routes = require("./routes");

const PORT = process.env.PORT || 3002;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ingredientsdb", { useNewUrlParser: true }, err=> {
  if(err) {
    console.log('Error connecting to the database', err);
  } else {
    console.log('Successfully connected to MongoDB');
  }
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);


// app.get("../Api/ApiFood", (req, res) => {
//     res.sendFile(path.join(__dirname, "../Api/ApiFood"));
// });

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });