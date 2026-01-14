const http = require("http");

const server = http.createServer((req, res)=> {});

server.on("connection", () => {
    console.log('New client connection');
})

server.listen(3000);