import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, audioRef, isPlaiyng, setSongs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            songs={songs}
            setSongs={setSongs}
            setCurrentSong={setCurrentSong}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaiyng={isPlaiyng}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
