export const playAudio = (isPlaiyng, audioRef) => {
  if (isPlaiyng) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
};
