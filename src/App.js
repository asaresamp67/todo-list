import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./Components/TodoList";
import TodoInput from "./Components/TodoInput";

export default class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: uuidv4(),
      editItem: false,
    });
  };
  clearList = () => {
    this.setState({
      items: [],
    });
  };
  handleDelete = (id) => {
    const filteredItem = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: filteredItem,
    });
  };
  handleEdit = (id) => {
    const filteredItem = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: filteredItem,
      item: selectedItem.title,
      id: id,
      editItem: true,
    });
  };
  render() {
    //console.log(this.state);
    return (
      <React.Fragment>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 mt-5">
              <h3 className="text-capitalize text-center">todo input</h3>
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />

              <TodoList
                items={this.state.items}
                handleDelete={this.handleDelete}
                clearList={this.clearList}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
