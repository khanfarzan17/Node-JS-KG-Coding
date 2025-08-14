const express = require("express");
const routes = require("./Routes");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(routes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
