import styled from 'styled-components';

import { IDirection } from './PostBox.component';

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  width: 20rem;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 4px 0px;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 4rem;
  align-items: center;
  background: rgb(248, 249, 250);
  text-decoration: none;
  justify-content: ${({ direction }: IDirection) => (direction === 'left' ? 'flex-start' : 'flex-end')};
`;

export const PostMenu = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  color: rgb(73, 80, 87);
`;

export const PostMenuContainer = styled.div`
  margin: 0 1rem;
`;

export const PostMenuTitle = styled.h3`
  width: 100%;
  font-size: 1.125rem;
  color: rgb(73, 80, 87);
  line-height: 1.15;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 0.5rem 0px 0px;
`;
