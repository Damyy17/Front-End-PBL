import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {

var items = document.getElementsByClassName("link");
for(var i = 0; i<items.length; i++){
    items[i].addEventListener('click', function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active");
        this.className += " active";
    })
}

 return (
    <header className="header">
            <div className="header_line2">
                <div className="logo">
                    <h2>i</h2>
                    <h3>
                        <NavLink className="a_know" to="/home">Know</NavLink>
                    </h3>
                </div>
                <nav className="navbar" id='navbar'>
                    <NavLink className="link" to="/search">Search</NavLink>
                    <NavLink className="link" to="/about">About</NavLink>
                    <NavLink className="link" to="/login">Log in</NavLink>
                    <NavLink className="link" to="/signup">Sign up</NavLink>
                </nav>
            </div>
        </header>
 );
}

export default Navbar;