import React from 'react';
import Navbar from './Navbar';
import logo_ik from '../Resources/Logo.svg'
import fb_logo from '../Resources/facebook_logo.svg'
import logo_google from '../Resources/logo_google.svg'
import or_img from '../Resources/OR_img.png'

const Signup = () => {
    return (
        <div className="signup">
            <Navbar />
            <div className="signup_page">
                <img src={logo_ik} className='logo_login' alt=''/>
                <div className="signup_form">
                    <p className="signup_txt">Sign Up</p>
                    <p className="text_signup_1">Fill in your details here:</p>
                    <input type='text' className='input_fullname' name='txt' placeholder='Full Name' required></input>
                    <input type='text' className='input_email_address' name='txt' placeholder='Email Address' required></input>
                    <input type='password' className='password_signup' name='txt' placeholder='Password' required></input>
                    <button className="btn_signup">
                        <p className="btn_signup_txt">Register</p>
                    </button>
                    <img src={or_img} className='or_img' alt=''></img>
                    <div className="logos">
                        <img src={logo_google} className='logo_google_login' alt=''></img>
                        <img src={fb_logo} className='fb_logo_login' alt=''/> 
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Signup;