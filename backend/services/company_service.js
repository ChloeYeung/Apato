class CompanyService {
  constructor(knex) {
    this.knex = knex;
  }

  list() {
    console.log("listing buildings");
    // Enter your data manipulation code here
    // My data manipulation code takes 32 rows
    console.log(covidData)
    return covidData;
  }

  // async companyLogin(username, password) {
  //   let query = await this.knex("users").where({ username }).first();
  //   const hashed = await bcrypt.hash(password, 10);
  //   if (query == undefined) {
  //     await this.knex("users").insert({ username, password: hashed });
  //     //same as     await knex("users").insert({ username: username, password: hashed });
  //     res.json("signup complete");
  //   } else {
  //     res.sendStatus(401);
  //   }
  // }
}

module.exports = CompanyService;