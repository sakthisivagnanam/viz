var express = require('express');
var router = express.Router();

var mongo = require('mongojs');
var db = mongo('mongodb://sakthi123:sakthi321@ds161620.mlab.com:61620/mongolight',['workdetails']);

// router.get('/', function(req, res, next){
//     //res.send('It Is a work Page');
//     res.render('work.html');
// });


//get all tasks
router.get('/work', function(req, res, next){
    db.workdetails.find(function(err, workdetails)
    {
        if(err) {
            res.send(err);
        }
        res.json(workdetails);
    });
});


//get single tasks
router.get('/work/:id', function(req, res, next){
    db.workdetails.findOne({_id:mongo.ObjectId(req.params.id)},function(err, singledata)
    {
        if(err) {
            res.send(err);
        }
        res.json(singledata);
    });
});

module.exports = router;