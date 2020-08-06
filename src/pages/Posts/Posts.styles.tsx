import styled, { css } from 'styled-components';
import { ResponsiveWidth } from '@Styles/PageContainer.styles';

export const PostsContainer = styled.div`
  position: relative;
  margin-top: 5rem;
  ${ResponsiveWidth}
`;

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const PostTitle = styled.h2`
  font-size: 3rem;
  line-height: 4rem;
  margin-bottom: 2rem;
`;

export const TagContainer = styled.div`
  margin-top: 1rem;
`;

export const PostCreate = styled.div`
  margin-left: 0.8rem;
  font-weight: bold;
`;

export const Tag = styled.div`
  margin-bottom: 0.875rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2rem;
  display: inline-flex;
  align-items: center;
  margin-right: 0.875rem;
  color: #1263ce;
  font-weight: 500;
  font-size: 1rem;
  background: rgb(241, 243, 245);
  border-radius: 1rem;
  text-decoration: none;
`;

export const PostContentContainer = styled.div`
  border-top: 2px solid #e9ecef;
  padding: 2rem 0;
  width: 100%;
  img {
    width: 100%;
  }
`;
