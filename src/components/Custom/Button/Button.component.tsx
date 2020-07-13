import React, { createElement, ReactNode } from 'react';
import {Button as ButtonContainer } from'./Button.styles';

export type ButtonTheme = 'primary' | 'secondary' | 'noOutline' | 'hover' ;
export type ButtonSize = "big" | "medium" | "small";

export interface IButtonProp {
  theme: ButtonTheme; 
  size: ButtonSize
  children: ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}

const Button = ({theme, size, children, onClick}: IButtonProp) => {
  return (
    <ButtonContainer 
      theme={theme}
      size={size}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
