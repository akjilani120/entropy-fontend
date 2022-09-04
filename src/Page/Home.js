import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';
import './Home.css'
const Home = () => {
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
        </div>
    );
};

export default Home;