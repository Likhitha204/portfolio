const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Likhi123@sql",
  database: "portfolio",
  port:3308
});
db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Get projects
app.post("/projects", (req, res) => {
  const { title, description } = req.body;
  const query = "INSERT INTO projects (title, description) VALUES (?, ?)";
  db.query(query, [title, description], (err, result) => {
    if (err) {
      console.error("Insert Error",err);
      return res.status(500).send({error:err.message});
    }
    res.status(201).send("Project added");
  });
});

app.get("/projects", (req, res) => {
  db.query("SELECT * FROM projects", (err, results) => {
    if (err) return res.send(err);
    res.json(results);
  });
});

app.get('/education', (req, res) => {
  db.query('SELECT * FROM education', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});


// Handle contact form
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  db.query(
    "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)",
    [name, email, message],
    (err) => {
      if (err) return res.send(err);
      res.send("Message received");
    }
  );
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
