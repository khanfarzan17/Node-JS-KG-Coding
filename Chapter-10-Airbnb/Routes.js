const express = require("express");

const app = express();

const router = express.Router();

router.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

router.get("/", (req, res, next) => {
  console.group("Welcome to Home Page ");
  res.send(`<h1> Welcome to airbnb </h1>
    <a href="/Add-Property">Add Property</a>
    <a href="/contact">Contact Us</a>
   
    `);
  next();
});

router.get("/Add-Property", (req, res, next) => {
  console.group("Add Property Page");
  res.send(`<h1> Contact Form  </h1>
    <form action="/Add-Property" method="POST">
      <input type="text" name="propertyName" placeholder="Enter Property Name">
      <input type="text" name="location" placeholder="Enter Location">
      <button type="submit">Submit</button>
    </form>
     <a href="/"> Go to Home Page</a>
    `);
  next();
});

router.post("/Add-Property", (req, res, next) => {
  console.group("Handling POST request for Add Property");
  console.log("Received Form data:", req.body);
  res.send("<h1> Thank you for adding your property!</h1>");
  next();
});

router.get("/contact",(req,res,next)=>{
  console.log("Hnadling for contact page");
  res.send(`<h1> Contact Page <h1> 
    
    <form action="/contact" method="POST">
    <input type="text" name="name" placeholder="Enter your name">
    <input type="email" name="email" placeholder="Enter your email"> 
    <input type="text" address="address" placeholder="Enter your address">
    <button type="submit">Submit</button>
    </form>
    <a href="/">Go to Home Page</a>
    `)
  next();
});

router.post("/contact",(req,res,next)=>{
  console.log("Handling POST request for contact page");
  console.log("Received Form data:", req.body);
  res.send("<h1> Thank you for contacting us!</h1>");
  next();
})

module.exports = router;
