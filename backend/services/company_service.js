class CompanyService {
  constructor(knex, jwt, jwt_decode) {
    this.knex = knex;
    this.jwt_decode = jwt_decode;
    this.jwt = jwt;
  }

  async showProductManagement(token) {
    let decoded = this.jwt_decode(token);
    token = token.replace("Bearer ", "");
    let verify = this.jwt.verify(token, process.env.JWT_SECRET);
    if (verify) {
      let data = await this.knex.select("id", "name", "description", "stock", "price", "tag", "type", "image_data").from('company_product').where('company_id', decoded.id).orderBy('id');
      // let data = await this.knex.select("id", "name", "description", "stock", "price", "tag", "type").from('company_product').where('company_id', decoded.id).orderBy('id');
      return data;
    } else {
      res.sendStatus(401);
    }
  }

  async addProductManagement(token, name, description, stock, price, tag, type, image_name, image_data) {
    try {
      let decoded = this.jwt_decode(token);
      console.log(decoded);
      token = token.replace("Bearer ", "");
      let verify = this.jwt.verify(token, process.env.JWT_SECRET);
      if (verify) {
        console.log("added PM")
        console.log(image_name);
        console.log(image_data);
        await this.knex("company_product").insert({ company_id: decoded.id, name: name, description: description, stock: stock, price: price, tag: tag, type: type, image_name: image_name, image_data: image_data});
        let product = await this.knex("company_product").where("company_id", `${decoded.id}` ).select("id", "name", "description", "stock", "price", "tag", "type", "image_name", "image_data").orderBy('id');
        return product;
      } else {
        return "error in addProductManagement"
      }
    } catch (error) {
      console.log("Error in Service company addProductManagement")
      console.log(error);
    }
  }

  async deleteProductManagement(token, id) {
    let decoded = this.jwt_decode(token);
    token = token.replace("Bearer ", "");
    let verify = this.jwt.verify(token, process.env.JWT_SECRET);
    if (verify) {
      await this.knex('company_product').where("id", id).del();
      console.log(`deleted ${id}`);
      let product = await this.knex("company_product").where({ company_id: decoded.id }).select("id", "name", "description", "stock", "price", "tag", "type").orderBy('id');
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
      console.log(`edit ${id}`);
      let product = await this.knex("company_product").where({ company_id: decoded.id }).select("id", "name", "description", "stock", "price", "tag", "type").orderBy('id');
      return product;
    } else {
      res.sendStatus(401);
    }
  }




}

module.exports = CompanyService;