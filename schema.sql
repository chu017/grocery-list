DROP DATABASE IF EXISTS grocerylist;

CREATE DATABASE grocerylist;

USE grocerylist;

CREATE TABLE groceries (
  id int NOT NULL AUTO_INCREMENT,
  item varchar(20) NOT NULL,
  quantity int NOT NULL,
  PRIMARY KEY (ID)
);

insert into groceries(item, quantity) values ('Apple', 1);
insert into groceries(item, quantity) values ('Banna', 2);

/* Create other tables and define schemas for them here! */

/*
EXECUTE.sql file: mysql -u root -p < schema.sql
ACCESS MySQL CLI: mysql -u root -p
SHOW DATABASES; USE [db name];
SHOW TABLES; DESC [table name];
SELECT * FROM [table name]; // SELECT * FROM groceries;
INSERT INTO [table name] (?, ?) VALUES (?, ?);
DELETE FROM groceries WHERE quantity=800;
*
UPDATE table
SET
  column1 = new_value1,
  column2 = new_value2,
WHERE
  condition;
*
*/

/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  For example, on a pairing station, it'll be
 *    mysql -u student -p < schema.sql
 *  and then you'll have to enter the password, student
 *  On your personal computer, if you haven't set up
 *  a password, it'll be
 *    mysql -u root < schema.sql
*/
