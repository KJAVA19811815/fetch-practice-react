import React, { Component } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon";

class App extends Component {
  renderPokemon() {
    if (this.state.pokemon === null) {
      return <p>NULL</p>;
    } else {
      return this.state.pokemon.map(function(poke) {
        return <p key={poke.id}>{poke.name}</p>;
      });
    }
  }
  constructor(props) {
    super(props);

    this.state = {
      pokemon: []
    };
  }
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
        this.setState({
          pokemon: json
        });
      });
  }
  render() {
    return (
      <div>
        <Pokemon pokemon={this.state.pokemon} />
      </div>
    );
  }
}

export default App;
