const express = require("express");

class CustomerRouter {
  constructor(CustomerService) {
    this.CustomerService = CustomerService;
  }
  router() {
    let router = express.Router();
    //Navbar
    router.post("/nav_info", this.showNavInfo.bind(this));
    // Show Product
    router.get("/show_product", this.showProduct.bind(this));
    router.post("/add_cart", this.addCart.bind(this));
    //Show Service
    router.get("/show_service", this.showService.bind(this));
    router.post("/add_cart_ser", this.addCartService.bind(this));
    // Cart
    router.get("/show_cart", this.showCart.bind(this));
    router.post("/add_cart_unit", this.addCartUnit.bind(this));
    router.post("/minus_cart_unit", this.minusCartUnit.bind(this));
    router.post("/del_cart_unit", this.delCart.bind(this));
    router.post("/cart_show_order_total", this.showOrderTotal.bind(this));
    //purchase
    router.post("/purchase_show_order_total", this.showOrderTotalPurchase.bind(this));
    router.post("/purchase_del_cart", this.delCartInPurchase.bind(this));
    router.post("/purchase_add_order_history", this.addOrderHistoryPurchase.bind(this));
    router.post("/purchase_update_company_stock", this.updateCompanyStockPurchase.bind(this));
    //order history
    router.post("/show_order_history", this.showOrderHistory.bind(this));
    
    return router;
  }

  //Nav info
  async showNavInfo(req, res) {
    let token = req.body.token;
    let response = await (this.CustomerService.showNavInfo(token));
    return res.send(response);
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
    let response = await (this.CustomerService.showCart(token));
    return res.send(response);
  }

  async addCartUnit(req, res) {
    let token = req.body.token
    let { cart_id, product_id } = req.body.add;
    let response = await (this.CustomerService.addCartUnit(token, cart_id, product_id));
    return res.send(response);
  }

  async minusCartUnit(req, res) {
    let token = req.body.token
    let { cart_id, product_id } = req.body.minus;
    let response = await (this.CustomerService.minusCartUnit(token, cart_id, product_id));
    return res.send(response);
  }

  async delCart(req, res) {
    let token = req.body.token;
    let product_id = req.body.del;
    let response = await (this.CustomerService.delCart(token, product_id));
    return res.send(response);
  }

  async showOrderTotal(req, res) {
    let token = req.body.token;
    let response = await (this.CustomerService.showOrderTotal(token));
  
    return res.send(response.toString());
  }

  //Purchase
  async showOrderTotalPurchase(req, res) {
    let token = req.body.token;
    let response = await (this.CustomerService.showOrderTotalPurchase(token));
    return res.send(response.toString());
  }

  async delCartInPurchase(req, res) {
    let token = req.body.token;
    let response = await (this.CustomerService.delCartInPurchase(token));
    return res.send(response);
  }

  async addOrderHistoryPurchase(req, res) {
    let token = req.body.token;
    let response = await (this.CustomerService.addOrderHistoryPurchase(token));
    return res.send(response);
  }

  async updateCompanyStockPurchase(req, res) {
    let token = req.body.token;
    let response = await (this.CustomerService.updateCompanyStockPurchase(token));
    return res.send(response);
  }

  //order history
  async showOrderHistory(req, res) {
    let token = req.body.token;
    let response = await (this.CustomerService.showOrderHistory(token));
    console.log(response);
    return res.send(response);
  }
  

  

}


module.exports = CustomerRouter;