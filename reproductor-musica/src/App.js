import React from "react";

import { MusicPlayerProvider } from "./context/MusicPlayerContext";
import TrackList from "./components/Tracklist";
import Controls from "./components/PlayerControls";

function App() {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <TrackList />
        <Controls />
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
