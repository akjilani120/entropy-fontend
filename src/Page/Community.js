import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import CardRow from './CardRow';
import { useQuery } from 'react-query'
const Community = () => {
    const url =`https://afternoon-bayou-41117.herokuapp.com/blog?blogType=Community`
    const { isLoading, error, data, refetch } = useQuery('repoData', () =>
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
                data.map(singleData => <CardRow refetch={refetch} singleData={singleData} key={singleData._id}/>)
               }
            </Row>
           </Container>
        </div>
    );
};

export default Community;