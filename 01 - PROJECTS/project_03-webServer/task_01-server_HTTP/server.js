const http = require('http');

const port = process.env.PORT || 3000;

http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })
        res.write("<h1>Home page</h1>")
        res.end()
    } else if(req.url ==="/users"){
        res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
        })
        res.end("<h1>Users page</h1>")
    } else {
        res.writeHead(404, {
        'Content-Type': 'text/html; charset=utf-8'
        })
        res.end(`<h1>The page does not exist !!!</h1>`)
    }
    // res.write(`<h1>${req.url}</h1>`)
    
}).listen(port, '127.0.0.1', () => {
    console.log(`Our server work on port: ${port}`)
})