import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './View/HomePage';
import LoginView from './View/LoginView';
import SubscribeView from './View/SubscribeView';
import ProfileView from './View/ProfilesView';
import TopChefsView from './View/TopChefsview';
import AboutView from './View/AboutView';
import Recipes from './View/Recipes.view';
import RecipesUploadView from './View/UploadRecipesView';
import RecipesUsersView from './View/RecipesUsers';

import "bootswatch/dist/lux/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login/" element={<LoginView />} />
      <Route path="/subscribe/" element={<SubscribeView />} />
      <Route path="/profile/:user_id" element={<ProfileView />} />
      <Route path="/chefs/" element={<TopChefsView />} />
      <Route path="/about/" element={<AboutView />} />
      <Route path="/recipes/" element={<Recipes/>} />
      <Route path="/recipes/upload/:userId" element={<RecipesUploadView/>} />
      <Route path="/user/recipes/" element={<RecipesUsersView/>} />

    </Routes>
  </Router>
);
};
export default App;