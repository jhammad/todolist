import React, {Component} from "react";
import TodoItems from "./TodoItems";


class TodoList extends Component {
	constructor(props){
		super(props);
		this.state = {items: []};
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}
	addItem(e){
		if(this._inputElement.value !== ""){
			var newItem = {
				text: this._inputElement.value, 
				key: Date.now()
			};
	
			this.setState((prevState) => {
				return {
					items: prevState.items.concat(newItem)
				};
			});
		
			this._inputElement.value = "";
			// display a text saying that the task was added
			alert("Task added!");

		}
		console.log(this.state.items);
		e.preventDefault();
	}
	
	// This function is used to filter out the item that has the key that was passed in.
// This returns a new array of items that do not have the key that was passed in.
// It is used to remove the item with the key that was passed in from the state.

deleteItem(key) {
		// Filter out the item that has the key that was passed in.
		// This returns a new array of items that do not have the key that was passed in.		
		var itemsToKeep = this.state.items.filter(function(item) {
			return (item.key !== key);
		});		
		// Set the state to the filtered items so the item with the key is removed.
		// The items property is set to the itemsToKeep array.
		// give the option to cancel the delete
		if (window.confirm("Are you sure you want to delete this task?")) {
			this.setState({

			items: itemsToKeep
		});		
	}
}
	
	
	
	render(){
		return(
			<div className="todoListMain">	

			  <div className="header">
				{/* insert image of the earth same width than the form */}
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/440px-The_Blue_Marble_%28remastered%29.jpg" alt="earth" width="70%" height="100%"/>		
			    <form onSubmit={this.addItem}>
			      <input ref={(a) => this._inputElement = a} placeholder="enter task">
			      </input>
			      <button type="submit">add</button>
			    </form>
			    <TodoItems entries={this.state.items} delete={this.deleteItem} />
			  </div>
		        </div>
		);
	}
}

export default TodoList; 
