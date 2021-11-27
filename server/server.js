const express = require("express");
const dotenv = require("dotenv");
const dbConnection = require("./db");
const routers = require("./routes")

//config enviromental variables
dotenv.config();
//Port config
const PORT = process.env.PORT || 4000;
//init express
const app = express();
//init DB
dbConnection();

//use routes
app.use("/api/v1",routers)

//init server
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
