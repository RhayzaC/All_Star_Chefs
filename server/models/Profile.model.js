const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    bio: {
        type: String
    },
    profileImage: {
        type: String
    }
}, {
    timestamps: true
});

const ProfileModel = mongoose.model("Profile", ProfileSchema);

module.exports = ProfileModel;