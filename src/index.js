import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar.js";
import FileBrowser from "./components/FileBrowser.js";
import Bootstrap from 'bootstrap';
import './js/main.js';
import './styles/imports.scss';

ReactDOM.render(<Navbar />, document.getElementById("navigation"));
ReactDOM.render(<FileBrowser />, document.getElementById("app"));