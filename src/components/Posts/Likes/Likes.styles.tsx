import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  /* position: fixed; */
  left: -7rem;

  @media (max-width: ${({ theme }) => theme.sizes.xl}) {
    display: none;
  }
`;

export const IconContainer = styled.div`
  width: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d3edfd;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(241, 243, 245);
  border-image: initial;
  border-radius: 2rem;
  padding: 0.5rem;
`;

export const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(248, 249, 250);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(241, 243, 245);
  border-image: initial;
  border-radius: 50%;
  padding: 0.5rem;
`;

export const LikesNumberContainer = styled.div`
  margin: 0.5rem 0 0.8rem;
`;

export const LikesNumber = styled.span`
  font-size: 0.8rem;
`;
