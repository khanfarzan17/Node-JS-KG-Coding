const fs=require('fs');

console.log("1. start file reading Async");

fs.readFile('example.txt','utf-8',(err,data)=>{
  if(err)throw err;
  console.log("2. File content:", data);

})


console.log("3. File reading completed");