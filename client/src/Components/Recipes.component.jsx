import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./Footer.component";

function RecipeCategories() {
        const [categories, setCategories] = useState([]);
        const [selectedCategory, setSelectedCategory] = useState("");
        const [recipes, setRecipes] = useState([]);
        const [selectedRecipe, setSelectedRecipe] = useState(null);
        const [instructions, setInstructions] = useState("");
        const [mealThumb, setMealThumb] = useState("");
        const [fetchingRecipe, setFetchingRecipe] = useState(false);
        const [ingredients, setIngredients] = useState([]);
        

    useEffect(() => {
        const apiUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";
        const apiKey = "1";
        
        axios
            .get(`${apiUrl}?api_key=${apiKey}`)
            .then((response) => {
            setCategories(response.data.categories);
        })
        .catch((error) => {
            console.error("Error al obtener las categorías:", error);
        });
    }, []);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setRecipes([]);
        setSelectedRecipe(null); // Agregamos esta línea para borrar la receta seleccionada cuando se cambia la categoría.
    };

    const fetchRecipes = () => {
        if (selectedCategory) {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`;

        axios
            .get(apiUrl)
            .then((response) => {
            setRecipes(response.data.meals);
            })
            .catch((error) => {
            console.error("Error al obtener recetas:", error);
            });
        }
    };

    const handleRecipeClick = (recipe) => {
        fetchRecipeInfo(recipe.idMeal);
        setSelectedRecipe(recipe);
    };

    const fetchRecipeInfo = async (idMeal) => {
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;

        if (fetchingRecipe) return;

        setFetchingRecipe(true); // Marcar que hay una solicitud en curso.

        try {
        const response = await axios.get(apiUrl);
        let meal = response.data.meals[0];
        let recipeInfo = meal.strInstructions;
        let mealThumb = meal.strMealThumb;
        setInstructions(recipeInfo);
        setMealThumb(mealThumb);
        mapIngredients(meal);
        } catch (error) {
        console.error("Error al obtener recetas:", error);
        } finally {
        setFetchingRecipe(false); // Marcar que la solicitud ha terminado.
        }
    };


    const mapIngredients = (meal) => {
        const ingredients = [];

        for (const key in meal) {
        if (key.startsWith("strIngredient") && meal[key] !== "") {
            const ingredientIndex = key.replace("strIngredient", "");
            const measureKey = `strMeasure${ingredientIndex}`;
            const measure = meal[measureKey];
            const ingredientWithMeasure = `${measure ? measure + " - " : ""}${
            meal[key]
            }`;
            ingredients.push(ingredientWithMeasure);
        }
        }
        setIngredients(ingredients);
    };
    return (
        <div>
        <div
        style={{ backgroundColor: "black", minHeight: "100vh" }}
        className="d-flex"
        >
        <div className="container text-center m-5">
            <h2 className="m-2 text-warning text-decoration-underline">Recipes</h2>
            <div className="d-flex justify-content-center">
            <select
                className="m-3 rounded "
                style={{ backgroundColor: "#aee3f6" }}
                onChange={handleCategoryChange}
                value={selectedCategory}
            >
                <option value="">Select a Category</option>
                {categories.map((category) => (
                <option key={category.idCategory} value={category.strCategory}>
                    {category.strCategory}
                </option>
                ))}
            </select>
            <button className="btn btn-secondary m-3 rounded " onClick={fetchRecipes}>
                Get recipe
            </button>
            
            </div>
            {selectedRecipe ? ( // Utilizamos una condición para renderizar según si se ha seleccionado una receta o no.
            <div className="">
                <img
                src={mealThumb}
                className="rounded-circle m-4"
                style={{ width: "250px" }}
                alt="Avatar"
                />
                <h2 className="text-light"> Receta seleccionada:</h2>
                <h3 className="text-warning text-decoration-underline"> 
                {selectedRecipe.strMeal}
                </h3>
                <h4 className="text-info text-decoration-underline mt-3"> Ingredients:</h4>
                <ul className="text-light mt-3" style={{ listStyleType: 'none' }}>
                    {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h4 className="text-warning mt-3 text-decoration-underline"> Instructions:</h4>
                <p className="text-light m-3">{instructions}</p>
            </div>
            ) : (
            <div>
                {recipes.length > 0 && (
                <div>
                    <h2 className="text-warning">
                    {" "}
                    Recetas de la categoría: {selectedCategory}
                    </h2>
                    <ul className="list-group text-light m-5">
                    {recipes.map((recipe) => (
                        <li
                        key={recipe.idMeal}
                        onClick={() => handleRecipeClick(recipe)}
                        className="list-group-item list-group-item-action"
                        style={{ cursor: "pointer" }}
                        >
                        {recipe.strMeal}
                        </li>
                    ))}
                    </ul>
                </div>
                )}
            </div>
            )}
        </div>
    </div>
<Footer/>
</div>
    );
    }
    export default RecipeCategories;
