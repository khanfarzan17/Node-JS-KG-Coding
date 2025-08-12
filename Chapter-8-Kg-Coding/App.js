const http = require("http");
const syntax = require("./Syntax");
const runtime = require("./Runtime");
 const logicalError =require('./LogicalError');
  const practiceset=require('./Practice');

const server = http.createServer((req, res) => {
  console.log(req.url);
  syntax();
  runtime();
  logicalError();
  practiceset();
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
