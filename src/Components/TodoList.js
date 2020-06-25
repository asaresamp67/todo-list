import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const { items, handleDelete, clearList, handleEdit } = this.props;
    const theList = items.map((item) => (
      <TodoItem
        key={item.id}
        title={item.title}
        handleDelete={() => handleDelete(item.id)}
        handleEdit={() => handleEdit(item.id)}
      />
    ));
    return (
      <section>
        <h3 className="text-capitalize text-center mt-5">todo list</h3>
        <ul className="list-group mb-5">{theList}</ul>
        <button
          type="button"
          className="btn btn-danger btn-block text-uppercase mt-5"
          onClick={clearList}
        >
          clear list
        </button>
      </section>
    );
  }
}
