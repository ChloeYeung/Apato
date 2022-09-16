const express = require("express");

class CompanyRouter {
  constructor(CompanyService) {
    this.CompanyService = CompanyService;
  }
  router() {
    let router = express.Router();
    router.get("/", this.get_building.bind(this));
    // router.post("/signup", this.companySignup.bind(this));
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


}

module.exports = CompanyRouter;