import React from 'react';
import Image from './Image';

class PokemonProfile extends React.Component {
  render() {
    return (
      <div className="myPokemon">
        <Image source={this.props.pokemon.image} alternativeText="Imagem do pokemon"/>
        <p>Name: {this.props.pokemon.name} </p>
        <p>Type: {this.props.pokemon.type} </p>
        <p>Weight: {this.props.pokemon.averageWeight.value} {this.props.pokemon.averageWeight.measurementUnit}</p>
        
      </div>
    );
  }
}

export default PokemonProfile;