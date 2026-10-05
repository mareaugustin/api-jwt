CREATE DATABASE IF NOT EXISTS authuser;
USE authuser;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100),
  password VARCHAR(255)
);

CREATE TABLE etudiants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(50),
  prenom VARCHAR(50),
  age INT,
  telephone VARCHAR(20),
  sexe VARCHAR(10)
);


USE authuser;

INSERT INTO etudiants (nom, prenom, age, telephone, sexe) VALUES
('KY', 'Ali', 25, '700000001', 'M'),
('OUEDRAOGO', 'Awa', 22, '700000002', 'F'),
('ZONGO', 'Issa', 23, '700000003', 'M'),
('SANOU', 'Fatou', 21, '700000004', 'F'),
('KABORE', 'Abdoulaye', 24, '700000005', 'M'),
('BARRY', 'Mariama', 20, '700000006', 'F'),
('CONDE', 'Ibrahima', 26, '700000007', 'M'),
('DIALLO', 'Aissatou', 23, '700000008', 'F'),
('SANKARA', 'Thomas', 25, '700000009', 'M'),
('TRAORE', 'Fatima', 22, '700000010', 'F');
