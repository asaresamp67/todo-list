import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./Components/TodoList";
import TodoInput from "./Components/TodoInput";

export default class App extends Component {
  state = {
    items: [{ id: 1, title: "hello" }],
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
    this.setState(
      {
        items: updatedItems,
        item: "",
        id: uuidv4(),
        editItem: false,
      },
      () => console.log(this.state)
    );
  };
  clearList = () => {
    console.log("clear List");
  };
  handleDelete = (id) => {
    console.log("handle delete ${id}");
  };
  handleEdit = (id) => {
    console.log("handle edit ${id}");
  };
  render() {
    //console.log(this.state);
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 col-md-8 mt-5">
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
