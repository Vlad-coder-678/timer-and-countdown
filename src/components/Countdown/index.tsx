// external imports
import React, { FC, memo, useEffect, useState } from "react";

// internal imports
// constants
import { INITIAL_COUNTDOWN_MS } from "constants/timer";
// types
import { STATUS_TYPE } from "types/common";
// utils
import { endTimer } from "utils/status-operations";
// components
import Display from "components/Display";
import ControlButton from "components/ControlButton";
import ControlPanel from "components/Countdown/ControlPanel";

const Countdown: FC = () => {
  const [currentTime, setCurrentTime] = useState(INITIAL_COUNTDOWN_MS);
  const [status, setStatus] = useState(STATUS_TYPE.NOT_STARTED);

  useEffect(() => {
    if (status === STATUS_TYPE.STARTED) {
      if (currentTime > 0) {
        const id = setTimeout(() => setCurrentTime(currentTime - 1), 1);
        return () => clearTimeout(id);
      } else {
        endTimer(setStatus);
      }
    }
  }, [status, currentTime]);

  return (
    <>
      <Display
        currentTime={currentTime}
        status={status}
      />
      <ControlPanel
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
      />
      <ControlButton
        initialValue={INITIAL_COUNTDOWN_MS}
        setCurrentTime={setCurrentTime}
        setStatus={setStatus}
        status={status}
      />
    </>
  );
};

export default memo(Countdown);
