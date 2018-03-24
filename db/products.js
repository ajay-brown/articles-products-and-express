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
    return this.list;
  }
  getProductById(id) {
    let result = "";

    this.list.forEach(product => {
      if (product.id === id) {
        result = product;
      }
    });

    return result;
  }
  deleteProductById(id) {
    this.list.splice().forEach((product, index) => {
      if (product.id === id) {
        this.list.splice(index, 1);
      }
    });
  }
}
module.exports = new DS_products();
