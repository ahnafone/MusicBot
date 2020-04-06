import React from 'react';

function Player(props) {

  return (
    <div className="Player">
        <h2 className="song-title">{props.title}</h2>
        <p className="song-artist">{props.artist}</p>

      <img src="images/previous-icon.png" className="normal-icon"></img>
      <img src="images/play-icon.png" className="main-icon"></img>
      <img src="images/next-icon.png" className="normal-icon"></img>
    </div>
  );
}

export default Player;