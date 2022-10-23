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
import EstateHouse from './Component/EstateHouse';
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
            <EstateHouse/>
           
            
        </div>
    );
};

export default Home;