DROP DATABASE IF EXISTS articles_db;
DROP USER IF EXISTS articles_user;
CREATE USER articles_user WITH ENCRYPTED PASSWORD 'password';
CREATE DATABASE articles_db OWNER articles_user;

\c articles_db;
SET ROLE articles_user;
CREATE TABLE articles (
    article_id SERIAL NOT NULL PRIMARY KEY,
    article_title VARCHAR(155),
    body TEXT,
    author VARCHAR(25)
);



INSERT INTO articles (article_title, body, author)
VALUES
    ('Building a Better Newspaper in 2018', 'Yo its an article', 'Siri Srinivas'),
    ('The Body That Learned What Love Is', 'Article twoo', 'Randa Jarrar'),
    ('What About Our Sanity', 'article threeee', 'Henry Wismayer'),
    ('The Losers Guide to Bitcoin', 'last articleeee', 'Brandon Foo');