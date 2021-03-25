const { response } = require('express');
var express = require('express');
var router = express.Router();
/* GET users listing. */
router.post('/', function(req, res, next) {
  if(req.body.cookieName && req.body.selectCookie){
    if(req.body.selectCookie == "sessionCookie"){
      res.cookie('sessionCookie', req.body.cookieName);
      res.send("<a href='/'>세션쿠키 생성완료(돌아가기)</a>");
    }else{
      res.cookie('sessionCookie', req.body.cookieName,{maxAge:5000});
      res.send("<a href='/'>permanent쿠키 생성완료(돌아가기)</a>");
    }
    
  }
  else{
    res.send("입력이 적합하지 않음");
  }
});

module.exports = router;
