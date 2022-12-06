let express = require("express");
let cors = require("cors");
let bodyparser = require("body-parser");
let router = require("./router/router.js");
let mongoose = require("mongoose");
let app = express();
app.use(cors());
app.use(bodyparser.json());


app.use("/", router);

mongoose.connect("mongodb+srv://GANESH:GAnesh21895aug1994@cluster0.85lrpkd.mongodb.net/?retryWrites=true&w=majority/BOOKMYSHOW");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.get("/", function (req, res) {
  res.send("welcome to moviesworld");
});
app.listen(8000, () => {
  console.log("listening on ", 8000);
});