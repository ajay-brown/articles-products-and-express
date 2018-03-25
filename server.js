const express = require("express");
const bp = require("body-parser");
const hndl = require("express-handlebars");
const app = express();
const DS_articles = require("./db/articles.js");
const DS_products = require("./db/products.js");

var products = require("./routes/products");
var articles = require("./routes/articles");

app.use(bp.urlencoded({ extended: false }));
app.engine(
  "hndl",
  hndl({
    defaultLayout: "main",
    extname: ".hndl"
  })
);
app.set("view engine", "hndl");
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
  res.end();
});
app.use("/products", products);
//app.use("/articles", articles);

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
