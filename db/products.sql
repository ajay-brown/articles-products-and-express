DROP DATABASE IF EXISTS products_db;
DROP USER IF EXISTS products_user;
CREATE USER products_user WITH ENCRYPTED PASSWORD 'password';
CREATE DATABASE products_db OWNER products_user;

\c products_db;
SET ROLE products_user;
CREATE TABLE products (
    product_id SERIAL NOT NULL PRIMARY KEY,
    product_name VARCHAR(25),
    product_price INT,
    product_inventory INT
);

GRANT ALL PRIVILEGES ON TABLE products TO products_user;

INSERT INTO products (product_name, product_price, product_inventory)
VALUES
    ('Mints', 2, 10),
    ('Gum', 3.5, 10),
    ('Jolly Ranchers', 1.5, 50),
    ('Starbursts', 50, 1);