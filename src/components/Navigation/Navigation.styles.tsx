import styled from 'styled-components';

import { ResponsiveWidth } from '@Styles/PageContainer.styles';

export const Container = styled.div`
  margin-bottom: 2rem;
  ${ResponsiveWidth}

  @media (min-width: ${({ theme }) => theme.sizes.xsm}) {
    margin: 0;
    margin-bottom: 2rem;
  }

  @media (min-width: ${({ theme }) => theme.sizes.md}) {
    margin: 0  calc((100% - 84%) / 3) 2rem 0;
  }

  @media (min-width: ${({ theme }) => theme.sizes.lg}) {
    margin: 0  calc((100% - 90%) / 4) 2rem 0;
  }

  @media (min-width: ${({ theme }) => theme.sizes.xl}) {
    margin: 0  calc((100% - (24% * 4)) / 5) 2rem 0;
  }
`;

export const Spacing = styled.span`
  margin-left: 0.2rem;
`;
