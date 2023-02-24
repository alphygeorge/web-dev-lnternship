// console.log("hello")
//creating a server with the help of http 
//require: keyword that helps to get http model
var http=require('http')
var mydt=require('./mymodule')
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/plain'})
    res.write("The date and time is "+mydt.mydate())
    res.end("Welcome to node.js server")
}).listen(1234)
