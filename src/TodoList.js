import React, {Component} from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";


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
		// give the option to delete the task asking the user if is sure of it if the user click yes the task will be deleted and hide the element with classname mars
		var r = window.confirm("Are you sure you want to delete this task?");
		if (r === true) {
			this.setState({
				items: itemsToKeep
			});
			document.getElementsByClassName("mars")[0].style.display = "none";
			// display a text saying that the task was deleted
			alert("Task deleted!");
		}
		
}
	
	
	
	render(){
		return(
			
			<div className="todoListMain">	
			

			  <div className="header">	

				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/440px-The_Blue_Marble_%28remastered%29.jpg" className="earth" alt="earth"/>	
				<img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Tharsis_and_Valles_Marineris_-_Mars_Orbiter_Mission_%2830055660701%29.png" className="mars" alt="mars"/>	
	
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
