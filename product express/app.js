let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let productRouter = require("./router/product.router");
let app = express();

app.use(cors());
app.use(express.json());

let url = "mongodb://localhost:27017/projectinfo";

mongoose.connect(url);

// http://localhost:9090/api/product/
app.use("/api/product",productRouter);



app.listen(9090,()=>console.log("Server running on port number 9090"));




