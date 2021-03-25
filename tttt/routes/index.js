var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.cookies.minju){
    res.send("생성된 쿠키:"+req.cookies.minju);
  }else{
    res.render('index', { title: 'Express' });
  }
  
});

module.exports = router;
