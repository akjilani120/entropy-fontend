import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Home.css'
import { Card, Col, Container, Row } from 'react-bootstrap';
import Banner from './Component/Banner';
import PostBlog from './PostBlog';
const Home = ({setReload,reload}) => {
    const [keyword, setKeyword] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [searchItem, setSearchItem] = useState([])
    const [blog, setBlog] = useState("")
    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        fetch('https://afternoon-bayou-41117.herokuapp.com/blog/all')
            .then(res => res.json())
            .then(result => {
                setData(result)
              setIsLoading(false)
            })
    }, [isLoading])

    useEffect(() => {
        if (keyword) {
            console.log(keyword)
            const result = data.filter(d => d.title.includes(keyword))
            setSearchItem(result)
        } else {

            setSearchItem([])
        }
    }, [keyword])

    


    const handleSelect = (e) => {
        setBlog(e.target.value)
    }
    const imgStorageKey = 'a20408031904de293b263e5a8f8e5393'
    const onSubmit = data => {
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
                    const blogType = blog
                    const name = data.name;
                    const title = data.title
                    const img = result.data.url
                    const totalData = {
                        blogType,
                        name,
                        title,
                        img
                    }
                    fetch('https://afternoon-bayou-41117.herokuapp.com/blog', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(totalData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data) {
                                toast("Success , Send your data")

                            } else {
                                toast("not success ,donot Send your data")
                            }
                            console.log("set data data", data)
                            reset()

                        })
                }
            }
            )


    };
   
    return (
        <div>
            <Banner />
            <div className='d-flex justify-content-end'>

                
            </div>
            <div className='container'>
                <div class="input-group input-group-head mb-3 text-center mx-4 mt-4">
                    <span class="input-group-text bg-primary text-white " id="basic-addon3">Search</span>
                    <input onChange={(e) => setKeyword(e.target.value)} type="text" className="form-control search-input" id="basic-url" aria-describedby="basic-addon3" placeholder='Search your favourite blog' />
                </div>
            </div>
            {searchItem.length > 0 ? <>
                <Container>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        {
                            searchItem.map(d => <Col>
                                <Card>
                                    <Card.Img className='img-card' variant="top" src={d.img} />
                                    <Card.Body>
                                        <Card.Title>{d.name}</Card.Title>
                                        <Card.Text className='text-justify'>
                                            {d.title.slice(0, 100)}
                                        </Card.Text>
                                        <button className='btn btn-primary my-2'>Show more</button>
                                    </Card.Body>

                                </Card>

                            </Col>)
                        }
                    </Row>
                </Container>
            </> :
                <>
                    <div>
                        <div className='d-flex justify-content-center'>
                            <ul className='d-flex sub-nav'>
                                <li> <CustomLink className="link-item" to="/">Tech</CustomLink> </li>
                                <li> <CustomLink className="link-item" to="/entertainment">Entertainment</CustomLink> </li>
                                <li> <CustomLink className="link-item" to="/community">Community</CustomLink> </li>
                            </ul>
                        </div>
                    </div>
                    <div className='pb-5'>
                        <Outlet />
                    </div></>}

            <div className='d-flex justify-content-center post-main'>
                <PostBlog 
                setReload={setReload}
                reload={reload}  />
            </div>
            
        </div>
    );
};

export default Home;