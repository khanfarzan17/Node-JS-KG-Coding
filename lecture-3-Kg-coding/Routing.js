const http = require("http");

const server=http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers);

  if(req.url === '/'){
    res.setHeader("content-type", "text/html");
    res.write('<html>');
    res.write('<head><title>Home Page</title></head>');
    res.write('<body>');
    res.write('<h1>Welcome to the Home Page</h1>');
    res.write('<p>This is the home page of our server.</p>');
    res.write('</body>');
    res.write('</html>');
    return res.end();

  }else if(req.url === '/about'){
    res.setHeader("content-type", "text/html");
    res.write('<html>');
    res.write('<head><title>About Page</title></head>');
    res.write('<body>');
    res.write('<h1>About Us</h1>');
    res.write('<p>This is the about page of our server.</p>');
    res.write('</body>');
    res.write('</html>');
    return res.end();

  
  }
  res.setHeader("content-type", "text/html");
  res.write('<html>');
  res.write('<head><title>404 Not Found</title></head>');
  res.write('<body>');
  res.write('<h1>Page Not Found</h1>');
  res.write('<p>The page you are looking for does not exist.</p>');
  res.write('</body>');
  res.write('</html>');
  res.end();



})
// Using  return res.end()  is safer in long request handlers, because it prevents further code execution after the response is sent.//

const PORT=3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});