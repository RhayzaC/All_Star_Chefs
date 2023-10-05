import Navbar from '../Components/NavBar.component';
import React from 'react';
import Chefs from '../Components/TopChefs.component'; // Ajusta la ruta si es diferente

const TopChefsView = () => {
    return (
    <div>
        <Navbar />
        <Chefs />
        </div>
    );
};

export default TopChefsView;
