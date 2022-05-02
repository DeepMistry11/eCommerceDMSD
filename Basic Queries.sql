USE `project dbms`;

/*QUERY TO DISPLAY ALL REGISTERED CUSTOMERS*/
SELECT * FROM CUSTOMER;

/*QUERY TO DISPLAY STATUS OF A CUSTOMER*/
SELECT Status FROM CUSTOMER WHERE FNAME='Aditya'; -- GIVE ANY NAME OF CUSTOMER;

-- /*QUERY TO DISPLAY TRANSACTION HISTORY OF A CUSTOMER*/
-- SELECT BID, CCNumber, SAName, TDate, TTag FROM transactions WHERE BID IN (SELECT BID FROM Basket WHERE CID IN (SELECT CID FROM Customer WHERE FName='Harsh'));

/*QUERY TO DISPLAY ALL PRODUCTS*/
SELECT * FROM PRODUCT;

/*QUERY TO DISPLAY ALL COMPUTERS*/
SELECT * FROM PRODUCT WHERE PType='Computer';

/*QUERY TO DISPLAY ALL Printers*/
SELECT * FROM PRODUCT WHERE PType='Printer';

/*QUERY TO DISPLAY ALL Laptops*/ 
SELECT * FROM PRODUCT WHERE PType='Laptop';

-- /*QUERY TO DISPLAY Cart of a particular customer*/
-- SELECT * FROM appears_in WHERE BID IN (SELECT BID FROM basket WHERE CID IN (SELECT CID FROM CUSTOMER WHERE CID=5));
--  
--  /*QUERY TO delete a product from the cart*/
--  DELETE PID FROM appears_in WHERE PID

/*QUERY TO DISPLAY ALL other accessories*/
SELECT * FROM PRODUCT WHERE PID NOT IN(SELECT PID FROM LAPTOP) AND PID NOT IN (SELECT PID FROM COMPUTER) AND PID NOT IN (SELECT PID FROM PRINTER);

/*QUERY to display all products in offer*/
SELECT PID, PName, PPrice, OfferPrice FROM offer_product NATURAL JOIN product WHERE offer_product.PID=product.PID; 

/*QUERY to display price filtered products*/
SELECT * FROM PRODUCT WHERE PPrice > 300; -- Filter according to dynamic price 

/* Trigger when a customer is deleted */
delimiter $$
CREATE TRIGGER DEL_CUST BEFORE DELETE on customer
FOR EACH ROW
BEGIN
DELETE FROM silver_and_above WHERE old.CID=silver_and_above.CID;
DELETE FROM transactions WHERE old.CID=transactions.CID;
DELETE FROM basket WHERE old.CID=basket.CID;
DELETE FROM shipping_address WHERE old.CID=shipping_address.CID;
DELETE FROM credit_card WHERE old.CID=credit_card.StoredCardCID;
END $$
delimiter ;

DROP TRIGGER DEL_CUST;
DELETE FROM customer WHERE CID=6;
INSERT INTO `project dbms`.`customer` (`CID`, `FNAME`, `LNAME`, `Email`, `Address`, `Phone`, `Status`) VALUES ('6', 'Miti ', 'Shah', 'miti9879@gmail.com', '57 Sip Ave', '9982876125', 'Gold');
INSERT INTO `project dbms`.`silver_and_above` (`CID`, `CreditLine`) VALUES ('6', '400');
INSERT INTO `project dbms`.`basket` (`CID`, `BID`) VALUES ('6', '5');
INSERT INTO `project dbms`.`shipping_address` (`CID`, `SAName`, `RecepientName`, `Street`, `SNumber`, `City`, `Zip`, `State`, `Country`) VALUES ('6', 'Miti Shah', 'Miti Shah', 'Bharuch', '7', 'Gujrat', '67889', 'GJ', 'INDIA');
INSERT INTO `project dbms`.`credit_card` (`CCNumber`, `SecNumber`, `OwnerName`, `CCType`, `BilAddress`, `ExpDate`, `StoredCardCID`) VALUES ('6789234567192267', '999', 'Miti Shah', 'Visa', '57 Sip Ave', '2024-03-22', '6');
INSERT INTO `project dbms`.`transactions` (`BID`, `CCNumber`, `CID`, `SAName`, `TDate`, `TTag`) VALUES ('5', '6789234567192267', '6', 'Miti Shah', '2022-06-01', 'Delivered');


