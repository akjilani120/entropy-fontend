import React from 'react';
import { useState } from 'react';
import CardEstate from './CardEstate';
import Row from 'react-bootstrap/Row';
const EstateHouse = () => {
    const [datas , setDatas] = useState([])
    fetch("https://raw.githubusercontent.com/akjilani120/entropy-fontend/main/public/ReatEstate.json")
    .then(res => res.json())
    .then(data => setDatas(data))
    return (
        <div>
           <div className="container">
           <h1 className='text-center text-primary my-5 display-2'>Real Estate</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                datas.map(data  => <CardEstate data={data} key={data.id}/> )
            }
           </Row>
           
           </div>
        </div>
    );
};

export default EstateHouse;