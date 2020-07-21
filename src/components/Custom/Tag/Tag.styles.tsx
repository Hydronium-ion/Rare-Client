import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const TagLink = styled(Link)`
  margin-bottom: 0.875rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 0.875rem;
  color: rgb(12, 166, 120);
  font-weight: 500;
  font-size: 1rem;
  border-radius: 1rem;
  text-decoration: none;
  background-color: #121212;

  &:hover {
    background: rgb(248, 249, 250);
  }
`;
