const http = require("http");
const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("\u041f\u0420\u0418\u0412\u0415\u0422");
});
server.listen(3000);
console.log("Server running at http://localhost:3000/");
