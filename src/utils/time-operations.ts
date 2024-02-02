import { MAX_COUNDOWN_MS, MIN_COUNDOWN_MS } from "constants/timer";

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

  if (inputName === "seconds") {
    const previousSeconds = getSeconds(state) * 1000;
    const currentSeconds = validValue * 1000;
    const result = state - previousSeconds + currentSeconds;
    return result >= MIN_COUNDOWN_MS ? result : MIN_COUNDOWN_MS;
  } else {
    const previousMinutes = getMinutes(state) * 1000 * 60;
    const currentMinutes = validValue * 1000 * 60;
    const result = state - previousMinutes + currentMinutes;
    return result >= MAX_COUNDOWN_MS ? MAX_COUNDOWN_MS : (result >= MIN_COUNDOWN_MS) ? result : MIN_COUNDOWN_MS;
  }
};

export {
  getCurrentTime,
  getMilliseconds,
  getMinutes,
  getSeconds,
  toTimestamp,
};
