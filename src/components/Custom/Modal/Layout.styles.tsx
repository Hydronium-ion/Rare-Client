import styled, { css, keyframes } from 'styled-components';

import { IModalOn } from './Modal.component';

const show = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const isModalOn = ({ isOn }: IModalOn) => {
  if (isOn) {
    return css`
      transform: scale(1);
    `;
  }

  return css`
    transform: scale(0);
    transition: transform 0.7s;
  `;
};

export const Background = styled.div`
  display: block;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: transform 0.25s;
  ${isModalOn}
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const showUpContentWithAnimation = ({ isOn }: IModalOn) => {
  if (isOn) {
    return css`
      transform: scale(1);
      animation: ${show} 0.2s;
    `;
  }

  return css`
    transform: scale(0);
    transition: transform 0.4s;
  `;
};

export const ModalBox = styled.div`
  overflow: auto;
  position: fixed;
  width: 40vw;
  height: 30vh;
  background: white;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${showUpContentWithAnimation}
`;

export const Buttons = styled.div`
  display: flex;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const Content = styled.div``;

export const ModalBoxContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
