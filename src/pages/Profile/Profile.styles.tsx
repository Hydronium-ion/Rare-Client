import styled from 'styled-components';
import { ResponsiveWidth } from '@Styles/PageContainer.styles';

export const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  ${ResponsiveWidth}
`;

export const BottomContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;
