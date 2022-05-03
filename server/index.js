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

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const db = mysql.createConnection({
  multipleStatements: true,
  host: "localhost",
  port: "3306",
  user: "root",
  password: "itsAsecrate11",
  database: "online_store",
  // host: "localhost",
  // user: "root",
  // password: "password",
  // database: "online_store",
});

db.connect(function (err) {
  if (err) {
    console.log(err, "error found");
  }
  //   console.log("Connected!");
});

app.post("/register", (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const address = req.body.address;
  const phone = req.body.phone;
  const password = req.body.password;
  console.log("req.body");
  console.log(req.body);
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "INSERT INTO customer(CID, FNAME, LNAME, Email, Address, Phone, Password) VALUES (22,?,?,?,?,?,?)",
    [fname, lname, email, address, phone, password],
    (err, result) => {
      console.log(err, "something is wrong");
    }
  );
});

app.post("/login", (req, res) => {
  console.log("logged in");
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM customer Where email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err.message);
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

app.get("/api/viewAll", (req, res) => {
  const sqlInsert = "SELECT * FROM computer";
  // "INSERT INTO computer(name, type, price) VALUES('DELL', 'Inspiron','20000' )";
  db.query(sqlInsert, (err, result) => {
    res.send("Data entered this time");
    console.log(result);
  });
});

app.post("/api/addToCart", (req, res) => {
  console.log("in add to cart api");
  const BID = req.body.BID;
  const CID = req.body.CID;
  const PID = req.body.PID;
  const Quantity = req.body.Quantity;
  const PriceSold = req.body.PriceSold;
  console.log("req.body in add to cart");
  console.log(req.body);
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "INSERT INTO userDetailAfterLogin(CID) VALUES (?)",
    [CID],
    (err, result) => {
      console.log(err, "something is wrong in userDetailAfterLogin ");
    }
  );
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "INSERT INTO basket(CID,BID) VALUES (?,?)",
    [CID, BID],
    (err, result) => {
      console.log(err, "something is wrong basket");
    }
  );
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "INSERT INTO appears_in(BID,PID,Quantity,PriceSold) VALUES (?,?,?,?)",
    [BID, PID, Quantity, PriceSold],
    (err, result) => {
      console.log(err, "something is wrong appears_in");
    }
  );
  res.send("Product added to cart");
});

app.post("/api/displayCart", (req, res) => {
  console.log("in displayCart");

  const sqlQuery =
    "SELECT PName, PType, description, Quantity, PriceSold FROM cart NATURAL JOIN product NATURAL JOIN userDetailAfterLogin WHERE cart.PID=product.PID AND cart.CID=userDetailAfterLogin.CID;";
  db.query(
    sqlQuery,

    (err, result) => {
      console.log(err, "something is wrong");
      res.send("Cart Details", result);
    }
  );
});

///////////////////////////////     ONLINE SALES           /////////////////////////////////////////////

app.get("/sales", (req, res) => {
  const sqlSelect =
    "CREATE TABLE TEMP_TABLE1 AS SELECT SUM(Quantity) AS SOLD_TIMES, PID AS PRODUCT_SOLD_PID FROM appears_in NATURAL JOIN transactions WHERE DATE(TDATE)>= '2022-01-01' AND DATE(TDATE)<= '2022-01-01' AND TTag='Delivered' GROUP BY PID ORDER BY SOLD_TIMES; ";
  // ["2022-01-01", "2023-01-01"],
  // const sql2 =
  JOIN(
    "SELECT PID,PName,SOLD_TIMES FROM product NATURAL JOIN TEMP_TABLE1 WHERE PID=PRODUCT_SOLD_PID ORDER BY SOLD_TIMES DESC;"
  );
  // const op = sqlSelect  sql2;
  db.query(sqlSelect, (err, result) => {
    console.log(result);
    // return result;
    res.send(result);
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////

app.listen(3001, () => {
  console.log("running on port 3001");
});

app.get("/profile", (req, res) => {
  db.query("SELECT * FROM customer", (err, result) => {
    console.log(result);
    // return result;
    res.send(result);
  });
});
