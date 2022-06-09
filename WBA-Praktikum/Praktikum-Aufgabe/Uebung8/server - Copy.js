const express = require('express')
const app = express()
const port = 3000

//Die static Funktion stellt automatisch alle Dateien im Unterordner "public" via GET bereit, in diesem befinden sich die Dateien index.html und js.js
//Aufgabe a+b
app.use(express.static('public'));

//Dank express.urlencoded() kann Express die Formdaten im Postbody als Array einlesen
app.use(express.urlencoded());

//App Auf Port 3000 starten
app.listen(3000, () => {
  console.log(`Server listening on port ${port}`)
})

//Post auf "/submit_form" abfangen und auswerten
app.post('/submit_form', function requestHandler(req, res) {
  //Gebe den Body aus (zur Veranschauung)
  console.log(req.body);

  //Alle Flaschen zusammen rechnen
  let sumbottles = req.body["Flaschen"].reduce((a, b) => parseInt(a) + parseInt(b), 0);
  
  //HTML Seite bauen
  //Wir akzeptieren hier einfach die via POST übermitelten Daten. Sicher ist das nicht, aber einfach.
  let ret = `<!DOCTYPE html>
  <html lang="de">
      <head>
        <title>Ausgabe Node</title>
      </head>
      <body>
        <p>Summe gesamt (&euro;): ${parseFloat(req.body["sum"]).toFixed(2)}</p>
        <p>Anzahl Flaschen: ${sumbottles}</p>
      </body>
  </html>
  `

  res.end(ret);
});