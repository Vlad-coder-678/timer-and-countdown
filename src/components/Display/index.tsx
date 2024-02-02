// external imports
import React, { FC } from "react";

// internal imports
// types
import { STATUS_TYPE } from "types/common";
// utils
import { toTimestamp } from "utils/time-operations";
// styles
import { CurrentTime, Status, Wrapper } from "./styles";

interface Props {
  currentTime: number,
  status: STATUS_TYPE,
}

const Display: FC<Props> = ({ status, currentTime }: Props) => (
  <Wrapper>
    <CurrentTime>
      {toTimestamp(currentTime)}
    </CurrentTime>
    <Status>
      {status}
    </Status>
  </Wrapper>
);

export default Display;
