import React from "react";
import { Link } from "@reach/router";

function Track({ track_id, track_name }) {
  return (
    <li>
      <Link to={`/track/${track_id}`}>{track_name}</Link>
    </li>
  );
}

export default Track;
