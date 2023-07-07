CREATE TABLE articles (
  title text,
  release_month integer,
  release_year integer,
  category text,
  CONSTRAINT unique_date PRIMARY KEY release_month, release_year,
  CONSTRAINT valid_month CHECK BETWEEN 1 AND 12
);
INSERT INTO articles VALUES
("The Dishwasher",5,2023,"Water & Electricity");