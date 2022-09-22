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
    let token = req.body.token
    let {id, name, description, stock, price, tag, type, image_data, image_name} = req.body.add
    console.log(req.body.add)
    let response = await (this.CustomerService.addCart(token, id, name, description, stock, price, tag, type, image_data, image_name));
    return res.send(response);
  }

}

module.exports = CustomerRouter;