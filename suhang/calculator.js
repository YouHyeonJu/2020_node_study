var http=require('http')
var fs = require('fs');
var querystring = require('querystring');
var url= require('url');
var server = http.createServer(function(req, res){
    if(req.url === '/'){
        fs.readFile('./calculator.html', (err, data) => {
            res.end(data);
        });
    }
    fs.createReadStream('./calculator.html').pipe(res);
    var parsedUrl = url.parse(req.url);
    var parsedQuery = querystring.parse(parsedUrl.query, '&', '=');
    if(parsedQuery.operator == 'add'){
        result = parseInt(parsedQuery.num1, 10) + parseInt(parsedQuery.num2, 10);
         write_to_html(req, res, result);
     }
     else if(parsedQuery.operator == 'subtract'){
         result = parseInt(parsedQuery.num1, 10) - parseInt(parsedQuery.num2, 10);
         write_to_html(req, res, result);
     }
     else if(parsedQuery.operator == 'multiply'){
         result = parseInt(parsedQuery.num1, 10) * parseInt(parsedQuery.num2, 10);
         write_to_html(req, res, result);
     }
     else if(parsedQuery.operator == 'divide'){
         result = parseInt(parsedQuery.num1, 10) / parseInt(parsedQuery.num2, 10);
         write_to_html(req, res, result);
     }
}).listen(8080, function(){
    console.log('listen at port: 8080')
});
function write_to_html(req, res, result){
    res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
    res.write(`<h1>계산결과:${result}</h1>`);
    res.end(`<a href='http://localhost:8080'>첫 화면으로 돌아가기</a>`);
}