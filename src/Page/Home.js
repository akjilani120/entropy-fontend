import React from 'react';
import {  Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
import './Home.css'
const Home = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgStorageKey = 'a20408031904de293b263e5a8f8e5393'
    const onSubmit = data => {
        const formData = new FormData();
        const image = data.img[0]
        formData.append('image', image);           
            const url =`https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url ,{
            method:"POST",
            body:formData
        })
        .then(res => res.json())
        .then(result => console.log(result))
        console.log(data)
    };
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div>
                <div className='d-flex justify-content-center'>
                    <ul className='d-flex sub-nav'>
                        <li> <CustomLink className="link-item" to="/">Tech</CustomLink> </li>
                        <li> <CustomLink className="link-item" to="/entertainment">Entertainment</CustomLink> </li>
                        <li> <CustomLink className="link-item" to="/community">Community</CustomLink> </li>
                    </ul>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <>
                    <Button variant="primary" onClick={handleShow}>
                        Launch demo modal
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <Modal.Body>
                            
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                                    <input type="text" className='form-control' {...register("name")} />
                                    <p className='text-danger'>{errors.name?.message}</p>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Title</label>
                                    <input type="text" className='form-control' {...register("title")} />
                                    <p className='text-danger'>{errors.title?.message}</p>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Image</label>
                                    <input className='form-control' type='file' {...register("img")} />
                                </div>


                           
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" >
                            <input type="submit"  value="submit now"/>
                            </Button>
                        </Modal.Footer>
                        </form>
                    </Modal>
                </>
            </div>
        </div>
    );
};

export default Home;