const express = require("express");
const myroute = require("./Myroute");
const app = express();
app.use(myroute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
