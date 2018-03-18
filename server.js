const express = require("express");
const bp = require("body-parser");
const hndl = require("express-handlebars");
const app = express();
const DS_articles = require("./db/articles.js");
const DS_products = require("./db/products.js");
const productList = [];
let id = 1;

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
  res.render("home", { hello: "ZOMG" });
  //  res.render("products", { productList });
});
//GET /products displays all products added thus far
//GET /products/:id displays product of given id
//GET /products/:id/edit will edit the product
//GET /products/new creat enew form to add product
app.post("/products", (req, res) => {
  //POST to create new product, will redirect user to /products route
  let newProd = req.body;
  console.log(newProd);
  newProd.id = id;
  productList.push(newProd);

  console.log(productList);
  id++;
  res.end();
  return id;
});
//PUT with products/:id to edit a product with give id
//DELETE with products/:id to delete a product with id
app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
