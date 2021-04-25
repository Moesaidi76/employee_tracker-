  const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 8080,
  user: "root",
  password: "********",
  database: "employee_db",
});

connection.connect();


connection.query = util.promisify(connection.query);

module.exports = connection;