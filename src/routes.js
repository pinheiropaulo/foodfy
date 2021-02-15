const express = require("express");
const routes = express.Router();

const AdminController = require("./controllers/AdminController");
const RecipesController = require("./controllers/RecipesController");

// RecipesController

routes.get("/", RecipesController.index);
routes.get("/sobre", RecipesController.about);
routes.get("/receitas", RecipesController.recipes);
routes.get("/detalhes", RecipesController.details);

// AdminController

routes.get("/admin/recipes", AdminController.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", AdminController.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", AdminController.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", AdminController.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", AdminController.post); // Cadastrar nova receita
routes.put("/admin/recipes", AdminController.put); // Editar uma receita
routes.delete("/admin/recipes", AdminController.delete); // Deletar uma receita

module.exports = routes;

// routes.put("/admin/recipes", recipes.put); // Editar uma receita
// routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita
