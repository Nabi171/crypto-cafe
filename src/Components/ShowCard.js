import React from 'react';
import Card from 'react-bootstrap/Card';
import '../Components/Showcard.css'
import { Link } from 'react-router-dom';
import { fadeIn } from 'react-animations';
import { bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const ShowCard = ({ coin }) => {
    const styles = {
        bounce: {
            animation: 'x 1s',
            animationName: Radium.keyframes(bounce, 'bounce')
        }
    }
    const { id, symbol, name, image } = coin;
    return (
        <div style={styles.bounce} className='col-lg-4 gx-2 gy-2 test'>
            <Link to={`/coindetails/${id}`}>
                <Card className='shadow'>
                    <Card.Img className='coins-image mx-auto mt-4' src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p><span className='fw-bold'>Symbol:</span>${symbol}</p>
                            
                            {/* <button className='btn btn-danger' > <link rel="stylesheet" href=""/> Details</button> */}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
};

export default ShowCard;