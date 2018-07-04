var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var index = require('./routes/index');
var work = require('./routes/work');

var app = express();

//view engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', ejs);
app.engine('html', ejs.renderFile);

//set static folder
app.use(express.static(path.join(__dirname,'/client/dist/client')));
//app.use(express.static(path.join(__dirname,'/client/src/app')));

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

//app.use('/', index);
app.use('/api', work);

//send all other requests to the angular app
// app.route('/')
//   .get(function(req, res) {
//     res.sendFile(path.join(__dirname,'/client/dist/client/index.html'));
//   });
app.all('/', function(req, res) {
    res.sendFile(path.join(__dirname,'/client/dist/client/index.html'));
    //res.sendFile(path.join(__dirname,'/client/src/index.html'));
});

// app.put('/*', function(req, res) {
//     res.sendFile(path.join(__dirname,'/client/dist/client/index.html'));
// });

// app.post('/*', function(req, res) {
//     res.sendFile(path.join(__dirname,'/client/dist/client/index.html'));
// });


var port = 9511;

app.listen(process.env.PORT || port, function(){
    console.log("Server started on port " + port);
});
