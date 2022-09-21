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
    token = token.replace("Bearer ", "");
    let verify = this.jwt.verify(token, process.env.JWT_SECRET);
    if (verify) {
      // let data = await this.knex.select("id", "name", "description", "quantity", "price", "tag", "type", "image_data").from('company_product').where('company_id', decoded.id).orderBy('id');
      let data = await this.knex.select("id", "name", "description", "quantity", "price", "tag", "type").from('company_product').where('company_id', decoded.id).orderBy('id');

      return data;
    } else {
      res.sendStatus(401);
    }
  }

  async addProductManagement(token, name, description, quantity, price, tag, type, image_name, image_data) {
    let decoded = await this.jwt_decode(token);
    token = token.replace("Bearer ", "");
    let verify = this.jwt.verify(token, process.env.JWT_SECRET);
    if (verify) {
      console.log("updated PM")
      await this.knex('company_product').insert({ company_id: decoded.id, name: name, description: description, quantity: quantity, price: price, tag: tag, type: type, image_name: image_name, image_data: image_data });
      let product = await this.knex("company_product").where({ company_id: decoded.id }).select("id", "name", "description", "quantity", "price", "tag", "type", "image_name", "image_data").orderBy('id');
      return product;
    } else {
      return "error in addProductManagement"
    }
  }

  async deleteProductManagement(token, id) {
    let decoded = this.jwt_decode(token);
    token = token.replace("Bearer ", "");
    let verify = this.jwt.verify(token, process.env.JWT_SECRET);
    if (verify) {
      await this.knex('company_product').where("id", id).del();
      console.log(`deleted ${id}`)
      let product = await this.knex("company_product").where({ company_id: decoded.id }).select("id", "name", "description", "quantity", "price", "tag", "type").orderBy('id');
      return product;
    } else {
      res.sendStatus(401);
    }
  }

  async editProductManagement(token, id, column, value) {
    let decoded = this.jwt_decode(token);
    token = token.replace("Bearer ", "");
    let verify = this.jwt.verify(token, process.env.JWT_SECRET);
    if (verify) {
      await this.knex('company_product').where('id', id).update(`${column}`, value)
      console.log(`edit ${id}`)
      let product = await this.knex("company_product").where({ company_id: decoded.id }).select("id", "name", "description", "quantity", "price", "tag", "type").orderBy('id');
      return product;
    } else {
      res.sendStatus(401);
    }
  }


}

module.exports = CompanyService;