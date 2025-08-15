const express = require("express");
const myroute = require("./Myroute");
const app = express();
app.use(myroute);


app.use((req,res,next)=>{
  console.log("404 Not Found");
  res.status(404).send("<h1>Page Not Found</h1>");
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
