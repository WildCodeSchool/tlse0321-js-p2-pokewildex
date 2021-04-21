import { useState, useEffect } from 'react';
import axios from 'axios';
import PokedexDetails from './PokedexDetails';

const apiDefault = 'https://pokeapi.co/api/v2/pokemon/';
function PokedexList() {
  const [pokemons, setPokemons] = useState([]);
  const [currPage, setCurrPage] = useState(apiDefault);
  const [nextPage, setNextPage] = useState([]);
  const [prevPage, setPrevPage] = useState([]);
  const [searchedName, setSearchedName] = useState('');
  const handleSearch = (pkmnName) => {
    const nameToLower = pkmnName.toLowerCase();
    setSearchedName(nameToLower);
  };
  const handleSubmit = () => {
    axios
      .get(`${apiDefault}${searchedName}`)
      .then((result) => setPokemons([result.data]))
      .catch((err) => {
        if (err.response.data === 'Not Found') {
          alert("Ce nom de pokémon n'existe pas");
        }
      });
  };
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
        <section className="pokedex-explorer">
          {prevPage && (
            <button
              className="pokedex-button"
              type="submit"
              onClick={() => setCurrPage(prevPage)}
            >
              ←
            </button>
          )}
          <input
            className="explorer"
            placeholder="searchbar"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button
            className="explorer"
            type="submit"
            onClick={() => handleSubmit()}
          >
            GO
          </button>
          {nextPage && (
            <button
              className="pokedex-button"
              type="submit"
              onClick={() => setCurrPage(nextPage)}
            >
              →
            </button>
          )}
        </section>
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
