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
  //retrieved product by ID
  let productId = Number(req.params.id);
  let retrievedProduct = DS_products.getProductById(productId);
  console.log(retrievedProduct);
  res.render("product", retrievedProduct);
});

router.get("/:id/edit", (req, res) => {
  //edit form
  productId = Number(req.params.id);
  let retrievedProduct = DS_products.getProductById(productId);
  res.render("productEdit", retrievedProduct);
});

router.post("/", (req, res) => {
  //for new products
  let newProd = req.body;
  DS_products.addNewProduct(newProd.name, newProd.price, newProd.inventory);
  let products = DS_products.getAllProducts();
  console.log("updated", products);
  res.render("productsHome", { products });
});

router.put("/:id/edit", (req, res) => {
  //to edit
  let productId = Number(req.params.id);
  let requestedProduct = DS_products.getProductById(productId);
  console.log("editable");
  console.log("req product", requestedProduct);
  let retrievedProduct = DS_products.editProductById(
    productId,
    requestedProduct.name,
    requestedProduct.price,
    requestedProduct.inventory
  );

  // let request = req.body;
  // if (retrievedProduct.name != request.name) {
  //   retrievedProduct.name = request.name;
  //   console.log("name changed", retrievedProduct);
  // } else {
  //   retrievedProduct.name = retrievedProduct.name;
  // }
  // if (retrievedProduct.price != request.price) {
  //   retrievedProduct.price = request.price;
  // } else {
  //   retrievedProduct.price = retrievedProduct.price;
  // }
  // if (retrievedProduct.inventory != request.inventory) {
  //   retrievedProduct.inventory = request.inventory;
  // } else {
  //   retrievedProduct.inventory = retrievedProduct.inventory;
  // }
  let products = DS_products.getAllProducts(); //to display again
  console.log(products);
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
