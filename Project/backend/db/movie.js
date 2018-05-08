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

function getFavouriteMovies(db, id, sendFunc) {
    var query = 'SELECT Movie.* FROM Movie INNER JOIN FavouriteMovie ON id = idMovie WHERE id = ?';
    db.query(query, id, function (err, results) {
        if (err) {
            sendFunc(err);
        }
        else sendFunc(results);
    })
}

function addFavourite(db, id1, id2, sendFunc) {
    var query = 'INSERT INTO FavouriteMovie (idUser, idMovie) VALUES(?,?)';
    db.query(query, [id1, id2], function (err, results) {
        if (err) {
            sendFunc(err);
        }
        else sendFunc(true);
    })
}

function deleteFavourite(db, id1, id2, sendFunc) {
    var query = 'DELETE FROM FavouriteMovie WHERE idUser = ? and idMovie = ?';
    db.query(query, [id1, id2], function (err, results) {
        if (err) {
            sendFunc(err);
        }
        else sendFunc(true);
    })
}

module.exports.getMovie = getMovie;
module.exports.getMovies = getMovies;
module.exports.getFavouriteMovies = getFavouriteMovies;
module.exports.addFavourite = addFavourite;
module.exports.deleteFavourite = deleteFavourite;