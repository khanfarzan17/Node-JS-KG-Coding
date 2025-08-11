console.log(" 1.Start ");// First line of output

Promise.resolve().then(() => console.log(" 2. Microtak"));// third line of output because it is a microtask 

setTimeout(() => {
  console.log(" 3. setTimeout callback");// Fourth line of output because it is macrotask  but has more priority than setImmediate//
}, 0);

const fs=require('fs');
fs.readFile('example.txt','utf-8',()=>{
  console.log(" 4. File read completed");// This will be executed after the microtask and setTimeout callbacks//
});

setImmediate(()=> {
  console.log(" 5. setImmediate callback");// Fifth line of output because it is macrotask but has less priority than setTimeout//
});

process.on('exit',()=>{
  console.log(" 6. Process exit event");// This will be executed when the event loop is about to exit, after all other callbacks have been executed final cleanup   //
});



console.log(" 7. end of Script execution");// Second line of output

// my Output 1,7,2,3,5,4,6//

// In the output 4 and 5 order may vary because of poll phase//