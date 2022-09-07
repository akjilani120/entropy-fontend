import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useQuery } from 'react-query'
import Row from 'react-bootstrap/Row';
import CardRow from './CardRow';

const Tech = () => {
    const url =`http://localhost:5000/blog?blogType=Tech`
    const { isLoading, error, data , refetch  } = useQuery('repoData', () =>
    fetch(url).then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

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

export default Tech;