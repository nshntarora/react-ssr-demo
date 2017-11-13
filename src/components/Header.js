import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

class Header extends React.Component {
  render() {
    return (
        <div id="header">
            <Logo />
            <Navigation />
        </div>
    );
  }
}

export default Header;
