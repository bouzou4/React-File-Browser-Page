import React, { Component } from "react";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groupType: "Organization",
      server: "151 Pro-Serv" 
    }
  }

  render() {
    return(
      <nav className="nav-bar col-xs-12">
        <div className="nav-icon nav-element"><img src="./img/grid.png" alt="menu" /></div>
        <div className="nav-brand nav-element">
          <img src="./img/logo.png" alt="Videri" />
          Content
        </div>
        <div className="nav-title nav-element">
          <span className="nav-group-type">{this.state.groupType}</span>
          <span className="nav-server-name">{this.state.server}</span> 
        </div>
      </nav>
    )
  }
}