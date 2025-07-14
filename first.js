console.log("This is the first file in the project.");
const fs=require('fs');
fs.writeFile("output.txt","Writing file",(err)=>{
    if(err) {
        console.error("Error  occured writing file:", err);
    } else {
        console.log("File written successfully.");
    }
});

console.log("File operation completed.");