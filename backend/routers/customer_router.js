const express = require("express");

class CustomerRouter {
  constructor(CustomerService) {
    this.CustomerService = CustomerService;
  }
  router() {
    let router = express.Router();
    router.get("/show_product", this.showProduct.bind(this));
    router.post("/add_cart", this.addCart.bind(this));
    return router;
  }

  async showProduct(req, res) {
    let token = req.headers.authorization;
    console.log(token)
    let response = await (this.CustomerService.showProduct(token));
    return res.send(response);
  }

  async addCart(req, res) {
    let token = req.headers.authorization;
    console.log(req.body);
    
    let response = await (this.CustomerService.addCart(token));
    return res.send(response);
  }

}

module.exports = CustomerRouter;