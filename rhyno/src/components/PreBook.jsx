// src/components/PreBook.js
import React, { useState } from 'react';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import bike1 from '../images/rhyno_1.png'; // Adjust the path as necessary
import bike2 from '../images/rhyno_2.png';
import bike3 from '../images/rhyno_3.png';

const stripePromise = loadStripe('your_stripe_publishable_key'); // Replace with your Stripe publishable key

const bikes = [
    { id: 1, image: bike1, name: 'SE03 Lite', price: '89,999/-' },
    { id: 2, image: bike2, name: 'SE03', price: '1,19,999/-' },
    { id: 3, image: bike3, name: 'SE03 Max', price: '1,29,999/-' },
];

const CheckoutForm = ({ amount }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        try {
            const { data: { clientSecret } } = await axios.post('http://localhost:5000/create-payment-intent', { amount });

            const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: 'Customer Name', // Adjust as needed
                    },
                },
            });

            if (error) {
                setError(error.message);
            } else if (paymentIntent.status === 'succeeded') {
                setSuccess('Payment successful!');
            }
        } catch (error) {
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <Button type="submit" variant="primary" disabled={!stripe}>
                Pay ${amount}
            </Button>
            {error && <p className="text-danger">{error}</p>}
            {success && <p className="text-success">{success}</p>}
        </form>
    );
};

const PreBook = () => {
    const [selectedBike, setSelectedBike] = useState(null);

    return (
        <Container>
            <header className="text-center my-5">
                <h1>Pre-Book Your EV Bike</h1>
                <p>Select from our top models and get ready to ride with Rhyno.</p>
            </header>
            <Row>
                {bikes.map((bike) => (
                    <Col key={bike.id} md={4} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={bike.image} />
                            <Card.Body>
                                <Card.Title>{bike.name}</Card.Title>
                                <Card.Text>
                                    Price: {bike.price}
                                </Card.Text>
                                <Button
                                    variant="primary"
                                    onClick={() => setSelectedBike(bike)}
                                >
                                    Pre-Book Now
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {selectedBike && (
                <div className="mt-5">
                    <h2>Pre-Book {selectedBike.name}</h2>
                    <CheckoutForm amount={parseFloat(selectedBike.price.slice(1))} />
                </div>
            )}
        </Container>
    );
};

const App = () => (
    <Elements stripe={stripePromise}>
        <PreBook />
    </Elements>
);

export default App;
