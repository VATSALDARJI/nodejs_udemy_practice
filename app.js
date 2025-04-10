const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.headers);
  console.log(req.url);
  console.log(req.method);

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>First Page</title></head>");
  res.write("<body><h1>Hello from server</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(3000);
