import React from "react";
import { Link } from "@reach/router";
import logo from "../logo.png";

function Header() {
  return (
    <h1>
      <Link to="/">
        <img src={logo} alt="Application Logo" width={200} />
        <span>Lyrics App</span>
      </Link>
    </h1>
  );
}

export default Header;
