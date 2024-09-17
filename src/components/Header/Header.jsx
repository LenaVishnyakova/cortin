import "./Header.css";

import logoImg from "../../images/header/logo.svg";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-wrapper">
        <img src={logoImg} alt="logo" className="header__logo" />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
