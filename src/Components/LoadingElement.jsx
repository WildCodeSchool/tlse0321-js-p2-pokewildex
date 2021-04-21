import imgPokeBallMini from '../Container/images/icons/poke-ball-mini.png';
import './LoadingElement.css';

function LoadingElement() {
  return (
    <div className="loading-Element">
      <img
        className="load-pokeball-mini"
        src={imgPokeBallMini}
        alt="pokeball"
      />
      <p>now Loading</p>
    </div>
  );
}

export default LoadingElement;
