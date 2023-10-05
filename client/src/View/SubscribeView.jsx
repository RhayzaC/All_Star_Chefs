import React from 'react';
import { Row, Col } from 'react-bootstrap'; 
import Navbar from '../Components/NavBar.component';
import SubscribeForm from '../Components/Subscribe.component'; // Importa el componente de suscripción
import "bootswatch/dist/lux/bootstrap.min.css";

const SubscribeView = () => {
    return (
        <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
            <Navbar />
            <div className="container" style={{ padding: "20px", borderRadius: "10px" }}>
                <Row>
                    <Col xs={12} md={6}>
                        <SubscribeForm /> 
                    </Col>
                    <Col md={6}>
                        {/* Puedes renderizar otro componente en la otra columna si es necesario */}
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default SubscribeView;
