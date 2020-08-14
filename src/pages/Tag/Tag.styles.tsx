import styled from 'styled-components';
import { ResponsiveWidth } from '@Styles/PageContainer.styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  margin: 0 auto;
  ${ResponsiveWidth}
  min-height: 100vh;
`;

export const ContentsContainer = styled.div`
  position: relative;
`;