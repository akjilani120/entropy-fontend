import React from 'react';
import { useState } from 'react';
import CardEstate from './CardEstate';
import Row from 'react-bootstrap/Row';
const EstateHouse = () => {
    const [datas , setDatas] = useState([])
    fetch("ReatEstate.json")
    .then(res => res.json())
    .then(data => setDatas(data))
    return (
        <div>
           <div className="container">
           <h1>Real Estate</h1>
            <Row xs={1} md={3} className="g-4">
            {
                datas.map(data  => <CardEstate data={data} key={data.id}/> )
            }
           </Row>
           
           </div>
        </div>
    );
};

export default EstateHouse;