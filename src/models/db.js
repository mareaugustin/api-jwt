const mysql = require('mysql2/promise');

module.exports = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: ',adgjmptw',
  port: 3306,
  database: 'authuser',
  waitForConnections: true
});
  
