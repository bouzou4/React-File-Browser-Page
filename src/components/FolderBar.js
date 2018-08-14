import React, { Component } from "react";

export default function FolderBar(props) {
  function onClick(folder) {
    props.onFolderClick(folder);
  }

  return(
    <div className="folders col-xs-12">
      <a className="new-folder-btn">Create Folder</a>
      <div className="row">
        {props.folders.map(function(el, ind) {
          return (
            <Folder key={el} active={ind == props.activeFolder} name={el} onClick={() => onClick(ind)} />
          );
        })}
      </div>
    </div>
  )
}

function Folder(props) {
  return (
    <div onClick={props.onClick} data-folder-target={props.name} className={`${props.active ? "active " : ""}folder col-lg-1 col-sm-2 col-xs-3`}><a href="#">
      <img src={`./img/folder-flat${props.active ? "-active" : ""}.svg`} alt="" className="folder-icon" />
      <p className="folder-title col-xs-12">{props.name}</p>
    </a></div>
  )
}