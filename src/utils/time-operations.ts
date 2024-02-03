import { MAX_COUNTDOWN_MS, MIN_COUNTDOWN_MS } from "constants/timer";

const getMilliseconds = (milliseconds: number) => new Date(milliseconds).getUTCMilliseconds();

const getSeconds = (milliseconds: number) => new Date(milliseconds).getUTCSeconds();

const getMinutes = (milliseconds: number) => Math.floor(milliseconds / 1000 / 60);

const toTimestamp = (milliseconds: number) => {
  const m = getMinutes(milliseconds);
  const s = getSeconds(milliseconds);
  const ms = getMilliseconds(milliseconds);

  const cuts = (t: number) => `0${t}`.slice(-2);
  const cutMs = (tms: number) => `00${tms}`.slice(-3);

  return `${m}:${cuts(s)}:${cutMs(ms)}`;
};

const getCurrentTime = (
  state: number,
  inputName: string,
  inputValue: string,
) => {
  const validValue = Number(inputValue);
  let resultTime;

  if (inputName === "seconds") {
    const previousSeconds = getSeconds(state) * 1000;
    const currentSeconds = validValue * 1000;
    resultTime = state - previousSeconds + currentSeconds;
  } else {
    const previousMinutes = getMinutes(state) * 1000 * 60;
    const currentMinutes = validValue * 1000 * 60;
    resultTime = state - previousMinutes + currentMinutes;
  }

  return resultTime >= MAX_COUNTDOWN_MS ? MAX_COUNTDOWN_MS : resultTime >= MIN_COUNTDOWN_MS ? resultTime : MIN_COUNTDOWN_MS;
};

export {
  getCurrentTime,
  getMilliseconds,
  getMinutes,
  getSeconds,
  toTimestamp,
};
