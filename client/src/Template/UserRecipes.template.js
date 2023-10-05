import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Card, Button, Accordion, Form } from "react-bootstrap";

function RecipeBlog() {
    const Navigate =useNavigate();
    const [recipes, setRecipes] = useState([]);
    const [editingRecipe, setEditingRecipe] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [editedRecipe, setEditedRecipe] = useState({
        title: "",
        category: "",
        ingredients: "",
        instructions: "",
        photo: "",
    });

    useEffect(() => {
        axios
        .get("http://localhost:8080/api/user/recipes")
        .then((response) => {
            setRecipes(response.data);
        })
        .catch((error) => {
            console.error("Error al obtener las recetas:", error);
        });
    }, []);

    const handleEditRecipe = (recipeId) => {
        const recipeToEdit = recipes.find((recipe) => recipe._id === recipeId);
        setEditingRecipe(recipeToEdit);
        setEditMode(true);
        setEditedRecipe(recipeToEdit); // Poner la receta en edición en el estado de edición
    };

    const handleCancelEdit = () => {
        setEditingRecipe(null);
        setEditMode(false);
    };

    const handleSaveEdit = () => {
        // Enviar una solicitud PUT al servidor para actualizar la receta con 'editedRecipe'
        axios
        .put(`http://localhost:8080/api/user/recipes/${editingRecipe._id}`, editedRecipe)
        .then((response) => {
            console.log('Receta editada con éxito');

            // Actualizar el estado de las recetas con la receta actualizada
            setRecipes((prevRecipes) =>
            prevRecipes.map((recipe) =>
                recipe._id === response.data._id ? response.data : recipe
            )
        );
            // Ocultar el formulario de edición
            setEditingRecipe(null);
            setEditMode(false);
        })
        .catch((error) => {
            console.error("Error al actualizar la receta:", error);
        });
    };

    const handleDeleteRecipe = (recipeId) => {
        axios
            .delete(`http://localhost:8080/api/user/recipes/${recipeId}`)
            .then((response) => {
                console.log('Receta eliminada con éxito');
                setRecipes((prevRecipes) =>
                    prevRecipes.filter((recipe) => recipe._id !== recipeId)
            );
            Navigate('/');
        })
        .catch((error) => {
            console.error("Error al eliminar la receta:", error);
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEditedRecipe({
        ...editedRecipe,
        [name]: value,
        });
    };

    return (
        <div style={{ backgroundColor: "#000", minHeight: "100vh", padding: "20px" }}>
        <div className="container m-4">
            <h1 className="my-5 text-warning text-center text-decoration-underline">Users Recipes</h1>
            <div className="row">
            {recipes.map((recipe, index) => (
                <div className="col-md-4 mb-4" key={index}>
                <Card>
                    <Card.Img
                    variant="top"
                    src={recipe.photo}
                    style={{ height: "300px", objectFit: "cover" }}
                    className="circle border img-fluid"
                    />
                    <Card.Body>
                    <Card.Title className="text-center text-info">{recipe.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-center">{recipe.category}</Card.Subtitle>
                    <hr />
                    {editMode && editingRecipe && editingRecipe._id === recipe._id ? (
                        // Mostrar el formulario de edición si está en modo de edición
                        <div>
                        <Form>
                            <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={editedRecipe.title}
                                onChange={handleChange}
                            />
                            </Form.Group>
                            <Form.Group controlId="formCategory">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="text"
                                name="category"
                                value={editedRecipe.category}
                                onChange={handleChange}
                            />
                            </Form.Group>
                            <Form.Group controlId="formIngredients">
                            <Form.Label>Ingredients</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="ingredients"
                                value={editedRecipe.ingredients}
                                onChange={handleChange}
                            />
                            </Form.Group>
                            <Form.Group controlId="formInstructions">
                            <Form.Label>Instructions</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="instructions"
                                value={editedRecipe.instructions}
                                onChange={handleChange}
                            />
                            </Form.Group>
                        </Form>
                        <Button variant="success" onClick={handleSaveEdit}>
                            Save
                        </Button>
                        <Button variant="danger" onClick={handleCancelEdit} className="ml-2">
                            Cancel
                        </Button>
                        </div>
                    ) : (
                        <div>
                        <Accordion className="m-1">
                            <Accordion.Item eventKey="0">
                            <Accordion.Header>Ingredients / Instructions</Accordion.Header>
                            <Accordion.Body className="text-info">{recipe.ingredients}</Accordion.Body>
                            <hr />
                            <Accordion.Body>{recipe.instructions}</Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <hr />
                        <Button
                            variant="info"
                            onClick={() => handleEditRecipe(recipe._id)}
                            className="text-light m-3 text-center"
                        >
                            Edit
                        </Button>
                        <Button variant="primary" onClick={() => handleDeleteRecipe(recipe._id)}>
                            Delete
                        </Button>
                        </div>
                    )}
                    </Card.Body>
                </Card>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
}

export default RecipeBlog;
