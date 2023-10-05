import React from 'react';
import Navbar from '../Components/NavBar.component';
import UserLogin from '../Components/Login/Login.component';
import "bootswatch/dist/lux/bootstrap.min.css";

const LoginView = () => {
            return (
            <div>
                <Navbar />
                <UserLogin />
                </div>
            );
        };
        
export default LoginView;