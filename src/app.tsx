// external imports
import React, { useState } from "react";

// internal imports
// components
import Timer from "components/Timer";
import Countdown from "components/Countdown";
// styles
import { Container, Title, TitleWrapper } from "./assets/styles/app.styles";

const App = () => {
  const [isShowTimer, setIsShowTimer] = useState(true);

  return (
    <Container>
      <TitleWrapper>
        <Title isActive={isShowTimer} onClick={() => setIsShowTimer(true)}>
          Timer
        </Title>
        <Title isActive={!isShowTimer} onClick={() => setIsShowTimer(false)}>
          Countdown
        </Title>
      </TitleWrapper>

      {isShowTimer ? <Timer /> : <Countdown />}
    </Container>
  );
};

export default App;
