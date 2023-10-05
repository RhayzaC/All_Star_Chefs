//Importing Controller Methods and Express Third-party Library
const RecipeController = require('../controllers/Recipes.controllers'); // Asegúrate de que la ruta al controlador sea correcta

//Link Routes with Controller Methods
module.exports = (app) => {
    app.get('/api/user/recipes/', RecipeController.getAllRecipes);
    app.post('/api/recipes/upload/', RecipeController.createRecipe);
    app.post('/api/recipes/:recipeId/comments', RecipeController.addCommentToRecipe);
    app.put('/api/user/recipes/:recipeId/', RecipeController.updateRecipe);
    app.delete('/api/user/recipes/:recipeId', RecipeController.deleteRecipe);
};
