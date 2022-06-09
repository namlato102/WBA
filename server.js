const express = require('express');
const mysql = require('mysql');

let app = express();
app.use(express.urlencoded({ extended: true }));

let conn = mysql.createConnection({
  host: "localhost",
  database: "medienhandel",
  user: "db",
  password: "db"
});

app.get('/', function (req, res) {
    res.set('Content-Type', 'text/html');
    res.send('<!DOCTYPE html><html lang="de"><head><title>Text</title></head><body><form method="post"><input type="text" name="text"/><input type="submit" value="absenden"/></form></body></html>');
});

app.post('/', function (req, res) {
    let sql = 'SELECT * FROM medienartikel WHERE titel LIKE ?';
    conn.query(sql, [req.body.text], function (err, rows) {
        if (err) throw err;
        res.set('Content-Type', 'text/html');
        res.send('<!DOCTYPE html><html lang="de"><head><title>Text</title></head><body><p>Your input was '+req.body.text+'</p><p>Found: </p><pre>'+JSON.stringify(rows)+'</pre></body></html>');
    });
});

conn.connect(function (err) {
    if (err) throw err;
 
    app.listen(3000, function () {
        console.log('Listening on port 3000');
    });
}); 
