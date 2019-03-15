import React from "react";
import { unstable_createResource } from "react-cache";
import "./ListOfTracks.css";
import Spinner from "../Spinner";

const { fetchListOfTracks } = require("../api");

const ListOfTracksResource = unstable_createResource(fetchListOfTracks);
const Track = React.lazy(() => import("../Track"));

function ListOfTracks() {
  return (
    <div className="listoftracks">
      <h3>List of Tracks</h3>
      <React.Suspense fallback={<Spinner />} maxDuration={1000}>
        <ul>
          {ListOfTracksResource.read().map((post, index) => (
            <Track key={index} {...post} />
          ))}
        </ul>
      </React.Suspense>
    </div>
  );
}

export default ListOfTracks;
