import { useState, useEffect } from 'react';
import axios from 'axios';
import PokedexDetails from './PokedexDetails';

const apiDefault = 'https://pokeapi.co/api/v2/pokemon/';
function PokedexList() {
  const [pokemons, setPokemons] = useState([]);
  const [currPage, setCurrPage] = useState(apiDefault);
  const [nextPage, setNextPage] = useState([]);
  const [prevPage, setPrevPage] = useState([]);
  useEffect(() => {
    axios
      .get(currPage)
      .then((res) => res.data)
      .then((res) => res.results)
      .then(setPokemons);
    axios
      .get(currPage)
      .then((res) => res.data)
      .then((res) => setNextPage(res.next));
    axios
      .get(currPage)
      .then((res) => res.data)
      .then((res) => setPrevPage(res.previous));
  }, [currPage]);
  if (pokemons) {
    return (
      <>
        {prevPage && (
          <button
            className="pokedex-button"
            type="submit"
            onClick={() => setCurrPage(prevPage)}
          >
            ←
          </button>
        )}
        {nextPage && (
          <button
            className="pokedex-button"
            type="submit"
            onClick={() => setCurrPage(nextPage)}
          >
            →
          </button>
        )}
        <div className="pokedex-cards">
          {pokemons.map((pokemon) => (
            <PokedexDetails key={pokemon.name} pokemonId={pokemon.name} />
          ))}
        </div>
      </>
    );
  }
}
export default PokedexList;
