var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "Luna",

  // Your password
<<<<<<< HEAD
  password: "Papaya321",
=======
  password: "ChangeMe123",
>>>>>>> origin/master
  database: "ice_creamDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res, null, 2));
    connection.end();
  });
}
