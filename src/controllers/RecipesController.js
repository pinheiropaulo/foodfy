const data = require("../data.json");

module.exports = {
  index(req, res) {
    res.render("recipes/home", { recipes: data.recipes });
  },
  about(req, res) {
    res.render("recipes/about");
  },
  recipes(req, res) {
    res.render("recipes/recipes", { recipes: data.recipes });
  },
  details(req, res) {
    const id = req.query.id;

    const foundRecipes = data.recipes.find((recipe) => {
      return id == recipe.id;
    });

    if (!foundRecipes) return res.send("Receita Não Encontrada");

    const recipes = {
      ...foundRecipes,
    };

    return res.render("recipes/details", { recipes });
  },
};
