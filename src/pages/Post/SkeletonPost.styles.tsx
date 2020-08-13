import styled from 'styled-components';

export const SkeletonHeader = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 40%,
      rgba(255, 255, 255, 0) 70%
    ),
    linear-gradient(#f0f0f0 50%, transparent 0), linear-gradient(#f0f0f0 70%, transparent 0),
    linear-gradient(#f0f0f0 20%, transparent 0), linear-gradient(#f0f0f0 20%, transparent 0),
    linear-gradient(#f0f0f0 20%, transparent 0), linear-gradient(#f0f0f0 3%, transparent 0),
    linear-gradient(#f0f0f0 100%, transparent 0);
  background-position: 0 0, 0 0, 0 20%, 0 45%, 7% 45%, 14% 45%, 0% 60%, 0% 80%;
  background-size: 20% 100%, 40% 25%, 30% 5%, 5% 20%, 5% 20%, 5% 20%, 90% 30%, 90% 40%;

  animation: shineHeader 1s infinite;

  @keyframes shineHeader {
    to {
      background-position: 100% 0, 0 0, 0 20%, 0 45%, 7% 45%, 14% 45%, 0% 60%, 0% 80%;
    }
  }

  @media (min-width: 1px) {
    height: 500px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.md}) {
  }

  @media (min-width: ${({ theme }) => theme.sizes.md}) {
    height: 500px;
    margin: 0 calc((100% - (30% * 3)) / 4) 2rem calc((100% - (39vw * 2)) / 3);
  }

  @media (min-width: ${({ theme }) => theme.sizes.lg}) {
    margin: 0 calc((100% - (30% * 3)) / 4) 2rem calc((100% - (30% * 3)) / 4);
    height: 500px;
  }

  @media (min-width: ${({ theme }) => theme.sizes.xl}) {
    margin: 0 calc((100% - (30% * 3)) / 4) 0 calc((100% - (24% * 4)) / 5);
    height: 500px;
  }
`;

export const SkeletonContent = styled.div`
  width: 95%;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 40%,
      rgba(255, 255, 255, 0) 70%
    ),
    linear-gradient(#f0f0f0 50%, transparent 0), linear-gradient(#f0f0f0 50%, transparent 0),
    linear-gradient(#f0f0f0 50%, transparent 0), linear-gradient(#f0f0f0 50%, transparent 0),
    linear-gradient(#f0f0f0 50%, transparent 0), linear-gradient(#f0f0f0 50%, transparent 0),
    linear-gradient(#f0f0f0 50%, transparent 0), linear-gradient(#f0f0f0 50%, transparent 0),
    linear-gradient(#f0f0f0 50%, transparent 0) /**FIRST END */, linear-gradient(#f0f0f0 50%, transparent 0),
    linear-gradient(#f0f0f0 50%, transparent 0), linear-gradient(#f0f0f0 50%, transparent 0),
    linear-gradient(#f0f0f0 50%, transparent 0), linear-gradient(#f0f0f0 50%, transparent 0),
    linear-gradient(#f0f0f0 50%, transparent 0), linear-gradient(#f0f0f0 50%, transparent 0),
    linear-gradient(#f0f0f0 50%, transparent 0) /**SECOND END */, linear-gradient(#f0f0f0 50%, transparent 0),
    linear-gradient(#f0f0f0 50%, transparent 0), linear-gradient(#f0f0f0 50%, transparent 0),
    linear-gradient(#f0f0f0 50%, transparent 0), linear-gradient(#f0f0f0 50%, transparent 0),
    linear-gradient(#f0f0f0 50%, transparent 0), linear-gradient(#f0f0f0 50%, transparent 0),
    linear-gradient(#f0f0f0 50%, transparent 0), linear-gradient(#f0f0f0 50%, transparent 0) /**THIRD END */;

  background-position: 0 0, 0 0, 6% 0, 13.5% 0, 25% 0, 38.7% 0, 50.7% 0, 64.7% 0, 80.7% 0, 93.5% 0 /**FIRST END */,
    0 10%, 11.3% 10%, 27.5% 10%, 39.5% 10%, 52% 10%, 66.5% 10%, 78% 10%, 93.5% 10% /**SECOND END */, 0 20%, 8% 20%,
    17% 20%, 33% 20%, 44% 20%, 55% 20%, 66% 20%, 73.5% 20%, 88% 20% /**THIRD END */;
  background-size: 20% 100%, 4% 10%, 5% 10%, 8% 10%, 12% 10%, 8% 10%, 11% 10%, 11% 10%, 13% 10%, 9% 10% /**FIRST END */,
    8% 10%, 13% 10%, 10% 10%, 8% 10%, 12% 10%, 11% 10%, 8% 10%, 13% 10% /**SECOND END */, 6% 10%, 5% 10%, 14% 10%,
    9% 10%, 8% 10%, 9% 10%, 8% 10%, 4% 10%, 13% 10% /**THIRD END */;

  animation: shineBody 1s infinite;

  @keyframes shineBody {
    to {
      background-position: 100% 0, 0 0, 6% 0, 13.5% 0, 25% 0, 38.7% 0, 50.7% 0, 64.7% 0, 80.7% 0,
        93.5% 0 /**FIRST END */, 0 10%, 11.3% 10%, 27.5% 10%, 39.5% 10%, 52% 10%, 66.5% 10%, 78% 10%,
        93.5% 10% /**SECOND END */, 0 20%, 8% 20%, 17% 20%, 33% 20%, 44% 20%, 55% 20%, 66% 20%, 73.5% 20%, 88% 20%; /**THIRD END */
    }
  }
  @media (min-width: 1px) {
    height: 500px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.md}) {
  }

  @media (min-width: ${({ theme }) => theme.sizes.md}) {
    margin: 0 calc((100% - (30% * 3)) / 4) 2rem calc((100% - (39vw * 2)) / 3);
    height: 500px;
  }

  @media (min-width: ${({ theme }) => theme.sizes.lg}) {
    margin: 0 0 2rem calc((100% - (30% * 3)) / 4);
    height: 500px;
  }

  @media (min-width: ${({ theme }) => theme.sizes.xl}) {
    margin: 0 0 2rem calc((100% - (24% * 4)) / 5);
    height: 500px;
  }
`;
