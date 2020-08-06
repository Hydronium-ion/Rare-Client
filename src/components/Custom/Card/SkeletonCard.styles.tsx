import styled from 'styled-components';

export const Skeleton = styled.div`
  @media (min-width: 1px) {
    width: 100vw;
    height: 100vh;
  }

  @media (min-width: ${({ theme }) => theme.sizes.md}) {
    width: 45vw;
    height: 100vh;
  }

  @media (min-width: ${({ theme }) => theme.sizes.lg}) {
    width: 27vw;
    height: 700px;
  }

  @media (min-width: ${({ theme }) => theme.sizes.xl}) {
    margin: 0 calc((100% - (24% * 4)) / 5) 2rem 0;
    width: 24%;
    height: 700px;
  }

  background-repeat: no-repeat;

  background-image: linear-gradient(lightgray 15%, transparent 0),
    /* title */ linear-gradient(lightgray 75%, transparent 0), /* text */ linear-gradient(lightgray 95%, transparent 0),
    radial-gradient(circle 15px at 10% 35%, lightgray 99%, transparent 0), linear-gradient(lightgray 15%, transparent 0),
    linear-gradient(lightgray 15%, transparent 0);

  background-position: 0 0, 0 5%, 0 20%, 0 35%, 40% 40%, 87% 40%;

  background-size: 20% 20%, 90% 15%, 90% 15%, 60% 15%, 25% 15%, 25% 15%;
`;

export const SkeletonCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${({ theme }) => theme.sizes.md}) {
    width: 100%;
    height: 100vh;
  }

  @media (min-width: ${({ theme }) => theme.sizes.lg}) {
    height: 700px;
  }

  @media (min-width: ${({ theme }) => theme.sizes.xl}) {
    width: 1040px;
    height: 700px;
  }
`;
