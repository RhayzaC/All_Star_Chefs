import axios from "axios";
import React, { useState } from "react"
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {GiChefToque} from "react-icons/gi";

const UserLogin = () => {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const loginUser = (e) => {
        e.preventDefault();
    

        axios.post(`http://localhost:8080/api/users/login/`, data, {userCredentials: true})
            .then((response) => {
                console.log("Response:", response.data); // Verifica la estructura de la respuesta
                setData({});
                setErrors({});
                console.log("Success")
                if (response.data.success) {
                    const userId = response.data.user._id
                    navigate(`/profile/${userId}`, { state: { userName: 'Nombre del Usuario', user: response.data.user } });
                } else{
                    console.error("Login failed:", response.data);
                }
            })
            .catch(() => {
                setErrors({ message: "Incorrect password. Please, try again." });
            })
    }

    const changeHandler = (e) => {
        let new_data = {
            ...data,
            [e.target.name]: e.target.value
        };
        setData(new_data)
    }

    return (
        <div style={{ backgroundColor: "#000", minHeight: "100vh" }}>
            <div className="d-flex justify-content-center align-items-center h-100">
                <form onSubmit={loginUser} className="text-center mt-5 p-4 border bg-dark" style={{ backgroundColor: "#000", color: "#fff" }}>
                <GiChefToque size={20} className="d-inline mb-2 text-light" />
                    <h1 className="text-warning text-center ">Login</h1>
                    <div className="form-text text-danger fw-bold fs-5">{errors["message"]}</div>
                    <hr />
                    <div className="mt-2 px-5">
                        <label className="form-label">Email</label>
                        <input required className="form-control" type="email" name="email" onChange={changeHandler} value={data["email"]} />
                        <div className="form-text text-danger fw-bold">{errors["email"]}</div>
                    </div>
                    <div className="mt-3 px-5">
                        <label className="form-label mt-3">Password</label>
                        <input required className="form-control" type="password" name="password" onChange={changeHandler} value={data["password"]} />
                    </div>
                    <div className="mt-5">
                        <Button type="submit" className="btn btn-secondary">Login</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserLogin;