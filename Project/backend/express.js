var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()
var jwt = require('jsonwebtoken');
const port = 8082;

// this is for allowing other domains to connect
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.use(function (err, req, res, next) {
  res.status(500)
  res.render('error', { error: err })
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extend: false}))

app.use('/static', express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
app.set(path.join(__dirname, 'views'))

var db = require('./db/initialize')('test');
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
    res.send('authentication');
});

app.get('/', function(req, res) {
    res.send('workarino!')
});