import axios from 'axios';
import { useState, useEffect } from 'react';
import './PokedexDetails.css';

function PokedexDetails({ pokemonId }) {
  const apiDefault = 'https://pokeapi.co/api/v2/pokemon/';
  const [pokemonInfos, setPokemonInfos] = useState({});
  const [pokemonSprites, setPokemonSprites] = useState({});
  const [pokemonAbilities, setPokemonAbilities] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  useEffect(() => {
    axios
      .get(apiDefault + pokemonId)
      .then((res) => res.data)
      .then(setPokemonInfos);
    axios
      .get(apiDefault + pokemonId)
      .then((res) => res.data)
      .then((res) => res.sprites)
      .then(setPokemonSprites);
    axios
      .get(apiDefault + pokemonId)
      .then((res) => res.data)
      .then((res) => res.abilities)
      .then(setPokemonAbilities);
    axios
      .get(apiDefault + pokemonId)
      .then((res) => res.data)
      .then((res) => res.types)
      .then(setPokemonTypes);
  }, []);
  if (pokemonInfos) {
    return (
      <>
        <div className="pokedex-card">
          <div className="pokedex-card-additional">
            <div className="more-infos">
              <img
                className="pokedex-card-image"
                src={pokemonSprites.front_default}
                alt={pokemonInfos.id}
              />
              <div className="pokedex-card-description pokedex-card-right">
                <p className="name">{pokemonInfos.name}</p>
                <p className="pokedex-card-description">
                  Id : {pokemonInfos.id}
                </p>
                <ul className="pokedex-card-description">
                  type:
                  {pokemonTypes.map((e) => (
                    <li>{e.type.name}</li>
                  ))}
                </ul>
                <ul className="pokedex-card-description">
                  Abilities :
                  {pokemonAbilities.map((e) => (
                    <li>{e.ability.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="pokedex-card-center name">
            <h2 className="pokemon-police">{pokemonInfos.name}</h2>
          </div>
        </div>
      </>
    );
  }
}
export default PokedexDetails;
