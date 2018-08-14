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
      <div className="files-container col-xs-12">
        <div className="file-browser-tools">
          <span className="files-content-label">Content</span>
          <form action="" id="search">
              <input 
                type="text"
                className="file-search-input" 
                id="fileSearch" 
                placeholder="Search . . ."
              />
              <a><img src="./img/filter.svg" className="file-filter-icon" alt="filter" /></a>
          </form>
          <div className="file-upload">
            <img src="./img/upload.svg" alt="upload" />
            <p className="file-upload-heading">DRAG and DROP files<br />
            <span className="file-upload-body">Recommended file types: Images (.png), videos (.mp4) and apps (.apk) up to 3GB in file size</span></p>
          </div>
        </div>
        <div className="files col-xs-12">
          {props.files.map(function(el, ind) {
            return <File file={el} key={el.id} />
          })}
        </div>
      </div>
    )
  }
}
