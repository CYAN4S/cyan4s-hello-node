const http = require("http");
const fs = require("fs");
const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
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
