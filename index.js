const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
const chefs = require("./data/chef-data.json");

app.get("/", (req, res) => {
  res.send("Node is running");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});
app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});
