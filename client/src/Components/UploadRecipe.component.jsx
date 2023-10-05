import React, { useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom'; // Importa useHistory

function RecipeForm() {
    const [recipeData, setRecipeData] = useState({
        title: '',
        ingredients: '',
        instructions: '',
        photo: '',
        category: '',
    });


    const navigate = useNavigate(); 
        

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipeData({ ...recipeData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        // Envía los datos al servidor para subir la receta
        const response = await axios.post('http://localhost:8080/api/recipes/upload', recipeData);
            console.log('Receta subida con éxito:', response.data);
                navigate(`/user/recipes/`);
        } catch (error) {
        console.error('Error al subir la receta:', error);
        }
    };
    return (
        <div style={{ backgroundColor: "#000", minHeight: "100vh", padding: "20px" }}>
        <Container className='m-5'>
            <h2 className='text-warning mb-4'>Subir una receta</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <label className='text-light' htmlFor="title">Recipe Tittle:</label>
                <input
                    type="text"
                    className='form-control'
                    id="title"
                    name="title"
                    value={recipeData.title}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className="mb-3">
                <label className='text-light' htmlFor="ingredients">Ingredients:</label>
                <textarea
                    id="ingredients"
                    name="ingredients"
                    className='form-control'
                    value={recipeData.ingredients}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className="mb-3">
                <label className='text-light' htmlFor="instructions">Instructions:</label>
                <textarea
                    className='form-control'
                    id="instructions"
                    name="instructions"
                    value={recipeData.instructions}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className="mb-3">
                <label className='text-light' htmlFor="photo">Photo URL :</label>
                <input
                    type="text"
                    className='form-control'
                    id="photo"
                    name="photo"
                    value={recipeData.photo}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className="mb-3">
            <label className='text-light' htmlFor="category">Category:</label>
            <select
                id="category"
                name="category"
                className='form-control'
                value={recipeData.category}
                onChange={handleChange}
                required
            >
                <option value="">Select a Category</option>
                <option value="Appetizers">Appetizers</option>
                <option value="Main Course">Beef</option>
                <option value="Chicken">Chicken</option>
                <option value="Desserts">Desserts</option>
                <option value="Lamb">Lamb</option>
                <option value="Miscellaneous">Miscellaneous</option>
                <option value="Pasta">Pasta</option>
                <option value="Pork">Pork</option>
                <option value="Seafood">Seafood</option>
                <option value="Side">Side</option>
                <option value="Starter">Starter</option>
                <option value="Vegan">Vegan</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Goat">Goat</option>
            </select>
            </div>
            <button className="btn btn-info mt-5" type="submit">Submit</button>
            </form>
            </Container>
        </div>
        
    );
}

export default RecipeForm;
