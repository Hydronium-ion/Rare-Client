import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #000;
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
  box-sizing: border-box;
`;

export const Thumbnail = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ThumbnailContainer = styled.div`
  padding-top: 52.35602094240838%;
  position: relative;
  width: 100%;
`;

export const Title = styled.p`
  font-weight: 900;
  padding: 1.8rem 0 1.8rem 0;
  font-size: 1.8rem;
`;

export const Contents = styled.div`
  line-height: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Tags = styled.div`
  display: flex;
`;

export const Footer = styled.div`
  display: flex;
  font-size: 12px;
`;

export const CreatedAt = styled.span`
  display: block;
  margin-right: 1rem;
`;
