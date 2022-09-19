class CompanyService {
  constructor(knex, jwt, jwt_decode) {
    this.knex = knex;
    this.jwt_decode = jwt_decode;
    this.jwt = jwt;
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

  async showProductManagement(token) {
    let decoded = this.jwt_decode(token);
    // console.log("-----user id -----")
    // console.log(decoded);
    // console.log("------------------")
    token = token.replace("Bearer ", "");
    let verify = this.jwt.verify(token, process.env.JWT_SECRET);
    if (verify) {
      let data = await this.knex.select("id", "name", "description", "quantity", "price", "tag", "type").from('company_product').where('company_id', decoded.id).orderBy('id');
      return data;
    } else {
      res.sendStatus(401);
    }
  }
}

module.exports = CompanyService;