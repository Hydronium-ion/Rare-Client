import styled from 'styled-components';

export const Container = styled.div`
  display: 'inline-block';
  position: 'relative';
`;

export const Dragging = styled.div`
  border: 'dashed grey 4px';
  background-color: 'rgba(255,255,255,.8)';
  position: 'absolute';
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;

export const NotDragging = styled.div`
  position: 'absolute';
  top: '50%';
  right: 0;
  left: 0;
  text-align: 'center';
  color: 'grey';
  font-size: 36;
`;
