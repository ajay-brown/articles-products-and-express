var express = require("express");
var router = express.Router();
const productList = [];
const DS_products = require("../db/products.js");
const methodOverride = require("method-override");

router.get("/", (req, res) => {
  let products = DS_products.getAllProducts();

  res.render("productsHome", { products });
});

router.get("/new", (req, res) => {
  //must be before /:id

  res.render("new");
});

router.get("/:id", (req, res) => {
  let productId = Number(req.params.id);
  let retrievedProduct = DS_products.getProductById(productId);
  console.log(retrievedProduct);
  res.render("product", retrievedProduct);
});

router.get("/:id/edit", (req, res) => {
  productId = Number(req.params.id);
  let retrievedProduct = DS_products.getProductById(productId);
  res.render("productEdit", retrievedProduct);
});

router.post("/", (req, res) => {
  let newProd = req.body;
  DS_products.addNewProduct(newProd.name, newProd.price, newProd.inventory);
  let products = DS_products.getAllProducts();
  console.log(products);
  res.render("productsHome", { products });
});

router.put("/:id", (req, res) => {
  let productId = Number(req.params.id);
  let retrievedProduct = DS_products.getProductById(productId);
  console.log(retrievedProduct);
  let request = req.body;
  if (retrievedProduct.name != request.name) {
    retrievedProduct.name = request.name;
    console.log("name changed", retrievedProduct);
  } else if (retrievedProduct.price != request.price) {
    retrievedProduct.price = request.price;
  } else if (retrievedProduct.inventory != request.inventory) {
    retrievedProduct.inventory = request.inventory;
  }
  let products = DS_products.getAllProducts();
  res.render("productsHome", { products });
  // res.render("product", retrievedProduct);
  // if (err) res.render("layouts/productEdit", { alert: "error!" });
  // res.end();
});
router.delete("/:id", (req, res) => {
  let productId = Number(req.params.id);
  console.log("prod id", productId);
  let deletedProduct = DS_products.deleteProductById(productId);
  console.log("deleted", deletedProduct);
  let products = DS_products.getAllProducts();
  console.log("new product list", products);
  res.render("productsHome", { products });
});

module.exports = router;
