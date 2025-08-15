const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({ extended: false }));

const router = express.Router();

app.use((req,res,next) => {
  console.log(req.url,req.method);
  next();
})

router.get("/", (req, res, next) => {
  console.log(" requested URL:", req.url);
  console.log("Came in First  Dummy Middleware");
  next();
});

router.get("/", (req, res, next) => {
  console.log("Came in second Dummy Middleware");
  next();
});

router.get("/", (req, res, next) => {
  console.log("Handling GET request for  /");
  res.send(
    ` <h1> Hello From Express JS</h1> <a href="/contact">Go to Contact Page</a>`
  );
});

router.get("/contact", (req, res, next) => {
  console.log("Handling GET request for /contact");
  res.send(`<h1> Hello From Contact Page</h1>
    
    <form action="/contact" method="POST">
      <input type="text" name="name" placeholder="Enter your name">
      <input type="email" name="email" placeholder="Enter your email">
      <button type="submit">Submit</button>
    </form>
    `);
});

router.post("/contact", (req, res, next) => {
  console.log("Handling POST request for /contact");
  console.log("Received Form data:", req.body);
  res.send("<h1> Thank you for contacting us!</h1>");
});

module.exports = router;
