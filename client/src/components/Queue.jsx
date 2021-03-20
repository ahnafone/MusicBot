//jshint esversion:6

import React from 'react';
import Qsong from "./Queue-Song";

function Queue(props) {

  let list = props.songs;
  let output = []

  return (
    <div className="Queue">
      <div className="queue-listinfo">
        <span>title</span>
        <span className="queue-song-artist">artist</span>
        <span className="queue-song-album">album</span>
        <span className="queue-song-duration">duration</span>
      </div>
      
      {list.map(function(song) {
        return ( <Qsong song={song} /> );
      })}
    </div>
  );
}

export default Queue;
