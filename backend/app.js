//Require modules
const express = require("express");
const cors = require("cors");
const knexFile = require("./knexfile").development;
const knex = require("knex")(knexFile);
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");
const authCom = require("./company_jwt-strategy");
const authCus = require("./customer_jwt-strategy");

const bcrypt = require("bcrypt");
require("dotenv").config();

//Setup Modules
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
authCom(knex).initialize();
authCus(knex).initialize();

const CompanyService = require("./services/company_service");
const CompanyRouter = require("./routers/company_router");


const CustomerService = require("./services/customer_service");
const CustomerRouter = require("./routers/customer_router");

// const CompanyService = new CompanyService(knex);
// const CustomerService = new CustomerService(knex);


app.use("/company", new CompanyRouter(new CompanyService(knex, jwt, jwt_decode)).router());
app.use("/customer", new CustomerRouter(new CustomerService(knex)).router());


//company: login, signup, logout
app.post("/company/signup", async (req, res) => {
  // const username = req.body.username;
  // const password = req.body.password;
  const { email, password, name, phone_no, cypto_no, image } = req.body;
  console.log(email, password);
  let query = await knex("company_users").where({ email }).first();
  const hashed = await bcrypt.hash(password, 10);
  if (query == undefined) {
    await knex("company_users").insert({ "email": email, "password": hashed, "name": name, "phone_no": phone_no, "cypto_no": cypto_no, "image": image });
    //same as     await knex("users").insert({ username: username, password: hashed });
    res.json("signup complete");
  } else {
    res.sendStatus(401);
  }
});

app.post("/company/login", async (req, res) => {
  const { email, password } = req.body;

  let user = await knex("company_users").where({ email }).first();

  if (user) {
    let result = await bcrypt.compare(password, user.password);

    if (result) {
      const payload = {
        id: user.id,
        email: user.email,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      res.json({ token });
    } else {
      res.sendStatus(401);
    }
  }
});

app.get("/todo", async (req, res) => {
  let token = req.headers.authorization;
  token = token.replace("Bearer ", "");
  let verify = jwt.verify(token, process.env.JWT_SECRET);
  console.log(verify);
  if (verify) {
    res.json({
      todo: ["get bottle of water", "water plants", "eat breakfast"],
    });
    console.log("hhhh")
  } else {
    res.sendStatus(401);
  }
});



//customer: login, signup, logout
app.post("/customer/signup", async (req, res) => {
  // const username = req.body.username;
  // const password = req.body.password;
  const { email, password, name, phone_no, address, cypto_no, image } = req.body;
  console.log(email, password);
  let query = await knex("customer_users").where({ email }).first();
  const hashed = await bcrypt.hash(password, 10);
  if (query == undefined) {
    await knex("customer_users").insert({ "email": email, "password": hashed, "name": name, "phone_no": phone_no, "address": address, "cypto_no": cypto_no, "image": image });
    //same as     await knex("users").insert({ username: username, password: hashed });
    res.json("signup complete");
  } else {
    res.sendStatus(401);
  }
});

app.post("/customer/login", async (req, res) => {
  const { email, password } = req.body;
  let user = await knex("customer_users").where({ email }).first();
  if (user) {
    let result = await bcrypt.compare(password, user.password);
    if (result) {
      const payload = {
        id: user.id,
        email: user.email,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      res.json({ token });
    } else {
      res.sendStatus(401);
    }
  }
});


app.listen(8000, () => console.log("Listening to port 8000"));