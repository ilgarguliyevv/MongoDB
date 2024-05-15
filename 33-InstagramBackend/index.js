const express = require("express");
const app = express();
const port = 3000;

require("./src/config/db")

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});