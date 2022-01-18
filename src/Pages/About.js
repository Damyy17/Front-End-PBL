import React from 'react';
import logo_google from '../Resources/logo_google.svg'
import Navbar from './Navbar';

const About = () => {
    return (
        <div className="about">
            <Navbar />
            <div></div><p className="p_aboutus"><h2 className="h2">About </h2> <h1> Us</h1></p>
            <div className="st_part">
                <div className="st_part_1">
                    <div className="photo_1"></div>
                    <div className="photo_2"></div>
                    <div className="photo_3"></div>
                    <div className="photo_4"></div>
                </div>
                <div className="st_part_2">
                    <p className="text_1">We Are A <span className="text_red">Team</span> From
                                            TUM Which Wants To 
                                            Improve Process Of <span className="text_red">Study</span> </p>
                    <p className="text_2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <p className="p_ourgoals"><h3 className="caption_1_1">Our</h3><h4 className="caption_1_2">Goals</h4></p>
            <div className="nd_part">
                <div className="goal_1">
                    <p className="goal_name_1"><span className="text_red">To provide users with </span>
                    courses, books, helpful links and articles.</p>
                </div>
                <div className="goal_2">
                    <p className="goal_name_2"><span className="text_red">To provide users with </span>
                    courses, books, helpful links and articles.</p>
                </div>
                <div className="goal_3">
                    <p className="goal_name_3"><span className="text_red">To provide users with </span>
                    courses, books, helpful links and articles.</p>
                </div>
            </div>
            <p className="p_contact"><h3 className="caption_2_1">Contact</h3><h4 className="caption_2_2">Us</h4></p>
            <div className="rd_part">
                <btn className="contact_1">
                    <img src={logo_google} className='logo_google' alt=''></img>
                    <p className="name_1">iknowteam@gmail.com</p>
                </btn>
            </div>

        </div>
    );
}

export default About;