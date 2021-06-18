const fs = require('fs')
const http = require('http')

http.createServer(function (req, res) {
    if (req.url === '/foods') {
        fs.readFile(__dirname + req.url + '.json', function (err, data) {
            if (err) {
                res.writeHead(404);
                res.end(JSON.stringify('Error 404 - File Not Found'));
                return;
            }
            res.writeHead(200);
            res.end(data)
        })
    } else {
        res.writeHead(404);
        res.end(JSON.stringify('Error 404 - File Not Found'));
    }
}).listen(8080)