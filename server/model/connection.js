const mysql = require('mysql')

console.log(process.env.MYSQL_HOST)
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

pool.getConnection(function(err, connection) {
    if (err) {
      console.log(err);
      return
    }
    else{
        console.log('connected as id ' + connection.threadId);
    }
  });

module.exports = {pool}