import React, { ReactNode } from 'react';
import { Button as ButtonContainer } from './Button.styles';

export type ButtonTheme = 'primary' | 'secondary' | 'noOutline' | 'hover' | 'navigation';
export type ButtonSize = 'big' | 'medium' | 'small';

export interface IButtonProp {
  theme: ButtonTheme;
  size: ButtonSize;
  children: ReactNode;
  active?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

const Button = ({ theme, size, children, active, onClick }: IButtonProp) => {
  return (
    <ButtonContainer theme={theme} size={size} active={active} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
