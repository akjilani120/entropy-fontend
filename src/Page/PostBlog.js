import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
const PostBlog = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [blog, setBlog] = useState("")
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
                    fetch('http://localhost:5000/blog', {
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
        <div className='post-body'>
                    <h1>Add Blog</h1>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" className="form-label text-white">Select Blog</label>
                                <select onChange={handleSelect} className='form-select' required>
                                    <option value="Tech">Tech</option>
                                    <option value="Entertainment">Entertainment</option>
                                    <option value="Community">Community</option>
                                </select>

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
                    </div>
                    <ToastContainer />
                </div>
    );
};

export default PostBlog;