import React from 'react';
import Card from 'react-bootstrap/Card';

const ShowCard = (coin) => {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>{coin.name}</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
              </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShowCard;