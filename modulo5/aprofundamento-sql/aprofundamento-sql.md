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
-- a)
SELECT MAX(salary) FROM Actor;

- b)
SELECT MIN(salary) FROM Actor WHERE gender = "female";

- c)
SELECT COUNT(*) FROM Actor WHERE gender = "female";

- d)
SELECT SUM(salary) FROM Actor;

## EXERCICIO 5

- a) retorna  quantidades de atores de cada genero
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

- b)
SELECT id, name FROM Actor ORDER BY name DESC;

- c)
SELECT * FROM Actor ORDER BY salary;

- d)
SELECT * FROM Actor
ORDER BY salary DESC LIMIT 3;

- e)Faça uma query que retorne a média de salário por gênero
SELECT AVG(salary),gender FROM Actor GROUP BY gender;

## EXERCICIO 6

- a) 
ALTER TABLE Movie ADD playing_limit_date DATE;

- b)
ALTER TABLE Movie CHANGE rating rating FLOAT;

- c)
UPDATE Movie
SET playing_limit_date = "2020-12-31";

- d)
DELETE FROM nome_da_tabela WHERE lausula_do_filme_deletado = "001";

SELECT * FROM Movie;