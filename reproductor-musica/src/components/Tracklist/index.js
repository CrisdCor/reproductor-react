import React, { useContext } from "react";

import { FontAweSomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

import useMusicPlayer from "../../context/useMusicPlayer";

const TrackList = () => {
  const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();

  return (
    <div>
      {trackList.map((track, index) => {
        <div className="box">
          <button className="button" onClick={() => playTrack(index)}>
            {currentTrackName === track.name && isPlaying ? (
              <FontAweSomeIcon icon={faPause} />
            ) : (
              <FontAweSomeIcon icon={faPlay} />
            )}
          </button>
          <div className="song-title">{track.name}</div>
        </div>;
      })}
    </div>
  );
};

export default TrackList;
