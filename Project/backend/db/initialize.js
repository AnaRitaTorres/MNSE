module.exports = function initialize (type) {
  var mysql = require('mysql')
  if(type === 'production'){
    return mysql.createConnection({
      host: 'comparty-my-sql.chxhg9ep3u4i.eu-west-2.rds.amazonaws.com', //port 3306
      user: 'admin',
      password: 'comparty123',
      database: 'mnse',
	  port: 3306,
      multipleStatements: true
    });
  }
  else if (type === 'test') {
    return mysql.createConnection({
      host: 'comparty-my-sql.chxhg9ep3u4i.eu-west-2.rds.amazonaws.com', //port 3306
      user: 'admin',
      password: 'comparty123',
      database: 'mnse',
	  port: 3306,
      multipleStatements: true
    })
  } else {
    return mysql.createConnection({
      host: 'comparty-my-sql.chxhg9ep3u4i.eu-west-2.rds.amazonaws.com', //port 3306
      user: 'admin',
      password: 'comparty123',
      database: 'mnse',
	  port: 3306,
      multipleStatements: true
    });
  }
}