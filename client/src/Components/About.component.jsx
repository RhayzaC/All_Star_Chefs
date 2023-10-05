import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from './Footer.component';

const About = () => {
    const iframeRef = useRef(null);
    
    useEffect(() => {
        const restartVideo = () => {
            const message = {
                event: 'command',
                func: 'playVideo',
                args: '',
            };
            iframeRef.current?.contentWindow?.postMessage(JSON.stringify(message), '*');
        };
        
        iframeRef.current?.addEventListener('ended', restartVideo);
    
        return () => {
            iframeRef.current?.removeEventListener('ended', restartVideo);
        };
    }, []);
    
    return (
        <div>
            <div style={{ backgroundColor: "#000", minHeight: "100vh" }}>
                <Container>
                    <Row>
                        <Col xs={12} md={7} className=' mt-4'>
                            <h2 className="mt-5 text-warning">About Our Blog</h2>
                            <br />
                            <p className='text-light justify-content fs-4'>
                                Welcome to our blog! We are passionate about sharing delicious recipes, cooking tips,
                                and culinary adventures. Whether you're a seasoned chef or just starting out in the
                                kitchen, you'll find something to inspire and delight you here...
                            </p>
                        </Col>
                        <Col xs={12} md={5}>
                            <div className="embed-responsive embed-responsive-16by9 mt-5">
                                <iframe
                                    ref={iframeRef}
                                    width="100%"
                                    height="500"
                                    src="https://www.youtube.com/embed/oBWv80w9egc?autoplay=1&loop=2&mute=1"
                                    title="About Our Blog Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </div>
    );
};

export default About;
