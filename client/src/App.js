import React, { useState } from 'react';
import Player from './components/Player';

function App() {
  var {songs, setSongs} = useState([]);

  var addSongs = (song) => {
    var newSongs = [...songs, song];
    setSongs(newSongs);
  };

  return (
    <div>
      <h1 className="title">MusicBot</h1>
      <h3 className="tagline">A music bot thats fun at parties</h3>
      <Player title={songs[0].title} artist={songs[0].artist}/>

    </div>
  );
}

export default App;
