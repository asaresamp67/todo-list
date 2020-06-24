import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    return (
      <section>
        <h2 className="text-center text-capitalize">todo list</h2>
        <TodoItem />
      </section>
    );
  }
}
