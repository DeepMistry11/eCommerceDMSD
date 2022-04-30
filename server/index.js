const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "itsAsecrate11",
  database: "online_store",
});

db.connect(function (err) {
  if (err) {
    console.log(err, "error found");
  }
  //   console.log("Connected!");
});

app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "INSERT INTO customer(Email, Password) VALUES (?,?)",
    [email, password],
    (err, result) => {
      console.log(err, "something is wrong");
    }
  );
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users Where email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.length > 0) {
        console.log(result, "this is what i got");
        res.send(result);
      }
      // else {
      //   res.send({ message: "wrong combination" });
      //   console.log(result);
      // }
      // console.log(err);
    }
  );
});

app.get("/allProducts", (req, res) => {
  const sqlSelect = "SELECT * FROM product";
  db.query(sqlSelect, (err, result) => {
    console.log(result);
    // return result;
    res.send(result);
  });
});
app.get("/computers", (req, res) => {
  const sqlSelect = "SELECT * FROM product WHERE PType = 'Computer'";
  db.query(sqlSelect, (err, result) => {
    console.log(result);
    // return result;
    res.send(result);
  });
});
app.get("/laptops", (req, res) => {
  const sqlSelect = "SELECT * FROM product WHERE PType = 'Laptop'";
  db.query(sqlSelect, (err, result) => {
    console.log(result);
    // return result;
    res.send(result);
  });
});
app.get("/accessories", (req, res) => {
  const sqlSelect = "SELECT * FROM product";
  db.query(sqlSelect, (err, result) => {
    console.log(result);
    // return result;
    res.send(result);
  });
});

// app.post("/login", (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;

//   db.query(
//     "SELECT * FROM users WHERE email = ? AND password = ?",
//     [email, password],
//     (err, result) => {
//       if (err) {
//         res.send({ err: err });
//       }

//       if (result.length > 0) {
//         res.send(result);
//       } else ({ message: "Wrong username/password comination!" });
//     }
//   );
// });

app.get("/api/viewAll", (req, res) => {
  const sqlInsert = "SELECT * FROM computer";
  // "INSERT INTO computer(name, type, price) VALUES('DELL', 'Inspiron','20000' )";
  db.query(sqlInsert, (err, result) => {
    res.send("Data entered this time");
    console.log(result);
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
