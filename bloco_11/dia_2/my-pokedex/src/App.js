import './App.css';
import pokemons from './data'
import PokemonProfile from './PokemonProfile'
import PropTypes from 'prop-types';

function App() {
  return (
    <>
    <div className="App">
      <section className="myCards"> 
      {pokemons.map(pokemon => <PokemonProfile pokemon={ pokemon } key={pokemon.id} />)}
      </section>
    </div>
    </>
  );
}

PokemonProfile.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.number,
  measurementUnit: PropTypes.string
}

export default App;
