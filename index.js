const express = require("express");
const app = express();

const port = process.ENV.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Node is running");
});

app.listen(port, () => {
  console.log(`App is running at port ${port}`);
});
