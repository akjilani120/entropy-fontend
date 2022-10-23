import React from 'react';
import logo from '../video/Screenshot.png'
const Footer = () => {
    return (
        <div className='py-4 footer-main'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div>
                            <img src={logo} alt="logo image" />
                            <p><b>Home Address :</b> No : 58, A yourt Street , Baltimore Usa 4508</p>
                            <p><b>Phone :</b> +8801795849068</p>
                            <p><b>Email :</b> abdulkaderjilani120@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footer-items">
                            <h5>INTROMATION</h5>
                            <ul>
                                <li>Search Terms</li>
                                <li>Advanced Search</li>
                                <li>Helps Faqs</li>
                                <li>Store Location</li>
                                <li>Orders & Returns</li>
                                <li>Deliveries</li>
                                <li>Refund & Returns</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footer-items">
                            <h5>OUR COMPANY</h5>
                            <ul>
                                <li>Delivery</li>
                                <li>Legal Notice</li>
                                <li>Secure payment</li>
                                <li>Sitemap</li>
                                <li>Blog</li>
                                <li>About</li>
                                <li>Carrers</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footer-items">
                            <h5>OPENING TIME</h5>
                            <ul>
                                <li>Mon - Fri: 8AM - 10PM</li>
                                <li>Sat : 9AM - 8PM</li>
                                <li>Suns: 14hPM- 18hPM</li>
                                <li>WE Work ALl The Holidays</li>
                                <li><a href=""><h5>Download our app</h5></a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;