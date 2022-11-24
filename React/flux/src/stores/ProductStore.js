import EventEmitter from "events";
import dispatcher from "../Dispatch/dispatcher";

class ProductStore extends EventEmitter {
  constructor() {
    super();
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProduct(product) {
    this.products.push(product);
    this.emit("change");
  }

  fetchProducts(products) {
    this.products = [...this.products, ...products];
    this.emit("change");
  }

  handleActions(action) {
    console.log("ProductStore RECEIVED AN ACTION ", action);
    switch (action.type) {
      case "add-product":
        this.addProduct(action.payload);
        break;
      case "fetch-products":
        this.fetchProducts(action.payload);
    }
  }
}

const productStore = new ProductStore();
export default productStore;
dispatcher.register(productStore.handleActions.bind(productStore));
