const express = require("express");
const bodyParser = require("body-parser");

const morgan = require("morgan");
const cors = require("cors");

const knexFile = require("./knexfile").development;
const knex = require("knex")(knexFile);

const app = express();
app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(cors());


const CompanyService = require("./services/company_service");
const CompanyRouter = require("./routers/company_router");


const CustomerService = require("./services/customer_service");
const CustomerRouter = require("./routers/customer_router");

const CompanyService = new CompanyService(knex);
const CustomerService = new CustomerService(knex);


app.use("/company", new CompanyRouter(CompanyService).router());
app.use("/customer", new CustomerRouter(CustomerService).router());


// //how to move this in to the router?
// app.get("/api/profile", (req, res) => {
//   console.log("api profile here")
//   res.json("Profile Info from the backend");
// });

app.listen(8080, () => console.log("Listening to port 8080"));