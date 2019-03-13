const listOfTracks = require("./data/ListOfLyrics.json");

const fetchListOfTracks = id =>
  new Promise(resolve => {
    const lyrics = listOfTracks.filter(track => {
      return String(track.track_id) === id;
    });
    setTimeout(() => {
      resolve(lyrics[0]);
    }, 3000);
  });
module.exports = fetchListOfTracks;
