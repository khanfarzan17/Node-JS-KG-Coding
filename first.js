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
console.log("End of first.js execution.");
console.log("You can now check the output.txt file for the written content.");