const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(
    express.urlencoded({
      extended: true,
    })
  );
  
  app.use(express.json());

app.get("/", (req, res) => {
  res.send("api running");
});

mongoose
  .connect(
    "mongodb+srv://Admin:Admin@mariacluster.mturj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connect"), app.listen(3000))
  .catch((err) => console.log("erro"));
