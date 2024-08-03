import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container, Row, Col, Modal, Table } from 'react-bootstrap';
import bike1 from '../images/rhyno_1.png';
import bike2 from '../images/rhyno_2.png';
import bike3 from '../images/rhyno_3.png';

const bikes = [
    { id: 1, image: bike1, name: 'SE03 Lite', price: '89,999/-', battery: '1.8Kwh', speed: '50km/h', range: '100km' ,Charging:'3 Hours' },
    { id: 2, image: bike2, name: 'SE03', price: '1,19,999/-', battery: '2.7Kwh', speed: '55km/h', range: '150km' ,Charging:'3 Hours'},
    { id: 3, image: bike3, name: 'SE03 Max', price: '1,29,999/-', battery: '2.7Kwh', speed: '60km/h', range: '150km' ,Charging:'3 Hours' },
];

const phrases = ['Style', 'Elegance', 'Minimalism', 'Comfort'];

const BikeShowcase = () => {
    const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
    const [showModal, setShowModal] = useState(false);
    const [selectedBike, setSelectedBike] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPhrase((prevPhrase) => {
                const currentIndex = phrases.indexOf(prevPhrase);
                const nextIndex = (currentIndex + 1) % phrases.length;
                return phrases[nextIndex];
            });
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    const handleShowModal = (bike) => {
        setSelectedBike(bike);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedBike(null);
    };

    return (
        <div style={{ backgroundColor: 'grey' }}>
            <header className="App-header">
                <h1>RHYNO EV STORE</h1>
                <p className='line' style={{ color: '#FFF225' }}>Let's Elevate Your Ride Experience With Rhyno – Where Superiority Meets {currentPhrase}.</p>
            </header>
            <Container>
                <Row className="mt-5">
                    {bikes.map((bike) => (
                        <Col key={bike.id} md={4} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={bike.image} />
                                <Card.Body>
                                    <Card.Title>{bike.name}</Card.Title>
                                    <Button variant="primary" onClick={() => handleShowModal(bike)}>Detailed view</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedBike ? selectedBike.name : ''} Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedBike && (
                        <Table striped bordered hover>
                            <tbody>
                                <tr>
                                    <td>Price</td>
                                    <td>{selectedBike.price}</td>
                                </tr>
                                <tr>
                                    <td>Battery</td>
                                    <td>{selectedBike.battery}</td>
                                </tr>
                                <tr>
                                    <td>Speed</td>
                                    <td>{selectedBike.speed}</td>
                                </tr>
                                <tr>
                                    <td>Range</td>
                                    <td>{selectedBike.range}</td>
                                </tr>
                                <tr>
                                    <td>Charging Time</td>
                                    <td>{selectedBike.Charging}</td>
                                </tr>
                            </tbody>
                        </Table>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default BikeShowcase;
