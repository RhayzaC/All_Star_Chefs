const mongoose = require("mongoose");
const ChefModel = require("../models/chef.model");
const { ObjectId } = mongoose.Types;


//Get All chefs (get)
module.exports = {
    findAllChefs: (req, res) => {
        ChefModel.find({})
        .then((allChefs) => res.status(200).json(allChefs))
        .catch((err) =>
        res.status(500).json({ message: "Something went wrong", errors: err })
        );
    },

//Create Chef (post)
createNewChef: (req, res) => {
    ChefModel.create(req.body)
    .then((newlyCreatedChef) => res.status(201).json(newlyCreatedChef))
    .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
            let keys = Object.keys(error.errors);
            let error_dict = {};
            keys.map((key) => {
                error_dict[key] = error.errors[key].message;
        });
        res.status(500).json({ error: error_dict });
        } else {
            res.status(500).json({ error: error });
        }
    });
},
  // Update (put)
updateOneChefById: (req, res) => {
    let id = req.params.id;
    let data = req.body;
    const updateOptions = {
        new: true, 
        runValidators: true,
    };
    if (!ObjectId.isValid(id)){
        return res
        .status(400)
        .json({ message: "id doesn't match the expected format" });
    }
    ChefModel.findByIdAndUpdate({ _id: id }, data, updateOptions)
    .then(() => {
        res.json({ success: true });
    })
    .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
            let keys = Object.keys(error.errors);
            let error_dict = {};
            keys.map((key) => {
            error_dict[key] = error.errors[key].message;
    });
        res.status(500).json({ error: error_dict });
    } else {
        res.status(500).json({ error: error });
    }
});
},
  // Delete Chef (delete)
deleteChef: (req, res) => {
    let id = req.params.id;
    if (!ObjectId.isValid(id)){
    return res.status(400).json({ message: "id doesn't match the expected format" });
    }
    ChefModel.deleteOne({ _id: id })
    .then(() => {
        res.json({ success: true });
    })
    .catch((error) => {
        res.status(500).json({ error: error });
    });
},
};
