//jshint esversion:6

const fs = require("fs");
const youtubedl = require('youtube-dl');

module.exports.download = function download(url, options) {
  const video = youtubedl(url, options);

  // Will be called when the download starts.
  video.on('info', function(info) {
    console.log('Download started');
    console.log('filename: ' + info._filename);
    console.log('size: ' + info.size);
  });

  video.pipe(fs.createWriteStream('song.mp3'));

  video.on('end', function() {
    console.log('finished downloading!');
    return 0;
  });
};
