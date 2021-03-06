import styled, { keyframes } from 'styled-components';

export const Skeleton = styled.div`
  background-repeat: no-repeat;
  background-image: linear-gradient(#f0f0f0 20%, transparent 0), linear-gradient(#f0f0f0 80%, transparent 0),
    linear-gradient(#f0f0f0 100%, transparent 0), radial-gradient(circle 20px at 15% 35%, #f0f0f0 99%, transparent 0),
    linear-gradient(#f0f0f0 20%, transparent 0), linear-gradient(#f0f0f0 20%, transparent 0);
  background-position: 0 0, 0 8%, 0 25%, 0 45%, 40% 50%, 85% 50%;
  background-size: 20% 20%, 90% 15%, 90% 15%, 60% 15%, 25% 15%, 25% 15%;

  @media (min-width: 1px) {
    width: 100vw;
    height: 500px;
  }

  @media (max-width: ${({ theme }) => theme.sizes.md}) {
    background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5) 40%,
        rgba(255, 255, 255, 0) 70%
      ),
      linear-gradient(#f0f0f0 30%, transparent 0), linear-gradient(#f0f0f0 95%, transparent 0),
      linear-gradient(#f0f0f0 100%, transparent 0), radial-gradient(circle 28px at 10% 39%, #f0f0f0 99%, transparent 0),
      linear-gradient(#f0f0f0 30%, transparent 0), linear-gradient(#f0f0f0 30%, transparent 0);
    background-position: 0 0, 0 0, 0 12%, 0 40%, 0 70%, 40% 73%, 85% 73%;
    background-size: 20% 80%, 20% 20%, 90% 15%, 90% 25%, 60% 15%, 25% 15%, 25% 15%;

    animation: shineLMd 1s infinite;
    @keyframes shineLMd {
      to {
        background-position: 100% 0, 0 0, 0 12%, 0 40%, 0 70%, 40% 73%, 85% 73%;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.sizes.md}) {
    width: 39vw;
    height: 500px;
    margin: 0 0 2rem calc((100% - (39vw * 2)) / 3);
    background-repeat: no-repeat;
    background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5) 40%,
        rgba(255, 255, 255, 0) 70%
      ),
      linear-gradient(#f0f0f0 20%, transparent 0), linear-gradient(#f0f0f0 80%, transparent 0),
      linear-gradient(#f0f0f0 100%, transparent 0), radial-gradient(circle 20px at 15% 35%, #f0f0f0 99%, transparent 0),
      linear-gradient(#f0f0f0 20%, transparent 0), linear-gradient(#f0f0f0 20%, transparent 0);
    background-position: 0 0, 0 0, 0 9%, 0 30%, 0 55%, 40% 63%, 85% 63%;
    background-size: 20% 80%, 20% 20%, 90% 15%, 90% 21%, 60% 13%, 25% 20%, 25% 20%;

    animation: shineMd 1s infinite;

    @keyframes shineMd {
      to {
        background-position: 100% 0, 0 0, 0 9%, 0 30%, 0 55%, 40% 63%, 85% 63%;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.sizes.lg}) {
    margin: 0 0 2rem calc((100% - (30% * 3)) / 4);
    width: 30%;
    height: 500px;
    background-repeat: no-repeat;
    background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5) 40%,
        rgba(255, 255, 255, 0) 70%
      ),
      linear-gradient(#f0f0f0 20%, transparent 0), linear-gradient(#f0f0f0 80%, transparent 0),
      linear-gradient(#f0f0f0 100%, transparent 0), radial-gradient(circle 20px at 15% 35%, #f0f0f0 99%, transparent 0),
      linear-gradient(#f0f0f0 20%, transparent 0), linear-gradient(#f0f0f0 20%, transparent 0);
    background-position: 0 0, 0 0, 0 8%, 0 25%, 0 45%, 40% 50%, 85% 50%;
    background-size: 20% 50%, 20% 20%, 90% 15%, 90% 15%, 60% 15%, 25% 15%, 25% 15%;

    animation: shineLg 1s infinite;

    @keyframes shineLg {
      to {
        background-position: 100% 0, 0 0, 0 8%, 0 25%, 0 45%, 40% 50%, 85% 50%;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.sizes.xl}) {
    margin: 0 0 2rem calc((100% - (24% * 4)) / 5);
    width: 24%;
    height: 500px;
    background-repeat: no-repeat;
    background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5) 40%,
        rgba(255, 255, 255, 0) 70%
      ),
      linear-gradient(#f0f0f0 20%, transparent 0), linear-gradient(#f0f0f0 80%, transparent 0),
      linear-gradient(#f0f0f0 100%, transparent 0), radial-gradient(circle 20px at 15% 35%, #f0f0f0 99%, transparent 0),
      linear-gradient(#f0f0f0 20%, transparent 0), linear-gradient(#f0f0f0 20%, transparent 0);
    background-position: 0 0, 0 0, 0 8%, 0 25%, 0 45%, 40% 50%, 85% 50%;
    background-size: 20% 50%, 20% 20%, 90% 15%, 90% 15%, 60% 15%, 25% 15%, 25% 15%;

    animation: shineXl 1s infinite;

    @keyframes shineXl {
      to {
        background-position: 100% 0, 0 0, 0 8%, 0 25%, 0 45%, 40% 50%, 85% 50%;
      }
    }
  }
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
    width: 1000px;
  }

  @media (min-width: ${({ theme }) => theme.sizes.xl}) {
    width: 1148px;
    height: 700px;
  }
`;
