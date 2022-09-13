import React from 'react';
import Card from 'react-bootstrap/Card';
import '../Components/Showcard.css'
const ShowCard = (props) => {
    const { id, symbol, name, image } = props.coin;
    return (
        <div className='col-lg-4 gx-2 gy-2'>
            <Card className='shadow'>
                <Card.Img className='coins-image mx-auto mt-4' src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p><span className='fw-bold'>Symbol:</span>${symbol}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ShowCard;