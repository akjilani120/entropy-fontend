import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
const CardEstate = ({data}) => {
    const {img ,imgType, NamePropaty, description, Price , betroom} = data
    return (
        <Col>
          <Card className='Card-items'>
            <Card.Img className='cardImg' variant="top" src={img} />
            <div className='card-img-overflow-price'>
            <div className='d-flex justify-content-between '>
                <div className="card-price">
                   <p> <b>Price :</b> ${Price}</p>
                </div>
                <div className="card-price ms-5">
                <p><b>Bed Room :</b> { betroom}</p>
                </div>
            </div>
            </div>
            <Card.Body>
              <p className='etate-pera'> <b>Estate Type :</b> <span>{imgType}</span></p>
              <p className='etate-pera'> <b>Estate Name :</b> <span className='estate-name'>{NamePropaty}</span></p>
              <Card.Text className="estate-descrip"> <b>Description :</b>  
               {description.slice(0, 70)}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default CardEstate;