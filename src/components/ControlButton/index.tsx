// external imports
import React, { FC, memo } from "react";

// internal imports
// constants
import { BUTTON_TEXT } from "constants/timer";
// types
import { BUTTON_TYPES, STATUS_TYPE } from "types/common";
// utils
import { resetTimer, toggleTimer } from "utils/status-operations";
// components
import Button from "components/Button";

interface Props {
  initialValue: number,
  setCurrentTime: (time: number) => void,
  setStatus: (status: STATUS_TYPE) => void,
  status: STATUS_TYPE,
}

const ControlButton: FC<Props> = ({
  initialValue,
  setCurrentTime,
  setStatus,
  status,
}: Props) => {
  const startButtonText = status === STATUS_TYPE.NOT_STARTED ? BUTTON_TEXT.start :
    status === STATUS_TYPE.PAUSED ? BUTTON_TEXT.continue : BUTTON_TEXT.pause;

  return (
    <div>
      <Button type={BUTTON_TYPES.BUTTON} onClick={() => toggleTimer(status, setStatus)}>
        {startButtonText}
      </Button>
      <Button
        type={BUTTON_TYPES.BUTTON}
        onClick={() => resetTimer(setStatus, setCurrentTime, initialValue)}
      >
        {BUTTON_TEXT.reset}
      </Button>
    </div>
  );
};

export default memo(ControlButton);
