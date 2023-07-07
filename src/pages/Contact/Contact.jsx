import React from 'react';
import './Contact.css';
import Navbar from '../../components/NavBar';
import IconBar from '../../components/IconBar';

const Contact = () => {

    return (
        <div className="main">
        <Navbar />
        <IconBar />
            <div className='contact-writing'>
                <h1>Contact</h1>
                <p>Got a problem you need to solve?</p>
            </div>
            
        </div>
    )
}

export default Contact;