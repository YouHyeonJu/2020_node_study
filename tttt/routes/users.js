var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  if(req.body.selectCookie && req.body.cookieName){
    if(req.body.selectCookie=="sessionCookie"){
      res.cookie("minju",req.body.cookieName);
      res.send("<a href='/'>세션쿠키생성완료(돌아가기)</a>");
    }else{
      res.cookie("minju",req.body.cookieName,{maxAge:5000});
      res.send("<a href='/'>포미숀꾸키생성완료(돌아가기)</a>");
    }
  }else{
    res.send("재대로 안넣나?");
  }
});

module.exports = router;
