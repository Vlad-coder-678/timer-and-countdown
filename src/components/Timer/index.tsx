// external imports
import React, { FC, memo, useEffect, useState } from "react";

// internal imports
// constants
import { INITIAL_TIMER } from "constants/timer";
// types
import { STATUS_TYPE } from "types/common";
// components
import Display from "components/Display";
import ControlButton from "components/ControlButton";

const Timer: FC = () => {
  const [currentTime, setCurrentTime] = useState(INITIAL_TIMER);
  const [status, setStatus] = useState(STATUS_TYPE.NOT_STARTED);

  useEffect(() => {
    if (status === STATUS_TYPE.STARTED) {
      const id = setTimeout(() => setCurrentTime(currentTime + 1), 1);
      return () => clearTimeout(id);
    }
  }, [status, currentTime]);

  return (
    <>
      <Display
        currentTime={currentTime}
        status={status}
      />
      <ControlButton
        setCurrentTime={setCurrentTime}
        setStatus={setStatus}
        status={status}
        initialValue={INITIAL_TIMER}
      />
    </>
  );
};

export default memo(Timer);
