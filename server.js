const http = require('http');
const fs = require('fs');

var server = http.createServer(function(req, res) {
    console.log('有人访问了');
    console.log(req.url);
    fs.readFile('./static/mock/index.json', function(err, data) {
        if (err) {
            console.log(404);
        } else {
            res.write(data);
        }
        res.end();
    })

})
server.listen(8080);
