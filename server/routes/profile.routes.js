const ProfileController = require("../controllers/Profile.controllers");

module.exports = (app) => {
    // Ruta para obtener el perfil por ID de usuario (GET)
    app.get("/api/profile/:id/", ProfileController.getProfileByUserId);
    
    // Ruta para actualizar el perfil por ID de usuario (PUT)
    app.put("/api/profile/:id/", ProfileController.updateProfile);
    
    app.get("/api/profile/:id/logout/", ProfileController.logout);

};
