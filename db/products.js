var knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'products_user',
    password: 'password',
    database: 'products_db'
  }
});

class DS_products {
  constructor() {
    this.list = [];
    this.id = 1;
  }
  addNewProduct(name, price, inventory) {
    this.list.push({
      id: this.id, //updating id numbers
      name,
      price,
      inventory
    });
    this.id++;
    return this.list;
  }
  getAllProducts() {
    //return this.list;
    return knex.raw('SELECT * from products').then(data => {
      return data.rows;
    });
  }
  getProductById(id) {
    //   let result = '';
    //   this.list.forEach(product => {
    //     if (product.id === id) {
    //       result = product;
    //     }
    //   });
    //   return result;
    return knex
      .raw(`SELECT * FROM products WHERE product_id = ${id}`)
      .then(data => {
        return data.rows;
      });
  }

  editProductById(id, name, price, inventory) {
    let newProd = {};

    this.list.forEach(product => {
      if (product.id === id) {
        console.log(product.id, 'this is id');
        newProd.name = product.name; //updating new product values via overwriting
        newProd.price = product.price;
        newProd.inventory = product.inventory;
        console.log('newProd', newProd);
      }
    });
    return newProd;
  }
  deleteProductById(id) {
    this.list.forEach((product, index) => {
      if (product.id === id) {
        this.list.splice(index, 1);
      }
    });
    return this.list;
  }
}
module.exports = new DS_products();
