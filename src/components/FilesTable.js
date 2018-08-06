import React, { Component } from "react";
import File from "./File.js";

export default function FilesTable(props) {
  
  if(props.isLoading) {
    return (
      <div className="files-container container col-xs-12">
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    )
  }
  else {
    return(
      <div className="files-container container col-xs-12">
        <div className="files container col-xs-12">
          {props.files.map(function(el, ind) {
            return <File file={el} key={el.id} />
          })}
        </div>
      </div>
    )
  }
}
