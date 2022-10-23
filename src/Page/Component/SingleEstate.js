import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const SingleEstate = () => {
    const [datas , setDatas] = useState([])
    const [single , setSingle] = useState({})
    const {id} = useParams()        
    useEffect(() =>{
        fetch("https://raw.githubusercontent.com/akjilani120/entropy-fontend/main/public/ReatEstate.json")
        .then(res => res.json())
        .then(data => setDatas(data))
        
    },[])
    useEffect(() =>{
        
       if(datas.length > 0){
        const mainData = datas.find(data => data.id == id) 
        setSingle(mainData)
       }
    } ,[datas, id])
    return (
        <div className='pt-5'>
            <div className='single-Banner d-flex justify-content-center' style={{ 
      backgroundImage: `url("https://img.freepik.com/premium-photo/3d-rendering-large-modern-contemporary-house-wood-concrete-early-evening_190619-1492.jpg?w=826")` 
    }}>
        <div className='pt-md-5 pt-3'>
            <h1 className='text-center text-white'>Real Estate Details Show</h1>
             <h2 className='text-center text-white mt-3'> <Link className='navigate-home' to="/">Home</Link> / {single.NamePropaty} </h2>
        </div>

    </div>
           <div className='my-5 estate-single-main'>
           <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="img-part">
                      <img className='single-main-img' src={single.img} alt="images" />
                     <img className='thumber-img' src={single.img} alt="images" />
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="about-details">
                    <p className='etate-pera mt-3'> <b>Estate Type :</b> <span>{single.imgType}</span></p>
              <p className='etate-pera mt-3'> <b>Estate Name :</b> <span className='estate-name'>{single.NamePropaty}</span></p>
              <p className="estate-descrip mt-3"> <b>Description :</b>  
               {single.description}
              </p>
              <div className=''>
                <div className="card-price">
                   <p> <b>Price :</b> ${single.Price}</p>
                </div>
                <div className="card-price ">
                <p><b>Bed Room :</b> { single.betroom}</p>
                </div>
            </div>
                    </div>
                </div>
            </div>
           </div>
        
           </div>
        </div>
    );
};

export default SingleEstate;