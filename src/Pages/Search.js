import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Navbar_Search from './Navbar_Search';
import magnifier from '../Resources/magnifier.svg'
import devider from '../Resources/Devider.png'
import hashtag from '../Resources/hashtag.svg'
import hor_line from '../Resources/devider_line.png'


const Search = () => {
    //getting the data from database
    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);

    useEffect(() => {
        loadItemsData();
    }, []);

    const loadItemsData = async () => {
        return await axios
            .get("http://localhost:8080/api/items/all")
            .then((response) => setData(response.data))
             .catch((err) => console.log(err));
    };
    console.log("data", data);


    //searching and filttering
    const searchItems = (searchValue) => {
        setValue(searchValue)
        if(value !== ''){
            const filteredData = data.filter((item) =>{
                return Object.values(item)
                .join('')
                .toLowerCase()
                .includes(value.toLowerCase())
            })
            setFilteredResults(filteredData)
        } else {
            setFilteredResults(data)
        }
    }


    return (
        <div className="search">
            <Navbar_Search />
            <div className='search_form'>
                <form className='two_inputs_for_search'>
                    <img src={magnifier} className='magnifier' alt=''/>
                    <input type='text'  
                            className='input_search_page' 
                            placeholder='Topic..'
                            onChange={(e) => searchItems(e.target.value)} 
                            />
                    <img src={devider} className='devider' alt=''></img>
                    <img src={hashtag} className='hashtag' alt=''></img>
                    <div className='selector'>
                        <select name='format' id='format'>
                            <option selected disabled>Tags</option>
                            <option>Tag 1</option>
                            <option>Tag 2</option>
                            <option>Tag 3</option>
                        </select>
                    </div>
                    <input type='submit' className='search_button' value="Search" onSubmit={searchItems} />
                </form>
            </div>
            <div className='items_section'>
                <p className='number_of_items'>Total found: </p>
                <div className='all_items'>
                    {value.length >= 1 ? (filteredResults.map((item) => {
                        return (
                            <div className='item_example'>
                                <p className='topic_name_example'>{item.itemName}</p>
                                <p className='author_example'>Udemy Company</p>
                                <img src={hor_line} className='hor_line' alt=''></img>
                                <p className='description_word'>Description:</p>
                                <p className='description_example'>{item.description}</p>
                                <p className='tags_example'><span className='tags_word'>Tags: </span></p>
                                <button type="button" className='find_more_button'>
                                    <p className='find_more_word'>Find More</p>
                                </button>
                            </div>
                        )
                    })) : (
                        data.map((item) => {
                            return (
                                <div className='item_example'>
                                    <p className='topic_name_example'>{item.itemName}</p>
                                    <p className='author_example'>Udemy Company</p>
                                    <img src={hor_line} className='hor_line' alt=''></img>
                                    <p className='description_word'>Description:</p>
                                    <p className='description_example'>{item.description}</p>
                                    <p className='tags_example'><span className='tags_word'>Tags: </span></p>
                                    <button type="button" className='find_more_button'>
                                        <p className='find_more_word'>Find More</p>
                                    </button>
                                </div>
                            )
                        })
                    )
                    }
                </div>
            </div>
        </div>
    );
}

export default Search;
