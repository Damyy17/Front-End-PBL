import React from 'react';
import Navbar from './Navbar_Search';
import button from '../Resources/button_back.png'
import star_rating from '../Resources/Star_Rating.png'
import ViewItemComponent from '../Components/ViewItem';

const ViewItem = () => {

    return (
        <div className='item_container'>
            <Navbar /> 
            <div className='item_form'>
                <input type="image" className='button_back' src={button} alt=''></input>
                <div className='image_background'></div>
                <div className='information_form'>
                    <p className='item_name_view'>Java Course</p>
                    <p className='item_rating'>Rating</p>
                    <img src={star_rating} className='star_rating' alt=''></img>
                    <p className='number_of_reviews'>0 Reviews</p>
                    <p className='description_word_view'>Description:</p>
                    <p className='description_word_view'></p>
                </div>
            </div>
            <ViewItemComponent />
        </div>
    )
}

export default ViewItem