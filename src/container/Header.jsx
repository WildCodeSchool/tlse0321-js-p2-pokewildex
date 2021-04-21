import './Header.css';
import imgLogo from './images/logo.png';

function Header() {
  return (
    <div>
      <img className="logo" src={imgLogo} alt="" />
    </div>
  );
}

export default Header;
