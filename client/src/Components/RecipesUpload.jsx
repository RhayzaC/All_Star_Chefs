/*import React, { useState } from 'react';
import axios from 'axios';

function RecipeForm() {
    const [recipeData, setRecipeData] = useState({
        name: '',
        ingredients: '',
        instructions: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipeData({ ...recipeData, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setRecipeData({ ...recipeData, image: file });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const formData = new FormData();
        formData.append('name', recipeData.name);
        formData.append('ingredients', recipeData.ingredients);
        formData.append('instructions', recipeData.instructions);
        formData.append('image', recipeData.image);

        // Enviar el formulario al servidor utilizando Axios u otra biblioteca
        const response = await axios.post('URL_DE_TU_API', formData);

        // Manejar la respuesta del servidor, mostrar un mensaje de éxito, etc.
        console.log('Receta subida con éxito:', response.data);

        // Restablecer el estado del formulario
        setRecipeData({
            name: '',
            ingredients: '',
            instructions: '',
            image: null,
        });
        } catch (error) {
        console.error('Error al subir la receta:', error);
        }
    };

    return (
        <div>
        <h2>Subir una receta</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Nombre de la receta:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={recipeData.name}
                onChange={handleChange}
                required
            />
            </div>
            <div>
            <label htmlFor="ingredients">Ingredientes:</label>
            <textarea
                id="ingredients"
                name="ingredients"
                value={recipeData.ingredients}
                onChange={handleChange}
                required
            />
            </div>
            <div>
            <label htmlFor="instructions">Instrucciones:</label>
            <textarea
                id="instructions"
                name="instructions"
                value={recipeData.instructions}
                onChange={handleChange}
                required
            />
            </div>
            <div>
            <label htmlFor="image">Imagen de la receta:</label>
            <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                required
            />
            </div>
            <button type="submit">Subir Receta</button>
        </form>
        </div>
    );
}

export default RecipeForm;*/
