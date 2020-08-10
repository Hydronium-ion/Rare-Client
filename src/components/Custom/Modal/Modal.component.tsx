import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Background, Overlay, Content } from './Modal.styles';

import { closeModal } from '@Store/modal/modal.actions';
import IModal from '@Types/Modal';
import { RootState } from '@Store/rootReducer';

export interface IModalOn {
  isOn: boolean;
}

const Modal = () => {
  const { on }: IModal = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  const closeModalFromTheView = () => {
    dispatch(closeModal());
  };

  return (
    <Background isOn={on}>
      <Overlay onClick={closeModalFromTheView} />
      <Content isOn={on}>모달</Content>
    </Background>
  );
};

export default Modal;
