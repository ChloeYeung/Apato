const express = require("express");
// const { default: CompanySalesHistory } = require("../../frontend/src/Pages/CompanySalesHistory");

class CompanyRouter {
  constructor(CompanyService) {
    this.CompanyService = CompanyService;
  }

  router() {
    let router = express.Router();
    // Product Management
    router.get("/showPm", this.showProductManagement.bind(this));
    router.post("/addPm", this.addProductManagement.bind(this));
    router.post("/deletePm", this.deleteProductManagement.bind(this));
    router.post("/editPm", this.editProductManagement.bind(this));
    return router;
  }

  async showProductManagement(req, res) {
    let token = req.headers.authorization;
    let response = await (this.CompanyService.showProductManagement(token));
    return res.send(response);
  }

  async addProductManagement(req, res) {
    const image_name = req.files.image.name;
    const image_data = req.files.image.data;
    console.log(image_name);
    console.log(image_data);
    let { name, description, stock, price, tag, type , token} = req.body;
    console.log(req.body)
    let response = await this.CompanyService.addProductManagement(token, name, description, stock, price, tag, type, image_name, image_data);
    return res.send(response);
  }

  async deleteProductManagement(req, res) {
    let token = req.body.token;
    let id = req.body.id;
    let response = await (this.CompanyService.deleteProductManagement(token, id));
    return res.send(response);
  }

  async editProductManagement(req, res) {
    let token = req.body.token;
    let { id, column, value } = req.body.update;
    let response = await (this.CompanyService.editProductManagement(token, id, column, value));
    return res.send(response);
  }
}

module.exports = CompanyRouter;