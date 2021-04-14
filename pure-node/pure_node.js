const http = require('http');
const port = 3000;
const fs = require("fs");


const data = {
    name: "phimon",
    email: "pholmon43@gmail.com"
}





http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    if (req.url === '/raw-html') {
        res.write('<h1>Welcome</h1>');
        res.end();
    } else if (req.url === '/users') {
        res.write(JSON.stringify(data));
        res.end();
    } else if (req.url === '/') {
        res.write("home");
        res.end();
    } else {
        fs.readFile(__dirname + req.url, (err, data) => {
            if (err) {
              res.writeHead(404);
              res.end(JSON.stringify(err));
              return;
            }
            res.writeHead(200);
            res.end(data);
        });
    }
}).listen(port, function () {
    console.log("server start at port ", port);
});