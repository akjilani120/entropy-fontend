import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Tech = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/blog?blogType=Tech")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
             <Container>
           <Row xs={1} md={2} lg={4} className="g-4">
               {
                data.map(d => <Col>
                    <Card>
                            <Card.Img className='img-card' variant="top" src={d.img} />
                            <Card.Body>
                                <Card.Title>{d.name}</Card.Title>
                                <Card.Text className='text-justify'>
                                    {d.title.slice(0, 100)}
                                </Card.Text>
                                <button className='btn btn-primary my-2'>Show more</button>
                            </Card.Body>
                            
                        </Card>
                    
                </Col>)
               }
            </Row>
           </Container>
        </div>
    );
};

export default Tech;