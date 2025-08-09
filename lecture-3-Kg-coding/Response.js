const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Received a request for:", req.url);
  console.log("Request method:", req.method);
  console.log("Request headers:", req.headers);
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>Coding Response</title></head>");
  res.write("<body>");
  res.write("<h1>Welcome to the Response Server</h1>");

  res.write("<p>This is a simple HTTP server responding to your request.</p>");
  res.write("<p>This server is handling your request.</p>");
  res.write("<body>");
  res.write("<html>");

  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
