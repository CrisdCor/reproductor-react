import React, { useContext } from "react";

import { MusicPlayerContext } from "../../context/MusicPlayerContext";

const TrackList = () => {
  const [state, setState] = useContext(MusicPlayerContext);

  return (
    <div>
      {state.tracks.map((track) => (
        <div className="box">
          <div className="song-title">{track.name}</div>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
