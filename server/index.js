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
    "INSERT INTO customer(CID, FNAME, LNAME, Email, Address, Phone, Password) VALUES (40,?,?,?,?,?,?)",
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
  console.log("in add to cart api", req);
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

app.get("/api/displayCart", (req, res) => {
  console.log("in displayCart");

  const sqlQuery =
    "SELECT PName, PType, description, Quantity, PriceSold FROM cart NATURAL JOIN product NATURAL JOIN userDetailAfterLogin WHERE cart.PID=product.PID AND cart.CID=userDetailAfterLogin.CID;";
  db.query(sqlQuery, (err, result) => {
    console.log(err, "something is wrong");
    res.send(result);
  });
});

///////////////////////////////     ONLINE SALES           /////////////////////////////////////////////

// app.post("/api/sales", (req, res) => {
//   console.log("api/sales");
//   //const TTAG = req.body.TTAG;
//   db.query(
//     // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
//     "CREATE TABLE TEMP_TABLE1 AS SELECT SUM(Quantity) AS SOLD_TIMES, PID AS PRODUCT_SOLD_PID FROM appears_in NATURAL JOIN transactions WHERE DATE(TDATE)>= '2022-01-01' AND DATE(TDATE)<= '2023-01-01' AND TTag='Delivered' GROUP BY PID ORDER BY SOLD_TIMES",
//     // [TDATE,TDATE,TTAG],
//     ["2022-01-01", "2023-01-01", "Delivered"],
//     (err, result) => {
//       console.log(err, "something is wrong in 1st ");
//     }
//   );
//   db.query(
//     // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
//     "SELECT PID,PName,SOLD_TIMES FROM product NATURAL JOIN TEMP_TABLE1 WHERE PID=PRODUCT_SOLD_PID ORDER BY SOLD_TIMES DESC",

//     (err, result) => {
//       console.log(err, "something is wrong in 2nd ", result);
//       res.send(result);
//     }
//   );
// });

app.post("/card", (req, res) => {
  const cnum = req.body.cnum;
  const snum = req.body.snum;
  const oname = req.body.oname;
  const ctype = req.body.ctype;
  const badd = req.body.badd;
  const exdate = req.body.exdate;
  const storedc = req.body.storedc;
  console.log("req.body");
  console.log(req.body);
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "INSERT INTO credit_card(CCNumber, SecNumber, OwnerName, CCType, BilAddress, ExpDate, StoredCardCID) VALUES (?,?,?,?,?,?,?)",
    [cnum, snum, oname, ctype, badd, exdate, storedc],
    (err, result) => {
      console.log(err, "something is wrong");
    }
  );
});

app.post("/address", (req, res) => {
  const cid = req.body.cid;
  const sname = req.body.sname;
  const rname = req.body.rname;
  const street = req.body.street;
  const snumber = req.body.snumber;
  const city = req.body.city;
  const zip = req.body.zip;
  const state = req.body.state;
  const country = req.body.country;
  console.log("req.body");
  console.log(req.body);
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "INSERT INTO shipping_address(CID, SAName, RecepientName, Street, SNumber, City, Zip, State, Country) VALUES (?,?,?,?,?,?,?,?,?)",
    [cid, sname, rname, street, snumber, city, zip, state, country],
    (err, result) => {
      console.log(err, "something is wrong");
    }
  );
});

app.post("/transactions", (req, res) => {
  const bid = req.body.bid;
  const cnumber = req.body.cnumber;
  const cid = req.body.cid;
  const sname = req.body.sname;
  const tdate = req.body.tdate;
  const tag = req.body.tag;
  console.log("req.body");
  console.log(req.body);
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "INSERT INTO credit_card(SAName, RecepientName, Street, SNumber, City, Zip, State, Country) VALUES (?,?,?,?,?,?,?,?)",
    [sname, rname, street, snumber, city, zip, state, country],
    (err, result) => {
      console.log(err, "something is wrong");
    }
  );
});

////////////////////////////////////////////////PROFILE////////////////////////////////////////////////////////

