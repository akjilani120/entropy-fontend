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
            <div className='d-flex justify-content-end'>
               
                  <div>
                  <Button className='mx-5 my-3 px-5 lead py-2' variant="primary" onClick={handleShow}>
                        Add Blog
                    </Button>

                    <Modal  show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title> Add Blog</Modal.Title>
                        </Modal.Header>                        
                        <Modal.Body className='blog-modal-body'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label text-white">Name</label>
                                    <input type="text" className='form-control' {...register("name")} required/>
                                    <p className='text-danger'> {errors.name?.type === 'required' && "First name is required"}</p>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label text-white">About Text</label>
                                    <input type="text" className='form-control' {...register("title")}  required />
                                    <p className='text-danger'> {errors.title?.type === 'required' && "First name is required"}</p>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" className="form-label text-white">Image</label>
                                    <input className='form-control' type='file' {...register("img")}   required/>
                                </div>                              
                            
                              <div className='text-center'>
                              <input className='btn btn-warning my-3 text-white px-4 py-2' type="submit"  value="Submit now"/>
                              </div>
                            </form>
                        </Modal.Body>
                    </Modal>
                  </div>
              
            </div>
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
            
        </div>
    );
};

export default Home;