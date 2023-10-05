// SubscribeForm
import React from 'react';
import axios from "axios";
import { useState } from "react"
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const SubscribeForm = (props) => {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    
    const checkPasswords = () => {
        const { password, password2 } = data;
        if (password === password2) {
            let tmp = { ...errors };
            delete tmp["password2"]
            setErrors(tmp);
            return true;
        } else {
            setErrors({
                ...errors,
                password2: "Las passwords no coinciden"
            });
            return false;
        }
    }

    const createUser = (e) => {
        e.preventDefault();
        if (!checkPasswords())
            return

        axios
            .post(`http://localhost:8080/api/users/register/`, data)
            .then((response) => {
                setData({});
                setErrors({});
                console.log("Sucess");
                navigate('/');
            })
            .catch((error) => {
                setErrors({message: error.response.data.error});
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
        
    <form onSubmit={createUser} className= "">
        <br/>
        <h2 className='text-warning mb-4 px-2'> Subscribe </h2>
        <div className="form-text text-danger fw-bold fs-5">{errors["message"]}</div>
        <div className="mt-3 px-2">
            <label className="form-label text-light">First Name</label>
            <input required className="form-control" type="text" name="first_name" value={data["first_name"]} onChange={changeHandler} />
            <div className="form-text text-danger fw-bold">{errors["first_name"]}</div>
        </div>
        <div className="mt-3 px-2">
            <label className="form-label text-light">Last Name</label>
            <input required className="form-control" type="text" name="last_name" onChange={changeHandler} value={data["last_name"]} />
            <div className="form-text text-danger fw-bold">{errors["last_name"]}</div>
        </div>
        <div className="mt-3 px-2">
            <label className="form-label text-light">Email</label>
            <input required className="form-control" type="email" name="email" onChange={changeHandler} value={data["email"]} />
            <div className="form-text text-danger fw-bold">{errors["email"]}</div>
        </div>
        <div className="mt-3 px-2">
            <label className="form-label text-light">Password</label>
            <input required className="form-control" type="password" name="password" onChange={changeHandler} value={data["password"]} />
            <div className="form-text text-danger fw-bold">{errors["password"]}</div>
        </div>
        <div className="mt-3 px-2">
            <label className="form-label text-light">Repeat Password</label>
            <input required className="form-control" type="password" name="password2" onChange={changeHandler} value={data["password2"]} />
            <div className="form-text text-danger fw-bold">{errors["password2"]}</div>
        </div>
        <div className="mt-4 px-2">
            <Button type="submit" className="submit-button btn-outline-info">Register</Button>
        </div>
    </form>
    )
};

export default SubscribeForm;
