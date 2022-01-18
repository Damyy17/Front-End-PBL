import React, { Component } from "react"
import ItemService from "../Services/ItemService"
import {withRouter} from "react-router";

class CreateItemComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            itemName: '',
            description: '',
            listOfTags: [{}]
        }
        this.changeItemNameHandler = this.changeItemNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changelistOfTagsHandler = this.changelistOfTagsHandler.bind(this);
        this.saveOrUpdateItem = this.saveOrUpdateItem.bind(this);
    }

    componentDidMount(){
        
        if(this.state.id === '_add'){
            return
        } else {
            ItemService.getItemById(this.state.id).then( (res) =>{
                let item = res.data;
                this.setState({itemName: item.itemName,
                    description: item.description,
                    listOfTags: item.listOfTags
                });
            });
        }
    }

    saveOrUpdateItem = (e) => {
        e.preventDefault();
        let item = {itemName: this.state.itemName, description: this.state.description, listOfTags: this.state.listOfTags};
        console.log('item => ' + JSON.stringify(item));

        if(this.state.id === '_add'){
            ItemService.createItem(item).then( res => {
                this.props.history.push('/items');
            });
        } else {
            ItemService.updateItem(item, this.state.id).then( res => {
                this.props.history.push('/items')
            });
        }
    }

    changeItemNameHandler = (event) => {
        this.setState({itemName: event.target.value});
    }

    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }

    changelistOfTagsHandler = (event) => {
        this.setState({listOfTags: event.target.value});
    }

    cancel(){
        this.props.history.push('/items');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Item</h3>
        } else {
            return <h3 className="text-center">Update Item</h3>
        }
    }
    render() {
        return (
            <div>
                <br />
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label>Item Name: </label>
                                        <input placeholder="Item Name" name="itemName" className="form-control"
                                        value={this.state.itemName} onChange={this.changeItemNameHandler} />
                                    </div>
                                    <div className = "form-group">
                                        <label>Description: </label>
                                        <input placeholder="Description" name="description" className="form-control"
                                        value={this.state.description} onChange={this.changeDescriptionHandler} />
                                    </div>
                                    <div className = "form-group">
                                        <label>Tags: </label>
                                        <input placeholder="Tags" name="listOfTags" className="form-control"
                                        value={this.state.listOfTags} onChange={this.changelistOfTagsHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick = {this.saveOrUpdateItem}>Save</button>
                                    <button className="btn btn-danger" onClick = {this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CreateItemComponent)