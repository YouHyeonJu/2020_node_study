var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');

var sever = http.createServer(function(req,res){
    if(req.url === '/'){
        fs.readFile('./calculator.html',(err,data)=>{
            res.end(data);
        });
    }
    fs.createReadStream('./calculator.html').pipe(res);
    var parsedUrl= url.parse(req.url);
    var parseQuery = querystring.parse(parsedUrl.query,"&","=");
    if                  
})