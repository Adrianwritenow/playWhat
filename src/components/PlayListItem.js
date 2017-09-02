import React, { Component } from 'react';
class PlayListItem extends Component {
  render() {
    let songs =this.props.songs;
    let songCard = songs.map((song, index)=>{
      return (
        <dl key ={index} className="dl-horizontal">
          <dt>USER:</dt>
          <dd>{song.userName}</dd>
          <dt>ARTIST:</dt>
          <dd>{song.songArtist}</dd>
          <dt>TITLE:</dt>
          <dd>{song.songTitle}</dd>
          <dt>NOTES:</dt>
          <dd>{song.songNotes}</dd>
        </dl>
      )
    })
    return(
    <div className="cardGroup">
      {songCard}
    </div>
    )
  }
}
export default PlayListItem;
