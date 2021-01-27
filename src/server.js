import "dotenv/config";
import express from "express";
import nunjucks from "nunjucks";
import path from "path";

import data from "./data";

const server = express();

server.use(express.static(path.join(__dirname, "..", "public")));

server.set("view engine", "njk");

nunjucks.configure("src/views", {
  express: server,
  autoescape: false,
  noCache: true,
  watch: true,
});

server.get("/", (req, res) => {
  return res.render("home", { items: data });
});

server.get("/sobre", (req, res) => {
  return res.render("sobre");
});

server.get("/receitas", (req, res) => {
  return res.render("receitas", { items: data });
});

server.get("/detalhes", (req, res) => {
  const receitas = [...data];
  const id = req.query.id;

  const receita = receitas.find((receita) => {
    if (receita.id == id) {
      return receita;
    }
  });

  if (!receita) {
    res.send("Receita Não Encontrada");
  }

  return res.render("detalhes", { receita });
});

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running http://localhost:${process.env.PORT}`);
});
