const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const routes = require("./src/routes/index");

const app = express();

mongoose.connect("mongodb://localhost:27017/MariaCompany", function (err) {
  if (err) {
    console.log(err);
  } 
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000);
