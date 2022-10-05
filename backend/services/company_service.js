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

  //Sales Summary
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
          .select("unit", "price", "date", "type", "product_name")
          .orderBy("id");

        // convert result array to object (key,val)
        function toMonthName(monthNumber) {
          const date = new Date();
          date.setMonth(monthNumber - 1);
          return date.toLocaleString("en-US", {
            month: "long",
          });
        }

        let returnObject = {};
        data.forEach((element) => {
          let month = toMonthName(new Date(element.date).getMonth() + 1);
          let year = new Date(element.date).getFullYear();
          let title = month + " " + year;

          if (returnObject[title] == undefined) {
            returnObject[title] = {};
            returnObject[title]["MostPopular"] = {};
            returnObject[title]["totalSale"] = 0;
            returnObject[title]["totalUnit"] = 0;

            Object.entries(element).forEach((el) => {
              returnObject[title][el[0]] = [];
            });
          }

          returnObject[title]["totalUnit"] += element["unit"];

          returnObject[title]["totalSale"] +=
            element["unit"] * element["price"];

          Object.entries(element).forEach((el) => {
            returnObject[title][el[0]].push(el[1]);

            if (
              el[0] == "product_name" &&
              returnObject[title]["MostPopular"][el[1]] == undefined
            )
              returnObject[title]["MostPopular"][el[1]] = 0;

            if (el[0] == "product_name")
              returnObject[title]["MostPopular"][el[1]] += element.unit;
          });
        });

        Object.entries(returnObject).forEach((e) => {
          let compareMostPopular = Object.values(e[1]["MostPopular"]);
          let max = Math.max(...compareMostPopular);

          e[1]["MostPopular"] = Object.entries(e[1]["MostPopular"]).filter(
            (eachTitle) => {
              return eachTitle[1] == max ? eachTitle : null;
            }
          );
        });
        const util = require("util");

        console.log(
          util.inspect(returnObject, {
            showHidden: false,
            depth: null,
            colors: true,
          })
        );

        return returnObject;
      } else {
        res.sendStatus(401);
      }
    } catch (error) {
      console.log("Error: Service Company showSalesSummaryDetail");
      console.log(error);
    }
  }

  //Sales History
  async showSalesHistory(token) {
    let decoded = this.jwt_decode(token);
    token = token.replace("Bearer ", "");
    let verify = this.jwt.verify(token, process.env.JWT_SECRET);
    if (verify) {
      let data = await this.knex
        .from("purchase_history")
        .innerJoin(
          "customer_users",
          "purchase_history.company_id",
          "customer_users.id"
        )
        .where("purchase_history.company_id", "=", decoded.id)
        .orderBy("purchase_history.id", "desc");

      return data;
    } else {
      res.sendStatus(401);
    }
  }

  async editStatusSalesHistory(token, orderId, newStatus) {
    try {
      let decoded = this.jwt_decode(token);
      token = token.replace("Bearer ", "");
      let verify = this.jwt.verify(token, process.env.JWT_SECRET);
      if (verify) {
        let id = await this.knex("purchase_history")
          .where("order_id", `${orderId}`)
          .select("id");

        await this.knex("purchase_history")
          .where("order_id", `${orderId}`)
          .update("status", `${newStatus}`);
      } else {
        res.sendStatus(401);
      }
    } catch (error) {
      console.log("Error: Service Company editStatusSalesHistory");
      console.log(error);
    }
  }
}

module.exports = CompanyService;
