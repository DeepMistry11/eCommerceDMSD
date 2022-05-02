USE `project dbms`;
ALTER TABLE transactions
ADD FOREIGN KEY (CCNumber) REFERENCES credit_card(CCNumber),
ADD FOREIGN KEY (CID) REFERENCES shipping_address(CID),
ADD FOREIGN KEY (SAName) REFERENCES shipping_address(SAName),
ADD FOREIGN KEY (BID) REFERENCES basket(BID); 

ALTER TABLE shipping_address
ADD FOREIGN KEY (CID) REFERENCES customer(CID);

ALTER TABLE credit_card
ADD FOREIGN KEY (StoredCardCID) REFERENCES customer(CID);

ALTER TABLE silver_and_above
ADD FOREIGN KEY (CID) REFERENCES customer(CID);

ALTER TABLE basket
ADD FOREIGN KEY (CID) REFERENCES customer(CID);

ALTER TABLE appears_in
ADD FOREIGN KEY (BID) REFERENCES basket(BID),
ADD FOREIGN KEY (PID) REFERENCES product (PID);

ALTER TABLE offer_product
ADD FOREIGN KEY (PID) REFERENCES product(PID);

ALTER TABLE computer
ADD FOREIGN KEY (PID) REFERENCES product(PID);

ALTER TABLE printer
ADD FOREIGN KEY (PID) REFERENCES product(PID);

ALTER TABLE laptop
ADD FOREIGN KEY (PID) REFERENCES computer(PID);

ALTER TABLE `project dbms`.`transactions` 
DROP PRIMARY KEY,
ADD PRIMARY KEY (BID,CCNumber,CID,SAName);
;