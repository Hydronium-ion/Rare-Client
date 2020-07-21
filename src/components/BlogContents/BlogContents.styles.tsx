import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { IColoredLinkProp } from './BlogContents.component';

export const Container = styled.div`
  display: flex;
  height: 5rem;
  margin: 0 auto 5rem auto;
  align-items: flex-end;
`;

const isSelected = ({ selected }: IColoredLinkProp) => {
  if (selected) {
    return css`
      color: red;
      border-bottom: 1px solid red;
    `;
  }
  return css`
    color: blue;
    border-bottom: 1px solid blue;
  `;
};

export const ColoredLink = styled(Link)`
  transition: color 0.25s ease-in-out 0s;
  font-size: 30px;
  margin-left: 1rem;
  ${isSelected}
`;