app.post("/profile", (req, res) => {
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

app.post("/orders", (req, res) => {
  console.log("transaction summary fetching started");
  const cnum = req.body.cnum;
  const cid = req.body.cid;
  const sname = req.body.sname;
  console.log(req.body);
  db.query(
    "SELECT BID FROM userdetailafterlogin NATURAL JOIN basket WHERE userdetailafterlogin.CID=basket.CID",
    console.log("fetched query"),
    (err, result) => {
      // for (var i = 0; i < result.length; i++) {
      console.log(result[1].BID);
      db.query(
        "INSERT INTO transactions(BID, CCNumber, CID, SAName, TDate, TTag) VALUES (?, ?, ?, ?, '2022-05-03', 'Delivered') ",
        [result[0].BID, cnum, cid, sname, "2022-05-03", "Delivered"],
        // [result[1], cnum, cid, sname, "2022-05-03", "Delivered"],
        // [result[2], cnum, cid, sname, "2022-05-03", "Delivered"],
        (err, result) => {
          if (err) {
            console.log(err);
            res.send(err.message);
          }
          if (result.length > 0) {
            console.log(result, "transaction done");
            res.send(result);
          }
        }
      );
      // }

      // else {
      //   res.send({ message: "wrong combination" });
      //   console.log(result);
      // }
      // console.log(err);
    }
  );
});
app.post("/api/sales", (req, res) => {
  console.log("api/sales");
  //const TTAG = req.body.TTAG;
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "DROP TABLE TEMP_TABLE1",

    (err, result) => {
      console.log(err, "something is wrong in 1st ");
    }
  );
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "CREATE TABLE TEMP_TABLE1 AS SELECT SUM(Quantity) AS SOLD_TIMES, PID AS PRODUCT_SOLD_PID FROM appears_in NATURAL JOIN transactions WHERE DATE(TDATE)>= ? AND DATE(TDATE)<= ? AND TTag='Delivered' GROUP BY PID ORDER BY SOLD_TIMES",
    [req.body.startDate, req.body.endDate, "Delivered"],

    (err, result) => {
      console.log(err, "something is wrong in 1st ");
    }
  );
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "SELECT PID,PName,SOLD_TIMES FROM product NATURAL JOIN TEMP_TABLE1 WHERE PID=PRODUCT_SOLD_PID ORDER BY SOLD_TIMES DESC",

    (err, result) => {
      console.log(err, "something is wrong in 2nd ", result);
      res.send(result);
    }
  );
});

app.post("/api/sales2", (req, res) => {
  console.log("api/sales2");
  //const TTAG = req.body.TTAG;
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "CREATE TABLE TEMP_TABLE2 AS SELECT PID, COUNT(PID) AS count FROM appears_in NATURAL JOIN transactions WHERE DATE(TDATE)>='2022-01-01' AND DATE(TDATE)<='2023-01-01' AND TTag='Delivered' GROUP BY PID",
    // [TDATE,TDATE,TTAG],
    ["2022-01-01", "2023-01-01", "Delivered"],
    (err, result) => {
      console.log(err, "something is wrong in 1st ");
    }
  );
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "CREATE TABLE TEMP_TABLE3 AS SELECT CID,PID FROM appears_in NATURAL JOIN transactions WHERE DATE(TDATE)>='2022-01-01' AND DATE(TDATE)<='2023-01-01' AND TTag='Delivered'",
    // [TDATE,TDATE,TTAG],
    ["2022-01-01", "2023-01-01", "Delivered"],
    (err, result) => {
      console.log(err, "something is wrong in 1st ");
    }
  );
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "SELECT  DISTINCT PID,count FROM TEMP_TABLE2 NATURAL JOIN TEMP_TABLE3 WHERE TEMP_TABLE2.PID = TEMP_TABLE3.PID group by PID order by count DESC",

    (err, result) => {
      console.log(err, "something is wrong in 3nd ", result);
      res.send(result);
    }
  );
});

app.post("/api/sales3", (req, res) => {
  console.log("api/sales3");
  //const TTAG = req.body.TTAG;
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "DROP TABLE TEMP_TABLE4",

    (err, result) => {
      console.log(err, "something is wrong in 1st ");
    }
  );
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "CREATE TABLE TEMP_TABLE4 AS SELECT CID, SUM(PriceSold) AS TotalAmount FROM appears_in NATURAL JOIN transactions WHERE DATE(TDATE)>= ? AND DATE(TDATE)<= ? AND TTag='Delivered' GROUP BY CID ORDER BY TotalAmount DESC LIMIT 10",
    // [TDATE,TDATE,TTAG],
    [req.body.startDate, req.body.endDate, "Delivered"],
    (err, result) => {
      console.log(err, "something is wrong in 1st ");
    }
  );
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "SELECT FName,LName, TotalAmount FROM TEMP_TABLE4 NATURAL JOIN customer WHERE TEMP_TABLE4.CID=customer.CID",

    (err, result) => {
      console.log(err, "something is wrong in 2nd ", result);
      res.send(result);
    }
  );
});

