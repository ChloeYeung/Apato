const express = require("express");

class CustomerRouter {
  constructor(CustomerService) {
    this.CustomerService = CustomerService;
  }
  router() {
    let router = express.Router();

    router.get("/", this.get_building.bind(this));
    console.log("In the customer router");

    return router;
  }

  get_building(req, res) {
    console.log("reached covid backend");
    return res.json(this.CustomerService.list());
  }
}

module.exports = CustomerRouter;