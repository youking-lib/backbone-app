var http = require('http'),
    url = require('url'),
    fs = require('fs')
    path = require('path');

var mime = require('mime')


var app = http.createServer(function(req, res){

    var pathname = url.parse(req.url).pathname || '/index.html',
        mimeType = mime.lookup(pathname),
        filepath = path.join(__dirname, pathname);

    if(pathname == '/favicon.ico'){
        return
    }

    if(req.url === '/api/articles' && req.method === 'GET') {
        var articlesPath = path.join(__dirname, 'data/articles.json')
        serverStatic(req, res, articlesPath);
        return;
    }

    if(req.url === '/api/comments' && req.method === 'GET') {
        var commentsPath = path.join(__dirname, 'data/comments.json')
        serverStatic(req, res, commentsPath)
        return;
    }

    serverStatic(req, res, filepath)

    // serverStatic(req, res, filepath)
})

app.listen(8080, function(){
    console.log('server running at port 8080')
})


function send404(req, res) {
    res.writeHead(404, {'Content-Type': 'text/plain'})
    res.end('404 not found!')
}

function serverStatic(req, res, filepath) {
    fs.exists(filepath, function(exists) {
        if(!exists) {
            send404(req, res)
        }

        fs.readFile(filepath, function(err, data) {
            if(err) {
                console.log(err)
            }
            res.writeHead(200, {'Content-Type': mime.lookup(filepath)})
            res.end(data)
        })
    })
}

function sendText(req, res, data) {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(data)
}