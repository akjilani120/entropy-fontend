import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import CardRow from './CardRow';

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
                data.map(singleData => <CardRow singleData={singleData} key={singleData._id} /> )
               }
            </Row>
           </Container>
        </div>
    );
};

export default Tech;