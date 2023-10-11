import { RefObject } from "react";

export function playCorrectSound(correctRef: RefObject<HTMLAudioElement>) {
  if (correctRef.current) {
    correctRef.current.currentTime = 0;
    // correctRef.current.play();
  }
}

export function playErrorSound(errorRef: RefObject<HTMLAudioElement>) {
  if (errorRef.current) {
    errorRef.current.currentTime = 0;
    // errorRef.current.play();
  }
}
