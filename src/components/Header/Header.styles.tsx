import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;

export const LeftHeader = styled.div`
  width: 70%;
`;

export const RightHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /**로그인이 안 되면 10rem */
  width: 18rem;
`;
