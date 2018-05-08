function getCharacter(db, id, sendFunc) {
    var query = 'SELECT * FROM `Character` WHERE id = ?';
    db.query(query, id, function (err, results) {
        if (err) {
            sendFunc(err);
        }
        else sendFunc(results[0]);
    })
}

function getCharacters(db, sendFunc) {
    var query = 'SELECT * FROM `Character`';
    db.query(query, function (err, results) {
        if (err) {
            sendFunc(err);
        }
        else sendFunc(results);
    })
}

function getFavouriteCharacters(db, id, sendFunc) {
    var query = 'SELECT `Character`.* FROM `Character` INNER JOIN FavouriteCharacter ON id = idCharacter WHERE id = ?';
    db.query(query, id, function (err, results) {
        if (err) {
            sendFunc(err);
        }
        else sendFunc(results);
    })
}

function addFavourite(db, id1, id2, sendFunc) {
    var query = 'INSERT INTO FavouriteCharacter (idUser, idCharacter) VALUES(?,?)';
    db.query(query, [id1, id2], function (err, results) {
        if (err) {
            sendFunc(err);
        }
        else sendFunc(true);
    })
}

function deleteFavourite(db, id1, id2, sendFunc) {
    var query = 'DELETE FROM FavouriteCharacter WHERE idUser = ? and idCharacter = ?';
    db.query(query, [id1, id2], function (err, results) {
        if (err) {
            sendFunc(err);
        }
        else sendFunc(true);
    })
}

module.exports.getCharacter = getCharacter;
module.exports.getCharacters = getCharacters;
module.exports.getFavouriteCharacters = getFavouriteCharacters;
module.exports.addFavourite = addFavourite;
module.exports.deleteFavourite = deleteFavourite;