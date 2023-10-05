const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Recipe title is required"]
    },
    ingredients: {
        type: String,
        required: [true, "Recipe ingredients are required"]
    },
    instructions: {
        type: String,
        required: [true, "Recipe instruction is required"]
    },
    photo: {
        type: String,
        required: [true, "Recipe photo is required"]
    },
    category: {
        type: String,
        required: [true, "Category is required"]
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true
            },
            content: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
}, {
    timestamps: true
});

const RecipeModel = mongoose.model("Recipe", recipeSchema);

module.exports = RecipeModel;

