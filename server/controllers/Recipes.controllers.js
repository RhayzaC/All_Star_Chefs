const mongoose = require("mongoose");
const RecipeModel = require("../models/Recipe.model");

module.exports = {
    createRecipe: (req, res) => {
        const { title, ingredients, instructions, photo, category } = req.body;

        RecipeModel.create({ title, ingredients, instructions, photo, category })
        .then((newRecipe) => {
            res.status(201).json(newRecipe);
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
    },

    getAllRecipes: (req, res) => {
        RecipeModel.find()
        .then((recipes) => {
            res.status(200).json(recipes);
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
    },

    addCommentToRecipe: (req, res) => {
        const recipeId = req.params.recipeId;
        const { user, content } = req.body;

    RecipeModel.findById(recipeId)
        .then((recipe) => {
            if (!recipe) {
                return res.status(404).json({ error: "Recipe not found" });
            }
            recipe.comments.push({ user, content });
            return recipe.save();
        })
        .then((updatedRecipe) => {
            res.status(200).json(updatedRecipe);
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
    },

    updateRecipe: (req, res) => {
        const recipeId = req.params.recipeId;
        const { title, ingredients, instructions, photo, category } = req.body;

        RecipeModel.findByIdAndUpdate(
            recipeId,
            { title, ingredients, instructions, photo, category },
            { new: true } // Esto devolverá la receta actualizada
        )
        .then((updatedRecipe) => {
            if (!updatedRecipe) {
                return res.status(404).json({ error: "Recipe not found" });
            }
            res.status(200).json(updatedRecipe);
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
    },

    deleteRecipe: (req, res) => {
        const recipeId = req.params.recipeId;

        RecipeModel.findByIdAndDelete(recipeId)
        .then((deletedRecipe) => {
            if (!deletedRecipe) {
                return res.status(404).json({ error: "Recipe not found" });
            }
            res.status(200).json({ message: "Recipe deleted successfully" });
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
    },
};
