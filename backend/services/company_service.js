class CompanyService {
  constructor(knex, jwt, jwt_decode) {
    this.knex = knex;
    this.jwt_decode = jwt_decode;
    this.jwt = jwt;
  }

  async showNavInfoCom(token) {
    try {
      let decoded = this.jwt_decode(token);
      token = token.replace("Bearer ", "");
      let verify = this.jwt.verify(token, process.env.JWT_SECRET);
      if (verify) {
        let data = await this.knex
          .select("image_data", "name")
          .where("id", `${decoded.id}`)
          .from("company_users");
        return data[0];
      } else {
        res.sendStatus(401);
      }
    } catch (error) {
      console.log("Error Service company showNavInfoCom ");
      console.log(error);
    }
  }

  async showProductManagement(token) {
    let decoded = this.jwt_decode(token);
    token = token.replace("Bearer ", "");
    console.log("decoded: " + decoded.id);
    let verify = this.jwt.verify(token, process.env.JWT_SECRET);
    if (verify) {
      let data = await this.knex
        .select(
          "id",
          "name",
          "description",
          "stock",
          "price",
          "tag",
          "type",
          "image_data"
        )
        .from("company_product")
        .where("company_id", decoded.id)
        .orderBy("id");
      console.log(data);
      return data;
    } else {
      res.sendStatus(401);
    }
  }

  async addProductManagement(
    token,
    name,
    description,
    stock,
    price,
    tag,
    type,
    image_name,
    image_data
  ) {
    try {
      let decoded = this.jwt_decode(token);
      console.log(decoded);
      token = token.replace("Bearer ", "");
      let verify = this.jwt.verify(token, process.env.JWT_SECRET);
      if (verify) {
        console.log("added PM");
        let data = await this.knex
          .select("id")
          .from("company_product")
          .orderBy("id");
        await this.knex("company_product").insert({
          id: `${data[data.length - 1].id + 1}`,
          company_id: decoded.id,
          name: name,
          description: description,
          stock: stock,
          price: price,
          tag: tag,
          type: type,
          image_name: image_name,
          image_data: image_data,
        });
        let product = await this.knex("company_product")
          .where("company_id", `${decoded.id}`)
          .select(
            "id",
            "name",
            "description",
            "stock",
            "price",
            "tag",
            "type",
            "image_name",
            "image_data"
          )
          .orderBy("id");
        return product;
      } else {
        return "error in addProductManagement";
      }
    } catch (error) {
      console.log("Error in Service company addProductManagement");
      console.log(error);
    }
  }

  async deleteProductManagement(token, id) {
    let decoded = this.jwt_decode(token);
    token = token.replace("Bearer ", "");
    let verify = this.jwt.verify(token, process.env.JWT_SECRET);
    if (verify) {
      await this.knex("company_product").where("id", id).del();
      console.log(`deleted ${id}`);
      let product = await this.knex("company_product")
        .where({ company_id: decoded.id })
        .select("id", "name", "description", "stock", "price", "tag", "type")
        .orderBy("id");
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
      await this.knex("company_product")
        .where("id", id)
        .update(`${column}`, value);
      console.log(`edit ${id}`);
      let product = await this.knex("company_product")
        .where({ company_id: decoded.id })
        .select("id", "name", "description", "stock", "price", "tag", "type")
        .orderBy("id");
      return product;
    } else {
      res.sendStatus(401);
    }
  }

  async showSalesSummary(token) {
    try {
      let decoded = this.jwt_decode(token);
      token = token.replace("Bearer ", "");
      let verify = this.jwt.verify(token, process.env.JWT_SECRET);
      if (verify) {
        //Accumlated Sales
        let accumlatedData = await this.knex("purchase_history")
          .where({ company_id: decoded.id })
          .select("unit", "price")
          .orderBy("id");

        let accumlatedArray = [];
        let accumlatedPrice;
        for (let a = 0; a < accumlatedData.length; a++) {
          accumlatedPrice = accumlatedData[a].unit * accumlatedData[a].price;
          accumlatedArray.push(accumlatedPrice);
        }

        const accumlatedSum = accumlatedArray.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0
        );

        // Current Sales
        const currentMonth = new Date().getMonth() + 1;

        let currentData = await this.knex("purchase_history")
          .where({ company_id: decoded.id })
          .select("unit", "price", "date")
          .orderBy("id");

        let currentArray = [];
        let currentPrice;
        for (let c = 0; c < currentData.length; c++) {
          if (Number(currentData[c].date.split("/")[1]) == currentMonth) {
            currentPrice = currentData[c].unit * currentData[c].price;
            currentArray.push(currentPrice);
          }
        }

        const currentSum = currentArray.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
          0
        );

        let returnObject = {};
        returnObject.accumlatedSales = accumlatedSum;
        returnObject.currentSales = currentSum;
        return returnObject;
      } else {
        res.sendStatus(401);
      }
    } catch (error) {
      console.log("Error: Company Service showSalesSummary");
      console.log(error);
    }
  }

  async showSalesSummaryDetail(token) {
    try {
      let decoded = this.jwt_decode(token);
      token = token.replace("Bearer ", "");
      let verify = this.jwt.verify(token, process.env.JWT_SECRET);
      if (verify) {
        let data = await this.knex("purchase_history")
          .where({ company_id: decoded.id })
          .select("unit", "price", "date")
          .orderBy("id");
        // console.log(data);
        // convert result array to object (key,val)
        let returnObject = {};

        data.forEach(element => {
          let month =new Date(element.date).getMonth()+1;

          if( returnObject[month] == undefined)
          returnObject[month] = [];
          
          returnObject[month].push(element);
        });

   



        let month;
        let monthYear;
        function toMonthName(monthNumber) {
          const date = new Date();
          date.setMonth(monthNumber - 1);
        
          return date.toLocaleString('en-US', {
            month: 'long',
          });
        }
        console.log(data[0].date.split("/")[1])
        // for (let m = 0; m < data.length; m++) {
        //   if (
        //     data[m].date.split("/")[1] == data[m + 1].date.split("/")[1] &&
        //     data[m].date.split("/")[0] == data[m + 1].date.split("/")[0]
        //   ) {
        //     month = toMonthName(Number( data[m].date.split("/")[1]));
        //     monthYear = month+ data[m].date.split("/")[0]
        //     object.monthYear = [data[m].unit , data[m].price]
        //   }
        // }
        // console.log(object);
      } else {
        res.sendStatus(401);
      }
    } catch (error) {
      console.log("Error: Service Company showSalesSummaryDetail");
      console.log(error);
    }
  }
}

module.exports = CompanyService;
