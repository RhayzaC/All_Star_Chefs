import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';


const Chefs = () => {
    const chefsData = [

        {   name: 'Alain Duccase, 19 Michelin Stars', 
            photoUrl: 'https://gourmet.expob2b.es/uploads/fotos_noticias/2016/05/13039-106572.jpg',
            description: 'Alain Ducasse, born on September 13, 1956 in Orthez, is a famous Monegasque chef and businessman. Diploma from the Bordeaux hotel school in 1978. It has a style characterized by cooking food at very low temperatures and therefore uses long cooking times, it also uses vacuum bags (sous vide) to cook some of the food and uses advanced cooking methods..' 
        },
        {   name: 'Pierre Gagnaire, 14 Michelin Stars', 
            photoUrl: 'https://www.7canibales.com/wp-content/uploads/sites/2/2019/07/Gagnaire-1.jpg', 
            description: 'Pierre Gagnaire was born in April 1950, in the town of Apinac, France. Effusive and daring creator of unthinkable combinations that, thanks to his quick inspiration, result in surprising, attractive, unique dishes. Enemy of closed recipes, he often happens to modify the components of one of his preparations at the last moment before serving it.'
        },
        {   name: 'Martin Berastegui, 12 Michelin stars',
            photoUrl:'https://imagenes.20minutos.es/files/og_thumbnail_1900/uploads/imagenes/2022/12/12/martin-berasategui.jpeg', 
            description: 'He was born in San Sebastián, Spain on April 27, 1960. In 1981, he became manager of Bodegón Alejandro, which received its first Michelin star in 1986.3 In 1993, he opened his first restaurant, "Martín Berasategui", in Lasarte-Oria and in 3 years, the place received two Michelin stars.' 
        },
        {   name: 'Yannick Alleno, 10 Michelin stars',
            photoUrl: 'https://www.annonceronline.com/wp-content/uploads/2022/10/YannickAlleno_@Nicolas-Lobbestael-1-2-scaled.jpg', 
            description: 'He was born on December 16, 1968, in Puteaux, France. He spent his childhood in the kitchens of a bistro run by his family. He enjoys nothing more than being creative, innovative, trying out new ideas and playing with ingredients to get the best out of them.'
        },
        {   name: 'Anne-Sophie Pic, 8 Michelin stars', 
            photoUrl: 'https://www.7canibales.com/wp-content/uploads/sites/2/2019/05/Pic-1.jpg', 
            description: 'She was born on July 12, 1969, in Valence, France. A self-taught chef, he earned a business administration degree in the 1990s, and after brief stints at the house of Yves Saint Laurent and Moët & Chandon, he returned to his native Valence where, after his fathers death, she resumed the family business, the Maison Pic with which she has won several Michelin stars.'
        },
    ]; 
    
    return (
        <div style={{ backgroundColor: "#000", minHeight: "100vh" }}>
            <Container>
                <br />
                <h2 className="text-center my-4 text-light text">These are the "Top 5" Chefs of 2023</h2>
                <br />
                <Row xs={1} md={3} className="g-4">
                    {chefsData.slice(0, 3).map((chef, index) => (
                        <Col key={index}>
                            <Card className="h-100">
                                <Card.Img 
                                    variant="top" 
                                    src={chef.photoUrl} 
                                    alt={chef.name} 
                                    className="circle border img-fluid"
                                    style={{ maxHeight: "300px" }}
                                />
                                <Card.Body>
                                    <Card.Title className="font-weight-bold text-center mb-4" style={{ color: "#000" }}>{chef.name}</Card.Title>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Info</Accordion.Header>
                                            <Accordion.Body className="text-info text-justify ">{chef.description}</Accordion.Body>
                                            <Accordion.Body></Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row className="my-4 g-4">
                        <Col xs={12} md={4} className='float-md-left mb-4 md-0 '>
                            <Card className="h-100">
                                <Card.Img 
                                    variant="top" 
                                    src={chefsData[3].photoUrl} 
                                    alt={chefsData[3].name} 
                                    className="circle border img-fluid" 
                                    style={{ maxHeight: "300px" }}
                                />
                                <Card.Body>
                                    <Card.Title className="font-weight-bold text-center mb-3" style={{ color: "#000" }}>{chefsData[3].name}</Card.Title>
                                    <br />
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Info</Accordion.Header>
                                            <Accordion.Body className="text-info ">{chefsData[3].description}</Accordion.Body>
                                            <Accordion.Body></Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} className = "text-center mt-3">
                            {/* Enlace al sitio de la Guía Michelin */}
                        <a href="https://www.guide.michelin.com/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2020/01/06/2e7684083a50438e9a40dc0a30516191_star.png"
                                alt="Michelin Guide"
                                className="img-fluid"
                                style={{ maxHeight: "500px", margin: "auto", marginTop: "200px" }}
                            />
                        </a>
                        </Col>
                        <Col xs={12} md={4} className='float-md-right mb-4 md-0'>
                            <Card className="h-100">
                                <Card.Img 
                                    variant="top" 
                                    src={chefsData[4].photoUrl} 
                                    alt={chefsData[4].name} 
                                    className="circle border img-fluid" 
                                    style={{ maxHeight: "300px" }}
                                />
                                <Card.Body>
                                    <Card.Title className="font-weight-bold mb-4 text-center" style={{ color: "#000" }}>{chefsData[4].name}</Card.Title>
                                    <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Info</Accordion.Header>
                                            <Accordion.Body className="text-info ">{chefsData[4].description}</Accordion.Body>
                                            <Accordion.Body></Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                <div className="mb-4"></div> 
            </Container>
        </div>
    );
};

export default Chefs;