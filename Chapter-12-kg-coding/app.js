const express=require('express');

const app=express();

app.set('view engine','ejs');

app.get('/',(req,res)=>{
res.render('home',{name:'Farzan',date:new Date().toDateString(),place:'Bengalurur'});
})

app.use((req,res)=>{
  res.status(404).render('error')
})

const PORT=3000;

app.listen(PORT,()=>{
  console.log("Server is running on 3000")
});