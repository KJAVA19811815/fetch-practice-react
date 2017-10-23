import React, { Component } from "react";

export default class Pokemon extends Component {
  renderPokemon = () => {
    if (this.props.pokemon.length === 0) {
      return <p>NO POKEMON</p>;
    } else {
      return this.props.pokemon.map(poke => {
        return (
          <div>
            NAME:
            <h2 key={poke.id}>{poke.name}</h2>
            <br />
            TYPE:
            <p>{poke.type}</p>;
          </div>
        );
      });
    }
  };
  render() {
    return (
      <div>
        <h1>TEST</h1>
        {this.renderPokemon()}
      </div>
    );
  }
}
