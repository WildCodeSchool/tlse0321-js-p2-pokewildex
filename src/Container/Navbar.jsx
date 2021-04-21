import './Navbar.css';
import { Link } from 'react-router-dom';
import imgPokedex from './images/icons/pokedex.png';
import imgRandom from './images/icons/random.png';
import imgVersus from './images/icons/versus.png';
import imgCap from './images/icons/cap.png';
import imgBalance from './images/icons/balance.png';
import imgLogo from './images/logo.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="sidebar">
        <img className="logo" src={imgLogo} alt="" />
        <ul>
          <li>
            <Link to="/PokedexList">
              <img className="sidebar-icon" src={imgPokedex} alt="" />
              Pokedex
            </Link>
          </li>
          <li>
            <Link to="/RandomTeam">
              <img className="sidebar-icon" src={imgRandom} alt="" />
              Team Generator
            </Link>
          </li>
          <li>
            <Link to="/Comparator">
              <img className="sidebar-icon" src={imgBalance} alt="" />
              Comparator
            </Link>
          </li>
          <li className="disable">
            <Link to="/">
              <img className="sidebar-icon" src={imgVersus} alt="" />
              Combat
            </Link>
          </li>
          <li>
            <Link to="/StaffList">
              <img className="sidebar-icon" src={imgCap} alt="" />
              Staff
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
