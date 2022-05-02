USE `project dbms`;

DELETE FROM appears_in WHERE BID=10 AND PID=5;
INSERT INTO `project dbms`.`appears_in`(`BID`,`PID`,`Quantity`,`PriceSold`) VALUES ('10','5','1','150');

drop trigger ADD_TO_CART;
delimiter $$
CREATE TRIGGER ADD_TO_CART AFTER INSERT ON appears_in
FOR EACH ROW
BEGIN 
INSERT INTO `project dbms`.`cart`
SELECT CID,PID,BID,Quantity,PriceSold FROM appears_in NATURAL JOIN basket WHERE CID=1;
END $$
delimiter ;

DELETE FROM cart WHERE CID=1;

SELECT PName, PType, description, Quantity, PriceSold FROM cart NATURAL JOIN product WHERE cart.PID=product.PID;