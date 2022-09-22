class CustomerService {
  constructor(knex, jwt, jwt_decode) {
    this.knex = knex;
    this.jwt_decode = jwt_decode;
    this.jwt = jwt;
  }

  async showProduct(token) {
    let data = await this.knex.select("id", "name", "description", "stock", "price", "tag", "type", "image_data").from('company_product').where('type', "Product").orderBy('id', 'desc');
    return data;
  }

  async addCart(token, id, name, description, stock, price, tag, type, image_data, image_name) {
    try {
      if (token === null) {
        // 1. check if the customer login
        console.log("in Service add cart -> token null")
        let message = "Please Login";
        console.log("return message: " + message)
        return message;
      }



      let verify = this.jwt.verify(token, process.env.JWT_SECRET);
      let ckeckExitProduct = await this.knex.select("product_id").from('customer_cart').where('product_id', `${id}`);
      console.log(ckeckExitProduct);
      if (verify && ckeckExitProduct[0]) {
        // 2. token is verified and selected product exit
        console.log("in Service add cart -> have token, have exit product")
        let findUnit = await this.knex.select("unit").from('customer_cart').where('product_id', `${id}`);
        let findStock = await this.knex.select("stock").from("company_product").where("id", `${id}`);
        console.log("customer current unit: " + findUnit[0].unit);
        console.log("company stock: " + findStock[0].stock);

        // define will the unit add one or not
        let addOne;
        (findUnit[0].unit < findStock[0].stock)
          ?
          (addOne = findUnit[0].unit + 1)
          : (addOne = findUnit[0].unit)
        console.log("newUnit: " + addOne)

        //define the return message
        let message = "";
        (addOne == findUnit[0].unit + 1)
          ?
          (message = `Added ${name} to cart`)
          : (message = "No stock remain")
        console.log("return message: " + message)

        console.log("newUnit again: " + addOne);
        //updating the cart unit
        await this.knex("customer_cart").where("product_id", id).update("unit", `${addOne}`)

        //return value
        return message;
      }



      else if (verify) {
        // 3. token is verified and selected product dose not exit
        console.log("in Service add cart -> have token, no exit product")
        let decoded = this.jwt_decode(token);
        token = token.replace("Bearer ", "");
        let company_id = await this.knex.select("company_id").from('company_product').where('id', id);
        await this.knex.insert({ customer_id: decoded.id, product_id: id, unit: 1, company_id: company_id[0].company_id, name: name, description: description, stock: stock, price: price, tag: tag, type: type, image_data: image_data }).into('customer_cart');
        let message = `Added ${name} to cart`
        console.log("return message " + message);
        return message;
      }



      else {
        //4. update or insert not success
        res.sendStatus(401);
      }
    } catch (error) {
      console.log("Service: customer addCart error")
      console.log(error);
    }

  }
}

module.exports = CustomerService;