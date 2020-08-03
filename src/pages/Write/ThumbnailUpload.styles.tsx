import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 250px;
  background-color: #e9ecef;
  border-radius: 4px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
`;

export const HiddenInput = styled.input`
  visibility: hidden;
`;

export const PreviewImage = styled.img`
  object-fit: cover;
  display: inline-block;
  width: 100%;
`;
