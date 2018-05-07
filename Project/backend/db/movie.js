function getMovie(db, id, sendFunc) {
    var query = 'SELECT * FROM Movie WHERE id = ?';
    db.query(query, id, function (err, results) {
        if (err) {
            sendFunc(err);
        }
        else sendFunc(results[0]);
    })
}

function getMovies(db, sendFunc) {
    var query = 'SELECT * FROM Movie';
    db.query(query, function (err, results) {
        if (err) {
            sendFunc(err);
        }
        else sendFunc(results);
    })
}

module.exports.getMovie = getMovie;
module.exports.getMovies = getMovies;