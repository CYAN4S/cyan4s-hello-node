const http = require("http");
const fs = require("fs");
const PORT = process.env.PORT || 5000;

const { parseCookies } = require("./parseCookies");

const server = http.createServer((req, res) => {
  const cookies = parseCookies(req.headers.cookie);
  console.log(req.url, cookies);
  res.writeHead(200, {'Set-Cookie': 'mycookie=test'});

  fs.readFile("./index.html", (err, data) => {
    if (err) {
      throw err;
    }
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`PORT ${PORT}`);
});
