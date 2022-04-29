use `project dbms`;

/*Query to display the most frequently sold products within a given time frame*/ 
DROP TABLE TEMP_TABLE1;   
CREATE TABLE TEMP_TABLE1 AS
SELECT SUM(Quantity) AS SOLD_TIMES, PID AS PRODUCT_SOLD_PID
FROM appears_in NATURAL JOIN transactions
WHERE DATE(TDATE)>='2022-01-01' AND TTag='Delivered'
GROUP BY PID
ORDER BY SOLD_TIMES;
SELECT * FROM TEMP_TABLE1;
SELECT PID,PName,SOLD_TIMES FROM product NATURAL JOIN TEMP_TABLE1 WHERE PID=PRODUCT_SOLD_PID ORDER BY SOLD_TIMES DESC; 

/*For  a  given  time  period  (begin  date  and  end  date)  compute  the  products  which  are 
sold to the highest number of distinct customers. */ 
-- DROP TABLE TEMP_TABLE2;   
-- CREATE TABLE TEMP_TABLE2 AS



