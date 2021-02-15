const fs = require("fs");

const data = require("../data.json");

module.exports = {
  index(req, res) {
    res.render("admin/index", { recipes: data.recipes });
  },
  create(req, res) {
    res.render("admin/create");
  },
  post(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Por Favor preencha todos os campos ");
      }
    }

    let {
      title,
      author,
      image,
      ingredients,
      preparation,
      information,
    } = req.body;

    let id = 1;

    const lastRecipes = data.recipes[data.recipes.length - 1];

    if (lastRecipes) {
      id = lastRecipes.id + 1;
    }

    data.recipes.push({
      id,
      title,
      author,
      image,
      ingredients,
      preparation,
      information,
    });

    fs.writeFile("./src/data.json", JSON.stringify(data, null, 2), (err) => {
      if (err) return res.send("Error");

      return res.redirect(`/admin/recipes/${id}`);
    });
  },
  show(req, res) {
    const { id } = req.params;

    const foundRecipes = data.recipes.find((recipe) => {
      return id == recipe.id;
    });

    if (!foundRecipes) return res.send("Receita Não Encontrada");

    const recipes = {
      ...foundRecipes,
    };

    return res.render("admin/details", { recipes });
  },
  edit(req, res) {
    const { id } = req.params;

    const foundRecipes = data.recipes.find((recipe) => {
      return id == recipe.id;
    });

    if (!foundRecipes) return res.send("Receita Não Encontrada");

    const recipes = {
      ...foundRecipes,
    };

    res.render("admin/edit", { recipes });
  },
  put(req, res) {
    const { id } = req.body;
    let index = 0;

    const foundRecipes = data.recipes.find((recipe, foundIndex) => {
      if (id == recipe.id) {
        index = foundIndex;
        return true;
      }
    });

    if (!foundRecipes) return res.send("Receita Não Encontrada");

    const recipe = {
      ...foundRecipes,
      ...req.body,
      id: Number(req.body.id),
    };

    data.recipes[index] = recipe;

    fs.writeFile("./src/data.json", JSON.stringify(data, null, 2), (err) => {
      if (err) return res.send("Error");

      return res.redirect(`/admin/recipes/${id}`);
    });
  },
  delete(req, res) {
    const { id } = req.body;

    const foundRecipes = data.recipes.find((recipe) => {
      return recipe.id != id;
    });

    data.recipes = foundRecipes;

    fs.writeFile("./src/data.json", JSON.stringify(data, null, 2), (err) => {
      if (err) return res.send("Error");

      return res.redirect("/admin/recipes/");
    });
  },
};
