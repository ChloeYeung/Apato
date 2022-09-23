class CustomerService {
  constructor(knex, jwt, jwt_decode) {
    this.knex = knex;
    this.jwt_decode = jwt_decode;
    this.jwt = jwt;
  }

  // Show Product
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
        await this.knex.insert({ customer_id: decoded.id, product_id: id, unit: 1, company_id: company_id[0].company_id, product_name: name, description: description, stock: stock, price: price, tag: tag, type: type, image_data: image_data }).into('customer_cart');
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











  // Show Service
  async showService(token) {
    let data = await this.knex.select("id", "name", "description", "stock", "price", "tag", "type", "image_data").from('company_product').where('type', "Service").orderBy('id', 'desc');
    return data;
  }

  async addCartService(token, id, name, description, stock, price, tag, type, image_data, image_name) {
    try {
      if (token === null) {
        // 1. check if the customer login
        console.log("in Service add cart service-> token null")
        let message = "Please Login";
        console.log("return message: " + message)
        return message;
      }


      let verify = this.jwt.verify(token, process.env.JWT_SECRET);
      let ckeckExitProduct = await this.knex.select("product_id").from('customer_cart').where('product_id', `${id}`);
      console.log(ckeckExitProduct);
      if (verify && ckeckExitProduct[0]) {
        // 2. token is verified and selected product exit
        console.log("in Service add cart service -> have token, have exit product")
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
        await this.knex.insert({ customer_id: decoded.id, product_id: id, unit: 1, company_id: company_id[0].company_id, product_name: name, description: description, stock: stock, price: price, tag: tag, type: type, image_data: image_data }).into('customer_cart');
        let message = `Added ${name} to cart`
        console.log("return message " + message);
        return message;
      }


      else {
        //4. update or insert not success
        res.sendStatus(401);
      }
    } catch (error) {
      console.log("Service: customer addCart service error")
      console.log(error);
    }
  }















  //Cart
  async showCart(token) {
    let decoded = this.jwt_decode(token);
    // let data = await this.knex.select("id", "customer_id", "product_id", "unit", "company_id", "name", "description", "price", "tag", "stock", "type", "image_name", "image_data").from('customer_cart').where('customer_id', `${decoded.id}`).orderBy('id', 'desc');
    let data = await this.knex('customer_cart').select("customer_cart.id", "customer_cart.customer_id", "customer_cart.product_id", "customer_cart.unit", "customer_cart.company_id", "customer_cart.product_name", "customer_cart.description", "customer_cart.price", "customer_cart.tag", "customer_cart.stock", "customer_cart.type", "customer_cart.image_name", "customer_cart.image_data"
      , "company_users.name")
      .innerJoin('company_users', 'customer_cart.company_id', 'company_users.id')
      .where('customer_cart.customer_id', `${decoded.id}`)
      .orderBy('customer_cart.id', 'desc');
    console.log(data);
    return data;
  }

  async addCartUnit(token, cart_id, product_id) {
    try {
      let decoded = this.jwt_decode(token);
      token = token.replace("Bearer ", "");
      // console.log("decoded: " + decoded.id);
      let verify = this.jwt.verify(token, process.env.JWT_SECRET);
      if (verify) {
        let originUnit = await this.knex("customer_cart").select("unit").where("id", `${cart_id}`);
        console.log(originUnit[0].unit);
        let comStock = await this.knex("company_product").select("stock").where("id", `${product_id}`);
        console.log("comStock: " + comStock[0].stock);

        let message = "";
        // check company stock > customer wanted unit update action 
        (comStock[0].stock > originUnit[0].unit) ?
          await this.knex("customer_cart").update("unit", `${originUnit[0].unit + 1}`).where("id", `${cart_id}`)
          : message = "No stock remain";

        //check the message
        (message == "No stock remain") ?
          message = "No stock remain"
          : message = "Added one unit"

        return message;


      }
    } catch (error) {
      console.log("Error in Service customer addCartUnit")
      console.log(error);
    }


  }



}

module.exports = CustomerService;