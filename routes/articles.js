var express = require("express");
var router = express.Router();
const productList = [];
const DS_articles = require("../db/articles.js");
const methodOverride = require("method-override");

router.get("/", (req, res) => {
  let articles = DS_articles.getAllArticles();
  res.render("articlesHome", { articles });
});
module.exports = router;

router.post("/", (req, res) => {
  let newArticle = req.body;
  console.log(newArticle);
  let newArt = DS_articles.addNewArticle(
    newArticle.title,
    newArticle.body,
    newArticle.author
  );
  console.log(DS_articles.getAllArticles());
  res.redirect("/articles");
});

router.put("/:title", (req, res) => {
  let reqTitle = req.params.title;
  console.log(reqTitle, "reqTitle");
  let foundArticle = DS_articles.getArticleByTitle(reqTitle); //finding article to be replaced
  let reqArticle = req.body; //grabbing put values
  console.log(foundArticle, "foundArticle");
  console.log(reqArticle, "reqArticle");
  //   let newArticle = DS_articles.editArticleByTitle(
  //     reqArticle.title,
  //     reqArticle.body,
  //     reqArticle.author
  //   );
  console.log(reqArticle.body);
  console.log(foundArticle.body);
  if (reqArticle.body != foundArticle.body) {
    reqArticle.body = foundArticle.body;
  }
  console.log(DS_articles.getAllArticles(), "updated article list");
  res.end();
});
