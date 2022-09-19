const express = require("express");

class CompanyRouter {
  constructor(CompanyService) {
    this.CompanyService = CompanyService;
  }

  router() {
    let router = express.Router();
    router.get("/", this.get_building.bind(this));
    // router.post("/signup", this.companySignup.bind(this));
    router.get("/showPm", this.showProductManagement.bind(this));
    console.log("In the company router");
    return router;
  }

  get_building(req, res) {
    console.log("reached covid backend");
    return res.json(this.CompanyService.list());
  }

  // companySignup(req,res){
  //   return res.json(this.CompanyService.signup()); 
  // }

  async showProductManagement(req, res) {
    console.log("reached PM backend");
    let token = req.headers.authorization;
    let response = await (this.CompanyService.showProductManagement(token))
    return res.send(response);
  }

}

module.exports = CompanyRouter;