const express = require('express');
const app = express();
const cors = require('cors');
const chefRoutes = require("./routes/chef.routes");
const profileRoutes = require("./routes/profile.routes"); 
const recipesRoutes = require ("./routes/recipes.routes")
const userRoutes = require('./routes/user.routes')


require("dotenv").config();
require("./config/mongo.config");

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true, // Permite las solicitudes con credenciales
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

profileRoutes(app);
userRoutes(app);
recipesRoutes(app); 
chefRoutes(app);


app.listen(8080, () => {
    console.log(`Server is running on port 8080`);
});