import React, { Component } from "react";
import Player from "react-player";
import Popup from "react-modal";

export default class File extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      imgLoaded: false,
    }

    this.onLoad = this.onLoad.bind(this);
    this.handleOpenFile = this.handleOpenFile.bind(this);
    this.handleCloseFile = this.handleCloseFile.bind(this);
  }

  handleOpenFile () {
    this.setState({ open: true });
  }
  
  handleCloseFile () {
    this.setState({ open: false });
  }

  secondsToMS(s){return(s-(s%=60))/60+(9<s?':':':0')+s}

  onLoad() {
    this.setState({
      imgLoaded: true
    });
  }

  render() {  
    if(this.props.file.videos) {
      return (
        <div className="file"><a href="#">
          <Popup 
           isOpen={this.state.open}
           contentLabel={this.props.file.id.toString()}
           className="file-popup"
          >
            <button className="file-close" onClick={this.handleCloseFile} > X </button>
            <Player url={this.props.file.videos.small.url} className="file-pop-vid mx-auto" playing controls/>
          </Popup>
          {!this.state.imgLoaded && <div className="lds-roller col-sm-6 col-xs-12"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
          <img 
            src={`https://i.vimeocdn.com/video/${this.props.file.picture_id}_200x150.jpg`} 
            alt="" 
            className="file-thumb" 
            onLoad={this.onLoad}
            onClick={this.handleOpenFile}
          />
          <ul>
            <li className="file-title">ID: {this.props.file.id}</li>
            <img src="./img/mov.svg" alt="" className="file-icon" />
            <li className="file-duration">{this.secondsToMS(this.props.file.duration)}</li>
            <li className="file-created">Downloaded:</li>
            <li className="file-date">{this.props.file.downloads + " times"}</li>
          </ul>
        </a></div>
      )
    }
    else {
      return(
        <div className="file"><a href="#">
          <Popup 
           isOpen={this.state.open}
           contentLabel={this.props.file.id.toString()}
           className="file-popup"
          >
            <button className="file-close" onClick={this.handleCloseFile} > X </button>
            <img src={this.props.file.largeImageURL} alt="" className="file-pop-img mx-auto" onLoad={this.onLoad} />
          </Popup>
          {!this.state.imgLoaded && <div className="lds-roller col-sm-6 col-xs-12"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
          <img 
            src={this.props.file.previewURL} 
            alt="" 
            className="file-thumb" 
            onLoad={this.onLoad} 
            onClick={this.handleOpenFile}
          />
          <ul>
            <li className="file-title">ID: {this.props.file.id}</li>
            <img src="./img/cam.svg" alt="" className="file-icon" />
            <li className="file-resolution">{this.props.file.imageWidth + " x " + this.props.file.imageHeight}</li>
            <li className="file-created">Downloaded:</li>
            <li className="file-date">{this.props.file.downloads + " times"}</li>
          </ul>
        </a></div>
      )
    }
  }
}