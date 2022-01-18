// import React, {Component} from "react"

// class ViewItemComponent extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             id: this.props.params.id,
//             item: {}
//         }
//     }

//     componentDidMount(){
//         ItemService.getItemById(this.state.id).then( res => {
//             this.setState({item: res.data});
//         })
//     }

//     render(){
//         return(
//             <div className='item_form'>
//                 <input type="image" className='button_back' src={button} alt=''></input>
//                 <div className='image_background'></div>
//                 <div className='information_form'>
//                     <p className='item_name_view'>{item.itemName}</p>
//                     <p className='item_rating'>Rating</p>
//                     <img src={star_rating} className='star_rating' alt=''></img>
//                     <p className='number_of_reviews'>0 Reviews</p>
//                     <p className='description_word_view'>{item.description}</p>
//                     <p className='description_word_view'></p>
//                 </div>
//             </div>
//         )
//     }
// }

// export default ViewItemComponent