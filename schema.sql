DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) UNIQUE NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL(9,2) UNSIGNED NOT NULL,
  department_id INT UNSIGNED NOT NULL,
  INDEX dep_ind (department_id),
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department (id) ON DELETE CASCADE
);


CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  INDEX role_ind (role_id),
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES role (id) ON DELETE CASCADE,
  manager_id INT,
  INDEX man_id (manager_id), 
  FOREIGN KEY (manager_id) REFERENCES employee (id) ON DELETE SET NULL


);

INSERT INTO department (name) VALUES ("Operations"), ("TradeDesk"), ("Risk");
INSERT INTO role (title, salary, department_id) VALUES ("Director", 1170345.84, 3), ("manager", 122345.94, 2), ("supervisor", 600345.94, 1), ("specialist", 30345.24, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Kevin", "Adam", 1, 1), ("Johnathan", "London", 1, 2), ("Mike", "Angelo", 4, 1);
SELECT*FROM employee;

© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
