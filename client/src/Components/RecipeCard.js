import React from "react";
import "../View/Home.css"; // Importa el archivo de estilos CSS para RecipeCard

const RecipeCard = ({ image, title }) => {
    return (
        <div className="recipe-card">
            <img
                src={image}
                alt={title}
                style={{ width: "100%", height: "100%" }}
            />
        </div>
    );
};

export default RecipeCard;
