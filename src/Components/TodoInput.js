import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { handleSubmit, handleChange, item, editItem } = this.props;
    return (
      <div>
        <div className="card card-body my-3">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text bg-primary text-white mr-1">
                  <i className="fas fa-book" />
                </div>
              </div>
              <input
                type="text"
                className="form-control text-capitalize"
                placeholder="Add todo item"
                value={item}
                onChange={handleChange}
              ></input>
            </div>
            <button
              type="submit"
              disabled={item ? false : true}
              className={
                editItem
                  ? "btn btn-block btn-success mt-3 "
                  : "btn btn-block btn-primary mt-3 text-uppercase"
              }
            >
              {editItem ? "edit item" : "add item"}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
