// var http = require('http')
// var fs = require('fs')

// http.createServer(function(req,res){
//     fs.readFile('demofile1.html',function(err,data){
//         res.writeHead(200,{'Content-Type':'text/html'})
//         res.write(data)
//         return res.end()
//     })
// }).listen(8080)

// var fs=require ('fs')

// fs.appendFile("demo.txt","hello jarvis",function(err){
//     if(err) throw(err)
//     console.log("its done");
// })

// var fs = require("fs")

// fs.open("demo1.txt","w",function(err,file){
//     if(err) throw err;
//     console.log("done hei")
// })

var fs = require('fs');

//create a file named mynewfile3.txt:
fs.writeFile('demo1.txt', 'Hello !', function (err) {
  if (err) throw err;
  console.log('update');
});

//  var fs=require ('fs')

// fs.appendFile("demo.txt","hello sir",function(err){
//     if(err) throw(err)
//     console.log("its done");
// })