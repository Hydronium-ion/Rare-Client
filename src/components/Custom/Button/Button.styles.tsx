import styled, { css } from 'styled-components';

import { IButtonProp } from './Button.component';

const big = css`
  height: 2.5rem;
  font-size: 1.125rem;
`;

const medium = css`
  height: 2rem;
  font-size: 1rem;
`;

const primary = css`
  color: #fff;
  background-color: #1ea7fd;
  border: 1px solid #1ea7fd;
`;

const secondary = css`
  color: #000;
  background-color: #e9ecef;
  border: 1px solid #e9ecef;
`;

const noOutline = css`
  color: #868e96;
  background-color: #fff;
  border: 1px solid #fff;
`;

const hover = css`
  color: #1ea7fd;
  background-color: #fff;
  border: 1px solid #1ea7fd;
  border-radius: 4px;
  :hover {
    color: #fff;
    background-color: #1ea7fd;
    border-color: #1ea7fd;
  }
`;

const navigationBorderStyle = css`
  :active {
    color: #343a40;
    border: 0;
    border-bottom: 1px solid rgb(134, 142, 150);
  }
  :focus {
    outline: 0;
  }
`;

const navigation = css`
  background-color: #fff;
  border-radius: 0;
  color: #868e96;
  border-bottom: 1px solid #fff;
  ${navigationBorderStyle}
`;

const activeNavigation = css`
  background-color: #fff;
  border-radius: 0;
  color: #343a40;
  border: 0;
  border-bottom: 1px solid rgb(134, 142, 150);
  ${navigationBorderStyle}
`;

const getButtonTheme = (props: IButtonProp) => {
  switch (props.theme) {
    case 'primary':
      return primary;
    case 'secondary':
      return secondary;
    case 'noOutline':
      return noOutline;
    case 'hover':
      return hover;
    case 'navigation':
      return props.active ? activeNavigation : navigation;
  }
};

const getButtonSize = (props: IButtonProp) => {
  switch (props.size) {
    case 'big':
      return big;
    case 'medium':
      return medium;
  }
};

export const Button = styled.button`
  font-weight: 500;
  height: 2rem;
  padding: 0 1.125rem;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  ${getButtonSize}
  ${getButtonTheme}
`;
