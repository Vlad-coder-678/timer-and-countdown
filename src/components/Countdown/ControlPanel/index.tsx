// external imports
import React, { ChangeEvent, FC } from "react";

// internal imports
// constants
import { MAX_COUNTDOWN_MS, MIN_COUNTDOWN_MS } from "constants/timer";
// utils
import { getCurrentTime, getMinutes, getSeconds } from "utils/time-operations";
import { InputNumber, InputRange } from "./styles";

interface Props {
  currentTime: number,
  setCurrentTime: (state: number) => void,
}

const ControlPanel: FC<Props> = ({ currentTime, setCurrentTime }) => {
  const handleInputNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCurrentTime(getCurrentTime(currentTime, name, value));
  };

  const handleInputRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(event.target.value));
  };

  return (
    <>
      <div>
        <InputRange
          type="range"
          step={15000}
          min={MIN_COUNTDOWN_MS}
          max={MAX_COUNTDOWN_MS}
          value={currentTime}
          onChange={handleInputRangeChange}
        />
      </div>
      <div>
        <InputNumber
          type="number"
          name="minutes"
          onChange={handleInputNumberChange}
          value={getMinutes(currentTime)}
        />
        <InputNumber
          type="number"
          name="seconds"
          onChange={handleInputNumberChange}
          value={getSeconds(currentTime)}
        />
      </div>
    </>
  );
};

export default ControlPanel;
