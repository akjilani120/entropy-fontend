import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleEstate = () => {
    const [datas , setDatas] = useState([])
    const {id} = useParams()    
    
    fetch("ReatEstate.json")
    .then(res => res.json())
    .then(data => console.log(data))
 
    return (
        <div className='pt-5'>
           <h1>My id{id}</h1>
            <h1 className='mt-5'>I am single Estate</h1>
        </div>
    );
};

export default SingleEstate;