app.post("/api/sales4", (req, res) => {
  console.log("api/sales3");
  //const TTAG = req.body.TTAG;
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "DROP TABLE TEMP_TABLE5",

    (err, result) => {
      console.log(err, "something is wrong in 1st ");
    }
  );
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "CREATE TABLE TEMP_TABLE5 AS SELECT CCNumber, SUM(PriceSold) AS TotalAmount FROM appears_in NATURAL JOIN transactions WHERE DATE(TDATE)>=? AND DATE(TDATE)<=? AND TTag='Delivered' GROUP BY CCNumber ORDER BY TotalAmount DESC",
    // [TDATE,TDATE,TTAG],
    [req.body.startDate, req.body.endDate, "Delivered"],
    (err, result) => {
      console.log(err, "something is wrong in 1st ");
    }
  );
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "SELECT * FROM TEMP_TABLE5",

    (err, result) => {
      console.log(err, "something is wrong in 2nd ", result);
      res.send(result);
    }
  );
});

app.post("/api/salesForComputer", (req, res) => {
  console.log("api/sales3");
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "DROP TABLE TEMP_TABLE6",

    (err, result) => {
      console.log(err, "something is wrong in 1st ");
    }
  );
  //const TTAG = req.body.TTAG;
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "CREATE TABLE TEMP_TABLE6 AS SELECT PID, PriceSold FROM appears_in NATURAL JOIN transactions WHERE DATE(TDATE)>=? AND DATE(TDATE)<=? AND TTag='Delivered' ORDER BY PriceSold DESC",
    // [TDATE,TDATE,TTAG],
    [req.body.startDate, req.body.endDate, "Delivered"],
    (err, result) => {
      console.log(err, "something is wrong in 1st ");
    }
  );
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "SELECT AVG(PriceSold) AS AVG_COMPUTER_PRICE FROM TEMP_TABLE6 NATURAL JOIN computer WHERE TEMP_TABLE6.PID=computer.PID",

    (err, result) => {
      console.log(err, "something is wrong in 2nd ", result);
      res.send(result);
    }
  );
});

app.post("/api/salesForLaptop", (req, res) => {
  console.log("api/sales3");
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "DROP TABLE TEMP_TABLE6",

    (err, result) => {
      console.log(err, "something is wrong in 1st ");
    }
  );
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "CREATE TABLE TEMP_TABLE6 AS SELECT PID, PriceSold FROM appears_in NATURAL JOIN transactions WHERE DATE(TDATE)>=? AND DATE(TDATE)<=? AND TTag='Delivered' ORDER BY PriceSold DESC",
    // [TDATE,TDATE,TTAG],
    [req.body.startDate, req.body.endDate, "Delivered"],
    (err, result) => {
      console.log(err, "something is wrong in 1st ");
    }
  );
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "SELECT AVG(PriceSold) AS AVG_LAPTOP_PRICE FROM TEMP_TABLE6 NATURAL JOIN laptop WHERE TEMP_TABLE6.PID=laptop.PID",

    (err, result) => {
      console.log(err, "something is wrong in 2nd ", result);
      res.send(result);
    }
  );
});

app.post("/api/salesForPrinter", (req, res) => {
  console.log("api/sales3");
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "DROP TABLE TEMP_TABLE6",

    (err, result) => {
      console.log(err, "something is wrong in 1st ");
    }
  );
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "CREATE TABLE TEMP_TABLE6 AS SELECT PID, PriceSold FROM appears_in NATURAL JOIN transactions WHERE DATE(TDATE)>=? AND DATE(TDATE)<=? AND TTag='Delivered' ORDER BY PriceSold DESC",
    // [TDATE,TDATE,TTAG],
    [req.body.startDate, req.body.endDate, "Delivered"],
    (err, result) => {
      console.log(err, "something is wrong in 1st ");
    }
  );
  db.query(
    // "IF (NOT EXISTS SELECT * FROM users WHERE email = ?, INSERT INTO users(email, password) VALUES (?,?))",
    "SELECT AVG(PriceSold) AS AVG_PRINTER_PRICE FROM TEMP_TABLE6 NATURAL JOIN printer WHERE TEMP_TABLE6.PID=printer.PID",

    (err, result) => {
      console.log(err, "something is wrong in 2nd ", result);
      res.send(result);
    }
  );
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
