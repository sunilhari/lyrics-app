import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Spinner from "../Spinner";
import Header from "../Header";

const ListOfTracks = React.lazy(() => import("../ListOfTracks"));
const TrackDetails = React.lazy(() => import("../TrackDetails"));
function App() {
  return (
    <div className="container">
      <Header />
      <React.Suspense fallback={<Spinner />} maxDuration={100}>
        <Router>
          <ListOfTracks path="/" />
          <TrackDetails path="/track/:id" />
        </Router>
      </React.Suspense>
    </div>
  );
}
export default App;
