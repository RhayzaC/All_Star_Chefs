const mongoose = require('mongoose');
const UserModel = require('../models/User.models'); // Cambié la importación del modelo de usuario
const ProfileModel = require('../models/Profile.model');

module.exports = {
    getProfileByUserId: async (req, res) => { // Agregué async para poder usar await
        try {
            const id = req.params.id;
            if (!mongoose.Types.ObjectId.isValid(id)) {
                console.log("Profile not found for user:", id);
                return res.status(400).json({ message: "ID doesn't match the expected format" });
            }

            const user = await UserModel.findById(id);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            const userProfile = {
                _id: user._id,
                name: user.first_name,
                email: user.email,
            };

            return res.json({ user: userProfile });
        } catch (error) {
            console.error("Error en getProfileByUserId:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    },

    updateProfile: async (req, res) => {
        try {
            const userId = req.params.id; // Cambié _id por id

            const user = await UserModel.findById(userId);
            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            const profile = await ProfileModel.findOne({ user: userId });
            if (!profile) {
                return res.status(404).json({ error: "Profile not found" });
            }

// Validar y actualizar la información del perfil (bio, profileImage) según lo que se envió en el cuerpo de la solicitud
            const { bio, profileImage } = req.body;
            if (bio !== undefined) {
                profile.bio = bio;
            }
            if (profileImage !== undefined) {
                profile.profileImage = profileImage;
            }

            await profile.save();

            return res.json({ success: true });
        } catch (error) {
            console.error("Error en updateProfile:", error);
            return res.status(500).json({ error: "Internal server error" });
        }
    },
    // III) LOGOUT
    logout: (req, res) => {
        // clear the cookie from the response
        res.clearCookie("token");
        res.status(200).json({
        message: "You have successfully logged out of our system",
        });
    },
};
