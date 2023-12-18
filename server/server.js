const express = require("express");
const server = express();

const sqlite3 = require("sqlite3").verbose();

/* This code initializes an Express server, configures middleware for JSON, URL-encoded data, and Cross-Origin Resource Sharing (CORS). It sets up an endpoint (/users) to retrieve all user records from an SQLite database and listens on port 3000 for incoming connections. The code handles potential errors during the database query and provides appropriate HTTP responses. */

server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");

    next();
  });

server.get("/users", (req, res) => {
  const db = new sqlite3.Database("./gik339-labb2.db");

  db.all("SELECT * FROM users", (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(rows);
    }
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servern är igång på port ${port}`);
});