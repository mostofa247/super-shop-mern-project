const mongoose = require("mongoose");

const URL =
  "mongodb+srv://team1234:team1234@cluster0.ez2x2hw.mongodb.net/shopdb";
mongoose.set("strictQuery", true);
mongoose.connect(URL);

let connectionObj = mongoose.connection;

connectionObj.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

connectionObj.on("error", () => {
  console.log("Mongo DB Connection Failed");
});
