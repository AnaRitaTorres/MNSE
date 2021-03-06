function getUser(db, id, sendFunc) {
    var query = 'SELECT * FROM User WHERE id = ?';
    db.query(query, id, function (err, results) {
        if (err) {
            sendFunc(err);
        }
        else sendFunc(results[0]);
    })
}

function getFollowingCount(db, id, sendFunc) {
    var query = 'SELECT COUNT(*) as followers FROM Follower WHERE idUser1 = ?';
    db.query(query, id, function (err, results) {
        if (err) {
            sendFunc(err);
        }
        else sendFunc(results[0]);
    })
}

function getFollowedCount(db, id, sendFunc) {
    var query = 'SELECT COUNT(*) as followers FROM Follower WHERE idUser2 = ?';
    db.query(query, id, function (err, results) {
        if (err) {
            sendFunc(err);
        }
        else sendFunc(results[0]);
    })
}

function getFollowers(db, id, sendFunc) {
    var query = 'SELECT User.* FROM Follower INNER JOIN User ON id = idUser1 WHERE idUser2 = ?';
    db.query(query, id, function (err, results) {
        if (err) {
            sendFunc(err);
        }
        else sendFunc(results);
    })
}
//lmao followings
function getFollowings(db, id, sendFunc) {
    var query = 'SELECT User.* FROM Follower INNER JOIN User ON id = idUser2 WHERE idUser1 = ?';
    db.query(query, id, function (err, results) {
        if (err) {
            sendFunc(err);
        }
        else sendFunc(results);
    })
}

function follow(db, id1, id2, sendFunc) {
    var query = 'INSERT INTO Follower (idUser1, idUser2) VALUES(?,?)';
    db.query(query, [id1, id2], function (err, results) {
        if (err) {
            sendFunc(err);
        }
        else sendFunc(true);
    })
}

function unfollow(db, id1, id2, sendFunc) {
    var query = 'DELETE FROM Follower WHERE idUser1 = ? and idUser2 = ?';
    db.query(query, [id1, id2], function (err, results) {
        if (err) {
            sendFunc(err);
        }
        else sendFunc(true);
    })
}

function searchEverything(db, string, sendFunc){
    var query = `(SELECT id, name, description, profile_pic as pic, ? as type FROM User WHERE name like ? )
    UNION (SELECT id, name, description, pic, ? as type FROM \`Character\` WHERE name like ? ) 
    UNION (SELECT id, name, description, pic, ? as type FROM Movie WHERE name like ? )`;
    var search = '%' + string + '%';
    db.query(query, ['user', search, 'char', search, 'mov', search], function (err, results) {
        if (err) {
            sendFunc(err);
        }
        else sendFunc(results);
    })
}

function register(db, info, sendFunc) {
    var query = 'INSERT INTO User(name, email, password, description, location) VALUES (?,?,MD5(?), ?, ?)';
    db.query(query, [info.name, info.email, info.password, info.description, info.location], function (err, results) {
        if (err) {
            sendFunc(err);
        }
        else sendFunc(true);
    })
}

function login(db, info, jwt, sendFunc) {
    var query = 'SELECT * FROM User WHERE email = ? and password = MD5(?)';
    db.query(query, [info.email, info.password], function (err, results) {
        if (err) {
            sendFunc(err);
        }
        if(results[0] === undefined) return sendFunc(results[0]);
        var obj = {
            id: results[0].id
        };
        var token = jwt.sign(obj, require('../db/connect').secretString, {
            expiresIn: 60 * 60
        });
        return sendFunc({token: token, id: results[0].id, name: results[0].name});
    })
}

module.exports.getUser = getUser;
module.exports.getFollowingCount = getFollowingCount;
module.exports.getFollowedCount = getFollowedCount;
module.exports.getFollowers = getFollowers;
module.exports.getFollowings = getFollowings;
module.exports.follow = follow;
module.exports.unfollow = unfollow;
module.exports.search = searchEverything;
module.exports.register = register;
module.exports.login = login;
