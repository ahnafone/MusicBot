(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(2),i=a.n(l);a(9),a(3);var W=function(e){return s.a.createElement("div",{className:"Player"},s.a.createElement("h2",{className:"song-title"},e.title),s.a.createElement("p",{className:"song-artist"},e.artist),s.a.createElement("img",{src:"images/previous-icon.png",alt:"previous song button",className:"normal-icon"}),s.a.createElement("img",{src:"images/play-icon.png",alt:"play/pause button",className:"main-icon"}),s.a.createElement("img",{src:"images/next-icon.png",alt:"next song button",className:"normal-icon"}))};var r=function(e){var t=e.song;return t.title.length>31&&(t.title=t.title.substring(0,31),t.title=t.title.concat("...")),t.artist.length>11&&(t.artist=t.artist.substring(0,11),t.artist=t.artist.concat("...")),t.album.length>15&&(t.album=t.album.substring(0,15),t.album=t.album.concat("...")),s.a.createElement("div",{className:"queue-song"},s.a.createElement("span",null,t.title),s.a.createElement("span",{className:"queue-song-artist"},t.artist),s.a.createElement("span",{className:"queue-song-album"},t.album),s.a.createElement("span",{className:"queue-song-duration"},t.duration))};var c=function(e){var t=e.songs;return s.a.createElement("div",{className:"Queue"},s.a.createElement("div",{className:"queue-listinfo"},s.a.createElement("span",null,"title"),s.a.createElement("span",{className:"queue-song-artist"},"artist"),s.a.createElement("span",{className:"queue-song-album"},"album"),s.a.createElement("span",{className:"queue-song-duration"},"duration")),t.map((function(e){return s.a.createElement(r,{song:e})})))};var o=function(){var e=[{title:"Light It Up",artist:"Major Lazer",album:"Peace Is The Mission",duration:"3:13"},{title:"Burning",artist:"Sam Smith",album:"The Thrill Of It ALl",duration:"3:23"},{title:"Coffee",artist:"Quinn XCII",album:"Coffee",duration:"3:00"},{title:"WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW",artist:"WWWWWWWWWWWWWWWWWWWWWWWWWWWW",album:"WWWWWWWWWWWWWWWWWWWWWWWWWW",duration:"42:53"}],t=Object(n.useState)(e),a=(t.songs,t.setSongs,{title:"Song Title",artist:"Song Artist"});return e&&(a=e[0]),s.a.createElement("div",null,s.a.createElement("img",{src:"images/logo.png",className:"logo"}),s.a.createElement("h1",{className:"title"},"MusicBot"),s.a.createElement("h3",{className:"tagline"},"A music bot thats fun at parties"),s.a.createElement(W,{title:a.title,artist:a.artist}),s.a.createElement(c,{songs:e}),s.a.createElement("div",{class:"fab"},s.a.createElement("span",{class:"fab-label"}," Add Song ")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(o,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.74f1af0b.chunk.js.map