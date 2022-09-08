import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query'
import { Container } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import CardRow from './CardRow';
const Entertainment = ({reload,  setReload}) => {
  const url =`https://afternoon-bayou-41117.herokuapp.com/blog?blogType=Entertainment`
  const [data, setData]= useState([])
useEffect(()=>{
  fetch(url)
  .then(res=> res.json())
  .then(data=> setData(data))
},[reload])
    return (
        <div>
           <Container>
           <Row xs={1} md={2} lg={3} className="g-4">
               {
                data.map(singleData => <CardRow  reload={reload } setReload={setReload} singleData={singleData} key={singleData._id} /> )
               }
            </Row>
           </Container>
        </div>
    );
};

export default Entertainment;