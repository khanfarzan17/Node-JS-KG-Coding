const express=require('express');

const app=express();

app.get("/",(req,res,next)=>{
  console.log('Welcome to home page ');
  res.send('<h1> welcome to Home page </h1>')
  
});

app.get("/contact",(req,res,next)=>{
  console.log('welcome to contact page');
  res.send('<h2> Contact page </h2>')
 
})

app.use("",(req,res,next)=>{
  res.send('<h2> Error Page </h2>')
});


const PORT=3000;

app.listen(PORT,()=>{
  console.log("Server is running on 3000")
});