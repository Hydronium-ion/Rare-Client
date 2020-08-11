import React from 'react';
import { useSelector } from 'react-redux';

import Layout from './Layout.component';
import Login from './Login/Login.component';

import IModal from '@Types/Modal';
import { RootState } from '@Store/rootReducer';

export interface IModalOn {
  isOn: boolean;
}

const Modal = () => {
  const { modalType, on }: IModal = useSelector((state: RootState) => state.modal);

  switch (modalType) {
    case 'login':
      return (
        <Layout title="로그인" on={on}>
          <Login />
        </Layout>
      );
    case 'default':
    default:
      return null;
  }
};

export default Modal;
