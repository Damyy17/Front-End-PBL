import React from 'react';
import logo_ik from '../Resources/Logo.svg'
import fb_logo from '../Resources/facebook_logo.svg'
import logo_google from '../Resources/logo_google.svg'
import Navbar from './Navbar';

const Login = () => {
    return (
        <div className="login">
            <Navbar />
            <div className="container">
                <img src={logo_ik} className='logo_login' alt=''/> 
                <div className="login_form">
                    <p className="login_txt">Login</p>
                    <p className="text_login_1">Fill in your details here:</p>
                    <input type='text' className='input_l' name='txt' placeholder='Email Adress' required/>
                    <input type='password' className='input_p' name='txt' placeholder='Password' required/>
                    <p className="forgot">Forgot password?</p>
                    <button className="btn">
                        <p className="login_btn">Login</p>
                    </button>
                    <div className="logos">
                        <img src={logo_google} className='logo_google_login' alt=''></img>
                        <img src={fb_logo} className='fb_logo_login' alt=''/> 
                    </div>
                    <p className="text_login_2">New User? <span className="text_login_2_1">Create Account</span></p>
                </div>
            </div>
        </div>

    );
}

export default Login;