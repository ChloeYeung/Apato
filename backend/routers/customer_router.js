const express = require("express");

class CustomerRouter {
  constructor(CustomerService) {
    this.CustomerService = CustomerService;
  }
  router() {
    let router = express.Router();
    router.get("/show_product", this.showProduct.bind(this));
    return router;
  }

  async showProduct(req, res) {
    let token = req.headers.authorization;
    let response = await (this.CustomerService.showProduct(token));
    return res.send(response);
  }

}

module.exports = CustomerRouter;