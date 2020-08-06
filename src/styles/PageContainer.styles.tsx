import styled, { css } from 'styled-components';

export const ResponsiveWidth = css`
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.sizes.xsm}) {
    width: 90vw;
  }

  @media (min-width: ${({ theme }) => theme.sizes.md}) {
    width: 95vw;
    margin: 0 auto;
  }

  @media (min-width: ${({ theme }) => theme.sizes.lg}) {
    width: 1000px;
    margin: 0 auto;
  }

  @media (min-width: ${({ theme }) => theme.sizes.xl}) {
    width: 1200px;
    margin: 0 auto;
  }
`;

const PageContainer = styled.div`
  ${ResponsiveWidth}
`;

export default PageContainer;
