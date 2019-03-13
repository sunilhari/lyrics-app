import React from "react";
import { unstable_createResource } from "react-cache";
import { fetchLyrics } from "../api";
import Spinner from "../Spinner";

const fetchTrackDetails = unstable_createResource(fetchLyrics);
function TrackDetails({ id }) {
  const lyrics = fetchTrackDetails.read(id);
  console.log(lyrics);
  return (
    <React.Suspense fallback={<Spinner />} maxDuration={1000}>
      <h2>{lyrics.track_name}</h2>
      <p>{lyrics.artist_name}</p>
      <blockquote>
        <p>{lyrics.lyrics_body}</p>
      </blockquote>
    </React.Suspense>
  );
}

export default TrackDetails;
