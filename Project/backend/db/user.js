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
        else sendFunc('lel');
    })
}

function unfollow(db, id1, id2, sendFunc) {
    var query = 'DELETE FROM Follower WHERE idUser1 = ? and idUser2 = ?';
    db.query(query, [id1, id2], function (err, results) {
        if (err) {
            sendFunc(err);
        }
        else sendFunc('lel');
    })
}

module.exports.getUser = getUser;
module.exports.getFollowingCount = getFollowingCount;
module.exports.getFollowedCount = getFollowedCount;
module.exports.getFollowers = getFollowers;
module.exports.getFollowings = getFollowings;
module.exports.follow = follow;
module.exports.unfollow = unfollow;
