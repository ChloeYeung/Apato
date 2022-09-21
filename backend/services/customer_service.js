class CustomerService {
  constructor(knex, jwt, jwt_decode) {
    this.knex = knex;
    this.jwt_decode = jwt_decode;
    this.jwt = jwt;
  }

  async showProduct(token) {
    let data = await this.knex.select("id", "name", "description", "quantity", "price", "tag", "type", "image_data").from('company_product').where('type', "Product").orderBy('id', 'desc');
    return data;
    // let decoded = this.jwt_decode(token);
    // token = token.replace("Bearer ", "");
    // let verify = this.jwt.verify(token, process.env.JWT_SECRET);
    // if (verify) {
    //   let data = await this.knex.select("id", "name", "description", "quantity", "price", "tag", "type", "image_data").from('company_product').where('company_id', decoded.id).orderBy('id');
    //   // let data = await this.knex.select("id", "name", "description", "quantity", "price", "tag", "type").from('company_product').where('company_id', decoded.id).orderBy('id');
    //   return data;
    // } else {
    //   res.sendStatus(401);
    // }
  }

  async addCart(token) {
    // let decoded = this.jwt_decode(token);
    // token = token.replace("Bearer ", "");
    // let verify = this.jwt.verify(token, process.env.JWT_SECRET);
    // if (verify) {
    //   let data = await this.knex.select("id", "name", "description", "quantity", "price", "tag", "type", "image_data").from('company_product').where('company_id', decoded.id).orderBy('id');
    //   // let data = await this.knex.select("id", "name", "description", "quantity", "price", "tag", "type").from('company_product').where('company_id', decoded.id).orderBy('id');
    //   return data;
    // } else {
    //   res.sendStatus(401);
    // }
  }
}

module.exports = CustomerService;