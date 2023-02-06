const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const cartRoutes = require("./routes/cart");
const productsRoutes = require("./routes/products");
const userRoutes = require("./routes/users");
const ordersRoutes = require("./routes/order");
const paymentRouter = require("./routes/stripe");
const incomeRouter = require("./routes/income");
const app = express();

app.use(bodyParser.json({limit: "50mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));
app.use(cors());

app.use("/api/user", userRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/payment", paymentRouter);
app.use("/api/income", incomeRouter);
const CONNECTION_URL =
  "mongodb+srv://mahmoudalmoukhtar:yzXnwFEiW0KV1c0o@cluster0.sch8ie1.mongodb.net/?retryWrites=true&w=majority";
const CONNECTION_URL_COMPAS = "mongodb://localhost:27017/ecommerce";
const PORT = process.env.PORT || 3001;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("success connection database");

    app.listen(PORT, () => {
      console.log(`success listning on ${PORT}`);
    });
  })
  .catch(err => {
    console.log("error connection database!!!");
    console.log(err.message);
  });
