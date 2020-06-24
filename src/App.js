import React, { Component } from "react";
import uuid from "uuid";
import TodoList from "./Components/TodoList";
import TodoInput from "./Components/TodoInput";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <TodoInput />
              <TodoList />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}