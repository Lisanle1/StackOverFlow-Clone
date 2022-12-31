const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const router = require("./routers");
const bodyParser = require("body-parser");

const db = require("./config/db");
db.connect();

app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "500mb" }));

app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
  res.send('Hi! Welcome to StackOverFlow Clone API.....')
})
app.use("/api", router);

const PORT = process.env.PORT || 3001;  

app.listen(PORT, () => {
  console.log(`Stack Overflow Clone API is running on PORT No- ${PORT}`);
});
