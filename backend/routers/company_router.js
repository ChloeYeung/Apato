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
    // let token = req.headers.authorization;
    console.log(req.body);
    let {name, description, quantity, price, tag, type } = req.body.add;
    let token = req.body.token;
    console.log(req.body)
    let response = await (this.CompanyService.addProductManagement( token, name, description, quantity, price, tag, type))
    return res.send(response);
  }
}

module.exports = CompanyRouter;