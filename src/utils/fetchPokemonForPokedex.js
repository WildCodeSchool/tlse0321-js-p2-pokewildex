import axios from 'axios';
import API_POKEMON_DEFAULT from '../constants/api';

function fetchPokemonForPokedex(pokemonId, setPokemon) {
  axios
    .get(`${API_POKEMON_DEFAULT}${pokemonId}`)
    .then((res) => res.data)
    .then(setPokemon);
}
export default fetchPokemonForPokedex;
