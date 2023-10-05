//Importing Controller Methods and Express Third-party Library
const { findAllChefs, createNewChef, updateOneChefById, deleteChef,} = require('../controllers/Chef.controllers');


//Link Routes with Controller Methods
module.exports = (app) => {
    app.get('/api/chefs/', findAllChefs);
    //app.get('/api/chefs/:id', getChefById);
    app.post('/api/chefs/', createNewChef);
    app.put('/api/chefs/:id/', updateOneChefById);
    app.delete('/api/chefs/:id/', deleteChef);
};

