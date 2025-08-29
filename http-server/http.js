const http = require("http");

//create server

const port = 5000;

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(`{"data":"HI SERVER !"}`);
    } else if (req.url == "/about") {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end(`About Page`);
    } else if (req.url == "/contact") {
        res.writeHead(200, { "content-type": "text/plain" });
        res.end(`Contact Page`);
    } else {
        res.writeHead(404, { "content-type": "text/plain" });
        res.end(`404 Page not found`);
    }

});

server.listen(port, (err) => {
    if (err) throw err;
    console.log("server started on port : ", port);
});