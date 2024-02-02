import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Title = styled.h3<{ isActive: boolean }>`
  color: ${({ isActive }) => isActive ? "white" : "grey"};
  cursor: pointer;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export {
  Container,
  Title,
  TitleWrapper,
};
