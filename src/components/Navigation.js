import React from "react";

class Navigation extends React.Component {
  render() {
    return (
      <nav id="nav">
        <ul>
          <li className="active">
            <a href="/">Homepage</a>
          </li>
          <li>
            <a href="/">Left Sidebar</a>
          </li>
          <li>
            <a href="/">Right Sidebar</a>
          </li>
          <li>
            <a href="/">No Sidebar</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
