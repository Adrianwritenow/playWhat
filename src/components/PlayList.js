import React, { Component } from 'react';
import PlayListItem from './PlayListItem';

class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
    this.fetchData = this.fetchData.bind(this);

  }

  componentDidMount(){
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
          return results.json();
        }).then(data => {
          this.setState({songs: data});
          console.log("state", this.state.songs);
        })
  }
  fetchData = (e) => {
      e.preventDefault();
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({songs: data});
      })
    }
    render() {
      return(
        <div className>
          <button onClick={this.fetchData} className="btn btn-primary">Update My List</button>
          <PlayListItem songs={this.state.songs}/>
        </div>
      );
    }
}
export default PlayList;
