USE `project dbms`;
ALTER TABLE shipping_address
ADD FOREIGN KEY (CID) REFERENCES customer(CID);