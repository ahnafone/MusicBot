import React from 'react';

function Qsong(props) {

  let song = props.song;
  if(song.title.length > 31) {
    song.title = song.title.substring(0, 31);
    song.title = song.title.concat("...");
  }
  if(song.artist.length > 11) {
    song.artist = song.artist.substring(0, 11);
    song.artist = song.artist.concat("...");
  }
  if(song.album.length > 15) {
    song.album = song.album.substring(0, 15);
    song.album = song.album.concat("...");
  }

  return ( 
    <div className="queue-song">
        <span>{song.title}</span>
        <span className="queue-song-artist">{song.artist}</span>
        <span className="queue-song-album">{song.album}</span>
        <span className="queue-song-duration">{song.duration}</span>
    </div>
  );
}

export default Qsong;
