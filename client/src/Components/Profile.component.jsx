import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';
import Navbar from '../Components/NavBar.component';
import axios from 'axios';
import { MDBContainer } from "mdb-react-ui-kit";

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const user = location.state?.user;

        //Realizar una solicitud para obtener el perfil del usuario actual
        if (user && user._id) {
            axios.get(`http://localhost:8080/api/profile/${user._id}`)
                .then((response) => {
                    console.log("response is ", response);
                    setProfile(response.data.user._id);
                })
                .catch((error) => {
                    console.error('Error fetching profile:', error);
                });
        }
    }, [location]);

    const user = location.state?.user;

    const handleLogout = () => {
        axios.get(`http://localhost:8080/api/profile/${user?._id}/logout`)
            .then((response) => {
                // Manejar la respuesta si es necesario
                console.log("Logout successful");
                // Redireccionar al usuario a la página de inicio de sesión u otra página relevante
                    navigate('/login'); //
            })
            .catch((error) => {
                console.error('Error during logout:', error);
            });
};
    return (
        <div style={{ backgroundColor: "#000", minHeight: "100vh" }}>
            <Navbar />
            <div className="container mt-5">
                <Row className="justify-content-center">
                    <Col md={6} className="text-center">
                        <div className="profile-icon">
                            {profile && profile.profileImage ? (
                                <Image src={profile.profileImage} alt="Profile" roundedCircle />
                            ) : (
                                <i className="bi bi-person-circle" style={{ fontSize: '100px' }}></i>
                            )}
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4 justify-content-center">
                    <Col md={6} className="text-center">
                        <h3 className='text-warning text-decoration-underline'>Welcome </h3>
                        <h3 className='text-light mt-3'>{user?.name} </h3>
                        <MDBContainer className="my-4 d-flex flex-column justify-content-center align-items-center">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                                className="rounded-circle mb-3"
                                style={{ width: "150px" }}
                                alt="Avatar"
                            />
                            <p className="text-info text-bold">
                                Chef
                            </p>
                
                        </MDBContainer>
                        <Link to={`/recipes/upload/${user?._id}`} className=" m-3 btn btn-secondary">
                            Upload Recipe
                        </Link>
                        <Link className="btn btn-warning m-3" onClick={handleLogout}>
                            Logout
                        </Link>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Profile;
