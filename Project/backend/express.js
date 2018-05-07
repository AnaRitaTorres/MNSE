var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var jwt = require('jsonwebtoken');
const port = 8420; //dank

// this is for allowing other domains to connect
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next()
});

app.use(function (err, req, res, next) {
  res.status(500);
  res.render('error', { error: err })
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: false}));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set(path.join(__dirname, 'views'));

var db = require('./db/initialize')('production');
require('./db/connect').connect(db);

var apiRoutes = express.Router();

// authentication: https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens ou passport.js
apiRoutes.use(function (req, res, next) {
    var token = req.body.token || req.query.token;
    if (token !== undefined && token !== '' && token !== null) {
        try {
            jwt.verify(token, require('./db/connect').secretString, function (err, decoded) {
                if (err) {
                   return res.send({success:false, content: 'Failed Token Authentication!'});
                }
                req.decoded = decoded;
                next();
            });
        } catch (err) {
            return res.send({success:false, content: 'Failed Token Authentication!'});
        }
    } else return res.send({success:false, content: 'Invalid token!'});
});

app.use('/auth', apiRoutes);

app.listen(port, function () {
  console.log('API listening on port ' + port)
});

//ROUTES: user apiRoutes if authentication is required!
apiRoutes.get('/', function (req, res) {
    res.send('authentication acquired!');
});

app.get('/', function(req, res) {
    res.send('workarino!')
});

app.get('/getMovie', function (req, res) {
    var id = req.query.id;
    res.send('something' + id);
});

app.get('/getCharacter', function (req, res) {
    var id = req.query.id;
    res.send('something' + id);
});

app.get('/getUser', function (req, res) {
    var id = req.query.id;
    res.send('something' + id);
});

apiRoutes.post('/updateUser', function (req, res) {
    var id = req.body.id;
    res.send('something' + id);
});
//TODO
app.get('/register', function (req, res) {
    res.send('lmao');
});
//TODO
app.get('/login', function (req, res) {
    res.send('lmao');
});

apiRoutes.post('/followUser', function (req, res) {
    var id = req.body.id;
    res.send('something' + id);
});

apiRoutes.post('/addMovie', function (req, res) {
    var id = req.body.id;
    res.send('something' + id);
});

apiRoutes.post('/addCharacter', function (req, res) {
    var id = req.body.id;
    res.send('something' + id);
});

//TODO não sei se vai ser preciso a cena para remover mas oh well
apiRoutes.post('/removeMovie', function (req, res) {
    var id = req.body.id;
    res.send('something' + id);
});

apiRoutes.post('/removeCharacter', function (req, res) {
    var id = req.body.id;
    res.send('something' + id);
});