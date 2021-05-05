import colorTypes from '../constants/colorTypes';

function setColorTypes(pokemon, setColorsForCard) {
  if (pokemon.types) {
    const newColorTypes = pokemon.types.map((t) => colorTypes[t.type.name]);
    setColorsForCard(newColorTypes);
  }
}
export default setColorTypes;
