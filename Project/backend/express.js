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
    var send = function (content) {
        require('./db/connect').sendGet(res, content);
    };
    require('./db/movie').getMovie(db, id, send);
});

app.get('/getCharacter', function (req, res) {
    var id = req.query.id;
    var send = function (content) {
        require('./db/connect').sendGet(res, content);
    };
    require('./db/character').getCharacter(db, id, send);
});

app.get('/getMovies', function (req, res) {
    var send = function (content) {
        require('./db/connect').sendGet(res, content);
    };
    require('./db/movie').getMovies(db, send);
});

app.get('/getCharacters', function (req, res) {
    var send = function (content) {
        require('./db/connect').sendGet(res, content);
    };
    require('./db/character').getCharacters(db, send);
});

app.get('/getUser', function (req, res) {
    var id = req.query.id;
    var send = function (content) {
        require('./db/connect').sendGet(res, content);
    };
    require('./db/user').getUser(db, id, send);
});

app.get('/searchUser', function (req, res) {
   res.send('rip');
});

apiRoutes.post('/updateUser', function (req, res) {
    var id = req.body.id;
    res.send('something' + id);
});

app.post('/register', function (req, res) {
    var info = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };
    if(info.name === undefined || info.email === undefined || info.password === undefined)
        return res.send({success: false, content: 'Missing Parameters!'});
    var send = function (content) {
        require('./db/connect').sendRegister(res, content);
    };
    require('./db/user').register(db, info, send);
});
//TODO
app.get('/login', function (req, res) {
    res.send('lmao');
});

app.get('/getFollowerCount', function (req, res) {
    var id = req.query.id;
    var send = function (content) {
        require('./db/connect').sendGet(res, content);
    };
    require('./db/user').getFollowedCount(db, id, send);
});

app.get('/getFollowers', function (req, res) {
    var id = req.query.id;
    var send = function (content) {
        require('./db/connect').sendGet(res, content);
    };
    require('./db/user').getFollowers(db, id, send);
});

app.get('/getFollowingCount', function (req, res) {
    var id = req.query.id;
    var send = function (content) {
        require('./db/connect').sendGet(res, content);
    };
    require('./db/user').getFollowingCount(db, id, send);
});

app.get('/getFollowings', function (req, res) {
    var id = req.query.id;
    var send = function (content) {
        require('./db/connect').sendGet(res, content);
    };
    require('./db/user').getFollowings(db, id, send);
});

apiRoutes.post('/followUser', function (req, res) {
    var id1 = req.body.id1;
    var id2 = req.body.id2;
    var send = function (content) {
        require('./db/connect').sendPost(res, content);
    };
    require('./db/user').follow(db, id1, id2, send);
});

apiRoutes.post('/unfollowUser', function (req, res) {
    var id1 = req.body.id1;
    var id2 = req.body.id2;
    var send = function (content) {
        require('./db/connect').sendPost(res, content);
    };
    require('./db/user').unfollow(db, id1, id2, send);
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

app.get('/testRegister', function (req, res) {
    var request = require('request');

    var authOptions = {
        url: 'http://localhost:8420/register',
        body: {
            name: req.query.name,
            email: req.query.email,
            password: req.query.password
        },
        json: true
    };
    request.post(authOptions,function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.send({success: true, content: body});
        }
        else{
            res.send({success: false, content: 'err'});
        }
    })
});