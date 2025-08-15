const express = require("express");
const path = require("path");
const Path = require("path");

const app = express();

const router = express.Router();

router.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

router.get("/", (req, res, next) => {
  console.group("Welcome to Home Page ");
  res.sendFile(Path.join(__dirname, "../", "Views", "Home.html"));
  // next();
});

router.get("/about", (req, res, next) => {
  console.group("Welcome to About Page");
  res.sendFile(Path.join(__dirname, "../", "Views", "About.html"));
  // next();
});

router.get("/Add-Property", (req, res, next) => {
  console.group("Add Property Page");
  res.sendFile(Path.join(__dirname, "../", "Views", "AddProperty.html"));
  // next();
});

router.post("/Add-Property", (req, res, next) => {
  console.group("Handling POST request for Add Property");
  console.log("Received Form data:", req.body);
  res.sendFile(Path.join(__dirname, "../", "Views", "PropertySuccess.html"));
  // next();
});

router.get("/contact", (req, res, next) => {
  console.log("Hnadling for contact page");
  res.sendFile(Path.join(__dirname, "../", "Views", "Contact.html"));

  // next();
});

router.post("/contact", (req, res, next) => {
  console.log("Handling POST request for contact page");
  console.log("Received Form data:", req.body);
  res.sendFile(Path.join(__dirname, "../", "Views", "ContactSuccess.html"));
  // next();
});

module.exports = router;
