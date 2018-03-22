var express = require("express");
var router = express.Router();
const bp = require("body-parser");
let id = 1;
const productList = [];

router.get("/", (req, res) => {
  res.render("home", { hello: "ZOMG" });
});
//GET /products displays all products added thus far
//GET /products/:id displays product of given id
//GET /products/:id/edit will edit the product
//GET /products/new creat enew form to add product
router.post("/", (req, res) => {
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

module.exports = router;
