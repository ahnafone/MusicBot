//jshint esversion:6

import React, { useState } from 'react';
import Player from './components/Player';
import Queue from "./components/Queue";

function App() {
  var s = [
    {title: "Light It Up", artist: "Major Lazer", album: "Peace Is The Mission", duration: "3:13"},
    {title: "Burning", artist: "Sam Smith", album: "The Thrill Of It ALl", duration: "3:23"},
    {title: "Coffee", artist: "Quinn XCII", album: "Coffee", duration: "3:00"},
    {title: "WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW", artist: "WWWWWWWWWWWWWWWWWWWWWWWWWWWW", album: "WWWWWWWWWWWWWWWWWWWWWWWWWW", duration: "42:53"}
  ];
  var {songs, setSongs} = useState(s);

  var addSong = (song) => {
    var newSongs = [...songs, song];
    setSongs(newSongs);
  };

var current = {
  title: "Song Title",
  artist: "Song Artist"
};

if(s) {
  current = s[0];
}

  return (
    <div>
      <h1 className="title">MusicBot</h1>
      <h3 className="tagline">A music bot thats fun at parties</h3>
      <Player title={current.title} artist={current.artist}/>
      <Queue songs={s}/>

    </div>
  );
}

export default App;
