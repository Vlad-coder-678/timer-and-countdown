import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px auto;
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const CurrentTime = styled.h1`
  color: rgb(255, 138, 134);
`;

const Status = styled.h2`
  color: rgb(53, 102, 145);
`;

export {
  Wrapper,
  Status,
  CurrentTime,
};
