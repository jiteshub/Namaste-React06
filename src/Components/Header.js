import logo from "../../Namaste_React_Coding_Assignment/Assets/logo.png";
import { useState } from "react";

const Header = () => {

  const [Btname, setBtname] = useState("login");
  
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="Nav-list">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              Btname === "login" ? setBtname("logout") : setBtname("login")
            }}
          >
            {Btname}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
