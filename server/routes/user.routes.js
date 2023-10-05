
const {createUser,loginUser} = require("../controllers/User.controllers");

module.exports = (app) => {
    app.post("/api/users/register/", createUser);
    app.post("/api/users/login/", loginUser);
};