import ModalActionTypes from './modal.types';
import IModal from '@Types/Modal';

export const openModal = (payload: IModal) => ({
  type: ModalActionTypes.OPEN_MODAL,
  payload
});

export const closeModal = () => {
  return {
    type: ModalActionTypes.CLOSE_MODAL,
    payload: null
  };
};

export type ModalAction = ReturnType<typeof openModal> | ReturnType<typeof closeModal>;
