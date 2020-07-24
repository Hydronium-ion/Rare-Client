import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: absolute;
  width: 11.5rem;
  right: -13.5rem;
  background-color: #efefef;
`;

export const Title = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  color: rgb(73, 80, 87);
  font-weight: bold;
  border-bottom: 1px solid rgb(173, 181, 189);
`;

export const List = styled.li`
  font-size: 0.875rem;
  line-height: 1.5;
  color: rgb(32, 201, 151);
  font-weight: bold;
  display: flex;
  margin-bottom: 1rem;
`;

export const TagNumber = styled.div`
  margin-left: 0.5rem;
  color: rgb(134, 142, 150);
  font-weight: normal;
`;

export const TagLink = styled(Link)`
  text-decoration: none;
  background-color: #000;
`;
