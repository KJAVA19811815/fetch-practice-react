import React, { Component } from "react";

export default class NewPokemon extends Component {
  handleSubmit(e) {
    console.log(this.refs.name.value);
    fetch("http://localhost:8080/", {
      method: "POST",
      body: JSON.stringify({
        name: this.refs.name.value.trim(),
        type: this.refs.type.value.trim()
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(function(json) {
        console.log(json);
      });
  }
  render() {
    return (
      <div>
        <form>
          Name:
          <input type="text" ref="name" />
          Type:
          <input type="text" ref="type" />
          <button onClick={this.handleSubmit.bind(this)}>SUBMIT</button>
        </form>
      </div>
    );
  }
}
