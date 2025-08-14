const express=require('express');

const app =express();

app.use("/",(req,res,next)=>{
  console.log(" requested URL:", req.url);
  console.log("Came in First  Dummy Middleware");
 
  next();
})

app.use("/",(req,res,next)=>{
  console.log("Came in second Dummy Middleware");
  next();


  
})
// app.use("/",(req,res,next)=>{
//   console.log("Came in third Dummy Middleware");
//   res.send("<h1> Hello From Express JS middleware</h1>");
// })

app.get("/",(req,res,next)=>{
console.log("Handling GET request for  /");
res.send("<h1> Hello From Express JS</h1>");
})

app.get("/contact",(req,res,next)=>{
  console.log("Handling GET request for /contact");
  res.send(`<h1> Hello From Contact Page</h1>
    
    <form action="/contact" method="POST">
      <input type="text" name="name" placeholder="Enter your name">
      <input type="email" name="email" placeholder="Enter your email">
      <button type="submit">Submit</button>
    </form>
    `);
})

app.post("/contact",(req,res,next)=>{
  console.log("Handling POST request for /contact");
  res.send("<h1> Thank you for contacting us!</h1>");
})

app.listen(3000,()=>{
  console.log("Server is running on port 3000");
})