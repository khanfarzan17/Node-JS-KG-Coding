const http = require("http");

const server= http.createServer((req,res)=>{

  if(req.url === '/'){
    res.setHeader("content-type", "text/html");
    res.write('<html>');
    res.write('<head><title> Home Page</title></head>');
    res.write('<body>');
    res.write('<h1> Welcome to the Home Page </h1>');
    res.write('<p> This is the home page of the website </p>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }else if(req.url === '/men'){
    res.setHeader("content-type", "text/html");
    res.write('<html>');
    res.write('<head><title>  Men Page</title></head>');
    res.write('<body>');
    res.write('<h1> Welcome to Men Page </h1>');
    res.write('<p> This is the page for  the men section of the website </p>');
    res.write('</body>');
    res.write('</html>');
    return res.end(); 
  }
  else if(req.url === '/women'){
    res.setHeader("content-type", "text/html");
    res.write('<html>');
    res.write('<head><title>Women Page</title></head>');
    res.write('<body>');
    res.write('<h1> welcome to Women Page </h1>');
    res.write('<p> This is the pagefor the women section of the website </p>');
    res.write('</body>');
    res.write('</html>'); 
    return res.end();
  }
  else if (req.url === '/kids'){
    res.setHeader("Content-type", "text/html");
    res.write('<html>');
    res.write('<head><title>Kids Page</title></head>');
    res.write('<body>');
    res.write('<h1> Welcome to Kids Page </h1>');
    res.write('<p> This is the page for the kids section of the website </p>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  else if (req.url === '/cart'){
    res.setHeader("Content-type", "text/html");
    res.write('<html>');
    res.write('<head><title>Cart Page</title></head>');
    res.write('<body>');
    res.write('<h1> Welcome to Cart Page </h1>');
    res.write('<p> This is the page for the cart section of the website </p>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  res.setHeader("Content-type", "text/html");
  res.write('<html>');
  res.write('<head><title>404 Not Found</title></head>');
  res.write('<body>');
  res.write('<h1>404 Not Found</h1>');
  res.write('<p>Sorry, the page you are looking for could not be found</p>');
  res.write('</body>');
  res.write('</html>');
  res.end();

})

const PORT=3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});