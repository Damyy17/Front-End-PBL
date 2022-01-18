import React from 'react';
import { Link } from 'react-router-dom';
import logo_ik from '../Resources/Logo.svg'
import magnifier from '../Resources/magnifier.svg'

const Home = () => {
    return (
        <div className="home">
            <img src={logo_ik} className='logo_ik' alt=''/>
            <p className='text'>Look For Anything You Want To Know</p>
            <div className='search_bar'>
                <img src={magnifier} className='magnifier' alt=''/>
                <form name='search_space'>
                    <input type='text' className='input' name='txt' placeholder='Topic' />
                </form>
                <Link type='button' className='search_btn' to="/search"><p className='search_txt'>Search</p></Link>
            </div>
        </div>
    );
}

export default Home;