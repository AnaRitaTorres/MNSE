function getCharacter(db, id, sendFunc) {
    var query = 'SELECT * FROM Character WHERE id = ?';
    db.query(query, id, function (err, results) {
        if (err) {
            sendFunc(err);
        }
        else sendFunc(results[0]);
    })
}

function getCharacters(db, sendFunc) {
    var query = 'SELECT * FROM Character';
    db.query(query, id, function (err, results) {
        if (err) {
            sendFunc(err);
        }
        else sendFunc(results);
    })
}

module.exports.getCharacter = getCharacter;
module.exports.getCharacters = getCharacters;