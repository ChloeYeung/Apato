const express = require("express");

class CompanyRouter {
  constructor(CompanyService) {
    this.CompanyService = CompanyService;
  }

  router() {
    let router = express.Router();
    // router.post("/signup", this.companySignup.bind(this));
    router.get("/showPm", this.showProductManagement.bind(this));
    router.post("/addPm", this.addProductManagement.bind(this));
    router.post("/deletePm", this.deleteProductManagement.bind(this));
    router.post("/editPm", this.editProductManagement.bind(this));
    console.log("In the company router");
    return router;
  }

  // companySignup(req,res){
  //   return res.json(this.CompanyService.signup()); 
  // }

  async showProductManagement(req, res) {
    console.log("reached show PM backend");
    let token = req.headers.authorization;
    let response = await (this.CompanyService.showProductManagement(token))
    return res.send(response);
  }

  async addProductManagement(req, res) {
    console.log("reached add PM backend");
    console.log(req);
    const image_name = "req.files.pmAddImg.name";
    const image_data = "req.files.pmAddImg.data";
    let {name, description, quantity, price, tag, type} = req.body.add;
    let token = req.body.token;
    let response = await (this.CompanyService.addProductManagement( token, name, description, quantity, price, tag, type, image_name, image_data))
    return res.send(response);
  }

  async deleteProductManagement(req, res) {
    console.log("reached delete PM backend");
    console.log(req.body);
    let token = req.body.token;
    let id = req.body.id
    let response = await (this.CompanyService.deleteProductManagement(token, id))
    return res.send(response);
  }

  async editProductManagement(req, res) {
    console.log("reached edit PM backend");
    console.log(req.body);
    let token = req.body.token;
    let id = req.body.id
    let response = await (this.CompanyService.editProductManagement(token, id))
    return res.send(response);
  }
}

module.exports = CompanyRouter;