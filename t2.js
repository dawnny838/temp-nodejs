const http = require("http")
const server= http.createServer((req,res)=>{
    // console.log(req)
    if (req.url==='/'){
    res.end("Wlecome to my first server!")
    
    }
    else if (req.url=='/about'){
    res.end("Here is our short story!")
    
    } else {
    res.end(`<h1>Oops! </h1>
    <p>not exist</p>
    <a href="/">back home</a>`)
    }
})

server.listen(5000)