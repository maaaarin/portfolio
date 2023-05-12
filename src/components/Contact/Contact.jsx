import React, { useEffect } from 'react'

import flowers from '../../assets/img/flowers.gif';

const Contact = () => {

    useEffect(() => {

        const portfolio = document.querySelector('.bg-portfolio'),
                nav_contact = document.querySelector('.nav-contact'),
                home_button = document.querySelector('.home-button');

        home_button.classList.remove('lg:hidden');

        nav_contact.classList.add('link-active');

        portfolio.classList.add('lg:hidden');

        return () => {
            portfolio.classList.remove('lg:hidden');
            nav_contact.classList.remove('link-active');
        }

    }); 

    return (
        <div className='portfolio-contact section'>
            <div className="contact-container">
                <div className="contact-main">
                    <h2 className='hidden md:flex'>Get In Touch</h2>
                    <p className="hidden md:flex">If you need help creating or improving your website don’t hesitate to contact me.</p>
                    <div className="main-title-loop md:hidden">
                        <div className="title-loop">
                            <h2>Get In Touch</h2>
                        </div>
                        <div className="title-loop">
                            <h2>Get In Touch</h2>
                        </div>
                    </div>
                </div>
                <div className="contact-section">
                    <form className="contact-form">
                        <input type="text" placeholder='Name' required="true"/>
                        <input type="text" placeholder='Subject' required="true"/>
                        <input type="text" placeholder='Email' required="true"/>
                        <textarea name="message" placeholder='Message' required="true"></textarea>
                        <button className='lg:hidden' type="submit">Send</button>
                        <button  className="hidden lg:flex form-send" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                            </svg>
                            <span>Send</span>
                        </button>
                    </form>
                    <div className="hidden lg:flex contact-flowers" style={{ backgroundImage: "url(" + flowers + ")"}}></div>
                </div>
            </div>
        </div>
    )
}

export default Contact