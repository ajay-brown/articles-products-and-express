var express = require("express");
var router = express.Router();
const bp = require("body-parser");
let id = 1;
const productList = [];
const DS_products = require("../db/products.js");

router.get("/", (req, res) => {
  res.render("home", { products: displayList });
});
//GET /products displays all products added thus far
//GET /products/:id displays product of given id
//GET /products/:id/edit will edit the product
//GET /products/new creat enew form to add product
router.post("/", (req, res) => {
  //POST to create new product, will redirect user to /products route
  let newProd = req.body;

  newProd.id = id;
  DS_products.addNewProduct(newProd.name, newProd.price, newProd.inventory);
  console.log(newProd);
  // DS_products.console.log("this is", productList);
  //displayList = JSON.stringify(productList);
  id++;

  res.end();
  return id;
});
router.get("/new", (req, res) => {
  res.render("layouts/new");
});
router.put("/:id", (req, res) => {
  let productId = Number(req.params.id);
  console.log(productId);
  console.log(typeof productList);
  res.end();
});

module.exports = router;
