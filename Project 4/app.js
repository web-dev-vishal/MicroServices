const http = require("http");

const server = http.createServer((req, res)=> {
    if(req.method === "Get" && req.url === "/hello") {
        res.statusCode = 200;
        res.setHeader('Content-type', 'plain/text');
        res.write('Hello World');
        res.end();
    }
});

server.on("connection", () => {
    console.log('New client connection');
})

server.listen(3000);