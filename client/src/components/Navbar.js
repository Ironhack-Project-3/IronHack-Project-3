import { Link } from "react-router-dom";
import { logout } from "../services/auth";
import React, { Component } from "react";

export default class Card extends Component {
  state = {
    showMenu: false,
  };

  handleLogout = (props) => {
    logout().then(() => {
      props.setUser(null);
    });
  };

  showMenu = (event) => {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  };

  menuInteraction = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    console.log(this.dropdownMenu);
    return (
      <div>
        <button onClick={this.menuInteraction}>MENU ICON HERE</button>

        <div className="menu">
          {this.state.showMenu ? (
            <nav className="nav-style">
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/threads">Postboard</Link>
                </li>
                <li>
                  <Link to="/" onClick={() => this.handleLogout(this.props)}>
                    Logout
                  </Link>
                </li>
              </ul>
            </nav>
          ) : null}{" "}
        </div>
      </div>
    );
  }
}

