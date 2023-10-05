const mongoose = require("mongoose");

const ChefSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Chef needs a name"],
    },
    photo: {
        type: String,
        required: [true, "Need picture"]
    },
    quote: {
        type: String,
        maxLength: [100, "It's a quote not a poem"]
    },
    stars: {
        type: Number,
        required: [true, "Need a star"],
        min: [0, "Must be a number greater than 0"]
    },
}, {
    timestamps: true
});

const ChefModel = mongoose.model("Chefs", ChefSchema);

module.exports = ChefModel;