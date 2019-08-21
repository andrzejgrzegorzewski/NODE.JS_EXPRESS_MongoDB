const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

const users = [
    {name: "Adam", id: 1},
    {name: "Eva", id: 2},
]

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
    
    switch(req.url){
        case '/':
            fs.readFile(path.join(__dirname, "index.html"), (err, page) => {                    if(err) res.end('<h1>Failed to download the file.</h1>')
                else res.end(page)
                })
                // res.end("<h1>Home page.</h1>");
        break;
        case '/users':
            fs.readFile(path.join(__dirname, "users.html"), (err, page) => {
                if(err) res.end('<h1>Failed to download the file.</h1>')
                else res.end(page)
                })
                // res.end("<h1>Users page.</h1>");
                break;
                case '/api/users':
                    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8'});
                    const usersJSON = JSON.stringify(users);
                    res.end(usersJSON)
                    // res.end("<h1>API.</h1>");
        break;
        case '/code.js':
            res.writeHead(200, { 'Content-Type': 'application/javascript; charset=utf-8'});
            fs.readFile(path.join(__dirname, "code.js"), (err, page) => {
                    if(err) res.end('<h1>Failed to download the file.</h1>')
                    else res.end(page)
                    })
                    res.end('console.log("added JS")')

        break;
        default:
            res.end("Page does not exist.")
    }
    
}).listen(port, '127.0.0.1', () => {
    console.log(`Our server work on port: ${port}`)
})