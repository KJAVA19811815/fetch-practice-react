import React, { Component } from "react";

export default class Pokemon extends Component {
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
      pokemon: null
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
          pokemon: [json]
        });
      });
  }

  render() {
    return (
      <div>
        <h1>TEST</h1>
        {this.renderPokemon()}
      </div>
    );
  }
}
