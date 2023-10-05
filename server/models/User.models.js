    const mongoose = require("mongoose");

    const UserSchema = new mongoose.Schema({
        first_name: {
            type: String,
            required: [true, "You should send a first name"],
            minLength: [2, "The name is not valid"]
        },
        last_name: {
            type: String,
            required: [true, "You should send a last name"],
            minLength: [2, "The name is not valid"]
        },
        email: {
            type: String,
            required: [true, "You should send a email"],
        },
        password: {
            type: String,
            required: [true, "You should send a password"],
            
        },
        recipes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Recipe"
            }
        ]
    }, {
        timestamps: true
    });

    const UserModel = mongoose.model("User", UserSchema);

    module.exports = UserModel;