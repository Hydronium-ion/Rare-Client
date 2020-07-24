import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 0 auto 1rem 0;
  width: 100%;
  border-bottom: 1px solid #000;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0.8rem;
  justify-content: space-around;
`;

export const Nickname = styled.span`
  font-size: 40px;
  font-weight: bold;
`;

export const Introduction = styled.span`
  font-size: 20px;
`;
