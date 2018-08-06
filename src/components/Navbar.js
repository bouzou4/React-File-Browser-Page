import React, { Component } from "react";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabs: ["Home", "Account", "About", "Contact"]
    }
  }

  render() {
    return(
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid col-lg-8 col-md-10 mx-auto">
          <div className="navbar-header">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#my-nav" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="my-nav">
            <ul className="navbar-nav mr-auto">
              {this.state.tabs.map(function(el, index) {
                return <li className="nav-item" key={el} ><a href={"#"+el.toLowerCase()} className="nav-link">{el}</a></li>;
              })}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}