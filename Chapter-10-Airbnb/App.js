const express = require("express");
const routes = require("./Routes/Routes");
const Path = require("path");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.use((req, res, next) => {
  console.log("404 Not Found");
  res.status(404).sendFile(Path.join(__dirname, "Views", "ErrorPage.html"));
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
