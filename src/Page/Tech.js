import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useQuery } from 'react-query'
import Row from 'react-bootstrap/Row';
import CardRow from './CardRow';

const Tech = ({reload, setReload}) => {
    const url =`https://afternoon-bayou-41117.herokuapp.com/blog?blogType=Tech`
    const [data, setData]= useState([])
  useEffect(()=>{
    fetch(url)
    .then(res=> res.json())
    .then(data=> setData(data))
  },[reload])
console.log("tech data" , data)

    return (
        <div>
             <Container>
           <Row xs={1} md={2} lg={3} className="g-4">
               {
                data.map(singleData => <CardRow setReload={setReload} reload={reload} singleData={singleData} key={singleData._id} /> )
               }
            </Row>
           </Container>
        </div>
    );
};

export default Tech;