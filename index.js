const mongoose = require("mongoose");
const server = require('./server')

mongoose
  .connect(
    "mongodb+srv://Admin:Admin@mariacluster.mturj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connect"), server.listen(3000))
  .catch((err) => console.log("erro"));
