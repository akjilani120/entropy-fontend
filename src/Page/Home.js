import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Home.css'
const Home = () => {
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
            <Outlet/>
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
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
           </div>
        </div>
    );
};

export default Home;