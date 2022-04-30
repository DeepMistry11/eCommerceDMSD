use `project dbms`;

/*Query to display the most frequently sold products within a given time frame*/ 
DROP TABLE TEMP_TABLE1;   
CREATE TABLE TEMP_TABLE1 AS
SELECT SUM(Quantity) AS SOLD_TIMES, PID AS PRODUCT_SOLD_PID
FROM appears_in NATURAL JOIN transactions
WHERE DATE(TDATE)>='2022-01-01' AND TTag='Delivered'
GROUP BY PID
ORDER BY SOLD_TIMES;
SELECT PID,PName,SOLD_TIMES FROM product NATURAL JOIN TEMP_TABLE1 WHERE PID=PRODUCT_SOLD_PID ORDER BY SOLD_TIMES DESC; 

    
/*For  a  given  time  period  (begin  date  and  end  date)  compute  the  products  which  are 
sold to the highest number of distinct customers. */ 
DROP TABLE IF EXISTS TEMP_TABLE2;
CREATE TABLE TEMP_TABLE2 AS
SELECT PID, COUNT(PID) AS count FROM appears_in NATURAL JOIN transactions
WHERE DATE(TDATE)>='2022-01-01' AND TTag='Delivered'
GROUP BY PID;
DROP TABLE IF EXISTS TEMP_TABLE3;
CREATE TABLE TEMP_TABLE3 AS
SELECT CID,PID FROM appears_in NATURAL JOIN transactions WHERE DATE(TDATE)>='2022-01-01' AND TTag='Delivered';
SELECT  DISTINCT PID,count FROM TEMP_TABLE2 NATURAL JOIN TEMP_TABLE3 WHERE TEMP_TABLE2.PID = TEMP_TABLE3.PID group by PID order by count DESC;


/*For a given time period (begin date and end date) compute the 10 best customers (in 
terms of money spent) in descending order. */
DROP TABLE IF EXISTS TEMP_TABLE4;
CREATE TABLE TEMP_TABLE4 AS
SELECT CID, SUM(PriceSold) AS TotalAmount
FROM appears_in NATURAL JOIN transactions
WHERE DATE(TDATE)>='2022-01-01' AND TTag='Delivered'
GROUP BY CID
ORDER BY TotalAmount DESC LIMIT 10;
SELECT FName,LName, TotalAmount FROM TEMP_TABLE4 NATURAL JOIN customer WHERE TEMP_TABLE4.CID=customer.CID;

/* For a given time period (begin date and end date) compute the maximum basket total 
amount per credit card.*/
DROP TABLE IF EXISTS TEMP_TABLE5;
CREATE TABLE TEMP_TABLE5 AS
SELECT CCNumber, SUM(PriceSold) AS TotalAmount
FROM appears_in NATURAL JOIN transactions
WHERE DATE(TDATE)>='2022-01-01' AND TTag='Delivered'
GROUP BY CCNumber
ORDER BY TotalAmount DESC;
SELECT * FROM TEMP_TABLE5;

/* For a given time period (begin date and end date) compute the average selling product 
price per product type for desktops, laptops and printers. */
DROP TABLE IF EXISTS TEMP_TABLE6;
CREATE TABLE TEMP_TABLE6 AS
SELECT PID, PriceSold
FROM appears_in NATURAL JOIN transactions
WHERE DATE(TDATE)>='2022-01-01' AND TTag='Delivered'
ORDER BY PriceSold DESC;

/* AVERAGE PRICE OF COMPUTER */
SELECT AVG(PriceSold) AS AVG_COMPUTER_PRICE
FROM TEMP_TABLE6 NATURAL JOIN computer
WHERE TEMP_TABLE6.PID=computer.PID;

/* AVERAGE PRICE OF LAPTOP */
SELECT AVG(PriceSold) AS AVG_LAPTOP_PRICE
FROM TEMP_TABLE6 NATURAL JOIN laptop
WHERE TEMP_TABLE6.PID=laptop.PID;

/* AVERAGE PRICE OF PRINTER */
SELECT AVG(PriceSold) AS AVG_PRINTER_PRICE
FROM TEMP_TABLE6 NATURAL JOIN printer
WHERE TEMP_TABLE6.PID=printer.PID;

 


