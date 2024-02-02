import styled from "styled-components";

const StyledButton = styled.button<{
  bgColor: string;
  bgHover: string;
  textColor: string;
  textHoverColor: string;
}>`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  margin: 10px;
  font-size: 16px;
  letter-spacing: 1.25;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  text-transform: uppercase;
  white-space: nowrap;
  outline: none;
  border: none;
  border-radius: 20px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${({ bgHover }) => bgHover};
    transition: background-color 0.3s ease;
    color: ${({ textHoverColor }) => textHoverColor};
  }

  &:disabled {
    background: #eeeeee;
    color: #cccccc;
    cursor: default;
  }
`;

export default StyledButton;
