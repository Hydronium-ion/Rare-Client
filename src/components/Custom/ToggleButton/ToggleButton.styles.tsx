import styled, { css } from 'styled-components';

import { IToggleButtonProp } from './ToggleButton.component';

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100px;
  height: 50px;
  background: ${({ selected }: IToggleButtonProp) => (selected ? 'grey' : 'greenyellow')};
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
`;

export const handleSelected = ({ selected }: IToggleButtonProp) => {
  if (selected) {
    return css`
      left: calc(100% - 2px);
      transform: translateX(-100%);
    `;
  }
  return css``;
};

export const ToggleCircle = styled.span`
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 45px;
  height: 45px;
  border-radius: 45px;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  ${handleSelected}
`;
