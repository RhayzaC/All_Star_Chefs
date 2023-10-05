import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import RecipeCard from '../Components/RecipeCard';

const Carousel = ({ images }) => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Puedes ajustar la cantidad de imágenes que se muestran a la vez
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
        {images.map((image, index) => (
            <div key={index}>
            <RecipeCard image={image} />
            </div>
        ))}
        </Slider>
    );
    };

export default Carousel;
