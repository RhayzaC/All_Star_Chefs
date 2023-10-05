import React from 'react';
import UserRecipes from '../Template/UserRecipes.template';
import NavBar from '../Components/NavBar.component';

const RecipesUsersView = () => {
    return (
    <div>
        <NavBar/>
        <UserRecipes />
        </div>
    );
};

export default RecipesUsersView;
