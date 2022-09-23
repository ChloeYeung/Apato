const express = require("express");

class CustomerRouter {
  constructor(CustomerService) {
    this.CustomerService = CustomerService;
  }
  router() {
    let router = express.Router();
    // Show Product
    router.get("/show_product", this.showProduct.bind(this));
    router.post("/add_cart", this.addCart.bind(this));
    //Show Service
    router.get("/show_service", this.showService.bind(this));
    router.post("/add_cart_ser", this.addCartService.bind(this));
    // Cart
    router.get("/show_cart", this.showCart.bind(this));
    return router;
  }


  //Show Product
  async showProduct(req, res) {
    let token = req.headers.authorization;
    console.log(token)
    let response = await (this.CustomerService.showProduct(token));
    return res.send(response);
  }

  async addCart(req, res) {
    let token = req.body.token
    let { id, name, description, stock, price, tag, type, image_data, image_name } = req.body.add
    console.log(req.body.add)
    let response = await (this.CustomerService.addCart(token, id, name, description, stock, price, tag, type, image_data, image_name));
    return res.send(response);
  }

  //Show Service
  async showService(req, res) {
    let token = req.headers.authorization;
    let response = await (this.CustomerService.showService(token));
    console.log("in show service router");
    return res.send(response);
  }

  async addCartService(req, res) {
    let token = req.body.token
    let { id, name, description, stock, price, tag, type, image_data, image_name } = req.body.add
    console.log(req.body.add)
    let response = await (this.CustomerService.addCartService(token, id, name, description, stock, price, tag, type, image_data, image_name));
    return res.send(response);
  }




  //Cart
  async showCart(req, res) {
    let token = req.headers.authorization;
    console.log(token);
    // let { id, customer_id, product_id, unit, company_id, name, description, price, tag, stock, type, image_name } = req.body.show
    // console.log(req.body.show)
    let response = await (this.CustomerService.showCart(token));
    return res.send(response);
  }
}

module.exports = CustomerRouter;