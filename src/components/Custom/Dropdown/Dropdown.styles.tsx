import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const UserProfile = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > img {
    margin-right: 0.6rem;
  }
`;

export const Content = styled.ul`
  position: absolute;
  top: 3.2rem;
  right: 0;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
  background-color: white;
  display: inline-table;
  font-size: 14px;
`;

export const ListContainer = styled(Link)`
  display: block;
  color: #212529;
  width: 9rem;
  padding: 0.6rem 0.6rem 0.6rem 1rem;
  :hover {
    background: rgb(211, 237, 253);
  }
`;

export const List = styled.li`
  display: block;
  width: 100%;
  cursor: pointer;
`;
