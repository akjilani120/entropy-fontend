import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
const CardRow = ({singleData , refetch }) => {
    const {name , img , title , blogType , _id} = singleData
   const hanleDelete =(id) =>{
    const url =`http://localhost:5000/blog/delete/${id}`
     fetch(url , {
        method:"DELETE"
     })
     .then(res => res.json())
     .then(data =>{         
         refetch()
        })
     
   }
   const handleUpdate =(id) =>{
     console.log("Update" , id)
   }
    return (
        <Col>
                    <Card>
                            <Card.Img className='img-card' variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>Blog Name :  {blogType}</Card.Title>
                                <Card.Title>Name :  {name}</Card.Title>
                                <Card.Text className='text-justify'>
                                   Blog About :  {title.slice(0, 100)}
                                </Card.Text>
                                <div className='d-flex justify-content-end mt-4 mb-3'>
                                    <div>
                                        <button onClick={()=>handleUpdate(_id)} className='btn btn-primary text-white me-3 px-3'>Update</button>
                                        <button onClick={()=>hanleDelete(_id)}  className='btn btn-danger  px-3'>Delete</button>
                                    </div>
                                </div>
                            </Card.Body>
                            
                        </Card>
                    
                </Col>
    );
};

export default CardRow;