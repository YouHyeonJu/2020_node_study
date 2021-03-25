var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');
//1.qreateServer
var server = http.createServer((req, res) => {
    console.log('req.url : ', req.url);

    var parsedUrl = url.parse(req.url);     // url parsing
    console.log('parsedUrl ', parsedUrl);

    var qs = querystring.parse(parsedUrl.query);  // querystring parsing
    console.log('qs ', qs);

    // 드라마 목록에 데이터 추가
   

    if (qs.num1 && qs.num2){
        var result=0;
        var n1 = parseInt(qs.num1);
        var n2 = parseInt(qs.num2);
        if(Number.isNaN(n1) || Number.isNaN(n2)){
            fs.readFile('./sum.html',(err,data)=> {
                res.end(data);
            });
            return;
        }else {
            for(var i = n1; i<=n2; i++){
                result+=i;
            }
            res.end(`<h1>${result}</h1>`);
        }
    }else{
        fs.readFile('./sum.html',(err,data)=> {
            res.end(data);
        });
    }
    
    
}).listen(8080,()=>{
    console.log('8080열어따');
});