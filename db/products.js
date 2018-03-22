class DS_products {
  constructor() {
    this.list = [];
  }
  addNewProduct(name, price, inventory) {
    this.list.push({
      id: this.id, //updating id numbers
      name: this.name,
      price: this.price,
      inventory: this.inventory
    });
    return this.list;
  }
  getAllProducts() {
    return this.list;
  }
}
module.exports = new DS_products();
