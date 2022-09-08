import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const CardRow = ({singleData , refetch, reload, setReload }) => {
    const {name , img , title , blogType , _id} = singleData   
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   const hanleDelete =(id) =>{
    const url =`https://afternoon-bayou-41117.herokuapp.com/blog/delete/${id}`
     fetch(url , {
        method:"DELETE"
     })
     .then(res => res.json())
     .then(data =>{ 
         setReload(!reload)
        })
     
   }

const imgStorageKey = 'a20408031904de293b263e5a8f8e5393'
const onSubmit = (data ) => {
    console.log("update id" , _id)
    const formData = new FormData();
    const image = data.img[0]
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
        method: "POST",
        body: formData
    })
        .then(res => res.json())

        .then(result => {
            if (result.success) {             
                const name = data.name;
                const title = data.title
                const img = result.data.url
                const totalData = {
                   
                    name,
                    title,
                    img
                }
                fetch(`https://afternoon-bayou-41117.herokuapp.com/blog/update/${_id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(totalData)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data) {
                            toast("Success , Your data is update")
                            setReload(!reload)
                            
                            
                        } else {
                            toast("not success ,donot update ")
                        }
                        
                        reset()

                    })
            }
        }
        )


};

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
                                        <button className='btn btn-primary me-3'  variant="primary" onClick={handleShow}> <span className=' px-3'>Update</span> </button>
                                        <button onClick={()=>hanleDelete(_id)}  className='btn btn-danger  px-3'>Delete</button>
                                    </div>
                                </div>
                            </Card.Body>
                            <div>
                   

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title> Update Blog</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className='blog-modal-body'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label text-white">Blog</label>
                                <input type="text" value={blogType} className='form-control' readOnly />

                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label text-white">Name</label>
                                    <input type="text" className='form-control' {...register("name")} required />
                                    <p className='text-danger'> {errors.name?.type === 'required' && "First name is required"}</p>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label text-white">About Text</label>
                                    <input type="text" className='form-control' {...register("title")} required />
                                    <p className='text-danger'> {errors.title?.type === 'required' && "First name is required"}</p>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" className="form-label text-white">Image</label>
                                    <input className='form-control' type='file' {...register("img")} required />
                                </div>

                                <div className='text-center'>
                                    <input className='btn btn-warning my-3 text-white px-4 py-2' type="submit" value="Submit now" />
                                </div>
                            </form>
                        </Modal.Body>
                    </Modal>
                </div>
                            
                        </Card>
                    
                </Col>
    );
};

export default CardRow;