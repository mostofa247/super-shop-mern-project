const express = require("express");
const dbConnect = require("./dbConnect");

const app = express();
app.use(express.json());
const itemsRoute = require("./routes/itemsRoute");
app.use("/api/items", itemsRoute);

const usersRoute = require("./routes/userRoute");
app.use("/api/users/", usersRoute);

const billsRoute = require("./routes/billsRoute");
app.use("/api/bills/", billsRoute);

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
