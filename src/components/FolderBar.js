import React, { Component } from "react";

export default function FolderBar(props) {
  function onClick(folder) {
    props.onFolderClick(folder);
  }

  return(
    <div className="folders container col-xs-12">
      <div className="row">
        {props.folders.map(function(el, ind) {
          return (
            <Folder key={el} name={el} onClick={() => onClick(el)} />
          );
        })}
      </div>
    </div>
  )
}

function Folder(props) {
  return (
    <div onClick={props.onClick} data-folder-target={props.name} className="folder col-lg-2 col-sm-3 col-xs-6"><a href="#">
      <img src="https://freeiconshop.com/wp-content/uploads/edd/folder-flat.png" alt="" className="folder-icon" />
      <p className="folder-title col-xs-12">{props.name}</p>
    </a></div>
  )
}