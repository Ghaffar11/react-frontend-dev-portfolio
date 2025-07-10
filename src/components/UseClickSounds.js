import { useRef } from 'react';

export function useClickSound(src = '/sounds/click.mp3') {
  const audioRef = useRef(new Audio(src));
  return () => {
    const audio = audioRef.current;
    audio.currentTime = 0;
    audio.play();
  };
}