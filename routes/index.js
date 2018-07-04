var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    //res.send('It Is a Index Page');
    res.render('index.html');
});

module.exports = router;