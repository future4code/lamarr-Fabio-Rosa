## EXERCICIO 1 
- a) DROP remove a coluna
- b) altera o valor de uma coluna
-- c) alterta o valor da coluna

- d)
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

## EXERCICIO 2
UPDATE Actor

- a)
SET name = "Felipe Franco",
birth_date = "2000-06-01"
WHERE id = "003";

- b)
UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "005";

UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "005";

- c)
UPDATE Actor SET name = "Vin Diesel",
salary = "190000",
birth_date = "1967-07-18",
gender = "male"
WHERE id = "005";

- d coluna desconhecida na lista de campos
UPDATE Actor
SET director = "Moacyr Franco"
WHERE id = "123";

## EXERCICIO 3

- a) 
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

- b)
DELETE FROM Actor WHERE gender = "male" AND "salary" > 1000000;

## EXERCICIO 4