const mongoose = require("mongoose");

const URL = "mongodb+srv://team:team123@cluster0.og3gvf8.mongodb.net/shopdb";
mongoose.set("strictQuery", true);
mongoose.connect(URL);

let connectionObj = mongoose.connection;

connectionObj.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

connectionObj.on("error", () => {
  console.log("Mongo DB Connection Failed");
});
