import React, { FC, ReactNode } from "react";

// internal imports
// types
import { BUTTON_TYPES } from "types/common";
// styles
import StyledButton from "./styles";

interface Props {
  className?: string;
  disabled?: boolean;
  type: BUTTON_TYPES;
  onClick?: () => void; // т.к. у кнопки type="submit" нет onClick
  children?: ReactNode;
  isLoading?: boolean;
  bgColor?: string;
  bgHoverColor?: string;
  textColor?: string;
  textHoverColor?: string,
}

const Button: FC<Props> = ({
  className,
  disabled = false,
  type = BUTTON_TYPES.BUTTON,
  onClick,
  children,
  isLoading = false,
  bgColor = "#61DAFB",
  bgHoverColor = "#000",
  textColor = "#000",
  textHoverColor = "#fff",
}) => {
  const handleClick = () => {
    if (isLoading || disabled) return;
    if (onClick) {
      onClick();
    }
  };

  return (
    <StyledButton
      disabled={disabled}
      type={type}
      onClick={handleClick}
      className={className}
      bgColor={bgColor}
      bgHover={bgHoverColor}
      textColor={textColor}
      textHoverColor={textHoverColor}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
