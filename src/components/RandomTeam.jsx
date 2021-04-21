import PokedexDetails from './PokedexDetails';
import getRandomPokemonId from '../utils/pokemons';

function RandomTeam() {
  return (
    <div className="pokedex-cards">
      <PokedexDetails pokemonId={getRandomPokemonId()} />
      <PokedexDetails pokemonId={getRandomPokemonId()} />
      <PokedexDetails pokemonId={getRandomPokemonId()} />
      <PokedexDetails pokemonId={getRandomPokemonId()} />
      <PokedexDetails pokemonId={getRandomPokemonId()} />
      <PokedexDetails pokemonId={getRandomPokemonId()} />
    </div>
  );
}

export default RandomTeam;
