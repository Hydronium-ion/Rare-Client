import styled from 'styled-components';

import { ResponsiveWidth } from '@Styles/PageContainer.styles';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  ${ResponsiveWidth}
`;

export const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.sizes.xsm}) {
    margin: 2rem 0;
  }

  @media (min-width: ${({ theme }) => theme.sizes.md}) {
    margin: 2rem 0 2rem calc((100% - 84%) / 3);
  }

  @media (min-width: ${({ theme }) => theme.sizes.lg}) {
    margin: 2rem 0 2rem calc((100% - (30% * 3)) / 4);
  }

  @media (min-width: ${({ theme }) => theme.sizes.xl}) {
    margin: 2rem 0 2rem calc((100% - (24% * 4)) / 5);
  }
`;

export const LeftHeader = styled.div`
  width: 70%;
  @media (max-width: ${({ theme }) => theme.sizes.md}) {
    width: 50%;
  }
`;

export const RightHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /**로그인이 안 되면 10rem */
  width: 18rem;
`;
