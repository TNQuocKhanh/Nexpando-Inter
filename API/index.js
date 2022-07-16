const express = require("express");
const app = express();
const cors = require("cors");
// const dotenv = require("dotenv");

const port = 5000;

// dotenv.config();

app.get("/", (req, res) => {
  res.send("RESTful API server started on: " + port);
});

const index = require("./routes/index");
const productRoute = require("./routes/product.routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// app.use(express.json()); // for parsing application/json
// app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", `${process.env.AUTH_CLIENT_URL}`);
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
//   next();
// });

app.use(index);
app.use("/api/", productRoute);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
