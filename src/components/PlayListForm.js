import React, { Component } from 'react';
class PlayListForm extends Component{

  constructor(props) {
  super(props);
    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: ""
  }

    this.handleUserName = this.handleUserName.bind(this);
    this.handleSongArtist = this.handleSongArtist.bind(this);
    this.handleSongTitle = this.handleSongTitle.bind(this);
    this.handleSongNotes = this.handleSongNotes.bind(this);
    this.addToList = this.addToList.bind(this);
  }

  addToList = (e) => {
    e.preventDefault();
    this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }


  handleUserName(event){
    this.setState({
    userName:event.target.value
  })

  }
  handleSongArtist(event){
    this.setState({
    songArtist:event.target.value
  })

  }
  handleSongTitle(event){
    this.setState({
    songTitle:event.target.value
  })

  }
  handleSongNotes(event){
    this.setState({
    songNotes:event.target.value
  })

  }

  render() {
    return (
        <div className="playListForm">
          <label htmlFor="userName"></label>
          <div className="formInput">
            <input  onChange={this.handleUserName}
            type="text"
            className="form-control"
            id="user"
            placeholder="Name or User Name"
            value={this.state.userName}/>
          </div>

          <label htmlFor="songArtist"></label>
          <div className="formInput">
            <input  onChange={this.handleSongArtist}
            type="text"
            className="form-control"
            id="artist"
            placeholder="Name of Artist"
            value={this.state.songArtist}/>
          </div>

          <label htmlFor="songTitle"></label>
          <div className="formInput">
            <input  onChange={this.handleSongTitle}
            type="text"
            className="form-control"
            id="title"
            placeholder="Title of Song"
            value={this.state.songTitle}/>
          </div>

          <label htmlFor="songNotes"></label>
          <div className="formInput">
            <input  onChange={this.handleSongNotes}
            type="text"
            className="form-control"
            id="notes"
            placeholder="Notes about Song"
            value={this.state.songNotes}/>
          </div>
          <button onClick={this.addToList} className="btn btn-primary">Add Song</button>
      </div>

    );
  }

}

export default PlayListForm;
