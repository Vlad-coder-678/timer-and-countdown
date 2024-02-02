// internal imports
// types
import { STATUS_TYPE } from "types/common";
// assets
import timerTikTokAudioHref from "assets/audio/timer.mp3";
import timerSignalAudioHref from "assets/audio/timer-signal.mp3";

const timerTikTokAudio = new Audio(timerTikTokAudioHref);
const timerSignalAudio = new Audio(timerSignalAudioHref);
timerTikTokAudio.addEventListener("ended", timerTikTokAudio.play);

const _startTimer = (setStatus: (status: STATUS_TYPE) => void) => {
  timerTikTokAudio.play();
  setStatus(STATUS_TYPE.STARTED);
};

const _pauseTimer = (setStatus: (status: STATUS_TYPE) => void) => {
  timerTikTokAudio.pause();
  setStatus(STATUS_TYPE.PAUSED);
};

const toggleTimer = (
  status: STATUS_TYPE,
  setStatus: (status: STATUS_TYPE) => void,
): void => (status === STATUS_TYPE.STARTED) ? _pauseTimer(setStatus) : _startTimer(setStatus);

const endTimer = (setStatus: (status: STATUS_TYPE) => void) => {
  timerTikTokAudio.pause();
  timerSignalAudio.play();
  setStatus(STATUS_TYPE.ENDED);
};

const resetTimer = (
  setStatus: (status: STATUS_TYPE) => void,
  setMilliseconds: (time: number) => void,
  initialValue: number,
) => {
  timerTikTokAudio.pause();
  setMilliseconds(initialValue);
  setStatus(STATUS_TYPE.NOT_STARTED);
};

export {
  endTimer,
  resetTimer,
  toggleTimer,
};
