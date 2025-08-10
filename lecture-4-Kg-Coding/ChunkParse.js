
const fs = require("fs");
const { buffer } = require("stream/consumers");

const requestHandler=((req, res) => {
  console.log("Received a request for:", req.url);
  console.log("Request method:", req.method);
  // console.log("Request headers:", req.headers);
  //Example of parsing request headers//

  if (req.url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>User Input Page</title></head>");
    res.write("<h1> Welcome to User Input Page</h1>");
    res.write('<form action ="/submit " method="POST">');
    res.write(
      '<input type="text" name="name" placeholder="Enter your name"><br><br>'
    );
    res.write(
      '<input type="email" name="email" placeholder="Enter your email"><br><br>'
    );
    res.write('<label for="gender"> Gender:</label><br><br>');
    res.write('<label for="gender"> male:</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');

    res.write('<label for="gender"> female:</label>');
    res.write(
      '<input type="radio" id="female" name="gender" value="female"><br><br>'
    );
    res.write('<input type="submit" value="Submit">');
    res.write("</form>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/submit" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log("Received chunk of data:", chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const params = new URLSearchParams(parsedBody);
      // Convert URLSearchParams to an object by old Methods//
      // const bodyobject={};
      // for(const[key,value] of params){
      //  bodyobject[key]=value;
      // }
      // console.log(bodyobject);

      // Convert URLSearchParams to an object by new Methods//
      const bodyobject = Object.fromEntries(params);
      console.log(bodyobject);
      fs.writeFileSync("userinput.txt", JSON.stringify(bodyobject));
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});

module.exports = requestHandler;
