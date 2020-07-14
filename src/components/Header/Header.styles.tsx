import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
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

export const UserProfile = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > img {
    margin-right: 0.6rem;
  }
`;
