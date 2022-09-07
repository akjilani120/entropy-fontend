import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
const CardRow = ({singleData}) => {
    const {name , img , title} = singleData

    return (
        <Col>
                    <Card>
                            <Card.Img className='img-card' variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text className='text-justify'>
                                    {title.slice(0, 100)}
                                </Card.Text>
                                <button className='btn btn-primary my-2'>Show more</button>
                            </Card.Body>
                            
                        </Card>
                    
                </Col>
    );
};

export default CardRow;