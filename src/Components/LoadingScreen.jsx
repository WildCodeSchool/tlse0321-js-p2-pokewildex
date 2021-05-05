import imgPokeBall from '../Container/images/icons/poke-ball.png';
import './LoadingScreen.css';

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <img className="load-pokeball" src={imgPokeBall} alt="pokeball" />
      <p>now Loading</p>
    </div>
  );
}

export default LoadingScreen;
