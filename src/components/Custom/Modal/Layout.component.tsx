import React, { ReactNode } from 'react';

import { useDispatch } from 'react-redux';

import Button from '#Custom/Button/Button.component';

import { Background, Overlay, Content, Buttons, Title, ModalBox, ModalBoxContainer } from './Layout.styles';

import { closeModal } from '@Store/modal/modal.actions';

interface ILayoutProp {
  title: string;
  children: ReactNode;
  on: boolean;
}

const Layout = (props: ILayoutProp) => {
  const { title, children, on } = props;

  const dispatch = useDispatch();

  const closeModalFromTheView = () => {
    dispatch(closeModal());
  };

  return (
    <Background isOn={on}>
      <Overlay onClick={closeModalFromTheView} />
      <ModalBoxContainer>
        <ModalBox isOn={on}>
          <Title>{title}</Title>
          <Content>{children}</Content>
        </ModalBox>
      </ModalBoxContainer>
    </Background>
  );
};

export default Layout;
