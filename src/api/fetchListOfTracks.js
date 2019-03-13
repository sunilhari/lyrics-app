const listOfTracks = require("./data/ListOfTracksData.json");

const fetchListOfTracks = (timeout = 3000) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(listOfTracks);
    }, timeout);
  });
module.exports = fetchListOfTracks;
