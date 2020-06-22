const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

const receitas = require("./data");

server.use(express.static("public"));

server.set("view engine", "njk");

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get("/", function (req, res) {
  return res.render("home", { receitas });
});

server.get("/sobre", function (req, res) {
  const activeSobre = true;
  return res.render("sobre", { activeSobre });
});

server.get("/receita/:index", function (req, res) {
  const recipes = receitas;
  const recipeIndex = req.params.index;
  const activeReceita = true;

  return res.render("receita", {
    receita: recipes[recipeIndex],
    activeReceita,
  });
});

server.listen(5000, function () {});
