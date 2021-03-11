import React, { useState, useRef } from "react";
import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import data from "./data";

function App() {
  //Ref
  const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaiyng, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  //Event Handlers
  const timeUpdateHandler = (event) => {
    const current = event.target.currentTime;
    const duration = event.target.duration;

    setSongInfo({ ...songInfo, currentTime: current, duration });
  };
  return (
    <div>
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        isPlaiyng={isPlaiyng}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
      />
      <Library
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaiyng={isPlaiyng}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
