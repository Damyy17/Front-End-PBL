import React, {Component} from "react"
import ItemService from "../Services/ItemService"

class updateItemComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            itemName: '',
            description: '',
            tags: []
        }
        this.changeItemNameHandler = this.changeItemNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    componentDidMount(){
        ItemService.getItemById(this.state.id).then( (res) =>{
            let item = res.data;
            this.setState({itemName: item.itemName,
                    description: item.description,
                    tags: item.tags
            });
        });
    }

    updateItem = (e) => {
        e.preventDefault();
        let item = {itemName: this.state.itemName, description: this.state.description, tags: this.state.tags};
        console.log('item => ' + JSON.stringify(item));
        console.log('id => ' + JSON.stringify(this.state.id));
        ItemService.updateItem(item, this.state.id).then( res => {
            this.props.history.push('/items');
        });
    }

    changeItemNameHandler = (event) => {
        this.setState({itemName: event.target.value});
    }

    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }

    cancel(){
        this.props.history.push('/items');
    }

    render() {
        return (
            <div>
                <br />
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Item</h3>
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

                                    <button className="btn btn-success" onClick = {this.updateItem}>Save</button>
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

export default updateItemComponent