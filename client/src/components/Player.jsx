//jshint esversion:6

import React from 'react';

function Player(props) {

  return (
    <div className="Player">
        <h2 className="song-title">{props.title}</h2>
        <p className="song-artist">{props.artist}</p>

      <img src="images/previous-icon.png" alt="previous song button" className="normal-icon"></img>
      <img src="images/play-icon.png" alt="play/pause button" className="main-icon"></img>
      <img src="images/next-icon.png" alt="next song button" className="normal-icon"></img>
    </div>
  );
}

export default Player;
