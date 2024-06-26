import React from "react";
import "./Header.css";
import Logo from "./images/favicon.png";
import { SearchOutlined } from "@mui/icons-material";

function Header() {
  return (
    <>
      <div className="header__wrapper">
        <div className="header__logo">
          {" "}
          <img src={Logo} width={35} />{" "}
        </div>
        <div className="header__search">
          <div className="header__searchContainer">
            <SearchOutlined />
            <input placeholder="Search" type="text" />
          </div>
        </div>
        <div className="header__menuItems">
          <a href="/">Free Stocks</a>
          <a href="/">PortFolio</a>
          <a href="/">Cash</a>
          <a href="/">Messages</a>
          <a href="/">Account</a>
        </div>
      </div>
    </>
  );
}

export default Header;
