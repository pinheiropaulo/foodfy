require("dotenv").config();
const express = require("express");
const nunjucks = require("nunjucks");
const methodOverride = require("method-override");
const path = require("path");

const routes = require("./routes");

const server = express();
const port = process.env.PORT || 3333;

server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "..", "public")));
server.use(methodOverride("_method"));

server.use(routes);

server.set("view engine", "njk");

nunjucks.configure("src/views", {
  express: server,
  autoescape: false,
  noCache: true,
});

server.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
