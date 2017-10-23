import React, { Component } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon";

class App extends Component {
  componentDidMount() {
    return fetch("http://localhost:8080/", {
      method: "get",
      headers: {
        Accept: "application/json"
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(json => {
        console.log(json);
      });
  }
  render() {
    return (
      <div>
        <Pokemon />
      </div>
    );
  }
}

export default App;
