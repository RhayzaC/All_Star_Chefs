import React from "react";
import Navbar from '../Components/NavBar.component';
import Footer from '../Components/Footer.component';
import Carousel from '../View/ImagesView';


import Plato1 from '../images/Recipes/plato1.jpg';
import Plato2 from "../images/Recipes/plato2.jpg";
import Plato3 from "../images/Recipes/plato3.jpg";
import Plato4 from "../images/Recipes/plato4.jpg";
import Plato5 from "../images/Recipes/plato5.jpg";
import Plato6 from "../images/Recipes/plato6.jpg";


import './Home.css'; // Importa tus estilos CSS desde un archivo externo
import "bootswatch/dist/lux/bootstrap.min.css";

const HomePage = () => {
    const images = [Plato1, Plato2, Plato3, Plato4, Plato5, Plato6];

    return (
        <div className="home-container bg-black d-flex flex-column" style={{ minHeight: "100vh" }}>
            <Navbar />
            <div className="container my-5">
                <h2 className="text-light text-center mb-5 text-decoration-underline">¡Explore the World of Gastronomy!</h2>
                <br/>
                <div className="d-in-line flex">
                <Carousel images={images} />
                </div>
                <br/>
                <div className="text-center mb-4 mt-5">
                </div>
                <div className="text-center pb-5">
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default HomePage;
