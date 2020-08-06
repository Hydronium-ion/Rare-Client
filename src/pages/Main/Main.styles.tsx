import styled from 'styled-components';

export const Contents = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.sizes.md}) {
    width: 100vw;
  }
`;

export const Aside = styled.div`
  width: 18rem;
  padding: 1rem 0 0 2rem;

  @media (max-width: ${({ theme }) => theme.sizes.xl}) {
    display: none;
  }
`;
