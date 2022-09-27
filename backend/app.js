//Require modules
const express = require("express");
const cors = require("cors");
const knexFile = require("./knexfile").development;
const knex = require("knex")(knexFile);
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");
const authCom = require("./company_jwt-strategy");
const authCus = require("./customer_jwt-strategy");
const fileUpload = require("express-fileupload");

const bcrypt = require("bcrypt");
require("dotenv").config();

//Setup Modules
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());
authCom(knex).initialize();
authCus(knex).initialize();

const CompanyService = require("./services/company_service");
const CompanyRouter = require("./routers/company_router");


const CustomerService = require("./services/customer_service");
const CustomerRouter = require("./routers/customer_router");


app.use("/company", new CompanyRouter(new CompanyService(knex, jwt, jwt_decode)).router());
app.use("/customer", new CustomerRouter(new CustomerService(knex, jwt, jwt_decode)).router());


//company: login, signup, logout
app.post("/company/signup", async (req, res) => {
  const image_data = req.files.image_data.data;
  console.log(image_data);
  let { email, password, name, phone_no, cypto_no } = req.body;
  // const username = req.body.username;
  // const password = req.body.password;
  console.log(email);
  console.log(password)
  let query = await knex("company_users").where({ email }).first();
  const hashed = await bcrypt.hash(password, 10);
  if (query == undefined) {
    // await knex("company_users").insert({ "email": email, "password": hashed, "name": name, "phone_no": phone_no, "cypto_no": cypto_no, "image": image });
    let data = await knex.select("id").from('company_users').orderBy('id');
    await knex("company_users").insert({ "id": `${data.length + 1}`, "email": email, "password": hashed, "name": name, "phone_no": phone_no, "cypto_no": cypto_no, "image_data": image_data });
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


//customer: login, signup, logout
app.post("/customer/signup", async (req, res) => {
  const image_data = req.files.image_data.data;
  console.log(image_data);
  let { email, password, name, phone_no, cypto_no, address } = req.body;
  let query = await knex("customer_users").where({ email }).first();
  const hashed = await bcrypt.hash(password, 10);
  if (query == undefined) {
    let data = await knex.select("id").from('customer_users').orderBy('id');
    await knex("customer_users").insert({ "id": `${data.length + 1}`, "email": email, "password": hashed, "name": name, "phone_no": phone_no, "address": address, "cypto_no": cypto_no, "image_data": image_data });
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


//Customer Facebook Login
app.post("/auth/facebook", async (req, res) => {
  console.log("body", req.body);
  let userInfo = req.body.userInfo;

  let user = await knex("customer_users").where({ facebook_id: userInfo.id }).first();

  if (!user) {
    let data = await knex.select("id").from('customer_users').orderBy('id');

    let id = await knex("customer_users")
      .insert({
        id: data.length + 1,
        facebook_id: userInfo.id,
        name: userInfo.name,
        email: userInfo.email,
      })
      .returning("id");

    const payload = {
      id: id[0].id,
      name: userInfo.name,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);
    console.log(token);
    res.json({ token });
  } else {
    const payload = {
      id: user.id,
      name: user.username,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);
    console.log(token);
    res.json({ token });
  }
});


//Customer Google Login
app.post("/auth/google", async (req, res) => {
  console.log("body", req.body);
  let userInfo = req.body.userInfo;

  let user = await knex("customer_users").where({ google_id: userInfo.sub }).first();

  if (!user) {
    let data = await knex.select("id").from('customer_users').orderBy('id');

    let id = await knex("customer_users")
      .insert({
        id: data.length + 1,
        google_id: userInfo.sub,
        name: userInfo.name ,
        email: userInfo.email,
      })
      .returning("id");

    const payload = {
      id: id[0].id,
      name: userInfo.name,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);
    res.json({ token });
  } else {
    const payload = {
      id: user.id,
      name: user.username,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);
    res.json({ token });
  }
});


app.listen(8000, () => console.log("Listening to port 8000"));