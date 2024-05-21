import { useContext } from "react";
import { MusicPlayerContext } from "./MusicPlayerContext";

/**
 * Un hook propio se crea como si fuera cualquier otro componente
 * Estos se implementan para crear un patrón de código que pueda ser heredable a los componentes de la aplicación.
 * En conclusión, es escribir código que tu quieres reutilizar y que sea más fácil de mantener.
 */

const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicPlayerContext);

  function playTrack(index) {
    if (index === state.currentTrackIndex) {
      togglePLay();
    } else {
      setState((state) => ({
        ...state,
        currentTrackIndex: index,
        isPlaying: true,
      }));
    }
  }

  function togglePLay() {
    setState((state) => ({ ...state, isPlaying: !state.isPlaying }));
  }

  function playPreviousTrack() {
    const newIndex = (state.currentTrackIndex + -1) % state.tracks.length;
    playTrack(newIndex);
  }

  function playNextTrack() {
    const newIndex =
      (((state.currentTrackIndex + 1) % state.tracks.length) +
        state.tracks.length) %
      state.tracks.length;
    playTrack(newIndex);
  }

  return {
    togglePLay,
    playTrack,
    playPreviousTrack,
    playNextTrack,
    isPlaying: state.isPlaying,
    currentTrackName:
      state.currentTrackIndex !== null &&
      state.tracks[state.currentTrackIndex.name],
    trackList: state.tracks,
  };
};

export default useMusicPlayer;
