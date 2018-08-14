import React, { Component } from "react";
import Axios from "axios";
import FolderBar from "./FolderBar.js";
import FilesTable from "./FilesTable.js";

export default class FileBrowser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      folders: ["Cars", "Planes", "Cats", "Apples"],
      activeFolder: 0,
      files: [],
      isLoading: true,
      page: 1
    }

    this.getFiles = this.getFiles.bind(this);
    this.handleFolderClick = this.handleFolderClick.bind(this);
  }

  componentDidMount() {
    var activeFolder = this.state.folders[this.state.activeFolder];
    this.getFiles(activeFolder, this.state.page, 50);
  }

  handleFolderClick(folder) {
    this.setState({
      activeFolder: folder
    }, () => this.getFiles(this.state.folders[this.state.activeFolder], this.state.page, 50));
  }

  getFiles(query, page, num) {
    this.setState({
      files: [],
      isLoading: true
    }, () => {
      Axios.get(`https://pixabay.com/api/?key=9737328-fd4eba15b5365722c3621ceb4&per_page=${num/2}&q=${query}&page=${page}`)
      .then((res) => {
        var files = res.data.hits;
        Axios.get(`https://pixabay.com/api/videos/?key=9737328-fd4eba15b5365722c3621ceb4&per_page=${num/2}&q=${query}&page=${page}`)
        .then((res2) => {
          files = files.concat(res2.data.hits);

          files.sort((a,b) => {
            if (a.id > b.id) {
              return 1;
            }
            else if (a.id < b.id) {
              return -1;
            }
            return 0;
          });

          console.log(files);

          this.setState({
            files: files,
            isLoading: false
          });
        });
      });
    });
  }

  render() {  
    return(
      <React.Fragment>
        <FolderBar folders={this.state.folders} activeFolder={this.state.activeFolder} onFolderClick={this.handleFolderClick} />
        <FilesTable files={this.state.files} isLoading={this.state.isLoading} />
      </React.Fragment>
    )
  }
}