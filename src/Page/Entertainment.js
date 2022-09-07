import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query'
import { Container } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import CardRow from './CardRow';
const Entertainment = () => {
    const url =`http://localhost:5000/blog?blogType=Entertainment`
    const { isLoading, error, data , refetch } = useQuery('repoData', () =>
    fetch(url).then(res =>
      res.json()
    )
  )

  if (isLoading) return <h4>Loading .....</h4>

  if (error) return 'An error has occurred: ' + error.message
    return (
        <div>
           <Container>
           <Row xs={1} md={2} lg={3} className="g-4">
               {
                data.map(singleData => <CardRow refetch={refetch} singleData={singleData} key={singleData._id} /> )
               }
            </Row>
           </Container>
        </div>
    );
};

export default Entertainment;