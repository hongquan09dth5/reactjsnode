require("dotenv").config();
const express = require("express");
const multer = require("multer");
var path = require("path");
var cors = require("cors");
const app = express();

const bodyParser = require("body-parser");

const productRoutes = require("./api/routes/product.route");
const uploaderRoutes = require("./api/routes/uploader.route");
const routes = require("./api/routes/index");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", routes);
app.use("/server/assets", express.static("server/assets"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join("inventory/build")));
  app.get("*", (req, res) =>
    res.sendfile(path.resolve(__dirname, "inventory", "build", "index.html"))
  );
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("API server started on:" + port);
});
