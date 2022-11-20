CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
## exercicio 1
- a) FLOAT:não entendi, VARCHAR: indica uma string e o numero de caracteres, DATE: uma data, 
- b) mostra meu schemas, mostra minhas tabelas 
SHOW TABLES; 
SHOW DATABASES;
DESCRIBE Actor;
- c) mostra a descrição da tabela 

## exercicio 2
- a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "women"
);
- b) duplicidade na chave
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Roberto Carlos",
  1290000,
  "1966-10-01", 
  "women"
);
- c) a quantidade de colunas e menor que a quantidade de valores
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
- d) diz que o campo nome não tem um valor patrão , no caso não existe o campo name
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antonio fagundes",
  400000,
  "1949-04-18", 
  "male"
);
- e) valor da data de nascimento esta errado
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
- f) Criação de um elemento
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Robert Downey Jr",
  3100000,
  "1965-04-04", 
  "male"
);

## exercicio 3
SELECT * FROM Actor;
SELECT id, salary from Actor;
SELECT id, name from Actor WHERE gender = "male";

- a)
SELECT id, name, salary, birth_date from Actor WHERE gender = "female";

- b)
SELECT salary from Actor WHERE id = "001";

- c) retornou null
SELECT * from Actor WHERE gender = "invalid";

- d)
SELECT id, name, salary from Actor WHERE salary < "500000";

- e) a coluna nome e desconhecida , o correto e name
SELECT id, name from Actor WHERE id = "002";

## exercicio 4
SELECT * from Actor WHERE name LIKE "A%" OR name LIKE "J%" AND salary > 300000;
- a) buscou pessoas que tenham a Letra A e J na inicial do nome com salario maior que 300000

- b)
SELECT * from Actor WHERE name LIKE "A%" AND salary > 35000000;

- c) 
SELECT * from Actor WHERE name LIKE "%g%" OR name LIKE "%G%"; 

- d) 
SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%" 
AND salary BETWEEN 350000 AND 900000;

## exercicio 5
CREATE TABLE Films (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    summary TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);
- a) Quando você não tem tanto controle ou sabe que o tamanho será bem grande, ou seja, é um texto e não apenas uma simples string, tem que usar o TEXT mesmo, não tem jeito.

- b)
INSERT INTO Films (id, name, summary, release_date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);
SELECT * FROM Films;

- c)
INSERT INTO Films (id, name, summary, release_date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);

- d)
INSERT INTO Films (id, name, summary, release_date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
  "2017-11-02", 
  8
);

- e)
INSERT INTO Films (id, name, summary, release_date, rating)
VALUES(
  "004", 
  "Tropa de Elite",
  "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM. Ansiosos para entrar em ação e impressionados com a eficiência de seus salvadores, os dois se candidatam ao curso de formação da Tropa de Elite",
  "2007-10-05", 
  9
);
DESCRIBE Films;

## exercicio 6
- a)
SELECT id, title, rating from Films WHERE id = "003";

- b)
SELECT * FROM Films WHERE title LIKE "%Tropa%";
SELECT * FROM Films WHERE title = "Tropa de Elite";

- c) PERGUNTA , filme com rating igual ou maior que 9
SELECT id, title, summary from Films WHERE rating = 9 OR rating > 9;

## exercicio 7

-- a) 
SELECT * FROM Films WHERE title LIKE "%vida%";

- b)
SELECT * FROM Films WHERE title OR summary  LIKE "%vida%";
SELECT * FROM Films WHERE title LIKE "%vida%" OR summary LIKE "%vida%";

- c)
SELECT * FROM Films WHERE release_date < "2020-05-04";

- d)
SELECT * FROM Films WHERE release_date < "2020-05-04" AND 
      (title LIKE "%vida%" OR
      summary LIKE "%vida%") AND rating > 7;
