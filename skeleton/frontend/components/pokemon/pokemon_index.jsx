import React, { Component } from 'react';

class PokemonIndex extends Component {
  componentWillMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;

    return (
      <section>
        <ul>
          {pokemon.map(poke => <li key={poke.id}>{poke.name} <img src={poke.image_url} /> </li>)}
        </ul>
      </section>
    );
  }
}

export default PokemonIndex;
